import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = path.join(root, 'Intake Pages', 'document-intake-testing.html');
const html = await readFile(pagePath, 'utf8');
const source = html.match(
  /\/\* PURE PILOT RULES START \*\/([\s\S]*?)\/\* PURE PILOT RULES END \*\//,
);

assert.ok(source, 'Page 10 pure rules block was not found');

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .filter(Boolean);
assert.doesNotThrow(
  () => new vm.Script(inlineScripts.join('\n'), { filename: pagePath }),
  'Page 10 inline JavaScript must parse',
);

const context = {
  console,
  crypto: webcrypto,
  Date,
  Intl,
  TextEncoder,
  Uint8Array,
};
context.globalThis = context;
vm.createContext(context);
vm.runInContext(source[1], context, { filename: pagePath });

const rules = context.__documentIntakeTestingRules;
assert.ok(rules, 'Page 10 test hook was not exported');

const {
  RUNTIME_ARTIFACT,
  FAKE_SAMPLES,
  artifactChecksumPayload,
  classifyDocument,
  extractLabeledFields,
  mergeDriverEvidence,
  resolveDocumentKind,
  sha256Value,
  stableStringify,
  validateFields,
  verifyRuntimeArtifact,
} = rules;

assert.equal(Object.keys(RUNTIME_ARTIFACT.definitions).length, 9);
assert.equal(RUNTIME_ARTIFACT.approvalState, 'review_only');

const actualChecksum = await sha256Value(
  stableStringify(artifactChecksumPayload(RUNTIME_ARTIFACT)),
);
assert.equal(
  actualChecksum,
  RUNTIME_ARTIFACT.checksum,
  `Runtime artifact checksum mismatch. Replace it with ${actualChecksum}`,
);

const tamperedArtifact = JSON.parse(JSON.stringify(RUNTIME_ARTIFACT));
tamperedArtifact.version = `${tamperedArtifact.version}-tampered`;
assert.equal((await verifyRuntimeArtifact(tamperedArtifact)).verified, false);

for (const [kind, sample] of Object.entries(FAKE_SAMPLES)) {
  const classification = classifyDocument(sample.fileName, sample.text);
  assert.equal(classification.kind, kind, `${kind} sample classification`);

  const definition = RUNTIME_ARTIFACT.definitions[kind];
  const extraction =
    kind === 'driver-license'
      ? mergeDriverEvidence(definition, '', sample.text)
      : { fields: extractLabeledFields(definition, sample.text), warnings: [] };
  const validation = validateFields(definition, extraction.fields, sample.text, '');

  assert.equal(validation.passed, true, `${kind}: ${validation.blocking.join('; ')}`);
  assert.ok(
    Object.values(extraction.fields).some((field) => field.value !== null),
    `${kind} should produce at least one evidence-backed field`,
  );

  for (const field of Object.values(extraction.fields)) {
    if (field.value === null) continue;
    assert.ok(field.evidence?.sourceLines?.length, `${kind}.${field.id} evidence`);
    for (const line of field.evidence.sourceLines) {
      assert.ok(
        sample.text.includes(line),
        `${kind}.${field.id} evidence must be exact source text`,
      );
    }
  }
}

assert.equal(
  classifyDocument('notes.txt', 'Unstructured notes with no document labels.').kind,
  'unknown',
);
assert.equal(
  resolveDocumentKind(
    classifyDocument(FAKE_SAMPLES.w2.fileName, FAKE_SAMPLES.w2.text),
    'bank-statement',
  ).blocked,
  true,
  'A type mismatch must fail closed',
);

const driverFields = mergeDriverEvidence(
  RUNTIME_ARTIFACT.definitions['driver-license'],
  '',
  FAKE_SAMPLES['driver-license'].text,
).fields;
assert.equal('licenseNumber' in driverFields, false);

const payStubDefinition = RUNTIME_ARTIFACT.definitions['pay-stub'];
const tamperedFields = extractLabeledFields(
  payStubDefinition,
  FAKE_SAMPLES['pay-stub'].text,
);
tamperedFields.employeeName.evidence.sourceLines = ['Employee Name: Fabricated Person'];
const tamperedValidation = validateFields(
  payStubDefinition,
  tamperedFields,
  FAKE_SAMPLES['pay-stub'].text,
  '',
);
assert.equal(tamperedValidation.passed, false);
assert.equal(tamperedFields.employeeName.value, null);

assert.equal(/\bbeth\b/i.test(html), false, 'Page 10 naming must remain neutral');
assert.ok(html.includes('canonicalWriteAllowed:false'));
assert.ok(html.includes('appliedToIntake:false'));
assert.ok(html.includes('liveSheetRead:false'));

console.log('Page 10 multi-document extraction checks passed for 9 document types.');
console.log(`Runtime artifact checksum verified: ${actualChecksum}`);
