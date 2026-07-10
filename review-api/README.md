# Shared review API

This Cloudflare Pages Function stores Page 9 implementation decisions and its
Matt/Jimmy conversation in isolated prefixes within the existing Intake
collaboration KV namespace. It also stores Matt-to-Jimmy feature requests and
their implementation status.
It is separate from the debtor intake data flow and must never receive client,
matter, credential, or document data.

The changelog records append-only KV events for:

- `implement`: Matt or Jimmy requests a listed Jimmy-branch change.
- `implemented`: Matt or Jimmy records that the approved change reached Matt's branch.
- `approval-needed`: Jimmy elevates a significant change for Matt's approval.
- `approved`: Matt records his approval of an elevated change.
- `dismissed`: Matt or Jimmy hides or restores a changelog tile for both sites.
- `undo-requested`: Matt notifies Jimmy that a listed change may need to be undone, or clears that request.
- `message`: Matt or Jimmy posts a Page 9 comment of up to 1,200 characters.
- `message clear`: Matt or Jimmy clears the shared Page 9 conversation after client confirmation.
- `request create`: Matt submits a feature request for Jimmy.
- `request implemented`: Jimmy records whether a request has been implemented.

The implementation actions remain supported for historical Page 9 entries. The
current interface uses the approval actions for the changelog workflow.

The live API stores one compact snapshot per collaboration feature. Normal GET
requests use a single KV read and do not scan key prefixes. Older append-only
records migrate into the snapshots automatically, with bounded retries when a
Cloudflare KV list quota is unavailable.

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
- Checklist API: `https://mccune-review-api.pages.dev/api/checklist`
- Messages API: `https://mccune-review-api.pages.dev/api/messages`
- Feature requests API: `https://mccune-review-api.pages.dev/api/requests`

No credential or account identifier is written to the repository.
