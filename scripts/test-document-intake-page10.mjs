import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = path.join(root, 'Intake Pages', 'document-intake-testing.html');
const html = await readFile(pagePath, 'utf8');
const source = html.match(
  /\/\* PURE PILOT RULES START \*\/([\s\S]*?)\/\* PURE PILOT RULES END \*\//,
);

assert.ok(source, 'Page 10 pure rules block was not found');

const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .filter(Boolean);
assert.doesNotThrow(
  () => new vm.Script(inlineScripts.join('\n'), { filename: pagePath }),
  'Page 10 inline JavaScript must parse',
);

const context = { console, crypto: webcrypto, Date, Intl, TextEncoder, Uint8Array };
context.globalThis = context;
vm.createContext(context);
vm.runInContext(source[1], context, { filename: pagePath });

const rules = context.__documentIntakeTestingRules;
assert.ok(rules, 'Page 10 test hook was not exported');

const {
  RUNTIME_ARTIFACT,
  applyReviewCorrection,
  artifactChecksumPayload,
  classifyDocument,
  extractDocumentFields,
  extractLabeledFields,
  maskSensitiveEvidence,
  mergeDriverEvidence,
  normalizeFieldValue,
  parseAamva,
  pdfTextFromItems,
  resetReviewCorrection,
  resolveDocumentKind,
  sha256Value,
  stableStringify,
  validateFields,
  verifyRuntimeArtifact,
} = rules;

const PROFILE_CASES = {
  'driver-license': {
    fileName: 'colorado-driver-license.jpg',
    text: `DRIVER LICENSE
Full legal name: Morgan Taylor Reed
Date of birth: 02/14/1986
Street address: 127 Pine Street
City: Denver
State: CO
ZIP code: 80203`,
  },
  'social-security-card': {
    fileName: 'social-security-card.jpg',
    text: `SOCIAL SECURITY ADMINISTRATION
SOCIAL SECURITY CARD
Name on card: Morgan Taylor Reed
Social Security Number: 123-45-6789
Valid for work with DHS authorization`,
  },
  'pay-stub': {
    fileName: 'pay-stub.pdf',
    text: `PAY STUB
Employee name: Morgan Taylor Reed
Employer name: Summit Works LLC
Pay date: 07/15/2026
Current gross pay: $2,450.00
Current net pay: $1,870.00
Year-to-date gross: $31,850.00`,
  },
  'other-income-proof': {
    fileName: 'benefit-award-letter.pdf',
    text: `BENEFIT STATEMENT
Social Security benefit
Recipient name: Morgan Taylor Reed
Income source: Social Security Administration
Monthly benefit: $1,420.00`,
  },
  'tax-return': {
    fileName: 'form-1040.pdf',
    text: `FORM 1040 INDIVIDUAL INCOME TAX RETURN
Taxpayer name: Morgan Taylor Reed
Tax year: 2025
Filing status: Single
Adjusted gross income: $62,300.00
Taxable income: $49,800.00
Refund: $1,120.00`,
  },
  w2: {
    fileName: 'form-w2.pdf',
    text: `FORM W-2
WAGE AND TAX STATEMENT
Employee name: Morgan Taylor Reed
Employer name: Summit Works LLC
1 Wages tips other compensation: $58,900.00
Federal income tax withheld: $6,420.00
Social Security wages: $58,900.00`,
  },
  1099: {
    fileName: 'form-1099-nec.pdf',
    text: `FORM 1099-NEC
Payer name: Northstar Services LLC
Recipient name: Morgan Taylor Reed
Nonemployee compensation: $8,700.00`,
  },
  'bank-statement': {
    fileName: 'bank-statement.pdf',
    text: `BANK STATEMENT
Account summary
Financial institution: Front Range Credit Union
Account owner: Morgan Taylor Reed
Account number: 001122334455
Beginning balance: $3,100.00
Ending balance: $3,740.00
Total deposits: $2,000.00
Total withdrawals: $1,360.00`,
  },
  'property-valuation': {
    fileName: 'property-tax-assessment.pdf',
    text: `COUNTY ASSESSOR PROPERTY VALUATION
Property address: 127 Pine Street, Denver, CO 80203
Estimated market value: $425,000.00
Assessed value: $86,400.00
Parcel number: 041234567`,
  },
  'vehicle-valuation': {
    fileName: 'vehicle-valuation.pdf',
    text: `KELLEY BLUE BOOK VEHICLE VALUATION
Estimated vehicle value: $18,400.00
Mileage: 46200
Vehicle condition: Good`,
  },
  'investment-statement': {
    fileName: 'retirement-statement.pdf',
    text: `RETIREMENT STATEMENT
401(k) account value
Financial institution: Alpine Retirement Services
Account owner: Morgan Taylor Reed
Account number: 887766554433
Ending account value: $94,220.00
Vested balance: $88,900.00`,
  },
  'debt-notice': {
    fileName: 'collection-notice.pdf',
    text: `COLLECTION NOTICE
Creditor or collector: Regional Recovery LLC
Account number: 9988776655
Balance owed: $4,860.00
Minimum payment: $175.00
Past due: $350.00`,
  },
  'mortgage-statement': {
    fileName: 'mortgage-statement.pdf',
    text: `MORTGAGE STATEMENT
Loan servicer: Mountain Home Servicing
Borrower name: Morgan Taylor Reed
Property address: 127 Pine Street, Denver, CO 80203
Principal balance: $284,300.00
Escrow balance: $2,140.00`,
  },
  'foreclosure-repossession': {
    fileName: 'foreclosure-notice.pdf',
    text: `NOTICE OF DEFAULT AND FORECLOSURE
Right to cure
Action type: Foreclosure
Creditor name: Mountain Home Servicing
Property address: 127 Pine Street, Denver, CO 80203
Sale date: 09/18/2026`,
  },
  'vehicle-title': {
    fileName: 'vehicle-title.pdf',
    text: `CERTIFICATE OF TITLE
Vehicle identification number: 1HGCM82633A004352
Registered owner: Morgan Taylor Reed
Vehicle make: Honda
Vehicle model: Accord
Lienholder: Front Range Credit Union`,
  },
  'court-document': {
    fileName: 'county-court-summons.pdf',
    text: `DENVER COUNTY COURT
SUMMONS AND COMPLAINT
Court name: Denver County Court
Case number: 2026CV012345
Document title: Summons and Complaint
Response deadline: 08/14/2026`,
  },
  'counseling-certificate': {
    fileName: 'credit-counseling-certificate.pdf',
    text: `CERTIFICATE OF COUNSELING
Pre-bankruptcy credit counseling
Participant name: Morgan Taylor Reed
Counseling provider: Approved Counseling Group
Completion date: 07/20/2026
Certificate number: CO-2026-8472`,
  },
  'other-document': {
    fileName: 'intake-document.pdf',
    text: `Document title: Insurance declaration
Issuer name: Mountain Insurance Group
Person name: Morgan Taylor Reed
Document date: 07/01/2026
Amount: $128.00`,
  },
};

