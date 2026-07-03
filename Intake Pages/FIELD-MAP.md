# Intake → Forms Field Map

The master mapping for the McCune Legal debtor intake (white-label, powered by BK Fast Lane).

This document does two things:

1. **Destination map** — every intake field → the exact line on the official bankruptcy form it will populate. This is how we generate the petition and schedules from intake data.
2. **Source / extraction map** — which uploaded document each field can be *pre-filled* from when we scan, and whether that extraction is **deterministic** (fixed format, same result every time) or **inferred** (variable format, AI best-guess that must be confirmed).

The whole intake is built on one principle: **ask once, derive the rest.** A value the debtor gives in one place flows to every form line that needs it; values we can compute (exemption state, venue) are never asked.

---

## Two concepts, kept separate

**Destination (output side).** When we generate forms, intake field X writes to Form Y, line Z. One intake field often feeds several form lines (e.g. the home address appears on Form 101, Schedule A/B, and is used to derive venue).

**Source/extraction (input side).** Before the debtor types anything, we scan their uploads and pre-fill what we can. The reliability of that pre-fill depends entirely on the document:

| Tier | Meaning | Behavior |
|---|---|---|
| **Deterministic** | Document has a fixed, standardized structure — the value is always in the same place / encoded format. | Auto-fill with high confidence. |
| **Inferred** | Document format varies by issuer; value located by AI reading, not fixed position. | Pre-fill, but **always flag for debtor confirmation.** |
| **Manual** | No reliable source document; debtor enters it. | No pre-fill. |

