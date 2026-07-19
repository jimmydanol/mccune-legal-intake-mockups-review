import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = path.join(root, 'Intake Pages');
const pageFiles = (await readdir(pagesDir))
  .filter((file) => file.endsWith('.html') && file !== 'index.html')
  .sort();

assert.equal(pageFiles.length, 12, 'Expected all 12 Intake workflow pages');

for (const file of pageFiles) {
  const html = await readFile(path.join(pagesDir, file), 'utf8');
  const includes = html.match(/experimental-parity\.js/g) ?? [];
  assert.equal(includes.length, 1, `${file} must load the experimental layer exactly once`);
}

const parity = await readFile(path.join(pagesDir, 'experimental-parity.js'), 'utf8');
for (const marker of [
  'Jimmy Experimental',
  'Source document assistants',
  'xp-common-creditors',
  'bkfl_experimental_intake_v1',
  "state.language=state.language==='es'?'es':'en'",
]) {
  assert.ok(parity.includes(marker), `Missing Intake parity marker: ${marker}`);
}

const changeLog = await readFile(path.join(pagesDir, 'jimmy-changes.js'), 'utf8');
assert.ok(changeLog.includes('branch: "Jimmy-experimental"'));
assert.ok(changeLog.includes('experimental-competitor-parity-v1'));

console.log(`Experimental Intake parity checks passed for ${pageFiles.length} pages.`);