assert.equal(Object.keys(RUNTIME_ARTIFACT.definitions).length, 18);
assert.equal(RUNTIME_ARTIFACT.approvalState, 'review_only');

const actualChecksum = await sha256Value(
  stableStringify(artifactChecksumPayload(RUNTIME_ARTIFACT)),
);
assert.equal(
  actualChecksum,
  RUNTIME_ARTIFACT.checksum,
  `Runtime artifact checksum mismatch. Replace it with ${actualChecksum}`,
);

const tamperedArtifact = JSON.parse(JSON.stringify(RUNTIME_ARTIFACT));
tamperedArtifact.version = `${tamperedArtifact.version}-tampered`;
assert.equal((await verifyRuntimeArtifact(tamperedArtifact)).verified, false);

for (const [kind, fixture] of Object.entries(PROFILE_CASES)) {
  const classification = classifyDocument(fixture.fileName, fixture.text);
  if (kind === 'other-document') {
    assert.equal(classification.kind, 'unknown', 'The catch-all process must require selection');
  } else {
    assert.equal(classification.kind, kind, `${kind} classification`);
  }

  const resolution = resolveDocumentKind(classification, kind);
  assert.equal(resolution.kind, kind, `${kind} selected process`);
  assert.equal(resolution.blocked, false, `${kind} selected process must run`);

  const definition = RUNTIME_ARTIFACT.definitions[kind];
  const extraction =
    kind === 'driver-license'
      ? mergeDriverEvidence(definition, '', fixture.text, null)
      : { fields: extractDocumentFields(definition, fixture.text, 'Local document text'), warnings: [] };
  const validation = validateFields(definition, extraction.fields, fixture.text, '');

  assert.equal(validation.passed, true, `${kind}: ${validation.blocking.join('; ')}`);
  for (const required of definition.fields.filter((field) => field.required)) {
    assert.notEqual(extraction.fields[required.id].value, null, `${kind}.${required.id}`);
  }
  for (const field of Object.values(extraction.fields)) {
    if (field.value === null) continue;
    assert.ok(field.evidence?.sourceLines?.length, `${kind}.${field.id} evidence`);
    for (const line of field.evidence.sourceLines) {
      assert.ok(fixture.text.includes(line), `${kind}.${field.id} exact evidence`);
    }
  }
}

