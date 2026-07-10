# Jimmy Experimental - BK Questionnaire Parity

This branch evaluates publicly described competitor capabilities and implements
original FastLane equivalents. It does not copy competitor source code, private
workflows, wording, creditor data, or visual design.

## Intake parity matrix

| Capability | Experimental status | FastLane implementation |
|---|---|---|
| Dynamic questionnaire | Review-ready | Existing conditional questions and document triggers remain active. |
| Mobile-first flow | Review-ready | Existing responsive intake plus a compact experimental progress toolbar. |
| Tutorial guidance | Review-ready | Existing section videos plus new English/Spanish section guidance. |
| White-label branding | Review-ready | CRM-controlled organization name and logo remain active. |
| Resume and progress | Prototype | Browser-local visited-step progress and return-to-last-section control. |
| Common creditor autocomplete | Prototype | Original demo list of common national creditors on matching Debts fields. Debtors must verify legal name and address from a current statement. |
| Bilingual experience | Prototype | English/Spanish guidance and controls. Full question-by-question legal translation still requires attorney-reviewed translation content. |
| Paystub assistant | Prototype | Intake can queue a simulated six-month paystub organization workflow for human review. |
| Bank statement assistant | Prototype | Intake can queue a simulated account/month completeness workflow for human review. |
| Document tracking and follow-up | Review-ready | Existing document rules, missing-item states, attorney approval, and reminder workflows. |
| Petition-prep export | Partial | FastLane has canonical intake and petition-mapping work outside this standalone review surface; production export remains gated. |
| Text messaging | Integration-gated | CRM experimental branch provides text-draft UX only. No message is transmitted. |
| Bank/payroll connections | Integration-gated | Requires approved vendors, authentication, consent, data-retention rules, and production storage. |
| OCR and PDF conversion | Integration-gated | Requires a secure document pipeline, malware controls, quality checks, and human review. |
| Credit-report import | Integration-gated | Requires permissible-purpose, consent, vendor, audit, and security decisions. |
| Cross-device cloud resume | Integration-gated | Requires authenticated production storage. Browser-local progress is used in this prototype. |
| Native mobile apps | Deferred | Responsive web remains the current experimental delivery surface. |

## Guardrails

- Fake/demo data only.
- No bank, payroll, credit-report, SMS, or petition-prep vendor is contacted.
- AI or extraction output remains evidence for attorney/staff review, not a legal
  conclusion or filing-ready representation.
- Stable Matt and Jimmy branches are unchanged by this work.

## Acceptance checks

- Every Intake page shows `Jimmy Experimental`.
- Progress updates without blocking navigation.
- Login offers resume when a prior section exists in browser storage.
- Debts matching fields offer common-creditor suggestions.
- Income source assistants clearly identify themselves as simulations.
- Desktop and mobile layouts do not overflow or overlap.
