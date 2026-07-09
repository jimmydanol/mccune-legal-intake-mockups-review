import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_BASE = "https://api.cloudflare.com/client/v4";
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const PROJECT_NAME = process.env.MCCUNE_REVIEW_PAGES_PROJECT || "mccune-review-api";
const SOURCE_PROJECT_NAME = process.env.MCCUNE_REVIEW_SOURCE_PROJECT || "bk-fastlane-intake";
const SOURCE_BINDING_NAME = process.env.MCCUNE_REVIEW_SOURCE_KV_BINDING || "INTAKE_COMMENTS";
const BINDING_NAME = "REVIEW_STORE";
const COMPATIBILITY_DATE = "2026-07-09";
const directory = path.dirname(fileURLToPath(import.meta.url));

if (!ACCOUNT_ID || !API_TOKEN) {
  throw new Error("CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are required.");
}

async function cfFetch(endpoint, options = {}, allowNotFound = false) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      ...(options.headers || {})
    }
  });
  const body = await response.json().catch(() => ({}));
  if (allowNotFound && response.status === 404) return null;
  if (!response.ok || body.success === false) {
    const details = body.errors?.map((error) => error.message).join("; ") || response.statusText;
    throw new Error(`${response.status} ${details}`);
  }
  return body.result;
}

async function getReviewNamespaceId() {
  const source = await cfFetch(`/accounts/${ACCOUNT_ID}/pages/projects/${SOURCE_PROJECT_NAME}`);
  const binding = source.deployment_configs?.production?.kv_namespaces?.[SOURCE_BINDING_NAME];
  if (!binding?.namespace_id) {
    throw new Error(`KV binding ${SOURCE_BINDING_NAME} was not found on ${SOURCE_PROJECT_NAME}.`);
  }
  console.log(`Using isolated keys in ${SOURCE_PROJECT_NAME}/${SOURCE_BINDING_NAME}.`);
  return binding.namespace_id;
}

function deploymentConfig(namespaceId) {
  return {
    compatibility_date: COMPATIBILITY_DATE,
    kv_namespaces: {
      [BINDING_NAME]: { namespace_id: namespaceId }
    }
  };
}

async function ensureProject(namespaceId) {
  const endpoint = `/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}`;
  const project = await cfFetch(endpoint, {}, true);
  const deploymentConfigs = {
    production: deploymentConfig(namespaceId),
    preview: deploymentConfig(namespaceId)
  };

  if (!project) {
    await cfFetch(`/accounts/${ACCOUNT_ID}/pages/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: PROJECT_NAME,
        production_branch: "main",
        deployment_configs: deploymentConfigs
      })
    });
    console.log(`Created Pages project: ${PROJECT_NAME}`);
    return;
  }

  await cfFetch(endpoint, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deployment_configs: deploymentConfigs })
  });
  console.log(`Updated Pages bindings: ${PROJECT_NAME}`);
}

async function deployWorker() {
  const workerCode = await readFile(path.join(directory, "_worker.js"), "utf8");
  const bundle = new FormData();
  bundle.append("metadata", JSON.stringify({ main_module: "_worker.js" }));
  bundle.append(
    "_worker.js",
    new Blob([workerCode], { type: "application/javascript+module" }),
    "_worker.js"
  );

  const formData = new FormData();
  formData.append("manifest", "{}");
  formData.append("branch", "main");
  formData.append("commit_dirty", "false");
  formData.append("commit_message", "Deploy shared McCune review checklist API");
  formData.append("_worker.bundle", await new Response(bundle).blob(), "_worker.bundle");

  const deployment = await cfFetch(
    `/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments`,
    { method: "POST", body: formData }
  );
  console.log(`Deployment requested: ${deployment.url}`);
  return deployment;
}

async function verifyApi() {
  const healthUrl = `https://${PROJECT_NAME}.pages.dev/health`;
  for (let attempt = 1; attempt <= 18; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const response = await fetch(healthUrl, { cache: "no-store" });
      const body = await response.json();
      if (response.ok && body.ok) {
        console.log(`Verified API: ${healthUrl}`);
        return;
      }
    } catch {
      // Cloudflare may need a few seconds to activate a new Pages project.
    }
  }
  throw new Error(`API did not become healthy: ${healthUrl}`);
}

const namespaceId = await getReviewNamespaceId();
await ensureProject(namespaceId);
await deployWorker();
await verifyApi();
console.log(`Checklist endpoint: https://${PROJECT_NAME}.pages.dev/api/checklist`);
