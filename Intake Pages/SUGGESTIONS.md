# Design suggestions log

Running log of design/markup changes for the McCune Legal debtor intake mockup.
Each round records: the file(s) touched, what changed, and the UX rationale.
Inline review notes also appear in the HTML as `<!-- SUGGESTION: ... -->` comments
right where they apply.

---

## Round 0 — Initial setup (baseline)

**Files:** login.html, personal.html, income.html, assets.html, debts.html,
expenses.html, financial-affairs.html, confirmation.html

**What's here:**
- White-label debtor intake, branded McCune Legal (logo + brand teal `#224E5F`
  embedded; all firm-specific values live in CSS `--firm-*` tokens at the top of
  each file for easy re-skinning).
- Login is the entry page (sign in / create account). The six intake stages are
  separate pages linked by a top section nav. Confirmation page after submit.
- Persistent left "Upload documents" sidebar on every stage page (not on login).
  Core docs are required; the rest can be marked "N/A". Status shows
  "Uploaded" / "Need to upload" / "Marked N/A".
- Interactive: Yes/No toggles reveal follow-ups, asset chips select, document
  boxes simulate upload / N/A / undo with a live progress count, "add another"
  rows clone, answers persist across pages within a session (sessionStorage).
- Every file is standalone — inlined CSS + JS, no external dependencies.

**Rationale:** Matches the real BK Fast Lane 7-step product structure while
reading as the firm's own tool; debtor-first plain language and an always-present
document panel so uploads never feel like a separate chore.

---

## Round 1 — "Statements for all debts" now required (2026-06-13)

**Files:** assets.html, debts.html, expenses.html, financial-affairs.html,
income.html, personal.html, confirmation.html

**What changed:** Removed the "N/A" (not applicable) option from the
"Statements for all debts" document box. It can no longer be skipped.

**Rationale:** Debt statements are needed for every case — they drive the
creditor schedules. Treat it as a required upload like ID and pay stubs, not an
optional one.

---

<!-- Add new rounds below this line. Template:

## Round N — short title (date)
**File(s):** ...
**What changed:** ...
**Rationale:** ...
-->
