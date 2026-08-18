import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const index = readFileSync(new URL("../crm-lite-jimmy-branch/index.html", import.meta.url), "utf8");
const data = readFileSync(new URL("../crm-lite-jimmy-branch/site-replicator-data.js", import.meta.url), "utf8");
const replicaIndex = readFileSync(new URL("../crm-lite-jimmy-branch/apptomate-replica/index.html", import.meta.url), "utf8");
const replicaCss = readFileSync(new URL("../crm-lite-jimmy-branch/apptomate-replica/replica.css", import.meta.url), "utf8");
const replicaJs = readFileSync(new URL("../crm-lite-jimmy-branch/apptomate-replica/replica.js", import.meta.url), "utf8");

assert.match(index, /site-replicator-data\.js/);
assert.match(index, /label:"SITE REPLICATOR"/);
assert.match(index, /function SiteReplicatorPage\(\)/);
assert.match(index, /function ApptomateWorkingReplicaPage\(\)/);
assert.match(index, /page==="site-replicator"/);
assert.match(index, /src="\.\/apptomate-replica\/"/);
assert.match(data, /branch: "dev_v2"/);
assert.match(data, /commit: "baa71e9"/);
assert.match(data, /state: "verified"/);
assert.match(data, /state: "review"/);
assert.doesNotMatch(data, /@apptomate\.co|@bkfastpass\.com|mail\.google\.com|gmail/i);
assert.match(replicaIndex, /APPTOMATE WORKING REPLICA/);
assert.match(replicaCss, /\.crm-shell/);
assert.match(replicaJs, /Create New Lead/);
assert.match(replicaJs, /Personal Information/);
assert.match(replicaJs, /function renderAssets\(\)/);
assert.match(replicaJs, /function renderDocuments\(\)/);
assert.doesNotMatch(replicaJs, /BKFastPassLLC|github\.com\/BKFastPassLLC|@apptomate\.co|mail\.google\.com/i);

console.log("Working Site Replicator verification passed.");