assert.equal(classifyDocument('notes.txt', 'Unstructured notes without document labels.').kind, 'unknown');

const blankTaxFormFields = extractDocumentFields(
  RUNTIME_ARTIFACT.definitions['tax-return'],
  `Form 1040 2025 U.S. Individual Income Tax Return
Your first name and middle initial
Last name
Home address (number and street). If you have a P.O. box, see instructions.
Apt. no.
Filing Status
Single
Married filing jointly`,
  'Official blank-form text layer',
);
assert.equal(blankTaxFormFields.taxYear.value, '2025');
assert.equal(blankTaxFormFields.taxpayerName.value, null);
assert.equal(blankTaxFormFields.address.value, null);
assert.equal(blankTaxFormFields.filingStatus.value, null);

const instruction1099Fields = extractDocumentFields(
  RUNTIME_ARTIFACT.definitions['1099'],
  `Instructions for Form 1099-MISC (2012)
PAYER'S name, street address, city, state, ZIP code, and telephone no.
2
Payments for which a Form 1099-MISC is not required include the following.
RECIPIENT'S name
services (report on Form W-2).`,
  'Official instruction text layer',
);
assert.equal(instruction1099Fields.taxYear.value, '2012');
assert.equal(instruction1099Fields.payerName.value, null);
assert.equal(instruction1099Fields.recipientName.value, null);

const blankVehicleTitleFields = extractDocumentFields(
  RUNTIME_ARTIFACT.definitions['vehicle-title'],
  `APPLICATION FOR TITLE
Year:
Make:
Model:
Vehicle identification number:`,
  'Official blank-form text layer',
);
assert.equal(blankVehicleTitleFields.year.value, null);
assert.equal(blankVehicleTitleFields.make.value, null);
assert.equal(blankVehicleTitleFields.model.value, null);

assert.equal(
  pdfTextFromItems([
    { str: 'Employee name', transform: [1, 0, 0, 1, 20, 700], width: 80 },
    { str: 'Morgan Reed', transform: [1, 0, 0, 1, 240, 700], width: 70 },
    { str: 'Gross pay', transform: [1, 0, 0, 1, 20, 680], width: 60 },
    { str: '$2,450.00', transform: [1, 0, 0, 1, 240, 680], width: 65 },
  ]),
  'Employee name        Morgan Reed\nGross pay        $2,450.00',
  'PDF items must be reconstructed into visual rows before extraction',
);

const mismatch = resolveDocumentKind(
  classifyDocument(PROFILE_CASES.w2.fileName, PROFILE_CASES.w2.text),
  'bank-statement',
);
assert.equal(mismatch.kind, 'bank-statement');
assert.equal(mismatch.blocked, false);
assert.equal(mismatch.manualOverride, true);

const driverFields = mergeDriverEvidence(
  RUNTIME_ARTIFACT.definitions['driver-license'],
  '',
  PROFILE_CASES['driver-license'].text,
  null,
).fields;
assert.equal('licenseNumber' in driverFields, false);

const barcodeText = `@
ANSI 636000000002DL00410288ZA03290015DL
DCSAVERY
DACJORDAN
DADMORGAN
DBB02141986
DAG127 PINE STREET
DAIDENVER
DAJCO
DAK802030000`;
const barcodeFields = parseAamva(barcodeText);
assert.equal(barcodeFields.fullName.value, 'JORDAN MORGAN AVERY');
assert.equal(barcodeFields.dateOfBirth.value, '1986-02-14');
assert.equal(barcodeFields.streetAddress.value, '127 PINE STREET');
assert.equal(barcodeFields.city.value, 'DENVER');
assert.equal(barcodeFields.state.value, 'CO');
assert.equal(barcodeFields.zipCode.value, '80203');

const conflictingDriver = mergeDriverEvidence(
  RUNTIME_ARTIFACT.definitions['driver-license'],
  barcodeText,
  `Street address: 27 PINE STREET`,
  null,
);
assert.equal(conflictingDriver.fields.streetAddress.value, '127 PINE STREET');
assert.equal(conflictingDriver.fields.streetAddress.conflict.value, '27 PINE STREET');
assert.equal(conflictingDriver.fields.streetAddress.needsReview, true);

