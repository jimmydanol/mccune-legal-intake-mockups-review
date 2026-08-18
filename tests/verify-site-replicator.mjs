import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const index = readFileSync(new URL("../crm-lite-jimmy-branch/index.html", import.meta.url), "utf8");
const data = readFileSync(new URL("../crm-lite-jimmy-branch/site-replicator-data.js", import.meta.url), "utf8");

assert.match(index, /site-replicator-data\.js/);
assert.match(index, /label:"SITE REPLICATOR"/);
assert.match(index, /function SiteReplicatorPage\(\)/);
assert.match(index, /page==="site-replicator"/);
assert.match(data, /branch: "dev_v2"/);
assert.match(data, /commit: "baa71e9"/);
assert.match(data, /state: "verified"/);
assert.match(data, /state: "review"/);
assert.doesNotMatch(data, /@apptomate\.co|@bkfastpass\.com|mail\.google\.com|gmail/i);

console.log("Site Replicator verification passed.");
