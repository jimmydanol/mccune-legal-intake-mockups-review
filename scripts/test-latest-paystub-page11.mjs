import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = path.join(root, 'Intake Pages', 'latest-paystub-calculator.html');
const html = await readFile(pagePath, 'utf8');
for (const [index, match] of [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].entries()) {
  assert.doesNotThrow(() => new vm.Script(match[1]), `Inline script ${index + 1} must parse`);
}
const rulesMatch = html.match(/<script id="page11-rules">([\s\S]*?)<\/script>/);
assert.ok(rulesMatch, 'Page 11 calculation rules block was not found');

const sandbox = {};
vm.createContext(sandbox);
assert.doesNotThrow(() => vm.runInContext(rulesMatch[1], sandbox), 'Page 11 calculation rules must parse');
const rules = sandbox.BKFL_PAGE11_RULES;
assert.ok(rules, 'Page 11 rules were not exported');
assert.equal(rules.PAYSTUBS.length, 5);
assert.equal(rules.PAYSTUBS[0].id, 'jul-2026', 'The most recent paystub must be first and selected by default');
assert.deepEqual(
  Object.fromEntries(Object.entries(rules.FREQUENCIES).map(([key, value]) => [key, value.periods])),
  { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 },
);

const latest = rules.calculateLatestPaystub(rules.PAYSTUBS[0], 'biweekly');
assert.equal(latest.periods, 26);
assert.equal(latest.values.grossIncome, 9923.33);
assert.equal(latest.values.taxes, 1944.5);
assert.equal(latest.values.insurance, 346.67);
assert.equal(latest.values.voluntaryRetirement, 433.33);
assert.equal(latest.values.totalDeductions, 2724.5);
assert.equal(latest.values.netPay, 7198.84);
for (const key of rules.VALUE_KEYS) {
  assert.equal(
    latest.values[key],
    rules.roundCurrency(rules.PAYSTUBS[0][key] * 26 / 12),
    `${key} must use the same 26/12 annualization factor`,
  );
}

assert.equal(rules.calculateLatestPaystub(rules.PAYSTUBS[0], 'weekly').values.grossPay, 19846.67);
assert.equal(rules.calculateLatestPaystub(rules.PAYSTUBS[0], 'semimonthly').values.grossPay, 9160);
assert.equal(rules.calculateLatestPaystub(rules.PAYSTUBS[0], 'monthly').values.grossPay, 4580);
assert.throws(() => rules.calculateLatestPaystub(rules.PAYSTUBS[0], ''), /Unknown pay frequency/);
assert.throws(() => rules.averagePaystubs([]), /At least one Schedule I paystub/);

const average = rules.averagePaystubs(rules.PAYSTUBS);
assert.equal(average.method, 'average');
assert.equal(average.paystubCount, 5);
assert.equal(average.values.grossPay, 4372);
const state = {
  scheduleI: average,
  scheduleISelections: { 'jul-2026': true },
  meansTestSelections: { 'jul-2026': true, 'jun-2026': false },
};
const applied = rules.applyScheduleICalculation(state, latest);
assert.equal(applied.scheduleI.method, 'latest');
assert.deepEqual(applied.scheduleISelections, state.scheduleISelections);
assert.equal(JSON.stringify(applied.meansTestSelections), JSON.stringify(state.meansTestSelections));
assert.notEqual(applied.meansTestSelections, state.meansTestSelections, 'Means Test selections must be copied, not mutated');

assert.match(html, /Jimmy's Branch/);
assert.match(html, /Page 11 - Schedule I calculator prototype/);
assert.match(html, /Calculate from latest paystub/);
assert.match(html, /Select pay frequency/);
assert.match(html, /id="applyChanges"[^>]*disabled/);
assert.match(html, /Means Test selections are unchanged/);
assert.match(html, /Fake data - local browser calculation/);
assert.doesNotMatch(html, /\bfetch\s*\(/);
assert.doesNotMatch(html, /XMLHttpRequest|sendBeacon|<form\b/i);

console.log('Page 11 latest-paystub calculator checks passed.');