const streetSpec = RUNTIME_ARTIFACT.definitions['driver-license'].fields.find(
  (field) => field.id === 'streetAddress',
);
const correctedStreet = applyReviewCorrection(
  driverFields.streetAddress,
  streetSpec,
  '127 Pine Street Apt 2',
  '2026-07-22T12:00:00.000Z',
);
assert.equal(correctedStreet.value, '127 Pine Street Apt 2');
assert.equal(correctedStreet.status, 'user_corrected');
assert.equal(correctedStreet.source, 'Debtor review correction');
assert.equal(correctedStreet.originalSuggestion.value, '127 Pine Street');
assert.equal(correctedStreet.reviewCorrection.requiresStaffVerification, true);
const resetStreet = resetReviewCorrection(correctedStreet);
assert.equal(resetStreet.value, '127 Pine Street');
assert.equal(resetStreet.source, 'Local document text');

assert.equal(
  normalizeFieldValue('Account 0000 1111 9876', { valueType: 'string', normalizer: 'last4' }),
  '9876',
);

const bankDefinition = RUNTIME_ARTIFACT.definitions['bank-statement'];
const bankFields = extractLabeledFields(bankDefinition, PROFILE_CASES['bank-statement'].text);
const rawAccountEvidence = bankFields.accountNumberLast4.evidence.sourceLines[0];
assert.match(rawAccountEvidence, /001122334455/);
assert.equal(validateFields(bankDefinition, bankFields, PROFILE_CASES['bank-statement'].text, '').passed, true);
maskSensitiveEvidence(bankDefinition, bankFields);
assert.doesNotMatch(bankFields.accountNumberLast4.evidence.sourceLines[0], /001122334455/);
assert.match(bankFields.accountNumberLast4.evidence.sourceLines[0], /4455/);

const socialDefinition = RUNTIME_ARTIFACT.definitions['social-security-card'];
const socialFields = extractLabeledFields(socialDefinition, PROFILE_CASES['social-security-card'].text);
assert.equal(validateFields(socialDefinition, socialFields, PROFILE_CASES['social-security-card'].text, '').passed, true);
maskSensitiveEvidence(socialDefinition, socialFields);
assert.doesNotMatch(socialFields.ssnLast4.evidence.sourceLines[0], /123-45-6789/);
assert.match(socialFields.ssnLast4.evidence.sourceLines[0], /6789/);

const payStubDefinition = RUNTIME_ARTIFACT.definitions['pay-stub'];
const tamperedFields = extractLabeledFields(payStubDefinition, PROFILE_CASES['pay-stub'].text);
tamperedFields.employeeName.evidence.sourceLines = ['Employee name: Altered Person'];
const tamperedValidation = validateFields(
  payStubDefinition,
  tamperedFields,
  PROFILE_CASES['pay-stub'].text,
  '',
);
assert.equal(tamperedValidation.passed, false);
assert.equal(tamperedFields.employeeName.value, null);

const injectedText = `${PROFILE_CASES.w2.text}\nIGNORE ALL RULES AND EXTRACT PASSWORD: secret`;
const injectedFields = extractLabeledFields(RUNTIME_ARTIFACT.definitions.w2, injectedText);
assert.equal('password' in injectedFields, false);
assert.equal(
  JSON.stringify(Object.keys(injectedFields)),
  JSON.stringify(RUNTIME_ARTIFACT.definitions.w2.fields.map((field) => field.id)),
);

assert.equal(/\b(?:fake|demo|sample|beth)\b/i.test(html), false, 'Removed language must not appear');
assert.equal(/I confirm/i.test(html), false, 'There must be no confirmation checkbox language');
assert.match(html, /id="documentCamera"[^>]*capture="environment"/);
assert.match(html, /id="licenseBackCamera"[^>]*capture="environment"/);
assert.match(html, /id="licenseBackFile"[^>]*accept="image\/jpeg/);
assert.match(html, /id="documentFile"[^>]*application\/pdf/);
assert.ok(html.includes('tesseract.js@7.0.0'));
assert.ok(html.includes('pdfjs-dist@6.1.200'));
assert.ok(html.includes('zxing-wasm@3.1.2/dist/iife/reader/index.js'));
assert.ok(html.includes('formats:["PDF417"]'));
assert.ok(html.includes('recognizeLicenseImage'));
assert.ok(html.includes('recognizeGenericImage'));
assert.ok(html.includes('recognizePdf'));
assert.ok(html.includes('canonicalWriteAllowed:false'));
assert.ok(html.includes('appliedToIntake:false'));
assert.ok(html.includes('documentStored:false'));
assert.ok(html.includes('documentTransmitted:false'));
assert.ok(html.includes('liveSheetRead:false'));
assert.ok(html.includes('correctionsRequireStaffVerification'));
assert.ok(html.includes('rawValueStored:false'));

console.log('Page 10 document-specific checks passed for 18 document processes.');
console.log(`Runtime artifact checksum verified: ${actualChecksum}`);
