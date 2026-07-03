# Document Requests — Current Inventory

Snapshot of every document the intake currently asks for, taken 2026-07-03
directly from the live pages (section rails + final summary). Reference for the
document-collection redesign — see SUGGESTIONS.md Round 29 for the proposed
three-tier model.

**Key:** `Required` = "Required to upload," no N/A escape · `Needed + N/A` =
requested, debtor can tap N/A · `Conditional` = only revealed by an answer.

---

## Step 1 — Personal Info (personal.html) — 4 + 4 spouse

| Document | Status | Notes |
|---|---|---|
| Driver's license | **Required** | |
| Social Security card, W-2, or 1099 | **Required** | |
| Tax return — last year | Needed + N/A | |
| Tax return — two years ago | Needed + N/A | |
| Spouse's driver's license | **Required** · Conditional | revealed when joint filing = Yes |
| Spouse's Social Security card, W-2, or 1099 | **Required** · Conditional | revealed when joint filing = Yes |
| Spouse's tax return — last year | "Only if filed separately" + N/A · Conditional | |
| Spouse's tax return — two years ago | "Only if filed separately" + N/A · Conditional | |

## Step 2 — Income (income.html) — 3 + 3 spouse

| Document | Status | Notes |
|---|---|---|
| Pay stubs — last 6 months | Needed + N/A | |
| Proof of other income — last 6 months | Needed + N/A | |
| Bank statements — last 6 months | Needed + N/A | |
| Spouse's pay stubs — last 6 months | Needed + N/A · Conditional | revealed when Married |
| Spouse's proof of other income — last 6 months | Needed + N/A · Conditional | revealed when Married |
| Spouse's bank statements · only if not already provided | Needed + N/A · Conditional | revealed when Married |

## Step 3 — Assets (assets.html) — 7

| Document | Status | Notes |
|---|---|---|
| Zillow valuation statement | Needed + N/A | |
| Foreclosure documents · if any | Needed + N/A | |
| KBB valuation statement | Needed + N/A | |
| Vehicle title · if any | Needed + N/A | |
| Vehicle repossession documents · if any | Needed + N/A | |
| Bank or financial account statements | Needed + N/A | overlaps Income's bank statements |
| Investments, retirement, pensions, etc. | Needed + N/A | |

## Step 4 — Debts (debts.html) — 9

| Document | Status | Notes |
|---|---|---|
| Mortgage statements · secured debt | Needed + N/A | |
| HOA statements · secured debt | Needed + N/A | |
| Other secured debt statements | Needed + N/A | jobtip in content points here |
| Vehicle loan / lease statements · secured debt | Needed + N/A | |
| Domestic support documents | Needed + N/A | jobtip points here |
| Tax notices | Needed + N/A | jobtip points here |
| Student loan statements | Needed + N/A | jobtip points here |
| Unsecured debt statements & collection / attorney notices | **Required** | drives creditor schedules; medical bills emphasized |
| Business debt statements | Needed + N/A | |

## Step 5 — Expenses (expenses.html) — 0

Rail says "No documents needed here." *(FIELD-MAP's Document → Section map
still lists utility/household bills for this step — see Discrepancies.)*

## Step 6 — Financial Affairs (financial-affairs.html) — 1

| Document | Status | Notes |
|---|---|---|
| Court paperwork | Needed + N/A | |

## Step 7 — Counseling class (counseling.html) — 1

| Document | Status | Notes |
|---|---|---|
| Counseling class certificate | Needed, no N/A pill | soft gate; auto-delivered by Cricket Debt when class taken via firm link; manual upload for class taken elsewhere |

## Step 8 — Documents summary (documents.html)

Groups as currently shown: Personal information (8) · Income (3) · Assets (7) ·
Debts (**2** — "Statements for all debts," "Attorney / collector letters") ·
Financial affairs (1) · Required to file (1 — "Pre-bankruptcy counseling
certificate") · Other documents (Optional catch-all).

**Totals: 25 distinct requests across the section rails (18 base + 7
spouse/conditional), plus the optional catch-all.**

---

## Discrepancies to resolve in the redesign

1. **Debts mismatch:** the rail asks for 9 granular items; the summary collapses
   them to 2. The summary can't reflect per-item status the debtor saw earlier.
2. **Counseling naming/location:** summary still says "Pre-bankruptcy counseling
   certificate" under "Required to file" — jargon, and the item now lives on
   Step 7 as "Counseling class certificate" with a soft gate.
3. **Expenses:** rail requests nothing, but FIELD-MAP still maps utility bills
   to this step. Decide: request them (utility-summary workflow uses them) or
   update FIELD-MAP.
4. **Duplicate bank statements:** requested in Income (last 6 months) and again
   in Assets ("Bank or financial account statements"). One `doc_type` should
   satisfy both.
5. **Conditional-label drift:** rail and summary word the same conditions
   differently ("Only if filed separately" vs "· if filed separately").
6. **"N/A" wording** still used in all six section rails (pill + "tap N/A"
   note) — violates the plain-language rule; replacement pattern is drafted in
   documents-v2-mockup.html.
7. **No shared state:** each rail tracks uploads per page; the summary doesn't
   reflect section uploads. Redesign needs one document state keyed by stable
   `doc_type` (see FIELD-MAP), rendered by rails and summary alike.
