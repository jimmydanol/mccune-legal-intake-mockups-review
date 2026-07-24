#!/usr/bin/env node
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { webcrypto } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import vm from 'node:vm';

function parseArgs(argv) {
  const values = {};
  for (let index = 2; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith('--')) continue;
    values[key.slice(2)] = argv[index + 1];
    index += 1;
  }
  return values;
}

const args = parseArgs(process.argv);
assert.ok(args.corpus, '--corpus is required');
assert.ok(args.dependencies, '--dependencies is required');
const loop = args.loop || 'pdf';
assert.ok(['pdf', 'scan', 'phone'].includes(loop), '--loop must be pdf, scan, or phone');

const scriptRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const corpusRoot = path.resolve(args.corpus);
const dependencyRoot = path.resolve(args.dependencies);
const pagePath = path.join(scriptRoot, 'Intake Pages', 'document-intake-testing.html');
const html = await readFile(pagePath, 'utf8');
const source = html.match(/\/\* PURE PILOT RULES START \*\/([\s\S]*?)\/\* PURE PILOT RULES END \*\//);
assert.ok(source, 'Page 10 pure rules block was not found');
const context = { console, crypto: webcrypto, Date, Intl, TextEncoder, Uint8Array };
context.globalThis = context;
vm.createContext(context);
vm.runInContext(source[1], context, { filename: pagePath });
const rules = context.__documentIntakeTestingRules;
const manifest = JSON.parse(await readFile(path.join(corpusRoot, 'manifest.json'), 'utf8'));
assert.equal(manifest.synthetic, true, 'Corpus must be explicitly synthetic');

const requireFromDependencies = createRequire(pathToFileURL(path.join(dependencyRoot, 'package.json')));
let worker = null;
let PSM = null;
let pdfjs = null;
let sharp = null;
if (loop === 'pdf') {
  const pdfModule = pathToFileURL(path.join(dependencyRoot, 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.mjs')).href;
  pdfjs = await import(pdfModule);
} else {
  const tesseract = requireFromDependencies('tesseract.js');
  sharp = requireFromDependencies('sharp');
  PSM = tesseract.PSM;
  worker = await tesseract.createWorker('eng', 1, { logger: () => {} });
}

function canonical(value) {
  if (typeof value === 'number') return value;
  if (typeof value === 'boolean') return value;
  return String(value ?? '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function matches(actual, expected) {
  if (typeof expected === 'number') return typeof actual === 'number' && Math.abs(actual - expected) < 0.01;
  if (typeof expected === 'boolean') return actual === expected;
  return canonical(actual) === canonical(expected);
}

function mergeReadableText(parts) {
  const seen = new Set();
  const lines = [];
  parts.join('\n').split(/\r?\n/).forEach((line) => {
    const clean = line.replace(/\s+/g, ' ').trim();
    const key = clean.toLowerCase();
    if (clean.length > 1 && !seen.has(key)) {
      seen.add(key);
      lines.push(clean);
    }
  });
  return lines.join('\n');
}

async function readPdf(filePath) {
  const bytes = new Uint8Array(await readFile(filePath));
  const pdf = await pdfjs.getDocument({ data: bytes, disableWorker: true }).promise;
  const parts = [];
  for (let pageNumber = 1; pageNumber <= Math.min(pdf.numPages, 6); pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const text = rules.pdfTextFromItems(content.items);
    if (text) parts.push(`--- Page ${pageNumber} ---\n${text}`);
  }
  return { text: mergeReadableText(parts), confidence: 100 };
}

async function readImage(filePath) {
  const parts = [];
  let bestConfidence = 0;
  const modes = loop === 'scan' ? [PSM.AUTO, PSM.SINGLE_BLOCK, PSM.SPARSE_TEXT] : [PSM.AUTO, PSM.SINGLE_BLOCK, PSM.SPARSE_TEXT];
  let inputs = [filePath, filePath, filePath];
  if (loop === 'phone') {
    const source = sharp(filePath, { failOn: 'none' });
    const metadata = await source.metadata();
    const sample = await source.clone().resize({ width: 240 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const region = rules.detectPaperRegionPixels(sample.data, sample.info.width, sample.info.height);
    const left = Math.max(0, Math.floor((region.detected ? region.x : 0) * metadata.width));
    const top = Math.max(0, Math.floor((region.detected ? region.y : 0) * metadata.height));
    const width = Math.min(metadata.width - left, Math.max(1, Math.ceil((region.detected ? region.width : 1) * metadata.width)));
    const height = Math.min(metadata.height - top, Math.max(1, Math.ceil((region.detected ? region.height : 1) * metadata.height)));
    const resize = width >= height ? { width: 2600 } : { height: 2600 };
    const base = source.clone().extract({ left, top, width, height }).resize(resize).sharpen();
    inputs = [
      await base.clone().png().toBuffer(),
      await base.clone().greyscale().linear(1.45, -57.6).png().toBuffer(),
      await base.clone().greyscale().threshold(175).png().toBuffer(),
    ];
  }
  for (let index = 0; index < modes.length; index += 1) {
    await worker.setParameters({
      tessedit_pageseg_mode: modes[index],
      preserve_interword_spaces: '1',
      user_defined_dpi: '300',
      tessedit_char_whitelist: '',
    });
    const response = await worker.recognize(inputs[index], { rotateAuto: index === 0 }, { blocks: true });
    bestConfidence = Math.max(bestConfidence, Number(response?.data?.confidence || 0));
    parts.push(rules.ocrTextFromBlocks(response?.data?.blocks) || String(response?.data?.text || ''));
  }
  return { text: mergeReadableText(parts), variantTexts: parts.map((value) => String(value || '').trim()).filter(Boolean), confidence: bestConfidence };
}

const reportDir = path.join(corpusRoot, 'reports');
const ocrDir = path.join(corpusRoot, 'ocr', loop);
await mkdir(reportDir, { recursive: true });
await mkdir(ocrDir, { recursive: true });

const totals = {
  documents: 0,
  documentPass: 0,
  classificationPass: 0,
  expectedTotal: 0,
  exactPass: 0,
  requiredTotal: 0,
  requiredPass: 0,
  evidenceTotal: 0,
  evidencePass: 0,
  confidenceTotal: 0,
};
const category = {};
const clients = {};
const cases = [];

for (const document of manifest.documents) {
  const definition = rules.RUNTIME_ARTIFACT.definitions[document.kind];
  assert.ok(definition, `Missing definition for ${document.kind}`);
  const relativeFile = document[loop];
  const filePath = path.join(corpusRoot, relativeFile);
  const read = loop === 'pdf' ? await readPdf(filePath) : await readImage(filePath);
  await writeFile(path.join(ocrDir, `${document.id}.txt`), read.text, 'utf8');
  const classification = rules.classifyDocument(path.basename(filePath), read.text);
  const extraction = document.kind === 'driver-license'
    ? read.variantTexts?.length
      ? rules.fuseFieldCandidates(definition, [...read.variantTexts.map((text) => rules.mergeDriverEvidence(definition, '', text, null).fields), rules.mergeDriverEvidence(definition, '', read.text, null).fields], read.text)
      : rules.mergeDriverEvidence(definition, '', read.text, null).fields
    : read.variantTexts?.length
      ? rules.fuseFieldCandidates(definition, [...read.variantTexts.map((text) => rules.extractDocumentFields(definition, text, `${loop} corpus evidence`)), rules.extractDocumentFields(definition, read.text, `${loop} corpus evidence`)], read.text)
      : rules.extractDocumentFields(definition, read.text, `${loop} corpus evidence`);
  const misses = [];
  let caseExpected = 0;
  let caseExact = 0;
  let caseRequired = 0;
  let caseRequiredFound = 0;
  let caseEvidence = 0;
  let caseEvidencePass = 0;
  for (const [fieldId, expected] of Object.entries(document.expected)) {
    const actual = extraction[fieldId]?.value ?? null;
    caseExpected += 1;
    if (matches(actual, expected)) caseExact += 1;
    else misses.push({ fieldId, expected, actual });
  }
  for (const spec of definition.fields.filter((field) => field.required)) {
    caseRequired += 1;
    if (extraction[spec.id]?.value !== null) caseRequiredFound += 1;
  }
  for (const field of Object.values(extraction).filter((item) => item.value !== null)) {
    caseEvidence += 1;
    const lines = field.evidence?.sourceLines || [];
    if (lines.length && lines.every((line) => read.text.includes(line))) caseEvidencePass += 1;
  }
  const classPass = classification.kind === document.kind || document.kind === 'other-document';
  const documentPass = misses.length === 0;
  const item = {
    id: document.id,
    clientId: document.clientId,
    kind: document.kind,
    loop,
    classification: classification.kind,
    classificationPass: classPass,
    ocrConfidence: read.confidence,
    expectedAccuracy: caseExpected ? caseExact / caseExpected : 0,
    requiredRecall: caseRequired ? caseRequiredFound / caseRequired : 0,
    evidenceIntegrity: caseEvidence ? caseEvidencePass / caseEvidence : 1,
    documentPass,
    found: Object.fromEntries(Object.values(extraction).filter((field) => field.value !== null).map((field) => [field.id, field.value])),
    misses,
  };
  cases.push(item);
  totals.documents += 1;
  totals.documentPass += documentPass ? 1 : 0;
  totals.classificationPass += classPass ? 1 : 0;
  totals.expectedTotal += caseExpected;
  totals.exactPass += caseExact;
  totals.requiredTotal += caseRequired;
  totals.requiredPass += caseRequiredFound;
  totals.evidenceTotal += caseEvidence;
  totals.evidencePass += caseEvidencePass;
  totals.confidenceTotal += read.confidence;
  category[document.kind] ||= { documents: 0, expectedTotal: 0, exactPass: 0, requiredTotal: 0, requiredPass: 0, classificationPass: 0 };
  category[document.kind].documents += 1;
  category[document.kind].expectedTotal += caseExpected;
  category[document.kind].exactPass += caseExact;
  category[document.kind].requiredTotal += caseRequired;
  category[document.kind].requiredPass += caseRequiredFound;
  category[document.kind].classificationPass += classPass ? 1 : 0;
  clients[document.clientId] ||= { documents: 0, passed: 0, expectedTotal: 0, exactPass: 0 };
  clients[document.clientId].documents += 1;
  clients[document.clientId].passed += documentPass ? 1 : 0;
  clients[document.clientId].expectedTotal += caseExpected;
  clients[document.clientId].exactPass += caseExact;
}

if (worker) await worker.terminate();
for (const value of Object.values(category)) {
  value.fieldAccuracy = value.expectedTotal ? value.exactPass / value.expectedTotal : 0;
  value.requiredRecall = value.requiredTotal ? value.requiredPass / value.requiredTotal : 0;
  value.classificationAccuracy = value.documents ? value.classificationPass / value.documents : 0;
}
for (const value of Object.values(clients)) {
  value.fieldAccuracy = value.expectedTotal ? value.exactPass / value.expectedTotal : 0;
  value.documentAccuracy = value.documents ? value.passed / value.documents : 0;
}
const report = {
  loop,
  synthetic: true,
  clients: Object.keys(clients).length,
  documents: totals.documents,
  categories: Object.keys(category).length,
  documentAccuracy: totals.documents ? totals.documentPass / totals.documents : 0,
  classificationAccuracy: totals.documents ? totals.classificationPass / totals.documents : 0,
  expectedFieldAccuracy: totals.expectedTotal ? totals.exactPass / totals.expectedTotal : 0,
  requiredFieldRecall: totals.requiredTotal ? totals.requiredPass / totals.requiredTotal : 0,
  evidenceIntegrity: totals.evidenceTotal ? totals.evidencePass / totals.evidenceTotal : 1,
  averageOcrConfidence: totals.documents ? totals.confidenceTotal / totals.documents : 0,
  counts: totals,
  category,
  clientsById: clients,
  failures: cases.filter((item) => !item.documentPass || !item.classificationPass),
  cases,
};
await writeFile(path.join(reportDir, `${loop}.json`), JSON.stringify(report, null, 2), 'utf8');
console.log(JSON.stringify({
  loop: report.loop,
  clients: report.clients,
  documents: report.documents,
  categories: report.categories,
  documentAccuracy: report.documentAccuracy,
  classificationAccuracy: report.classificationAccuracy,
  expectedFieldAccuracy: report.expectedFieldAccuracy,
  requiredFieldRecall: report.requiredFieldRecall,
  evidenceIntegrity: report.evidenceIntegrity,
  averageOcrConfidence: report.averageOcrConfidence,
  failures: report.failures.map((item) => ({ id: item.id, kind: item.kind, classification: item.classification, misses: item.misses.map((miss) => miss.fieldId) })),
}, null, 2));