This is the distinction Jimmy/Codex flagged as a **deterministic outcome**: the scan of a given document must return the same result every time, from a known location — not a guess that varies run to run. Standardized documents (driver's license barcode, W-2 boxes, 1040 lines) give us that; free-form documents (most pay stubs, letters) do not, so those stay "inferred + confirm."

### Deterministic source documents we expect to rely on

| Document | Why it's deterministic | Fields it can reliably yield |
|---|---|---|
| **Driver's license / state ID** | Back-of-card barcode is the AAMVA PDF417 standard — fixed, machine-readable fields. | Full legal name, DOB, residential address, sex, ID number |
| **W-2** | Fixed IRS box layout (Box 1, Box a, Box e/f). | Name, SSN, employer name/address, wages |
| **Form 1040 (tax return)** | Named IRS line items at known locations. | Filing status, dependents, names, AGI, address |
| **1099** | Standardized IRS layout. | Name, SSN/TIN, payer, income amount |
| **SSA card** | Single standardized field. | SSN, name as printed |

### Inferred (confirm-required) source documents

| Document | Why it's inferred | Typical use |
|---|---|---|
| **Pay stubs** | Layout varies wildly by employer/payroll vendor. | Income, deductions, employer, pay frequency |
| **Bank statements** | Format varies by bank. | Account numbers, balances, transaction history |
| **Utility / household bills** | No standard layout. | Monthly expense amounts, account holder, address |
| **Creditor statements** | Vary by creditor. | Creditor name, balance, account number |

> **Build rule for the dev:** keep deterministic and inferred fields visibly separated in the data model, and never auto-commit an inferred value without a confirm step. The debtor confirm-screen already exists in the intake flow — that's where inferred pre-fills land.

---

## SECTION 1 — Personal Information

Reflects the live fields on `personal.html`. Form destination = Form 101 (Voluntary Petition) unless noted. "Debtor 1" = the filer; "Debtor 2" = spouse when filing jointly.

| Intake field | Req | → Form destination | ← Source doc(s) | Extraction | Notes |
|---|---|---|---|---|---|
| First name | ✓ | Form 101, Pt 1, Line 1 (First name) | License (barcode), 1040, W-2 | Deterministic | "As on your ID" |
| Middle name |  | Form 101, Pt 1, Line 1 (Middle name) | License, 1040 | Deterministic | |
| Last name (incl. suffix) | ✓ | Form 101, Pt 1, Line 1 (Last name + Suffix) | License, 1040, W-2 | Deterministic | Suffix folded into last name per Matt — rare, debtor appends |
| Other names used (last 8 yrs) |  | Form 101, Pt 1, Line 2 (Other names used) | — | Manual | Maiden/prior names, comma-separated. Also feeds SOFA context |
| Email address | ✓ | *(not on petition)* — firm contact / portal | — | Manual | Firm operational field, not a form line |
| Contact number | ✓ | *(not on petition)* — firm contact | License (sometimes) | Manual | Firm operational field; petition has no debtor phone line |
| Number and street (residence) | ✓ | Form 101, Pt 1, Line 5 (Where you live) | License (barcode), 1040 | Deterministic | |
| City | ✓ | Form 101, Pt 1, Line 5 | License, 1040 | Deterministic | |
| State | ✓ | Form 101, Pt 1, Line 5 | License, 1040 | Deterministic | Defaults "Colorado" |
| ZIP code | ✓ | Form 101, Pt 1, Line 5 | License, 1040 | Deterministic | |
| County | ✓ | Form 101, Pt 1, Line 5 (County) + **drives venue** | Derived from ZIP | Deterministic (derived) | See Derived fields |
| Mailing address (if different) |  | Form 101, Pt 1, Line 5 (Mailing address) | — | Manual | Revealed by checkbox; accepts P.O. Box |
| Date of birth | ✓ | *(used for identity / dependents logic)* | License (barcode), 1040 | Deterministic | Typed MM/DD/YYYY |
| Social Security number | ✓ | **Form 121** (Statement About SSN) — not printed on 101 | SSA card, W-2, 1099, 1040 | Deterministic | **Encrypt at rest.** Form 101 shows last 4 only; full SSN goes to Form 121 |
| Have you filed bankruptcy before? |  | Form 101, Pt 3, Lines 9–10 (Prior cases) | — | Manual | "Yes" reveals a free-text field: case number, chapter, approximate filing date (best-effort) |
| → Prior bankruptcy detail (text) | shown on Yes | Form 101, Pt 3, Lines 9–10 | — | Manual | One textarea; attorney parses/verifies. Structured fields *to build* later if needed |
| Has dependents? |  | **Schedule J, Line 2** (Dependents) | 1040 (dependents) | Inferred | "Yes" reveals per-dependent rows; "No" reveals nothing |
| → Dependent rows: Relationship, Age, Lives with you? (Yes / No / Part-time) | shown on Yes | **Schedule J, Line 2** | 1040 | Inferred | **Matches Form 106J. NO name field** — the form says "Do not state the dependents' names." Form 106J only has Yes/No for "lives with you" — **"Part-time" maps to Yes** with the nuance noted for the attorney. "Add another dependent" clones a row |
| Marital status | ✓ | Drives spouse block + Schedule I/J + **SOFA Q1** | 1040 (filing status) | Inferred | **Placed LAST in the section.** 1040 status ≈ marital status; confirm. "Married" reveals the Spouse block below |
| Note to attorney |  | *(internal — not a form line)* | — | Manual | Firm intake note |

**Personal Info field order (individual debtor):** name → other names → email/phone → home address → mailing (if diff) → DOB → SSN → prior bankruptcy → dependents → **marital status (last)** → spouse block (if Married) → note to attorney.

### Spouse flow — revealed only when Marital status = "Married"

When Married is selected, the **only** thing shown is one gating question:

**"Will your spouse be filing jointly with you?" → Yes / No / Unsure**

This gates everything else, so a nervous non-filing spouse is never asked for personal data up front. What each answer reveals:

| Answer | What appears | Why |
|---|---|---|
| **Yes** | Full **Debtor 2** block (fields below) | Spouse becomes a co-debtor with their own Form 101 columns + Form 121 SSN |
| **No** | Info-tip only (no fields) | Individual filing is allowed; non-filing spouse's **income still counts** (means test / Schedule I). Notice tells them income docs are needed in the Income section |
| **Unsure** | Info-tip only (no fields) | Same as No, but copy frames it as a strategic decision to discuss with the attorney. Income docs still needed |

**Debtor 2 block — shown only on "Yes".** Omits marital status (already answered) and dependents (shared household → listed once on Schedule J). All fields below mirror the debtor's mandatory set.

| Intake field | Req | → Form destination | ← Source doc(s) | Extraction | Notes |
|---|---|---|---|---|---|
| Spouse first / last name | ✓ | Form 101 Debtor 2, Line 1 | Spouse license, 1040 | Inferred | Deterministic if spouse license uploaded |
| Spouse middle name |  | Form 101 Debtor 2, Line 1 | Spouse license, 1040 | Inferred | |
| Spouse other names (last 8 yrs) |  | Form 101 Debtor 2, Line 2 | — | Manual | |
| Spouse email | ✓ | *(firm contact)* | — | Manual | |
| Spouse contact number | ✓ | *(firm contact)* | — | Manual | |
| Spouse home address (street/city/state/ZIP) | ✓ | Form 101 Debtor 2 address | License | Inferred | "Same as home address listed above" checkbox (default checked → hides fields). **No mailing-address option** (removed as overkill) |
| Spouse date of birth | ✓ | Identity (Debtor 2) | Spouse license, 1040 | Inferred | |
| Spouse SSN | ✓ | **Form 121** (2nd SSN) | Spouse SSA/W-2/1040 | Inferred | **Encrypt at rest** |
| Has your spouse filed bankruptcy before? |  | Form 101 Debtor 2, Pt 3 Lines 9–10 | — | Manual | "Yes" reveals a free-text detail box (same as debtor's) |

> **Cross-section dependency (RESOLVED):** the **Income** section now shows a conditional **Spouse income** block whenever marital status = Married (any joint answer), which covers the non-filing-spouse income the No/Unsure info-tips promise. See SECTION 2 below.

### Personal Info — still to build
- **Prior bankruptcy detail** is currently a single free-text field. If the dev wants structured form-fill, split into district / case number / filing date / chapter / disposition later.
- **Spouse prior-bankruptcy detail** (revealed on the spouse's "Yes") could likewise be expanded from Yes/No to detail fields, parallel to Debtor 1.

---

## Derived fields (computed, never asked)

These are *outputs* the system calculates from data collected elsewhere. They exist so we never ask the debtor a redundant or confusing legal question.

| Derived value | Computed from | Rule | Used for |
|---|---|---|---|
| **County** | Residential ZIP | ZIP → county lookup | Form 101 Line 5; venue |
| **Venue (proper district)** | Address history (SOFA Q2) | 180-day rule — district where debtor lived the greater part of the 180 days before filing | Where the case is filed |
| **Exemption state** | Address history (SOFA Q2) | 730-day rule — if not in current state the full 2 years before filing, exemptions follow the prior domicile | Schedule C exemptions |

> This is why **"How long in Colorado?" was removed** from Personal Info: SOFA Q2 already captures all addresses for the last 3 years, and exemption-state + venue are *computed from that*, not asked. Collect the address history once (SOFA Q2); derive the rest.

---

## SECTION 2 — Income (Schedule I / Form 106I)

`income.html`. Built as a guided sequence of gated questions for an individual filer, plus a conditional spouse block.

| Intake field | Shown when | → Form destination | ← Source doc(s) | Extraction | Notes |
|---|---|---|---|---|---|
| Are you employed? | always | Schedule I Pt 1 (employment status) | pay stub, W-2 | Inferred | "Yes" reveals job card(s) |
| → Occupation | employed = Yes | Schedule I Pt 1 (occupation) | pay stub, W-2 | Inferred | |
| → Employer name | employed = Yes | Schedule I Pt 1 (employer) | pay stub, W-2 | Inferred | |
| → Employer address | employed = Yes | Schedule I Pt 1 (employer address) | pay stub | Inferred | |
| → How long employed there | employed = Yes | Schedule I Pt 1 (how long) | — | Manual | |
| → Approx. annual gross income (before taxes) | employed = Yes | Schedule I Pt 2 (gross wages) | pay stub, W-2 | Inferred | Repeatable per job (add/remove) |
| Is there any other source of monthly income in your household? | always | Schedule I Line 8 (other income) | proof of income | Inferred | "Yes" reveals source rows |
| → Source + Amount per month | other income = Yes | Schedule I Line 8 | proof of income | Inferred | Repeatable (add/remove) |

**Spouse income block — shown when marital status = Married (any joint answer).** Reads marital status saved from Personal (sessionStorage `mcl_marital`; demo override `?married=1`). Covers the non-filing-spouse income required for the means test / Schedule I.

| Intake field | → Form destination | Notes |
|---|---|---|
| Is your spouse employed? → spouse job card(s) | Schedule I Pt 1 (spouse column) | Mirrors debtor job fields; add/remove |
| Is there any other source of monthly income from your spouse? → source rows | Schedule I Line 8 (spouse) | add/remove |

**Income documents (sidebar, each "needed" + N/A):** Pay stubs — last 6 mo; Proof of other income — last 6 mo; Bank statements — last 6 mo. **If Married:** + Spouse's pay stubs, Spouse's proof of other income, Spouse's bank statements (tagged "only if not already provided"). The business question was **removed** from Income — it lives in Financial Affairs (SOFA Q24–26).

---

## SECTION 3 — Assets (Schedule A/B)

`assets.html`. In progress — Real estate done; Vehicles / Financial accounts / Other assets / Household belongings still to rework.

**Real estate** — gated: "Do you own or have any interest in any real estate?" → Yes reveals property card(s) (repeatable):

| Intake field | → Form destination | ← Source doc(s) | Extraction | Notes |
|---|---|---|---|---|
| Property address | Schedule A/B Pt 1 | — | Manual | |
| Home purchase date (MM/YYYY) | Schedule A/B Pt 1 | — | Manual | |
| Estimated value | Schedule A/B Pt 1 (current value) | Zillow valuation | Manual | Zillow.com link + upload the valuation |
| Do you want to keep the house? | (intent of debtor / Statement of Intention) | — | Manual | |
| Are you behind on mortgage payments? | (arrears context) | — | Manual | Yes → foreclosure info-tip (file before sale date; upload foreclosure docs) |

> **Mortgage balance / monthly payment / HOA are NOT collected here** — they move to **Debts (Schedule D)**. Assets captures the property + value; the mortgage is a secured debt.

**Vehicles** — gated: "Do you own or have any interest in any vehicles?" → Yes reveals vehicle card(s), repeatable:

| Intake field | → Form destination | Notes |
|---|---|---|
| Year / Make / Model / Mileage | Schedule A/B Pt 2 (vehicles) | |
| Vehicle purchase date (MM/YYYY) | Schedule A/B Pt 2 | |
| Estimated value | Schedule A/B Pt 2 (current value) | KBB.com link + upload valuation |
| Is this vehicle financed or leased? | (context) | Yes → reveals keep + behind questions; No → "upload title" note |
| → Do you want to keep the vehicle? | (intent / Statement of Intention) | shown when financed |
| → Are you behind on payments? | (arrears context) | shown when financed; Yes → repossession info-tip (file before repossession) |

> **Vehicle loan balance / payment NOT collected here** — move to **Debts (Schedule D)**, same as the mortgage.

**Personal and Household Items** (Schedule A/B Part 3, Q6–14) — value rows matching the official categories: Household goods & furnishings, Electronics, Collectibles of value, Sports & hobby equipment, Firearms, Clothes, Jewelry, Animals/pets, and Other personal & household items (describe + value). Garage-sale value guidance.

**Financial Assets** (Schedule A/B Part 4, Q16–35) — intro "Do you own or have any interest in any of the following:" then each item as a Yes/No that reveals a value (and describe/repeatable card where noted):

| Item | Reveal | Form line |
|---|---|---|
| Cash on hand | value | Q16 |
| Bank or financial accounts | repeatable card (institution/type/value) + "most recent statement → Bank or financial account statements box, unless already in Income" | Q17 |
| Bonds, mutual funds, publicly traded stocks | repeatable card + statement → Investments box | Q18 |
| Ownership in a business | describe + value | Q19 |
| Government/corporate bonds, other instruments | describe + value | Q20 |
| Retirement or pension accounts | repeatable card + statement → Investments box | Q21 |
| Security deposits or prepayments | describe + value | Q22 |
| Annuities | repeatable card + statement → Investments box | Q23 |
| Education account (529/IRA/ABLE) | describe + value + statement → Investments box | Q24 |
| Trusts or future interests | describe + value | Q25 |
| Intellectual property | describe + value | Q26 |
| Licenses, franchises, intangibles | describe + value | Q27 |
| Tax refunds owed to you | value | Q28 |
| Family support owed to you | value | Q29 |
| Other money someone owes you | describe + value | Q30 |
| Insurance with cash value | repeatable card (describe + cash value) + statement → Investments box | Q31 |
| Inheritance from someone who died | describe + value | Q32 |
| Legal claims or lawsuits | repeatable card (describe + value); **always-on "must be listed" warning** | Q33–34 |
| Other financial assets not listed | repeatable card (describe + value) | Q35 |

**Business Related Property** (Schedule A/B Part 5, Q37–45) — gated: "Do you own or have any interest in any business related property?" → Yes reveals a large description box (unpaid commissions, accounts receivable, office equipment/supplies, machinery, tools/fixtures, inventory, partnership/business interests, other).

**Farm & Commercial Fishing Property** (Schedule A/B Part 6, Q46–52) — gated: "Do you own or have any interest in any farm or commercial fishing related property?" → Yes reveals a large description box (farm animals/livestock, crops, farm/fishing equipment, machinery and implements, other).

**Assets documents (sidebar):** Zillow valuation statement; Foreclosure documents (if any); KBB valuation statement; Vehicle title (if any); Vehicle repossession documents (if any); Bank or financial account statements; Investments, retirement, pensions, etc. — each "needed" + N/A. (Removed "Lien-free vehicle title," "Vehicle/asset valuation," and the old "Other account statements.")

---

## SECTION 4 — Debts (Schedules D / E / F)

`debts.html`. In progress — **Secured Debts (Schedule D) done**; unsecured/priority (E/F) still to rework.

**Secured Debts (Schedule D)** — built on cross-section carryover from Assets. assets.html saves to sessionStorage `mcl_secured` every real estate **address** and every vehicle marked financed/leased (**year/make/model**). debts.html reads it and generates a panel per asset:

| Carried-over asset | Generated block | Fields | Form |
|---|---|---|---|
| Each property (assumed to have a secured debt — no gating question) | **Real estate · [address]** panel | Mortgages (repeatable: lender, balance, monthly payment) + HOA (gated Yes/No → repeatable: name, balance if behind, monthly dues) | Schedule D |
| Each financed/leased vehicle | **Vehicle · [year make model]** panel | Loan/lease: lender, balance, monthly payment | Schedule D |
| Catch-all (always shown) | "Are there any other debts where a creditor can take back property if you don't pay?" → Yes | repeatable: lender, secured property/collateral, amount owed, monthly payment | Schedule D |

> Real estate carries an **assumed** secured debt (no Yes/No), per the form reality that listed property almost always has a mortgage; vehicles only generate a block if marked financed/leased in Assets. This is the first true cross-section carryover ("ask once, derive the rest").

**Secured debt documents (sidebar, order):** Mortgage statements; HOA statements; Other secured debt statements; Vehicle loan / lease statements — each names its box in the card's upload reminder.

**Priority Debts (Schedule E)** — two gated questions after Secured:

| Item | Reveal | Form |
|---|---|---|
| Do you owe any domestic support obligations? (child support, alimony, maintenance) | repeatable: owed to whom, total owed (if behind), monthly amount + "Domestic support documents" upload reminder | Schedule E (DSO) |
| Do you owe any back taxes? (IRS or state) | repeatable: taxing authority, tax year(s), amount owed + "Tax notices" upload reminder | Schedule E (taxes) |

Removed the old scattered "Back taxes?" block and "Do you owe child support…" yes/no (consolidated here). **Priority debt documents (sidebar):** Domestic support documents; Tax notices.

**Student Loans** — own section (not priority, but special): explanatory subtitle that they are presumed non-dischargeable but sometimes dischargeable. Gated → repeatable card (lender/servicer, balance, monthly payment) + "Student loan statements" upload box.

**Unsecured Debts (Schedule F)** — single "Estimated total unsecured debt" field + a prominent info-tip: credit reports will be pulled, but upload most recent statements; **medical bills no longer appear on credit reports** so every medical bill must be uploaded; also upload collection/attorney letters. Required upload box "Unsecured debt statements & collection / attorney notices." Followed by "Creditors without a statement" (repeatable: name, amount, mailing address) for creditors not on the credit report.

**Co-signers (Schedule H codebtors)** — "Has anyone co-signed on any of your debts?" → info-tip (co-signer stays legally responsible after the debtor's bankruptcy) + repeatable card (co-signer name, which debt, mailing address).

**Business / self-employment debt (consumer-vs-business-debt analysis)** — "Do you owe any debts related to a business you owned or self employment?" → Yes reveals: a personal-guarantee info-tip + a "Business debt statements" upload box, AND the follow-up "Is it possible that more than 50% of all of your debt is related to your business or self employment?" → Yes reveals a "special considerations" info-tip. (Non-consumer-debtor status affects means-test applicability.)

> Removed the old generic "Statements for all debts" and "Attorney / collector letters" upload boxes — folded into the unsecured box.

**Debt section order:** Secured → Priority → Student Loans → Unsecured → Creditors without a statement → co-signer / business yes/no.

---

## SECTION 5 — Expenses (Schedule J / Form 106J)

`expenses.html`. Rebuilt to mirror Schedule J line-by-line, grouped by the form's structure with friendly labels. Each row is a monthly $ amount.

| Group | Rows | → Schedule J line |
|---|---|---|
| Home | Rent/mortgage; additional mortgage/HELOC; HOA dues; home maintenance | J4, J5, (HOA→J4/5), J upkeep |
| Utilities | Electricity/heat/gas; water/sewer/garbage; phone/cell/internet/cable; other | J6a, J6b, J6c, J6d |
| Living & family | Food & housekeeping; childcare & education; clothing/laundry; personal care; medical/dental; entertainment; charitable; pet care | J7, J8, J9, J10, J11, J13, J14, (pets) |
| Transportation & insurance | Transportation; vehicle payments; vehicle/health/life/other insurance | J12, J17, J15 |
| Other obligations | Taxes; installment/lease; alimony/support paid; support for others; other real property; other | J16, J17, J18, J19, J20, J21 |

> Mortgage / HOA / vehicle-payment amounts **carry over from Debts** (auto-populated), so the debtor isn't re-asked. Carryover is silent (no "carries from Debts" label). Filled the previously-missing J lines (5, 6d, 10, 16, 19, 20).

---

## SECTION 6 — Statement of Financial Affairs (Form 107)

`financial-affairs.html` mirrors Form 107. **The on-screen question numbers now align 1:1 with the official Form 107 line numbers** — on-screen Q1 = Form 107 line 1, Q28 = line 28. Each question is a Yes/No that reveals Form 107–matched detail fields when answered Yes. Wording is debtor-friendly; every question after the first is scoped with "(or your spouse, if this is a joint case)". Several questions overlap data collected earlier and are **carried through / cross-referenced**, not re-asked.

Each "did you…" question adds the spouse scope; the field map below gives the exact box captured per question.

| # | On-screen question (short) | → Form 107 | Detail fields captured | Carry-through / notes |
|---|---|---|---|---|
| 1 | Current marital status | Pt 1, L1 | Married / Not married | **Pre-populated (editable)** from Personal Info marital status |
| 2 | Other addresses, last 3 yrs | Pt 1, L2 | Debtor 1 address (number/street, city, State, ZIP, From/To) + conditional Debtor 2 column (joint) with "Same as prior address" checkbox | **Source of truth for address history → venue (180-day) + exemption (730-day) derivation** |
| 3 | Community-property cohabitation, last 8 yrs | Pt 1, L3 | Yes/No (AZ, CA, ID, LA, NV, NM, PR, TX, WA, WI listed) | Manual |
| 4 | Job/business income, this yr + 2 prior | Pt 2, L4 | Yes/No + type checkboxes (wages vs. self-employment/business); conditional Debtor 2 block | **Amounts derived from uploaded pay stubs/tax returns**, not hand-entered |
| 5 | Other income, this yr + 2 prior | Pt 2, L5 | Repeatable source cards + "whose income" (You/spouse) | Amounts derived from documents; catches income not on returns |
| 6 | 90-day payment of $600+ to one creditor | Pt 3, L6 | Repeatable: Creditor name, Reason for payment, Total paid, Amount still owed, Dates | **The "primarily consumer debts?" threshold determination on L6 is DERIVED from the Debts business-debt branch, not asked here** |
| 7 | Insider payment, last 1 yr | Pt 3, L7 | Repeatable: Insider name, Reason for payment, Total paid, Amount still owed, Dates (box matches Q6) | Insider defined in a plain-language info-tip above Q7; cross-ref Debts |
| 8 | Payment/transfer benefiting an insider, last 1 yr | Pt 3, L8 | Repeatable: Insider name, Reason, Total paid, Amount still owed, Dates (box matches Q6/Q7) | Cross-ref Debts/Assets |
| 9 | Lawsuit / court / administrative action, last 1 yr | Pt 4, L9 | Repeatable: Case title, Court/agency, Nature of case, Status | Parenthetical lists suit types; jobtip → upload court paperwork box |
| 10 | Property repossessed/foreclosed/garnished/seized, last 1 yr | Pt 4, L10 | Repeatable: Creditor name, Describe the property, Explain what happened, Date, Value of property | jobtip → upload court paperwork + HR contact (to stop garnishment) |
| 11 | Creditor/bank setoff, last 90 days | Pt 4, L11 | Repeatable: Creditor/bank name, Describe the action the creditor took, Date of action, Amount | Manual |
| 12 | Property with receiver/custodian/assignee, last 1 yr | Pt 4, L12 | Single "provide more details" textarea | Simplified (form is essentially Yes/No + explain) |
| 13 | Gifts > $600 to any one person, last 2 yrs | Pt 5, L13 | Repeatable: Who received, Relationship to you, Describe the gift, Value, Date | Manual |
| 14 | Gifts/contributions > $600 to a charity, last 2 yrs | Pt 5, L14 | Repeatable: Charity/organization, Describe what was contributed, Total given, Date(s) | Box mirrors Q13, reframed to charity |
| 15 | Losses to theft/fire/disaster/gambling, last 1 yr | Pt 6, L15 | Repeatable: Describe the loss, Value of loss, Insurance/reimbursement received, Date | Manual |
| 16 | Paid anyone consulted about seeking bankruptcy relief, last 1 yr | Pt 7, L16 | Repeatable: Who you paid, Date of payment, Amount of payment | Parenthetical (attorneys, petition preparers, credit counseling); "what for" field dropped (always money) |
| 17 | Paid anyone who promised to help deal with/pay creditors, last 1 yr | Pt 7, L17 | Repeatable: Who you paid, Date of payment, Amount of payment (box matches Q16) | Parenthetical (debt consolidation, settlement, repayment, money-management program) |
| 18 | Sold/traded/transferred property outside ordinary course, last 2 yrs | Pt 7, L18 | Repeatable: Describe property transferred, Who received it, Relationship to you, Value received, Date | "Ordinary course" defined in the parenthetical |
| 19 | Transfer to self-settled trust / asset-protection device, last 10 yrs | Pt 7, L19 | Repeatable: Name of trust, Describe property transferred, Value, Date | Cross-ref Assets |
| 20 | Financial accounts closed/sold/moved, last 1 yr | Pt 8, L20 | Repeatable: Institution name, Type of account, Last 4 of account #, Closing balance, Date closed/moved | Cross-ref bank statements |
| 21 | Safe deposit box / depository, now or last 1 yr | Pt 8, L21 | Repeatable: Depository/institution, Who else had access, Describe the contents, Do you still have it? (Y/N) | Manual |
| 22 | Storage unit / off-site storage, last 1 yr | Pt 8, L22 | Repeatable: Storage facility/location, Describe what is stored, Who else has access, Do you still have it? (Y/N) | Manual |
| 23 | Property you hold/control for someone else | Pt 9, L23 | Repeatable: Owner of the property, Describe the property, Where it is located, Value | Parenthetical (borrowed, storing for, holding in trust) |
| 24 | Government notice of environmental liability | Pt 10, L24 | Repeatable: Name of site, Government unit, Environmental law, Date of notice | Part 10 opens with a plain-language definitions info-tip (environmental law / site / hazardous material) |
| 25 | You notified government of hazardous release | Pt 10, L25 | Repeatable: Name of site, Government unit, Environmental law, Date of notice (box matches Q24) | Manual |
| 26 | Party to an environmental proceeding | Pt 10, L26 | Repeatable: Case title, Court or agency, Nature of the case, Status | Parenthetical (includes settlements and orders) |
| 27 | Owned/connected to a business, last 4 yrs | Pt 11, L27 | Repeatable: Business name, Type of business, EIN (if any), Dates business existed (From/To on one line) | Parenthetical lists the 5 Form 107 connection types (sole proprietor/self-employed; LLC/LLP member; partner; officer/director/managing exec; 5%+ owner) |
| 28 | Gave a financial statement about your business, last 2 yrs | Pt 11, L28 | Repeatable: Who received the statement, Date | Box trimmed to match Form 107 (name + date only) |

**On-screen numbering now matches Form 107 line numbers** (this replaces the earlier "internal sequence" caveat — the old page led with insiders before the 90-day payment; it now follows the form order exactly, so Q# = line #). The dev can map on-screen Q*n* directly to Form 107 line *n*.

**SOFA Q4/Q5 (income), simplified.** Rather than a hand-entered 3-year × Debtor 1/Debtor 2 income grid, Q4 is a Yes/No that reveals type checkboxes (wages vs. self-employment/business) + a note that **exact annual figures come from the uploaded tax returns / pay stubs** (attorney completes the grid from those). Q5 (other income — alimony, SS, unemployment, rental, lawsuit, gambling, etc.) stays a Yes/No → repeatable source card, since that income often isn't on the returns. Debtor 2 column gates on joint filing.

**SOFA Q6 threshold ("primarily consumer debts?") is DERIVED, not asked.** The consumer-vs-non-consumer determination that sets the L6 payment threshold ($600 vs. $7,575) is computed from the **Debts business-debt branch**: if >50% of debt is business/self-employment, the filer is non-consumer. Don't double-ask; derive it from the Debts answers.

**Joint-filing behavior.** Q2/Q4/Q5 render actual Debtor 2 columns/blocks when joint (keyed off sessionStorage `mcl_joint === 'yes'`; demo override `?joint=1`/`?married=1`). All other "did you…" questions instead carry the inline "(or your spouse, if this is a joint case)" phrasing rather than a separate spouse popup.

> SOFA detail fields are **built** — all 28 reveal Form 107–matched follow-ups with repeatable cards where applicable. Q2 address detail (Debtor 1 + conditional Debtor 2, structured street/city/state/ZIP + From/To) is the source of truth for venue/exemption derivation.

---

## SECTION 7 — Counseling class (new step, mockup stage)

New dedicated page between Financial Affairs and Documents (mockup:
counseling-step7-mockup.html). Documents moves to Step 8. **Not a submit gate** —
the intake can be submitted without the certificate; the follow-up system chases
it. The case cannot be *filed* until the certificate is on file (180-day validity).

| Intake field | Asked as | Destination | Source / extraction |
|---|---|---|---|
| `mcl_counseling_status` | "Have you taken the class yet?" (taken / not yet) | Form 101 Part 5 (credit counseling checkboxes, line 15) | Manual |
| `mcl_counseling_provider` | "Company that gave the class" | Certificate filed with petition; Form 101 Part 5 | **Inferred** from certificate upload — confirm |
| `mcl_counseling_date` | "Date you finished" | 180-day validity check; Form 101 Part 5 | **Inferred** from certificate upload — confirm |
| `mcl_counseling_certificate` | Certificate upload | Filed with the petition | — |

---

## Document → Section map

Each intake step has a sidebar listing the documents needed for that section. The same uploads also feed extraction (see source map above).

| Step | Page | Documents in sidebar | Required? |
|---|---|---|---|
| 1 — Personal Info | personal.html | Driver's license; SSA card / W-2 / 1099; Tax return (last yr); Tax return (2 yrs ago). **If joint = Yes:** + Spouse's driver's license, Spouse's SSN doc, Spouse's tax returns (only if filed separately) | License + SSN doc required; tax returns needed (N/A allowed). Spouse docs revealed in the sidebar only when joint filing = Yes; also listed on the page-7 summary tagged "if spouse is filing" |
| 2 — Income | income.html | Pay stubs (6 mo); Proof of other income (6 mo); Bank statements (6 mo). **If Married:** + Spouse's pay stubs, Spouse's proof of other income, Spouse's bank statements (only if not already provided) | All "needed" with N/A; spouse docs revealed when Married |
| 3 — Assets | assets.html | Titles, deeds, account statements | Per applicability |
| 4 — Debts | debts.html | **Statements for all debts** | Required (no N/A — drives creditor schedules) |
| 5 — Expenses | expenses.html | Utility / household bills | Per applicability |
| 6 — Financial Affairs | financial-affairs.html | Supporting docs per question | Per applicability |
| 7 — Counseling class | counseling.html (mockup: counseling-step7-mockup.html) | Counseling class certificate | Soft — not a submit gate; follow-up chases it; case cannot be filed without it |
| 8 — Documents | documents.html (v2 mockup: documents-v2-mockup.html) | Recap of all of the above + "Other documents · Optional" catch-all — three-tier: Required to submit / Upload-or-tell-us-why-not / Optional | Tier 1 hard-blocks submit; tier 2 resolvable with a plain-language reason (no "N/A" wording); tier 3 never blocks |

---

## Maintenance

Update this file whenever a section's fields change. Pair each change with the matching SUGGESTIONS.md round entry. Keep the deterministic/inferred column honest — it's the part the dev relies on to know what can auto-fill vs. what must be confirmed.
