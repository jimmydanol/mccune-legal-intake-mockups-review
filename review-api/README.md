# Shared review checklist API

This Cloudflare Pages Function stores Page 9 implementation decisions in an
isolated prefix within the existing Intake collaboration KV namespace.
It is separate from the debtor intake data flow and must never receive client,
matter, credential, or document data.

The board records append-only KV events for:

- `implement`: Matt or Jimmy requests a listed Jimmy-branch change.
- `implemented`: Matt or Jimmy records that the approved change reached Matt's branch.

Reviewer identity is self-selected on the public review page. This is an
operational two-person prototype, not authenticated approval evidence.

## Deploy

Set `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` locally, then run:

```powershell
node review-api/deploy.mjs
```

The deployer creates or reuses:

- Pages project: `mccune-review-api`
- Existing source binding: `bk-fastlane-intake/INTAKE_COMMENTS`
- API binding: `REVIEW_STORE`
- API: `https://mccune-review-api.pages.dev/api/checklist`

No credential or account identifier is written to the repository.
