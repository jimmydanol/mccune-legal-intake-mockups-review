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
assert.match(index, /src="\.\/apptomate-replica\/\?v=20261007-state"/);
assert.match(data, /branch:"dev_v2"/);
assert.match(data, /commit:"8d21e37"/);
assert.match(data, /state:"verified"/);
assert.match(data, /state:"review"/);
assert.doesNotMatch(data, /BKFastPassLLC|github\.com|@apptomate\.co|@bkfastpass\.com|mail\.google\.com|gmail/i);
assert.match(replicaIndex, /APPTOMATE WORKING REPLICA/);
assert.match(replicaCss, /\.crm-shell/);
assert.match(replicaJs, /Create New Lead/);
assert.match(replicaJs, /function renderLeads\(\)/);
assert.match(replicaJs, /Search leads\.\.\./);
assert.match(replicaJs, /Filter by stage/);
assert.match(replicaJs, /function renderContacts\(\)/);
assert.match(replicaJs, /Search contacts\.\.\./);
assert.match(replicaJs, /function renderDashboard\(\)/);
assert.match(replicaJs, /function renderLeadDetail\(\)/);
assert.match(replicaJs, /data-stage-link/);
assert.match(replicaJs, /data-open-lead/);
assert.match(replicaJs, /state.leadPage=0;state.crmPage="leads"/);
assert.doesNotMatch(replicaJs, /Intake Started|route is not implemented in the verified source/);
assert.match(replicaIndex, /October 5, 2026/);
assert.match(replicaJs, /type="\$\{date\?"month":"text"\}"/);
assert.match(replicaJs, /Personal Information/);
assert.match(replicaJs, /function renderAssets\(\)/);
assert.match(replicaJs, /Asset detail card/);
assert.match(replicaJs, /Legal claims must be listed/);
assert.match(replicaJs, /function renderDocuments\(\)/);
assert.doesNotMatch(replicaJs, /BKFastPassLLC|github\.com\/BKFastPassLLC|@apptomate\.co|mail\.google\.com/i);



assert.match(replicaJs, /function assetDocuments\(\)/);
assert.match(replicaJs, /Pay stubs — last 6 months/);
assert.match(replicaJs, /Zillow valuation statement/);
assert.match(replicaJs, /KBB valuation statement/);

console.log("Working Site Replicator verification passed.");
