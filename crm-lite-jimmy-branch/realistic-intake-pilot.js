(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.BKFLRealisticPilot = api
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'
  return Object.freeze({
  "generatedAt": "2026-07-24T18:00:00.000Z",
  "leads": [
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "income-Six-month income is missing",
            "severity": "warning",
            "sectionId": "income",
            "title": "Six-month income is missing",
            "detail": "Means-test intake needs six-month totals before attorney review.",
            "status": "resolved"
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups.",
            "status": "resolved"
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$23,800 in unsecured claims is recorded for review.",
            "status": "resolved"
          },
          {
            "detail": "The debtor answered Not employed while entering positive income from Denver Dental Supply.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "No"
              },
              {
                "path": "matter.income[0]",
                "value": "Denver Dental Supply"
              }
            ],
            "id": "inconsistency-lina-morris-ch7-renter-1",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income",
            "status": "resolved"
          }
        ],
        "status": "approved"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "verified",
        "completenessStatus": "complete",
        "discrepancies": [
          {
            "detail": "The debtor answered Not employed while entering positive income from Denver Dental Supply.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "No"
              },
              {
                "path": "matter.income[0]",
                "value": "Denver Dental Supply"
              }
            ],
            "id": "inconsistency-lina-morris-ch7-renter-1",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income",
            "status": "resolved"
          }
        ],
        "missingFields": [],
        "sourceRevision": 2
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-lina-morris-ch7-renter-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/driver-s-license.png",
              "sha256": "345af3b1e529f620ccba9c90f96785613d3d831930b006f0a710c7ebe05d35b5",
              "size": 267255,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/driver-s-license.png"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-driver-s-license-1",
          "name": "Driver's license",
          "status": "approved"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return - last year",
          "docId": "fake-document-lina-morris-ch7-renter-tax-return-last-year-2",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-tax-return-last-year-2-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-last-year.pdf",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-last-year.pdf",
              "sha256": "49eec01be882442e053c3325f9dafa8855b115e6059385c7c84180fc9e1b442a",
              "size": 4910,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-last-year.pdf"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-tax-return-last-year-2",
          "name": "Tax return - last year",
          "status": "approved"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return - two years ago",
          "docId": "fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-two-years-ago.pdf",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-two-years-ago.pdf",
              "sha256": "95edb6d3b9ecf8aa8eb9d35c95b8235be25fffa4a2d62307d9496c66eeeb2823",
              "size": 4905,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-two-years-ago.pdf"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
          "name": "Tax return - two years ago",
          "status": "approved"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank statements - last 6 months",
          "docId": "fake-document-lina-morris-ch7-renter-bank-statements-last-6-months-4",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-bank-statements-last-6-months-4-file-1",
              "mimeType": "application/pdf",
              "name": "bank-statements-last-6-months.pdf",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/bank-statements-last-6-months.pdf",
              "sha256": "190453ab29d20f73fcc89676fc69f99c3495b0b24e8cd2a4abee574a7dfa95bb",
              "size": 13719,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/bank-statements-last-6-months.pdf"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-bank-statements-last-6-months-4",
          "name": "Bank statements - last 6 months",
          "status": "approved"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Statements for all debts",
          "docId": "fake-document-lina-morris-ch7-renter-statements-for-all-debts-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-statements-for-all-debts-5-file-1",
              "mimeType": "application/pdf",
              "name": "statements-for-all-debts.pdf",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/statements-for-all-debts.pdf",
              "sha256": "853a87184cfe1d63406cd6f6093af577e2e1f684e8727da0ca044dd3c492646d",
              "size": 6875,
              "source": "intake_upload",
              "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
              "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/statements-for-all-debts.pdf"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-statements-for-all-debts-5",
          "name": "Statements for all debts",
          "status": "approved"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Lease or rental agreement",
          "docId": "fake-document-lina-morris-ch7-renter-lease-or-rental-agreement-6",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-lease-or-rental-agreement-6-file-1",
              "mimeType": "application/pdf",
              "name": "lease-or-rental-agreement.pdf",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/lease-or-rental-agreement.pdf",
              "sha256": "5de607c853b30f577795543067e7583814f26c32500286f91dc2a456de6010c4",
              "size": 2703,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/lease-or-rental-agreement.pdf"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-lease-or-rental-agreement-6",
          "name": "Lease or rental agreement",
          "status": "approved"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
          "customName": "Self-employment profit and loss",
          "docId": "fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7-file-1",
              "mimeType": "application/pdf",
              "name": "self-employment-profit-and-loss.pdf",
              "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/self-employment-profit-and-loss.pdf",
              "sha256": "464cc237b7af6def33bbbcfd64505b1d46b7261e64680f173eea1d04843aa4de",
              "size": 2886,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/lina-morris-ch7-renter/self-employment-profit-and-loss.pdf"
            }
          ],
          "id": "fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
          "name": "Self-employment profit and loss",
          "status": "approved"
        }
      ],
      "email": "lina.morris.fake@example.test",
      "firstName": "Lina",
      "id": "intake-fake-matter-lina-morris-ch7-renter",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-lina-morris-ch7-renter-1",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Not employed while entering positive income from Denver Dental Supply."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "kind": "document",
            "label": "Self-employment profit and loss",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "matterId": "fake-matter-lina-morris-ch7-renter",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 31,
            "percent": 89,
            "required": 35
          },
          "documentCollection": {
            "applicable": 7,
            "collected": 5,
            "percent": 71
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 89
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "kind": "document",
            "label": "Self-employment profit and loss",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "approved",
          "documentReview": "complete",
          "intakeCompletion": "complete",
          "submission": "submitted",
          "dataAccuracy": "verified"
        },
        "urgentAttorneyTask": null,
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-lina-morris-ch7-renter-1",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Not employed while entering positive income from Denver Dental Supply."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "canonicalPath": "matter.documents[name='Self-employment profit and loss']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Self-employment profit and loss, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "kind": "document",
            "label": "Self-employment profit and loss",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Tax return - two years ago']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - two years ago, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "kind": "document",
            "label": "Tax return - two years ago",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "revision": 2,
        "status": "complete"
      },
      "intakePackage": {
        "id": "fake-matter-lina-morris-ch7-renter",
        "title": "Lina Morris fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop collection calls and deal with old medical and credit card debt.",
        "urgentConcerns": "A collector called her employer last week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-lina-morris-ch7-renter-debtors-0-id",
            "firstName": "Lina",
            "middleName": "Claire",
            "lastName": "Morris",
            "otherNames": "",
            "email": "lina.morris.fake@example.test",
            "phone": "(303) 555-0186",
            "ssnLast4": "6182",
            "socialSecurityNumber": "444-55-6182",
            "address": "782 South Elati Street Apt 4",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80223",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "11/03/1991"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "fake-lina-morris-ch7-renter-assets-0-id",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-lina-morris-ch7-renter-assets-1-id",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "fake-lina-morris-ch7-renter-assets-2-id",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-lina-morris-ch7-renter-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-lina-morris-ch7-renter-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-lina-morris-ch7-renter-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-lina-morris-ch7-renter-income-0-id",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "fake-lina-morris-ch7-renter-income-1-id",
            "source": "Business income",
            "employer": "Weekend delivery apps",
            "amount": 950,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-lina-morris-ch7-renter-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "fake-lina-morris-ch7-renter-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "fake-lina-morris-ch7-renter-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "fake-lina-morris-ch7-renter-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "fake-lina-morris-ch7-renter-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "fake-lina-morris-ch7-renter-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "fake-lina-morris-ch7-renter-expenses-6-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Lina Morris delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-lina-morris-ch7-renter-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "reviewed",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "345af3b1e529f620ccba9c90f96785613d3d831930b006f0a710c7ebe05d35b5",
                "size": 267255,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "reviewed",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-last-year.pdf",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-last-year.pdf",
                "qualityIssue": null,
                "sha256": "49eec01be882442e053c3325f9dafa8855b115e6059385c7c84180fc9e1b442a",
                "size": 4910,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-last-year.pdf"
              }
            ]
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-tax-return-two-years-ago-3",
            "name": "Tax return - two years ago",
            "category": "Taxes",
            "status": "reviewed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-two-years-ago.pdf",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-two-years-ago.pdf",
                "qualityIssue": null,
                "sha256": "95edb6d3b9ecf8aa8eb9d35c95b8235be25fffa4a2d62307d9496c66eeeb2823",
                "size": 4905,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/tax-return-two-years-ago.pdf"
              }
            ]
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "reviewed",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "bank-statements-last-6-months.pdf",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/bank-statements-last-6-months.pdf",
                "qualityIssue": null,
                "sha256": "190453ab29d20f73fcc89676fc69f99c3495b0b24e8cd2a4abee574a7dfa95bb",
                "size": 13719,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/bank-statements-last-6-months.pdf"
              }
            ]
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-statements-for-all-debts-5",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "reviewed",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "statements-for-all-debts.pdf",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/statements-for-all-debts.pdf",
                "qualityIssue": null,
                "sha256": "853a87184cfe1d63406cd6f6093af577e2e1f684e8727da0ca044dd3c492646d",
                "size": 6875,
                "source": "intake_upload",
                "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
                "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/statements-for-all-debts.pdf"
              }
            ]
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-lease-or-rental-agreement-6",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "reviewed",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "lease-or-rental-agreement.pdf",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/lease-or-rental-agreement.pdf",
                "qualityIssue": null,
                "sha256": "5de607c853b30f577795543067e7583814f26c32500286f91dc2a456de6010c4",
                "size": 2703,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/lease-or-rental-agreement.pdf"
              }
            ]
          },
          {
            "id": "fake-document-lina-morris-ch7-renter-self-employment-profit-and-loss-7",
            "name": "Self-employment profit and loss",
            "category": "Income",
            "status": "reviewed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicabilityReason": "Lina reported active gig and sole-proprietor income.",
            "whyNeeded": "The firm needs a current income-and-expense summary for the self-employed intake facts.",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "self-employment-profit-and-loss.pdf",
                "previewUrl": "./output/pilot-evidence/lina-morris-ch7-renter/self-employment-profit-and-loss.pdf",
                "qualityIssue": null,
                "sha256": "464cc237b7af6def33bbbcfd64505b1d46b7261e64680f173eea1d04843aa4de",
                "size": 2886,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/lina-morris-ch7-renter/self-employment-profit-and-loss.pdf"
              }
            ]
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-lina-morris-ch7-renter-financialaffairs-prior-addresses-entries-0-id",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips",
              "Self-employment or business income"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Morris",
      "leadStage": "Ready for Petition Prep",
      "packageId": "fake-matter-lina-morris-ch7-renter",
      "phone": "(303) 555-0186",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-lina-morris-ch7-renter",
        "revision": 2,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 0,
        "blockers": [],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 0,
            "blockers": [],
            "status": "complete"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 0,
            "blockers": [],
            "completeness": true,
            "evidence": {
              "fileCount": 7,
              "imageCount": 1,
              "pdfCount": 6
            },
            "status": "complete"
          },
          "intakeCompletion": {
            "accuracy": true,
            "blockerCount": 0,
            "blockers": [],
            "completeness": true,
            "status": "complete"
          }
        },
        "ready": true,
        "targetStage": "Ready for Petition Prep"
      },
      "prepReadyDate": "2026-07-24",
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "lina.morris.fake@example.test",
          "firstName": "Lina",
          "id": "intake-fake-matter-lina-morris-ch7-renter-contact-1",
          "lastName": "Morris",
          "middleName": "Claire",
          "name": "Lina Claire Morris",
          "phone": "(303) 555-0186",
          "role": "Lead"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, self_employed, renter, vehicle_retain, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-lina-morris-ch7-renter-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "basics-Debtor identity is incomplete",
            "severity": "critical",
            "sectionId": "basics",
            "title": "Debtor identity is incomplete",
            "detail": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "chapter13-Arrears need plan treatment",
            "severity": "info",
            "sectionId": "chapter13",
            "title": "Arrears need plan treatment",
            "detail": "$22,220 in recorded arrears should be reconciled with plan treatment."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$33,000 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered No to vehicles but entered 2019 Ford F-150 with a stated value.",
            "evidence": [
              {
                "path": "entryLog.property.vehicles",
                "value": "No"
              },
              {
                "path": "matter.assets[category='Vehicle']",
                "value": "2019 Ford F-150"
              }
            ],
            "id": "inconsistency-kevin-priya-shah-ch13-2",
            "sectionId": "property",
            "severity": "warning",
            "title": "Vehicle answer conflicts with property detail"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 13",
      "dataReview": {
        "accuracyStatus": "verified",
        "completenessStatus": "complete",
        "discrepancies": [
          {
            "detail": "The debtor answered No to vehicles but entered 2019 Ford F-150 with a stated value.",
            "evidence": [
              {
                "path": "entryLog.property.vehicles",
                "value": "No"
              },
              {
                "path": "matter.assets[category='Vehicle']",
                "value": "2019 Ford F-150"
              }
            ],
            "id": "inconsistency-kevin-priya-shah-ch13-2",
            "sectionId": "property",
            "severity": "warning",
            "title": "Vehicle answer conflicts with property detail"
          }
        ],
        "missingFields": [],
        "sourceRevision": 2
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-kevin-priya-shah-ch13-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-kevin-priya-shah-ch13-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/driver-s-license.png",
              "sha256": "ab23d66dddae2478d0a6e47ac6feee1a136a843c53466a7638b2d2244904164d",
              "size": 254541,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/kevin-priya-shah-ch13/driver-s-license.png"
            }
          ],
          "id": "fake-document-kevin-priya-shah-ch13-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return - last year",
          "docId": "fake-document-kevin-priya-shah-ch13-tax-return-last-year-2",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-kevin-priya-shah-ch13-tax-return-last-year-2-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-last-year.pdf",
              "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/tax-return-last-year.pdf",
              "sha256": "64e9ccc42b330d46ac642d8e6da68e092f701c135792edd48c4e784370a43967",
              "size": 4938,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/kevin-priya-shah-ch13/tax-return-last-year.pdf"
            }
          ],
          "id": "fake-document-kevin-priya-shah-ch13-tax-return-last-year-2",
          "name": "Tax return - last year",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Pay stubs - last 6 months",
          "docId": "fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3-file-1",
              "mimeType": "application/pdf",
              "name": "pay-stubs-last-6-months.pdf",
              "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/pay-stubs-last-6-months.pdf",
              "sha256": "e232a206338efca25752b72db45db51c91b5009e1171431ea47cc475b1a2ed98",
              "size": 13504,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/kevin-priya-shah-ch13/pay-stubs-last-6-months.pdf"
            }
          ],
          "id": "fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3",
          "name": "Pay stubs - last 6 months",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank statements - last 6 months",
          "docId": "fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4-file-1",
              "mimeType": "application/pdf",
              "name": "bank-statements-last-6-months.pdf",
              "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/bank-statements-last-6-months.pdf",
              "sha256": "57fcf326a0d645c000072585e05b731ae2a67f8e4ff2e6fcb15093f936f663bb",
              "size": 13696,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/kevin-priya-shah-ch13/bank-statements-last-6-months.pdf"
            }
          ],
          "id": "fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
          "name": "Bank statements - last 6 months",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Court paperwork",
          "docId": "fake-document-kevin-priya-shah-ch13-court-paperwork-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-kevin-priya-shah-ch13-court-paperwork-5-file-1",
              "mimeType": "application/pdf",
              "name": "court-paperwork.pdf",
              "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/court-paperwork.pdf",
              "sha256": "9d1b085bdf658c955b525a774febf865562f307b14bf6377e6236e3753ad5004",
              "size": 2748,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/kevin-priya-shah-ch13/court-paperwork.pdf"
            }
          ],
          "id": "fake-document-kevin-priya-shah-ch13-court-paperwork-5",
          "name": "Court paperwork",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
          "customName": "Mortgage statement and arrears notice",
          "docId": "fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6-file-1",
              "mimeType": "application/pdf",
              "name": "mortgage-statement-and-arrears-notice.pdf",
              "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/mortgage-statement-and-arrears-notice.pdf",
              "sha256": "1fd689d26ae545a7753cd32b80c510372a2adf20299bf269fb5a6f3cafd4c40e",
              "size": 2744,
              "source": "intake_upload",
              "sourceTemplate": "CFPB Regulation Z Appendix H-30 mortgage statement samples",
              "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/h/",
              "url": "./output/pilot-evidence/kevin-priya-shah-ch13/mortgage-statement-and-arrears-notice.pdf"
            }
          ],
          "id": "fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
          "name": "Mortgage statement and arrears notice",
          "status": "ai_accepted"
        }
      ],
      "email": "kevin.shah.fake@example.test",
      "firstName": "Kevin",
      "id": "intake-fake-matter-kevin-priya-shah-ch13",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Debtor did not enter a value.",
            "canonicalPath": "matter.chapter13.foreclosureSaleDate",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Foreclosure sale date.",
            "id": "missing-log-chapter13.foreclosureSaleDate",
            "kind": "field",
            "label": "Foreclosure sale date",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "affairs",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "clientActionable": true,
            "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "kind": "document",
            "label": "Mortgage statement and arrears notice",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.property",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-kevin-priya-shah-ch13-2",
            "kind": "review",
            "label": "Vehicle answer conflicts with property detail",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The debtor answered No to vehicles but entered 2019 Ford F-150 with a stated value."
          }
        ],
        "matterId": "fake-matter-kevin-priya-shah-ch13",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 30,
            "percent": 88,
            "required": 34
          },
          "documentCollection": {
            "applicable": 6,
            "collected": 4,
            "percent": 67
          },
          "fieldCompletion": {
            "applicable": 29,
            "entered": 27,
            "percent": 93
          },
          "intakeChecklistCompletion": 89
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Debtor did not enter a value.",
            "canonicalPath": "matter.chapter13.foreclosureSaleDate",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Foreclosure sale date.",
            "id": "missing-log-chapter13.foreclosureSaleDate",
            "kind": "field",
            "label": "Foreclosure sale date",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "clientActionable": true,
            "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "kind": "document",
            "label": "Mortgage statement and arrears notice",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "complete",
          "submission": "submitted",
          "dataAccuracy": "verified"
        },
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Foreclosure sale date notice received, but exact sale date was not entered.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        },
        "missingItems": [
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Debtor did not enter a value.",
            "canonicalPath": "matter.chapter13.foreclosureSaleDate",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Foreclosure sale date.",
            "id": "missing-log-chapter13.foreclosureSaleDate",
            "kind": "field",
            "label": "Foreclosure sale date",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "affairs",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "canonicalPath": "matter.documents[name='Mortgage statement and arrears notice']",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "clientActionable": true,
            "clientInstruction": "Upload Mortgage statement and arrears notice, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "kind": "document",
            "label": "Mortgage statement and arrears notice",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "resolved",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "resolved",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.property",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-kevin-priya-shah-ch13-2",
            "kind": "review",
            "label": "Vehicle answer conflicts with property detail",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The debtor answered No to vehicles but entered 2019 Ford F-150 with a stated value."
          }
        ],
        "revision": 2,
        "status": "complete"
      },
      "intakePackage": {
        "id": "fake-matter-kevin-priya-shah-ch13",
        "title": "Kevin and Priya Shah fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop foreclosure, keep house and truck, handle recent tax debt.",
        "urgentConcerns": "Foreclosure sale date notice received, but exact sale date was not entered.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Kevin filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-kevin-priya-shah-ch13-debtors-0-id",
            "firstName": "Kevin",
            "middleName": "Arun",
            "lastName": "Shah",
            "otherNames": "",
            "email": "kevin.shah.fake@example.test",
            "phone": "(720) 555-0199",
            "ssnLast4": "7211",
            "socialSecurityNumber": "555-66-7211",
            "address": "2448 South Quintero Way",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80013",
            "county": "Arapahoe",
            "mailingAddressDifferent": false,
            "dateOfBirth": "06/12/1984"
          },
          {
            "id": "fake-kevin-priya-shah-ch13-debtors-1-id",
            "firstName": "Priya",
            "middleName": "Meera",
            "lastName": "Shah",
            "otherNames": "Priya Meera Patel",
            "email": "priya.shah.fake@example.test",
            "phone": "(720) 555-0198",
            "ssnLast4": "",
            "socialSecurityNumber": "",
            "address": "2448 South Quintero Way",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80013",
            "county": "Arapahoe",
            "mailingAddressDifferent": false,
            "dateOfBirth": "01/26/1987"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "fake-kevin-priya-shah-ch13-household-dependents-0-id",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "fake-kevin-priya-shah-ch13-household-dependents-1-id",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "fake-kevin-priya-shah-ch13-assets-0-id",
            "category": "Real estate",
            "description": "Primary residence",
            "estimatedValue": 462000,
            "lienAmount": 398000,
            "exemptionNote": "",
            "keepIntent": "Keep and cure arrears through plan",
            "propertyCity": "Aurora",
            "propertyState": "CO",
            "propertyStreet": "2448 South Quintero Way",
            "propertyZipCode": "80013"
          },
          {
            "id": "fake-kevin-priya-shah-ch13-assets-1-id",
            "category": "Vehicle",
            "description": "2019 Ford F-150",
            "estimatedValue": 28200,
            "lienAmount": 25100,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Keep",
            "make": "Ford",
            "mileage": "81000",
            "model": "F-150",
            "year": "2019"
          },
          {
            "id": "fake-kevin-priya-shah-ch13-assets-2-id",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-kevin-priya-shah-ch13-assets-3-id",
            "category": "Retirement or pension account",
            "description": "Kevin 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-kevin-priya-shah-ch13-1",
            "type": "secured",
            "creditor": "Frontier Mortgage Servicing",
            "amount": 398000,
            "collateral": "Primary residence",
            "arrears": 21400,
            "notes": "Foreclosure sale date not entered by debtor."
          },
          {
            "id": "fake-debt-kevin-priya-shah-ch13-2",
            "type": "secured",
            "creditor": "Ford Credit",
            "amount": 25100,
            "collateral": "2019 Ford F-150",
            "arrears": 820,
            "notes": "One payment behind."
          },
          {
            "id": "fake-debt-kevin-priya-shah-ch13-3",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-kevin-priya-shah-ch13-4",
            "type": "unsecured",
            "creditor": "Credit cards and personal loans",
            "amount": 33000,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor entered as group estimate."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-kevin-priya-shah-ch13-income-0-id",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "fake-kevin-priya-shah-ch13-income-1-id",
            "source": "Employment",
            "employer": "Aurora Unified Schools",
            "amount": 3900,
            "frequency": "Twice monthly",
            "sixMonthTotal": 23400
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-0-id",
            "category": "Mortgage payment",
            "monthlyAmount": 2680,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-2-id",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-3-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-4-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-5-id",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-6-id",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-7-id",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-8-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "fake-kevin-priya-shah-ch13-expenses-9-id",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "No",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 1150,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 21400,
          "disposableIncomeNotes": "Entered budget suggests feasibility, but payroll proof and tax claims are missing.",
          "foreclosureSaleDate": ""
        },
        "documents": [
          {
            "id": "fake-document-kevin-priya-shah-ch13-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "ab23d66dddae2478d0a6e47ac6feee1a136a843c53466a7638b2d2244904164d",
                "size": 254541,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/kevin-priya-shah-ch13/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-last-year.pdf",
                "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/tax-return-last-year.pdf",
                "qualityIssue": null,
                "sha256": "64e9ccc42b330d46ac642d8e6da68e092f701c135792edd48c4e784370a43967",
                "size": 4938,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/kevin-priya-shah-ch13/tax-return-last-year.pdf"
              }
            ]
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "pay-stubs-last-6-months.pdf",
                "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/pay-stubs-last-6-months.pdf",
                "qualityIssue": null,
                "sha256": "e232a206338efca25752b72db45db51c91b5009e1171431ea47cc475b1a2ed98",
                "size": 13504,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/kevin-priya-shah-ch13/pay-stubs-last-6-months.pdf"
              }
            ]
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "bank-statements-last-6-months.pdf",
                "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/bank-statements-last-6-months.pdf",
                "qualityIssue": null,
                "sha256": "57fcf326a0d645c000072585e05b731ae2a67f8e4ff2e6fcb15093f936f663bb",
                "size": 13696,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/kevin-priya-shah-ch13/bank-statements-last-6-months.pdf"
              }
            ]
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-court-paperwork-5",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "court-paperwork.pdf",
                "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/court-paperwork.pdf",
                "qualityIssue": null,
                "sha256": "9d1b085bdf658c955b525a774febf865562f307b14bf6377e6236e3753ad5004",
                "size": 2748,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/kevin-priya-shah-ch13/court-paperwork.pdf"
              }
            ]
          },
          {
            "id": "fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "name": "Mortgage statement and arrears notice",
            "category": "Housing",
            "status": "received",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicabilityReason": "Kevin and Priya reported a home, mortgage arrears, and a foreclosure notice.",
            "caseStageDeadline": "Same day because a foreclosure sale date may exist",
            "priority": "high",
            "whyNeeded": "The statement and notice show the arrears, servicer, and any sale deadline for prompt attorney review.",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "mortgage-statement-and-arrears-notice.pdf",
                "previewUrl": "./output/pilot-evidence/kevin-priya-shah-ch13/mortgage-statement-and-arrears-notice.pdf",
                "qualityIssue": null,
                "sha256": "1fd689d26ae545a7753cd32b80c510372a2adf20299bf269fb5a6f3cafd4c40e",
                "size": 2744,
                "source": "intake_upload",
                "sourceTemplate": "CFPB Regulation Z Appendix H-30 mortgage statement samples",
                "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/h/",
                "url": "./output/pilot-evidence/kevin-priya-shah-ch13/mortgage-statement-and-arrears-notice.pdf"
              }
            ]
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-kevin-priya-shah-ch13-financialaffairs-creditor-payments-90-days-entries-0-id",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "1800"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-kevin-priya-shah-ch13-financialaffairs-lawsuits-entries-0-id",
                "fields": {
                  "caseNumber": "",
                  "caseTitle": "Frontier Mortgage Servicing foreclosure",
                  "courtOrAgency": "Arapahoe County Public Trustee",
                  "status": "Sale noticed, exact sale date missing"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-kevin-priya-shah-ch13-financialaffairs-property-taken-entries-0-id",
                "fields": {
                  "creditor": "Frontier Mortgage Servicing",
                  "date": "",
                  "property": "Home foreclosure started",
                  "value": "Unknown"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Shah",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-kevin-priya-shah-ch13",
      "phone": "(720) 555-0199",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-kevin-priya-shah-ch13",
        "revision": 2,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 13,
        "blockers": [
          {
            "id": "intake-accuracy-inconsistency-kevin-priya-shah-ch13-2",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-kevin-priya-shah-ch13-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-kevin-priya-shah-ch13-tax-return-last-year-2",
            "label": "Document requirement is unresolved: Tax return - last year",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3",
            "label": "Document requirement is unresolved: Pay stubs - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
            "label": "Document requirement is unresolved: Bank statements - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-kevin-priya-shah-ch13-court-paperwork-5",
            "label": "Document requirement is unresolved: Court paperwork",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
            "label": "Document requirement is unresolved: Mortgage statement and arrears notice",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-basics-Debtor identity is incomplete",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-chapter13-Arrears need plan treatment",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-kevin-priya-shah-ch13-2",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 6,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-basics-Debtor identity is incomplete",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-chapter13-Arrears need plan treatment",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-kevin-priya-shah-ch13-2",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 6,
            "blockers": [
              {
                "id": "document-open-fake-document-kevin-priya-shah-ch13-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-kevin-priya-shah-ch13-tax-return-last-year-2",
                "label": "Document requirement is unresolved: Tax return - last year",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-kevin-priya-shah-ch13-pay-stubs-last-6-months-3",
                "label": "Document requirement is unresolved: Pay stubs - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-kevin-priya-shah-ch13-bank-statements-last-6-months-4",
                "label": "Document requirement is unresolved: Bank statements - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-kevin-priya-shah-ch13-court-paperwork-5",
                "label": "Document requirement is unresolved: Court paperwork",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-kevin-priya-shah-ch13-mortgage-statement-and-arrears-notice-6",
                "label": "Document requirement is unresolved: Mortgage statement and arrears notice",
                "owner": "Document Review",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 6,
              "imageCount": 1,
              "pdfCount": 5
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 1,
            "blockers": [
              {
                "id": "intake-accuracy-inconsistency-kevin-priya-shah-ch13-2",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": true,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "kevin.shah.fake@example.test",
          "firstName": "Kevin",
          "id": "intake-fake-matter-kevin-priya-shah-ch13-contact-1",
          "lastName": "Shah",
          "middleName": "Arun",
          "name": "Kevin Arun Shah",
          "phone": "(720) 555-0199",
          "role": "Lead"
        },
        {
          "email": "priya.shah.fake@example.test",
          "firstName": "Priya",
          "id": "intake-fake-matter-kevin-priya-shah-ch13-contact-2",
          "lastName": "Shah",
          "middleName": "Meera",
          "name": "Priya Meera Shah",
          "phone": "(720) 555-0198",
          "role": "Joint Debtor"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 13 scenario: chapter_13, homeowner, mortgage_arrears, foreclosure, prior_bankruptcy, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-kevin-priya-shah-ch13-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$18,000 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered Employed while entering only benefits or other non-employment income.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "Yes"
              },
              {
                "path": "matter.income[0]",
                "value": "Social Security / public benefits"
              }
            ],
            "id": "inconsistency-rosa-whitaker-ch7-retired-3",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered Employed while entering only benefits or other non-employment income.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "Yes"
              },
              {
                "path": "matter.income[0]",
                "value": "Social Security / public benefits"
              }
            ],
            "id": "inconsistency-rosa-whitaker-ch7-retired-3",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-rosa-whitaker-ch7-retired-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-rosa-whitaker-ch7-retired-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/rosa-whitaker-ch7-retired/driver-s-license.png",
              "sha256": "58ff886225eb851bcae4c0f2880accde91f1627aaa01e3f135406580d775bfe4",
              "size": 258954,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/rosa-whitaker-ch7-retired/driver-s-license.png"
            }
          ],
          "id": "fake-document-rosa-whitaker-ch7-retired-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Social Security card, W-2, or 1099",
          "docId": "fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
          "files": [],
          "id": "fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
          "name": "Social Security card, W-2, or 1099",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank or financial account statements",
          "docId": "fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
          "files": [],
          "id": "fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
          "name": "Bank or financial account statements",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Statements for all debts",
          "docId": "fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4-file-1",
              "mimeType": "application/pdf",
              "name": "statements-for-all-debts.pdf",
              "previewUrl": "./output/pilot-evidence/rosa-whitaker-ch7-retired/statements-for-all-debts.pdf",
              "sha256": "d66f53a7d1ea9af48f734bf9d84f1b020bd036db9404234c96506d4716bee527",
              "size": 6862,
              "source": "intake_upload",
              "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
              "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
              "url": "./output/pilot-evidence/rosa-whitaker-ch7-retired/statements-for-all-debts.pdf"
            }
          ],
          "id": "fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4",
          "name": "Statements for all debts",
          "status": "ai_accepted"
        },
        {
          "applicability": "conditional",
          "applicabilityReason": "Rosa reported that she did not file a recent return because her income was fixed benefits.",
          "customName": "Tax return unavailability explanation",
          "docId": "fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-unavailability-explanation.pdf",
              "previewUrl": "./output/pilot-evidence/rosa-whitaker-ch7-retired/tax-return-unavailability-explanation.pdf",
              "sha256": "c509c00a4e6e30c88dbe4110d726b63a47dd5f800b5179417f9cb31b31baaccf",
              "size": 2639,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/rosa-whitaker-ch7-retired/tax-return-unavailability-explanation.pdf"
            }
          ],
          "id": "fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5",
          "name": "Tax return unavailability explanation",
          "status": "ai_accepted"
        }
      ],
      "email": "rosa.whitaker.fake@example.test",
      "firstName": "Rosa",
      "id": "intake-fake-matter-rosa-whitaker-ch7-retired",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-rosa-whitaker-ch7-retired-3",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Employed while entering only benefits or other non-employment income."
          }
        ],
        "matterId": "fake-matter-rosa-whitaker-ch7-retired",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 28,
            "percent": 88,
            "required": 32
          },
          "documentCollection": {
            "applicable": 5,
            "collected": 3,
            "percent": 60
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 88
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": null,
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-rosa-whitaker-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Social Security card, W-2, or 1099']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Social Security card, W-2, or 1099, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "kind": "document",
            "label": "Social Security card, W-2, or 1099",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-rosa-whitaker-ch7-retired-3",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Employed while entering only benefits or other non-employment income."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-rosa-whitaker-ch7-retired",
        "title": "Rosa Whitaker fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "UT",
        "district": "District of Utah",
        "clientGoals": "Discharge credit cards and old medical bills while protecting retirement account.",
        "urgentConcerns": "Automatic debit from QuickCash is overdrawing her account.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-rosa-whitaker-ch7-retired-debtors-0-id",
            "firstName": "Rosa",
            "middleName": "Elaine",
            "lastName": "Whitaker",
            "otherNames": "Rosa E. Kemp",
            "email": "rosa.whitaker.fake@example.test",
            "phone": "(801) 555-0161",
            "ssnLast4": "8324",
            "socialSecurityNumber": "666-77-8324",
            "address": "619 North 300 West Apt 11",
            "city": "Salt Lake City",
            "state": "UT",
            "zipCode": "84103",
            "county": "Salt Lake",
            "mailingAddressDifferent": false,
            "dateOfBirth": ""
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Widowed",
          "dependents": []
        },
        "assets": [
          {
            "id": "fake-rosa-whitaker-ch7-retired-assets-0-id",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-assets-1-id",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-assets-2-id",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-assets-3-id",
            "category": "Household goods and furnishings",
            "description": "Apartment furniture, clothing, television, mobility equipment",
            "estimatedValue": 3600,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-rosa-whitaker-ch7-retired-1",
            "type": "unsecured",
            "creditor": "Capital One",
            "amount": 11100,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor did not enter account number or collector details."
          },
          {
            "id": "fake-debt-rosa-whitaker-ch7-retired-2",
            "type": "unsecured",
            "creditor": "",
            "amount": 4300,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical collector letter; creditor name not entered."
          },
          {
            "id": "fake-debt-rosa-whitaker-ch7-retired-3",
            "type": "unsecured",
            "creditor": "QuickCash Installment Loans",
            "amount": 2600,
            "collateral": "",
            "arrears": 0,
            "notes": "Possible high-interest loan; payment drafting from bank account."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-rosa-whitaker-ch7-retired-income-0-id",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-income-1-id",
            "source": "Pension / retirement",
            "employer": "Former employer pension",
            "amount": 500,
            "frequency": "Monthly",
            "sixMonthTotal": 3000
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "fake-rosa-whitaker-ch7-retired-expenses-6-id",
            "category": "Other expenses",
            "monthlyAmount": 95,
            "notes": "Prescription delivery and mobility supplies"
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Likely fixed-income review",
          "medianIncomeState": "Utah",
          "estimatedMonthlyIncome": 2480,
          "securedPropertyIntent": "No secured property listed.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Low-value non-retirement property; exemption review still required."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/rosa-whitaker-ch7-retired/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "58ff886225eb851bcae4c0f2880accde91f1627aaa01e3f135406580d775bfe4",
                "size": 258954,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/rosa-whitaker-ch7-retired/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "name": "Social Security card, W-2, or 1099",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "statements-for-all-debts.pdf",
                "previewUrl": "./output/pilot-evidence/rosa-whitaker-ch7-retired/statements-for-all-debts.pdf",
                "qualityIssue": null,
                "sha256": "d66f53a7d1ea9af48f734bf9d84f1b020bd036db9404234c96506d4716bee527",
                "size": 6862,
                "source": "intake_upload",
                "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
                "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
                "url": "./output/pilot-evidence/rosa-whitaker-ch7-retired/statements-for-all-debts.pdf"
              }
            ]
          },
          {
            "id": "fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5",
            "name": "Tax return unavailability explanation",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "applicability": "conditional",
            "applicabilityReason": "Rosa reported that she did not file a recent return because her income was fixed benefits.",
            "priority": "medium",
            "whyNeeded": "A short explanation lets the firm evaluate the missing return without repeatedly asking for a document that may not exist.",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-unavailability-explanation.pdf",
                "previewUrl": "./output/pilot-evidence/rosa-whitaker-ch7-retired/tax-return-unavailability-explanation.pdf",
                "qualityIssue": null,
                "sha256": "c509c00a4e6e30c88dbe4110d726b63a47dd5f800b5179417f9cb31b31baaccf",
                "size": 2639,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/rosa-whitaker-ch7-retired/tax-return-unavailability-explanation.pdf"
              }
            ]
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-rosa-whitaker-ch7-retired-financialaffairs-other-income-entries-0-id",
                "fields": {
                  "amount": "2480",
                  "frequency": "Monthly",
                  "source": "Social Security retirement and pension"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-rosa-whitaker-ch7-retired-financialaffairs-closed-accounts-entries-0-id",
                "fields": {
                  "account": "Mountain America Credit Union checking",
                  "closedDate": "2025-12",
                  "institution": "Mountain America Credit Union"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Whitaker",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-rosa-whitaker-ch7-retired",
      "phone": "(801) 555-0161",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-rosa-whitaker-ch7-retired",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 18,
        "blockers": [
          {
            "id": "intake-field-schema-start.debtor.dateOfBirth",
            "label": "Missing intake data: Date of birth",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "label": "Missing intake data: Debt creditor name",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.dateOfBirth",
            "label": "Missing intake data: Date of birth",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
            "label": "Missing intake data: Debt creditor name",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-rosa-whitaker-ch7-retired-3",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-rosa-whitaker-ch7-retired-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "label": "Document requirement is unresolved: Social Security card, W-2, or 1099",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "label": "Document requirement is unresolved: Bank or financial account statements",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4",
            "label": "Document requirement is unresolved: Statements for all debts",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5",
            "label": "Document requirement is unresolved: Tax return unavailability explanation",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
            "label": "Intake still requires a Document response: Social Security card, W-2, or 1099",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
            "label": "Intake still requires a Document response: Bank or financial account statements",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-rosa-whitaker-ch7-retired-3",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 4,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-rosa-whitaker-ch7-retired-3",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "document-open-fake-document-rosa-whitaker-ch7-retired-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
                "label": "Document requirement is unresolved: Social Security card, W-2, or 1099",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
                "label": "Document requirement is unresolved: Bank or financial account statements",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-rosa-whitaker-ch7-retired-statements-for-all-debts-4",
                "label": "Document requirement is unresolved: Statements for all debts",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-rosa-whitaker-ch7-retired-tax-return-unavailability-explanation-5",
                "label": "Document requirement is unresolved: Tax return unavailability explanation",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-rosa-whitaker-ch7-retired-social-security-card-w-2-or-1099-2",
                "label": "Intake still requires a Document response: Social Security card, W-2, or 1099",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-rosa-whitaker-ch7-retired-bank-or-financial-account-statements-3",
                "label": "Intake still requires a Document response: Bank or financial account statements",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 3,
              "imageCount": 1,
              "pdfCount": 2
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "intake-field-schema-start.debtor.dateOfBirth",
                "label": "Missing intake data: Date of birth",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
                "label": "Missing intake data: Debt creditor name",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.dateOfBirth",
                "label": "Missing intake data: Date of birth",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-debt-creditor-fake-debt-rosa-whitaker-ch7-retired-2",
                "label": "Missing intake data: Debt creditor name",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-rosa-whitaker-ch7-retired-3",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "rosa.whitaker.fake@example.test",
          "firstName": "Rosa",
          "id": "intake-fake-matter-rosa-whitaker-ch7-retired-contact-1",
          "lastName": "Whitaker",
          "middleName": "Elaine",
          "name": "Rosa Elaine Whitaker",
          "phone": "(801) 555-0161",
          "role": "Lead"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, retired, renter, tax_return_unavailable, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-rosa-whitaker-ch7-retired-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "income-Six-month income is missing",
            "severity": "warning",
            "sectionId": "income",
            "title": "Six-month income is missing",
            "detail": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$23,800 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered Employed while entering only benefits or other non-employment income.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "Yes"
              },
              {
                "path": "matter.income[0]",
                "value": "Unemployment benefits"
              }
            ],
            "id": "inconsistency-nolan-brooks-ch7-renter-4",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered Employed while entering only benefits or other non-employment income.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "Yes"
              },
              {
                "path": "matter.income[0]",
                "value": "Unemployment benefits"
              }
            ],
            "id": "inconsistency-nolan-brooks-ch7-renter-4",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[0].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
            "id": "missing-log-income.rows.0.sixMonthTotal",
            "kind": "field",
            "label": "Colorado Department of Labor six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-nolan-brooks-ch7-renter-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-nolan-brooks-ch7-renter-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/nolan-brooks-ch7-renter/driver-s-license.png",
              "sha256": "478d28286fa7b4e562cc04d91da755c75d57a2974f6ef6bc57183f5dffd54afb",
              "size": 240514,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/nolan-brooks-ch7-renter/driver-s-license.png"
            }
          ],
          "id": "fake-document-nolan-brooks-ch7-renter-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank statements - last 6 months",
          "docId": "fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2-file-1",
              "mimeType": "application/pdf",
              "name": "bank-statements-last-6-months.pdf",
              "previewUrl": "./output/pilot-evidence/nolan-brooks-ch7-renter/bank-statements-last-6-months.pdf",
              "sha256": "4e544ecaa2ce368e4c51652591292408cf6941b7e1edbf65fce50ab84203c6de",
              "size": 13707,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/nolan-brooks-ch7-renter/bank-statements-last-6-months.pdf"
            }
          ],
          "id": "fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2",
          "name": "Bank statements - last 6 months",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Nolan reported an eviction hearing in two days.",
          "customName": "Court paperwork",
          "docId": "fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
          "files": [],
          "id": "fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
          "name": "Court paperwork",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Nolan rents the residence involved in the reported eviction.",
          "customName": "Lease or rental agreement",
          "docId": "fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4-file-1",
              "mimeType": "application/pdf",
              "name": "lease-or-rental-agreement.pdf",
              "previewUrl": "./output/pilot-evidence/nolan-brooks-ch7-renter/lease-or-rental-agreement.pdf",
              "sha256": "d4deb623def4f5fbc15850cb5a06bef54f63ac0920b2fd733ad546967a8151a2",
              "size": 2705,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/nolan-brooks-ch7-renter/lease-or-rental-agreement.pdf"
            }
          ],
          "id": "fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4",
          "name": "Lease or rental agreement",
          "status": "ai_accepted"
        }
      ],
      "email": "nolan.brooks.fake@example.test",
      "firstName": "Nolan",
      "id": "intake-fake-matter-nolan-brooks-ch7-renter",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[0].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
            "id": "missing-log-income.rows.0.sixMonthTotal",
            "kind": "field",
            "label": "Colorado Department of Labor six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-nolan-brooks-ch7-renter-4",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Employed while entering only benefits or other non-employment income."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          }
        ],
        "matterId": "fake-matter-nolan-brooks-ch7-renter",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 29,
            "percent": 91,
            "required": 32
          },
          "documentCollection": {
            "applicable": 4,
            "collected": 3,
            "percent": 75
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 91
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[0].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
            "id": "missing-log-income.rows.0.sixMonthTotal",
            "kind": "field",
            "label": "Colorado Department of Labor six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Eviction hearing is scheduled in two days; debtor uses only a phone and requests large touch targets.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        },
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[0].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Colorado Department of Labor six-month income total.",
            "id": "missing-log-income.rows.0.sixMonthTotal",
            "kind": "field",
            "label": "Colorado Department of Labor six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-nolan-brooks-ch7-renter-4",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Employed while entering only benefits or other non-employment income."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-nolan-brooks-ch7-renter",
        "title": "Nolan Brooks fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Stop the eviction if possible and address credit-card debt after a recent layoff.",
        "urgentConcerns": "Eviction hearing is scheduled in two days; debtor uses only a phone and requests large touch targets.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-nolan-brooks-ch7-renter-debtors-0-id",
            "firstName": "Nolan",
            "middleName": "James",
            "lastName": "Brooks",
            "otherNames": "",
            "email": "nolan.brooks.fake@example.test",
            "phone": "(303) 555-0201",
            "ssnLast4": "3501",
            "socialSecurityNumber": "111-22-3501",
            "address": "1880 Walnut Street Apt 12",
            "city": "Boulder",
            "state": "CO",
            "zipCode": "80302",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "09/12/1985"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "fake-nolan-brooks-ch7-renter-assets-0-id",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-assets-1-id",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-assets-2-id",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-nolan-brooks-ch7-renter-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-nolan-brooks-ch7-renter-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-nolan-brooks-ch7-renter-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-nolan-brooks-ch7-renter-income-0-id",
            "source": "Unemployment benefits",
            "employer": "Colorado Department of Labor",
            "amount": 1850,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "fake-nolan-brooks-ch7-renter-expenses-6-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "Yes",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Nolan Brooks delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs unemployment six-month total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 1850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-nolan-brooks-ch7-renter-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/nolan-brooks-ch7-renter/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "478d28286fa7b4e562cc04d91da755c75d57a2974f6ef6bc57183f5dffd54afb",
                "size": 240514,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/nolan-brooks-ch7-renter/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "bank-statements-last-6-months.pdf",
                "previewUrl": "./output/pilot-evidence/nolan-brooks-ch7-renter/bank-statements-last-6-months.pdf",
                "qualityIssue": null,
                "sha256": "4e544ecaa2ce368e4c51652591292408cf6941b7e1edbf65fce50ab84203c6de",
                "size": 13707,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/nolan-brooks-ch7-renter/bank-statements-last-6-months.pdf"
              }
            ]
          },
          {
            "id": "fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicability": "essential_now",
            "applicabilityReason": "Nolan reported an eviction hearing in two days.",
            "caseStageDeadline": "Same day",
            "priority": "high",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "applicabilityReason": "Nolan rents the residence involved in the reported eviction.",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "lease-or-rental-agreement.pdf",
                "previewUrl": "./output/pilot-evidence/nolan-brooks-ch7-renter/lease-or-rental-agreement.pdf",
                "qualityIssue": null,
                "sha256": "d4deb623def4f5fbc15850cb5a06bef54f63ac0920b2fd733ad546967a8151a2",
                "size": 2705,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/nolan-brooks-ch7-renter/lease-or-rental-agreement.pdf"
              }
            ]
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-nolan-brooks-ch7-renter-financialaffairs-prior-addresses-entries-0-id",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-nolan-brooks-ch7-renter-financialaffairs-other-income-entries-0-id",
                "fields": {
                  "amount": "1850",
                  "frequency": "Monthly",
                  "source": "Unemployment benefits"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-nolan-brooks-ch7-renter-financialaffairs-lawsuits-entries-0-id",
                "fields": {
                  "caseNumber": "",
                  "court": "Boulder County Court",
                  "hearingDate": "2026-07-15",
                  "type": "Residential eviction"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Brooks",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-nolan-brooks-ch7-renter",
      "phone": "(303) 555-0201",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-nolan-brooks-ch7-renter",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 17,
        "blockers": [
          {
            "id": "intake-field-missing-log-income.rows.0.sixMonthTotal",
            "label": "Missing intake data: Colorado Department of Labor six-month income total",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.county",
            "label": "Missing intake data: County",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-missing-log-income.rows.0.sixMonthTotal",
            "label": "Missing intake data: Colorado Department of Labor six-month income total",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.county",
            "label": "Missing intake data: County",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-nolan-brooks-ch7-renter-4",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-nolan-brooks-ch7-renter-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2",
            "label": "Document requirement is unresolved: Bank statements - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "label": "Document requirement is unresolved: Court paperwork",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4",
            "label": "Document requirement is unresolved: Lease or rental agreement",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
            "label": "Intake still requires a Document response: Court paperwork",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-income-Six-month income is missing",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-nolan-brooks-ch7-renter-4",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 5,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-income-Six-month income is missing",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-nolan-brooks-ch7-renter-4",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 5,
            "blockers": [
              {
                "id": "document-open-fake-document-nolan-brooks-ch7-renter-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-nolan-brooks-ch7-renter-bank-statements-last-6-months-2",
                "label": "Document requirement is unresolved: Bank statements - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
                "label": "Document requirement is unresolved: Court paperwork",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-nolan-brooks-ch7-renter-lease-or-rental-agreement-4",
                "label": "Document requirement is unresolved: Lease or rental agreement",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-nolan-brooks-ch7-renter-court-paperwork-3",
                "label": "Intake still requires a Document response: Court paperwork",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 3,
              "imageCount": 1,
              "pdfCount": 2
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "intake-field-missing-log-income.rows.0.sixMonthTotal",
                "label": "Missing intake data: Colorado Department of Labor six-month income total",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.county",
                "label": "Missing intake data: County",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-missing-log-income.rows.0.sixMonthTotal",
                "label": "Missing intake data: Colorado Department of Labor six-month income total",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.county",
                "label": "Missing intake data: County",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-nolan-brooks-ch7-renter-4",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "nolan.brooks.fake@example.test",
          "firstName": "Nolan",
          "id": "intake-fake-matter-nolan-brooks-ch7-renter-contact-1",
          "lastName": "Brooks",
          "middleName": "James",
          "name": "Nolan James Brooks",
          "phone": "(303) 555-0201",
          "role": "Lead"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, unemployed, renter, eviction, mobile_accessibility, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-nolan-brooks-ch7-renter-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "income-Six-month income is missing",
            "severity": "warning",
            "sectionId": "income",
            "title": "Six-month income is missing",
            "detail": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$23,800 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered No to job or business income while the Income section contains a positive source.",
            "evidence": [
              {
                "path": "matter.financialAffairs['job-or-business-income'].answer",
                "value": "No"
              },
              {
                "path": "matter.income[0].amount",
                "value": 4100
              }
            ],
            "id": "inconsistency-maya-patel-ch7-parent-5",
            "sectionId": "affairs",
            "severity": "warning",
            "title": "SOFA income answer conflicts with income rows"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered No to job or business income while the Income section contains a positive source.",
            "evidence": [
              {
                "path": "matter.financialAffairs['job-or-business-income'].answer",
                "value": "No"
              },
              {
                "path": "matter.income[0].amount",
                "value": 4100
              }
            ],
            "id": "inconsistency-maya-patel-ch7-parent-5",
            "sectionId": "affairs",
            "severity": "warning",
            "title": "SOFA income answer conflicts with income rows"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Arun Patel nonfiling-spouse wages six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-maya-patel-ch7-parent-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-maya-patel-ch7-parent-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/maya-patel-ch7-parent/driver-s-license.png",
              "sha256": "935347bbfec69aceaa33239d0376053efb70a58f9ca42f3c3d8bb6f07009460c",
              "size": 258466,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/maya-patel-ch7-parent/driver-s-license.png"
            }
          ],
          "id": "fake-document-maya-patel-ch7-parent-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return - last year",
          "docId": "fake-document-maya-patel-ch7-parent-tax-return-last-year-2",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-maya-patel-ch7-parent-tax-return-last-year-2-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-last-year.pdf",
              "previewUrl": "./output/pilot-evidence/maya-patel-ch7-parent/tax-return-last-year.pdf",
              "sha256": "f11144cc45b6af25878a517fda6293426dada33971618e0057bc998577708ad6",
              "size": 4945,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/maya-patel-ch7-parent/tax-return-last-year.pdf"
            }
          ],
          "id": "fake-document-maya-patel-ch7-parent-tax-return-last-year-2",
          "name": "Tax return - last year",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
          "customName": "Pay stubs - last 6 months",
          "docId": "fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
          "files": [],
          "id": "fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
          "name": "Pay stubs - last 6 months",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank statements - last 6 months",
          "docId": "fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
          "files": [],
          "id": "fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
          "name": "Bank statements - last 6 months",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Statements for all debts",
          "docId": "fake-document-maya-patel-ch7-parent-statements-for-all-debts-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-maya-patel-ch7-parent-statements-for-all-debts-5-file-1",
              "mimeType": "application/pdf",
              "name": "statements-for-all-debts.pdf",
              "previewUrl": "./output/pilot-evidence/maya-patel-ch7-parent/statements-for-all-debts.pdf",
              "sha256": "ecf257b737d6e438fb8487f9b25ad46f6799f171a9e2b4c5239fbbbdace1d449",
              "size": 6866,
              "source": "intake_upload",
              "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
              "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
              "url": "./output/pilot-evidence/maya-patel-ch7-parent/statements-for-all-debts.pdf"
            }
          ],
          "id": "fake-document-maya-patel-ch7-parent-statements-for-all-debts-5",
          "name": "Statements for all debts",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Lease or rental agreement",
          "docId": "fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
          "files": [],
          "id": "fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
          "name": "Lease or rental agreement",
          "status": "open"
        }
      ],
      "email": "maya.patel.fake@example.test",
      "firstName": "Maya",
      "id": "intake-fake-matter-maya-patel-ch7-parent",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Arun Patel nonfiling-spouse wages six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Lease or rental agreement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "kind": "document",
            "label": "Lease or rental agreement",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.affairs",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-maya-patel-ch7-parent-5",
            "kind": "review",
            "label": "SOFA income answer conflicts with income rows",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The debtor answered No to job or business income while the Income section contains a positive source."
          }
        ],
        "matterId": "fake-matter-maya-patel-ch7-parent",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 29,
            "percent": 85,
            "required": 34
          },
          "documentCollection": {
            "applicable": 6,
            "collected": 3,
            "percent": 50
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 85
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Arun Patel nonfiling-spouse wages six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Lease or rental agreement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "kind": "document",
            "label": "Lease or rental agreement",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Wage garnishment began this pay period.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        },
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Arun Patel nonfiling-spouse wages six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Arun Patel nonfiling-spouse wages six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Lease or rental agreement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Lease or rental agreement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "kind": "document",
            "label": "Lease or rental agreement",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.affairs",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-maya-patel-ch7-parent-5",
            "kind": "review",
            "label": "SOFA income answer conflicts with income rows",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The debtor answered No to job or business income while the Income section contains a positive source."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-maya-patel-ch7-parent",
        "title": "Maya Patel fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "File individually while documenting household income from a nonfiling spouse.",
        "urgentConcerns": "Wage garnishment began this pay period.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "Yes",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-maya-patel-ch7-parent-debtors-0-id",
            "firstName": "Maya",
            "middleName": "Renee",
            "lastName": "Patel",
            "otherNames": "",
            "email": "maya.patel.fake@example.test",
            "phone": "(720) 555-0202",
            "ssnLast4": "3502",
            "socialSecurityNumber": "111-22-3502",
            "address": "14522 East Evans Avenue Unit 8",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80014",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "02/24/1990"
          },
          {
            "id": "fake-maya-patel-ch7-parent-debtors-1-id",
            "firstName": "Arun",
            "middleName": "Dev",
            "lastName": "Patel",
            "otherNames": "",
            "email": "arun.patel.fake@example.test",
            "phone": "(720) 555-0208",
            "ssnLast4": "3598",
            "socialSecurityNumber": "111-22-3598",
            "address": "14522 East Evans Avenue Unit 8",
            "city": "Aurora",
            "state": "CO",
            "zipCode": "80014",
            "county": "Arapahoe",
            "mailingAddressDifferent": false,
            "dateOfBirth": "09/06/1988"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "fake-maya-patel-ch7-parent-household-dependents-0-id",
              "name": "Fake child A",
              "age": "9",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "fake-maya-patel-ch7-parent-household-dependents-1-id",
              "name": "Fake child B",
              "age": "4",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "fake-maya-patel-ch7-parent-assets-0-id",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-maya-patel-ch7-parent-assets-1-id",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 0,
            "exemptionNote": "",
            "financingStatus": "Paid off",
            "keepIntent": "Keep for work transportation",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "fake-maya-patel-ch7-parent-assets-2-id",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-maya-patel-ch7-parent-1",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-maya-patel-ch7-parent-2",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-maya-patel-ch7-parent-3",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-maya-patel-ch7-parent-income-0-id",
            "source": "Maya wages",
            "employer": "Aurora Medical Billing",
            "amount": 4100,
            "frequency": "Twice monthly",
            "sixMonthTotal": 24600
          },
          {
            "id": "fake-maya-patel-ch7-parent-income-1-id",
            "source": "Nonfiling spouse household income",
            "employer": "Arun Patel nonfiling-spouse wages",
            "amount": 5200,
            "frequency": "Biweekly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-maya-patel-ch7-parent-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "fake-maya-patel-ch7-parent-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "fake-maya-patel-ch7-parent-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "fake-maya-patel-ch7-parent-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "fake-maya-patel-ch7-parent-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "fake-maya-patel-ch7-parent-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "fake-maya-patel-ch7-parent-expenses-6-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Maya Patel delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Keep paid-off vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-maya-patel-ch7-parent-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/maya-patel-ch7-parent/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "935347bbfec69aceaa33239d0376053efb70a58f9ca42f3c3d8bb6f07009460c",
                "size": 258466,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/maya-patel-ch7-parent/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-last-year.pdf",
                "previewUrl": "./output/pilot-evidence/maya-patel-ch7-parent/tax-return-last-year.pdf",
                "qualityIssue": null,
                "sha256": "f11144cc45b6af25878a517fda6293426dada33971618e0057bc998577708ad6",
                "size": 4945,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/maya-patel-ch7-parent/tax-return-last-year.pdf"
              }
            ]
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicabilityReason": "Maya reported wages and a current garnishment; household-income review includes the nonfiling spouse.",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-statements-for-all-debts-5",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "statements-for-all-debts.pdf",
                "previewUrl": "./output/pilot-evidence/maya-patel-ch7-parent/statements-for-all-debts.pdf",
                "qualityIssue": null,
                "sha256": "ecf257b737d6e438fb8487f9b25ad46f6799f171a9e2b4c5239fbbbdace1d449",
                "size": 6866,
                "source": "intake_upload",
                "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
                "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
                "url": "./output/pilot-evidence/maya-patel-ch7-parent/statements-for-all-debts.pdf"
              }
            ]
          },
          {
            "id": "fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-maya-patel-ch7-parent-financialaffairs-prior-addresses-entries-0-id",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-maya-patel-ch7-parent-financialaffairs-creditor-payments-90-days-entries-0-id",
                "fields": {
                  "amount": "430",
                  "creditor": "Front Range Collections",
                  "date": "2026-07-11",
                  "note": "Payroll garnishment"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Patel",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-maya-patel-ch7-parent",
      "phone": "(720) 555-0202",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-maya-patel-ch7-parent",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 21,
        "blockers": [
          {
            "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
            "label": "Missing intake data: Arun Patel nonfiling-spouse wages six-month income total",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.county",
            "label": "Missing intake data: County",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
            "label": "Missing intake data: Arun Patel nonfiling-spouse wages six-month income total",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.county",
            "label": "Missing intake data: County",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-maya-patel-ch7-parent-5",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-maya-patel-ch7-parent-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-maya-patel-ch7-parent-tax-return-last-year-2",
            "label": "Document requirement is unresolved: Tax return - last year",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "label": "Document requirement is unresolved: Pay stubs - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "label": "Document requirement is unresolved: Bank statements - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-maya-patel-ch7-parent-statements-for-all-debts-5",
            "label": "Document requirement is unresolved: Statements for all debts",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "label": "Document requirement is unresolved: Lease or rental agreement",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
            "label": "Intake still requires a Document response: Bank statements - last 6 months",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
            "label": "Intake still requires a Document response: Lease or rental agreement",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
            "label": "Intake still requires a Document response: Pay stubs - last 6 months",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-income-Six-month income is missing",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-maya-patel-ch7-parent-5",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 5,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-income-Six-month income is missing",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-maya-patel-ch7-parent-5",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 9,
            "blockers": [
              {
                "id": "document-open-fake-document-maya-patel-ch7-parent-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-maya-patel-ch7-parent-tax-return-last-year-2",
                "label": "Document requirement is unresolved: Tax return - last year",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
                "label": "Document requirement is unresolved: Pay stubs - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
                "label": "Document requirement is unresolved: Bank statements - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-maya-patel-ch7-parent-statements-for-all-debts-5",
                "label": "Document requirement is unresolved: Statements for all debts",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
                "label": "Document requirement is unresolved: Lease or rental agreement",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-maya-patel-ch7-parent-bank-statements-last-6-months-4",
                "label": "Intake still requires a Document response: Bank statements - last 6 months",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-maya-patel-ch7-parent-lease-or-rental-agreement-6",
                "label": "Intake still requires a Document response: Lease or rental agreement",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-maya-patel-ch7-parent-pay-stubs-last-6-months-3",
                "label": "Intake still requires a Document response: Pay stubs - last 6 months",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 3,
              "imageCount": 1,
              "pdfCount": 2
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
                "label": "Missing intake data: Arun Patel nonfiling-spouse wages six-month income total",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.county",
                "label": "Missing intake data: County",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
                "label": "Missing intake data: Arun Patel nonfiling-spouse wages six-month income total",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.county",
                "label": "Missing intake data: County",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-maya-patel-ch7-parent-5",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "maya.patel.fake@example.test",
          "firstName": "Maya",
          "id": "intake-fake-matter-maya-patel-ch7-parent-contact-1",
          "lastName": "Patel",
          "middleName": "Renee",
          "name": "Maya Renee Patel",
          "phone": "(720) 555-0202",
          "role": "Lead"
        },
        {
          "email": "arun.patel.fake@example.test",
          "firstName": "Arun",
          "id": "intake-fake-matter-maya-patel-ch7-parent-contact-2",
          "lastName": "Patel",
          "middleName": "Dev",
          "name": "Arun Dev Patel",
          "phone": "(720) 555-0208",
          "role": "Joint Debtor"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, nonfiling_spouse, dependents, renter, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-maya-patel-ch7-parent-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "income-Six-month income is missing",
            "severity": "warning",
            "sectionId": "income",
            "title": "Six-month income is missing",
            "detail": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$23,800 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered Not employed while entering positive income from Denver Dental Supply.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "No"
              },
              {
                "path": "matter.income[0]",
                "value": "Denver Dental Supply"
              }
            ],
            "id": "inconsistency-zoe-kim-ch7-wage-earner-6",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered Not employed while entering positive income from Denver Dental Supply.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "No"
              },
              {
                "path": "matter.income[0]",
                "value": "Denver Dental Supply"
              }
            ],
            "id": "inconsistency-zoe-kim-ch7-wage-earner-6",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "needs_review",
              "id": "fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/driver-s-license.png",
              "qualityIssue": "illegible",
              "sha256": "33c64dd92a1c8d1f82bd2147d1e725a92f7fd8fa9cdad811e6a657b1e3c63e98",
              "size": 169136,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/driver-s-license.png"
            }
          ],
          "id": "fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
          "name": "Driver's license",
          "qualityIssue": "illegible",
          "status": "ai_flagged"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
          "customName": "Tax return - last year",
          "docId": "fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
          "files": [],
          "id": "fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
          "name": "Tax return - last year",
          "qualityIssue": "illegible",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Pay stubs - last 6 months",
          "docId": "fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
          "files": [],
          "id": "fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
          "name": "Pay stubs - last 6 months",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank statements - last 6 months",
          "docId": "fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4-file-1",
              "mimeType": "application/pdf",
              "name": "bank-statements-last-6-months.pdf",
              "previewUrl": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/bank-statements-last-6-months.pdf",
              "sha256": "6aa649bb98e7f0e2be678d3bd25a7fb4e00921b7a6b78a09cbc3d959f179b6fa",
              "size": 13714,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/bank-statements-last-6-months.pdf"
            }
          ],
          "id": "fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4",
          "name": "Bank statements - last 6 months",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
          "customName": "Vehicle loan or title statement",
          "docId": "fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
          "files": [],
          "id": "fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
          "name": "Vehicle loan or title statement",
          "status": "open"
        }
      ],
      "email": "zoe.kim.fake@example.test",
      "firstName": "Zoe",
      "id": "intake-fake-matter-zoe-kim-ch7-wage-earner",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-zoe-kim-ch7-wage-earner-6",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Not employed while entering positive income from Denver Dental Supply."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
            "canonicalPath": "matter.documents[name='Tax return - last year']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "kind": "document",
            "label": "Tax return - last year",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "matterId": "fake-matter-zoe-kim-ch7-wage-earner",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 28,
            "percent": 85,
            "required": 33
          },
          "documentCollection": {
            "applicable": 5,
            "collected": 2,
            "percent": 40
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 85
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
            "canonicalPath": "matter.documents[name='Tax return - last year']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "kind": "document",
            "label": "Tax return - last year",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Lender left a notice that repossession may occur this week.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        },
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].county",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: County.",
            "id": "schema-start.debtor.county",
            "kind": "field",
            "label": "County",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Means-test six-month total was not entered.",
            "canonicalPath": "matter.income[1].sixMonthTotal",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Weekend delivery apps six-month income total.",
            "id": "missing-log-income.rows.1.sixMonthTotal",
            "kind": "field",
            "label": "Weekend delivery apps six-month income total",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-zoe-kim-ch7-wage-earner-6",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Not employed while entering positive income from Denver Dental Supply."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-income-Six-month income is missing",
            "kind": "review",
            "label": "Six-month income is missing",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "Means-test intake needs six-month totals before attorney review."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
            "canonicalPath": "matter.documents[name='Tax return - last year']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return - last year, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "kind": "document",
            "label": "Tax return - last year",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-zoe-kim-ch7-wage-earner",
        "title": "Zoe Kim fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Surrender the unaffordable vehicle and discharge unsecured debt.",
        "urgentConcerns": "Lender left a notice that repossession may occur this week.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-zoe-kim-ch7-wage-earner-debtors-0-id",
            "firstName": "Zoe",
            "middleName": "Harper",
            "lastName": "Kim",
            "otherNames": "",
            "email": "zoe.kim.fake@example.test",
            "phone": "(970) 555-0203",
            "ssnLast4": "3503",
            "socialSecurityNumber": "111-22-3503",
            "address": "720 West Prospect Road Apt 5",
            "city": "Fort Collins",
            "state": "CO",
            "zipCode": "80521",
            "county": "",
            "mailingAddressDifferent": false,
            "dateOfBirth": "07/08/1993"
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Single",
          "dependents": []
        },
        "assets": [
          {
            "id": "fake-zoe-kim-ch7-wage-earner-assets-0-id",
            "category": "Bank or financial account",
            "description": "Canvas Credit Union checking",
            "estimatedValue": 420,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-assets-1-id",
            "category": "Vehicle",
            "description": "2014 Kia Soul",
            "estimatedValue": 5100,
            "lienAmount": 12400,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Surrender",
            "make": "Kia",
            "mileage": "136000",
            "model": "Soul",
            "year": "2014"
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-assets-2-id",
            "category": "Household goods and furnishings",
            "description": "Furniture, laptop, phone, clothes, kitchen items",
            "estimatedValue": 3100,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-1",
            "type": "secured",
            "creditor": "Fake Auto Finance",
            "amount": 12400,
            "collateral": "2014 Kia Soul",
            "arrears": 980,
            "notes": "Repossession warning received; debtor intends to surrender."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-2",
            "type": "unsecured",
            "creditor": "Synchrony Bank",
            "amount": 14100,
            "collateral": "",
            "arrears": 0,
            "notes": "Credit card in collections."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-3",
            "type": "unsecured",
            "creditor": "Rose Medical Center",
            "amount": 9700,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical bill sent to collector."
          },
          {
            "id": "fake-debt-zoe-kim-ch7-wage-earner-4",
            "type": "priority",
            "creditor": "Colorado Department of Revenue",
            "amount": 1800,
            "collateral": "",
            "arrears": 0,
            "notes": "Older state tax notice; priority status unknown."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-zoe-kim-ch7-wage-earner-income-0-id",
            "source": "Employment",
            "employer": "Denver Dental Supply",
            "amount": 2900,
            "frequency": "Biweekly",
            "sixMonthTotal": 17400
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-income-1-id",
            "source": "Business income",
            "employer": "Weekend delivery apps",
            "amount": 950,
            "frequency": "Monthly",
            "sixMonthTotal": 0
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1390,
            "notes": ""
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 165,
            "notes": ""
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 155,
            "notes": ""
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 540,
            "notes": ""
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 95,
            "notes": ""
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 385,
            "notes": ""
          },
          {
            "id": "fake-zoe-kim-ch7-wage-earner-expenses-6-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 148,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "Yes",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "Zoe Kim delivery work",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "Gig delivery",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Needs six-month income total",
          "medianIncomeState": "Colorado",
          "estimatedMonthlyIncome": 3850,
          "securedPropertyIntent": "Surrender financed vehicle.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Likely no-asset based on entered values; exemption review still needed."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "needs_review",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/driver-s-license.png",
                "qualityIssue": "illegible",
                "sha256": "33c64dd92a1c8d1f82bd2147d1e725a92f7fd8fa9cdad811e6a657b1e3c63e98",
                "size": 169136,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/driver-s-license.png"
              }
            ],
            "qualityIssue": "illegible"
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "qualityIssue": "illegible",
            "applicabilityReason": "Zoe uploaded a tax return image, but the seeded copy is illegible and must enter Document Review.",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "bank-statements-last-6-months.pdf",
                "previewUrl": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/bank-statements-last-6-months.pdf",
                "qualityIssue": null,
                "sha256": "6aa649bb98e7f0e2be678d3bd25a7fb4e00921b7a6b78a09cbc3d959f179b6fa",
                "size": 13714,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/zoe-kim-ch7-wage-earner/bank-statements-last-6-months.pdf"
              }
            ]
          },
          {
            "id": "fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "name": "Vehicle loan or title statement",
            "category": "Property",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicabilityReason": "Zoe reported a financed vehicle, surrender intent, and a repossession threat.",
            "priority": "high",
            "evidenceFiles": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-zoe-kim-ch7-wage-earner-financialaffairs-prior-addresses-entries-0-id",
                "fields": {
                  "address": "1400 North Ogden Street, Denver, CO 80218",
                  "dates": "2022-09 to 2024-02"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips",
              "Self-employment or business income"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Kim",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-zoe-kim-ch7-wage-earner",
      "phone": "(970) 555-0203",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-zoe-kim-ch7-wage-earner",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 22,
        "blockers": [
          {
            "id": "intake-field-schema-start.debtor.county",
            "label": "Missing intake data: County",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
            "label": "Missing intake data: Weekend delivery apps six-month income total",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.county",
            "label": "Missing intake data: County",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
            "label": "Missing intake data: Weekend delivery apps six-month income total",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-zoe-kim-ch7-wage-earner-6",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-accuracy-flag-fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
            "label": "AI-flagged Document still needs a firm accuracy decision: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-accuracy-fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1-1",
            "label": "Document accuracy issue: Driver's license (illegible)",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "label": "Document requirement is unresolved: Tax return - last year",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "label": "Document requirement is unresolved: Pay stubs - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4",
            "label": "Document requirement is unresolved: Bank statements - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "label": "Document requirement is unresolved: Vehicle loan or title statement",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
            "label": "Intake still requires a Document response: Vehicle loan or title statement",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
            "label": "Intake still requires a Document response: Pay stubs - last 6 months",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
            "label": "Intake still requires a Document response: Tax return - last year",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-income-Six-month income is missing",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-zoe-kim-ch7-wage-earner-6",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 5,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-income-Six-month income is missing",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-zoe-kim-ch7-wage-earner-6",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": false,
            "blockerCount": 10,
            "blockers": [
              {
                "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-accuracy-flag-fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1",
                "label": "AI-flagged Document still needs a firm accuracy decision: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-accuracy-fake-document-zoe-kim-ch7-wage-earner-driver-s-license-1-1",
                "label": "Document accuracy issue: Driver's license (illegible)",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
                "label": "Document requirement is unresolved: Tax return - last year",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
                "label": "Document requirement is unresolved: Pay stubs - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-bank-statements-last-6-months-4",
                "label": "Document requirement is unresolved: Bank statements - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
                "label": "Document requirement is unresolved: Vehicle loan or title statement",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-zoe-kim-ch7-wage-earner-vehicle-loan-or-title-statement-5",
                "label": "Intake still requires a Document response: Vehicle loan or title statement",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-zoe-kim-ch7-wage-earner-pay-stubs-last-6-months-3",
                "label": "Intake still requires a Document response: Pay stubs - last 6 months",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-zoe-kim-ch7-wage-earner-tax-return-last-year-2",
                "label": "Intake still requires a Document response: Tax return - last year",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 2,
              "imageCount": 1,
              "pdfCount": 1
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "intake-field-schema-start.debtor.county",
                "label": "Missing intake data: County",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
                "label": "Missing intake data: Weekend delivery apps six-month income total",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.county",
                "label": "Missing intake data: County",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-missing-log-income.rows.1.sixMonthTotal",
                "label": "Missing intake data: Weekend delivery apps six-month income total",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-zoe-kim-ch7-wage-earner-6",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "zoe.kim.fake@example.test",
          "firstName": "Zoe",
          "id": "intake-fake-matter-zoe-kim-ch7-wage-earner-contact-1",
          "lastName": "Kim",
          "middleName": "Harper",
          "name": "Zoe Harper Kim",
          "phone": "(970) 555-0203",
          "role": "Lead"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, wage_earner, vehicle_surrender, repossession, illegible_document, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-zoe-kim-ch7-wage-earner-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "basics-Debtor identity is incomplete",
            "severity": "critical",
            "sectionId": "basics",
            "title": "Debtor identity is incomplete",
            "detail": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "chapter13-Arrears need plan treatment",
            "severity": "info",
            "sectionId": "chapter13",
            "title": "Arrears need plan treatment",
            "detail": "$2,100 in recorded arrears should be reconciled with plan treatment."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$33,000 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered No to vehicles but entered 2021 Honda Odyssey with a stated value.",
            "evidence": [
              {
                "path": "entryLog.property.vehicles",
                "value": "No"
              },
              {
                "path": "matter.assets[category='Vehicle']",
                "value": "2021 Honda Odyssey"
              }
            ],
            "id": "inconsistency-daniel-sofia-reyes-ch13-7",
            "sectionId": "property",
            "severity": "warning",
            "title": "Vehicle answer conflicts with property detail"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 13",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered No to vehicles but entered 2021 Honda Odyssey with a stated value.",
            "evidence": [
              {
                "path": "entryLog.property.vehicles",
                "value": "No"
              },
              {
                "path": "matter.assets[category='Vehicle']",
                "value": "2021 Honda Odyssey"
              }
            ],
            "id": "inconsistency-daniel-sofia-reyes-ch13-7",
            "sectionId": "property",
            "severity": "warning",
            "title": "Vehicle answer conflicts with property detail"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-daniel-sofia-reyes-ch13-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-daniel-sofia-reyes-ch13-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/daniel-sofia-reyes-ch13/driver-s-license.png",
              "sha256": "2155f38f8fbfff46a9700762fd06a86f39939b140daaa3732f80f86e8b34f642",
              "size": 237437,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/daniel-sofia-reyes-ch13/driver-s-license.png"
            }
          ],
          "id": "fake-document-daniel-sofia-reyes-ch13-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return - last year",
          "docId": "fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-last-year.pdf",
              "previewUrl": "./output/pilot-evidence/daniel-sofia-reyes-ch13/tax-return-last-year.pdf",
              "sha256": "afaa9952edb38d755aa5eb82e9d54aee0a002abbd7b77178cb1326aee038821a",
              "size": 4947,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/daniel-sofia-reyes-ch13/tax-return-last-year.pdf"
            }
          ],
          "id": "fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2",
          "name": "Tax return - last year",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Pay stubs - last 6 months",
          "docId": "fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
          "files": [],
          "id": "fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
          "name": "Pay stubs - last 6 months",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank statements - last 6 months",
          "docId": "fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
          "files": [],
          "id": "fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
          "name": "Bank statements - last 6 months",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Statements for all debts",
          "docId": "fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5-file-1",
              "mimeType": "application/pdf",
              "name": "statements-for-all-debts.pdf",
              "previewUrl": "./output/pilot-evidence/daniel-sofia-reyes-ch13/statements-for-all-debts.pdf",
              "sha256": "c7b35dc8140c414c16ab277c0311e620a91debae9316200bb33125a752c9097b",
              "size": 6874,
              "source": "intake_upload",
              "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
              "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
              "url": "./output/pilot-evidence/daniel-sofia-reyes-ch13/statements-for-all-debts.pdf"
            }
          ],
          "id": "fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5",
          "name": "Statements for all debts",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
          "customName": "Vehicle loan or title statement",
          "docId": "fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
          "files": [],
          "id": "fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
          "name": "Vehicle loan or title statement",
          "status": "open"
        }
      ],
      "email": "daniel.reyes.fake@example.test",
      "firstName": "Daniel",
      "id": "intake-fake-matter-daniel-sofia-reyes-ch13",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.property",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-daniel-sofia-reyes-ch13-7",
            "kind": "review",
            "label": "Vehicle answer conflicts with property detail",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The debtor answered No to vehicles but entered 2021 Honda Odyssey with a stated value."
          }
        ],
        "matterId": "fake-matter-daniel-sofia-reyes-ch13",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 30,
            "percent": 88,
            "required": 34
          },
          "documentCollection": {
            "applicable": 6,
            "collected": 3,
            "percent": 50
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 27,
            "percent": 96
          },
          "intakeChecklistCompletion": 88
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Vehicle repossession is scheduled for tomorrow morning according to a lender notice.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        },
        "missingItems": [
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "canonicalPath": "matter.documents[name='Vehicle loan or title statement']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Vehicle loan or title statement, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "kind": "document",
            "label": "Vehicle loan or title statement",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank statements - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank statements - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "kind": "document",
            "label": "Bank statements - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Pay stubs - last 6 months']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Pay stubs - last 6 months, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "kind": "document",
            "label": "Pay stubs - last 6 months",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.property",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-daniel-sofia-reyes-ch13-7",
            "kind": "review",
            "label": "Vehicle answer conflicts with property detail",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The debtor answered No to vehicles but entered 2021 Honda Odyssey with a stated value."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-daniel-sofia-reyes-ch13",
        "title": "Daniel Reyes fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Retain the family vehicle and cure arrears through a possible Chapter 13 plan.",
        "urgentConcerns": "Vehicle repossession is scheduled for tomorrow morning according to a lender notice.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Daniel filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-daniel-sofia-reyes-ch13-debtors-0-id",
            "firstName": "Daniel",
            "middleName": "Luis",
            "lastName": "Reyes",
            "otherNames": "",
            "email": "daniel.reyes.fake@example.test",
            "phone": "(303) 555-0204",
            "ssnLast4": "4504",
            "socialSecurityNumber": "222-33-4504",
            "address": "5912 South Jellison Street",
            "city": "Littleton",
            "state": "CO",
            "zipCode": "80123",
            "county": "Jefferson",
            "mailingAddressDifferent": false,
            "dateOfBirth": "05/17/1982"
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-debtors-1-id",
            "firstName": "Sofia",
            "middleName": "Marisol",
            "lastName": "Reyes",
            "otherNames": "",
            "email": "sofia.reyes.fake@example.test",
            "phone": "(303) 555-0205",
            "ssnLast4": "",
            "socialSecurityNumber": "",
            "address": "5912 South Jellison Street",
            "city": "Littleton",
            "state": "CO",
            "zipCode": "80123",
            "county": "Jefferson",
            "mailingAddressDifferent": false,
            "dateOfBirth": "10/29/1984"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "fake-daniel-sofia-reyes-ch13-household-dependents-0-id",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "fake-daniel-sofia-reyes-ch13-household-dependents-1-id",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "fake-daniel-sofia-reyes-ch13-assets-0-id",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-assets-1-id",
            "category": "Retirement or pension account",
            "description": "Daniel 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-assets-2-id",
            "category": "Vehicle",
            "description": "2021 Honda Odyssey",
            "estimatedValue": 23800,
            "lienAmount": 27100,
            "exemptionNote": "",
            "keepIntent": "Retain"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-1",
            "type": "secured",
            "creditor": "Honda Financial Services",
            "amount": 27100,
            "collateral": "2021 Honda Odyssey",
            "arrears": 2100,
            "notes": ""
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-2",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-daniel-sofia-reyes-ch13-3",
            "type": "unsecured",
            "creditor": "Credit cards and personal loans",
            "amount": 33000,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor entered as group estimate."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-daniel-sofia-reyes-ch13-income-0-id",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-income-1-id",
            "source": "Employment",
            "employer": "Aurora Unified Schools",
            "amount": 3900,
            "frequency": "Twice monthly",
            "sixMonthTotal": 23400
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-0-id",
            "category": "Housing contribution",
            "monthlyAmount": 1450,
            "notes": "Household contribution; no real estate claimed."
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-2-id",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-3-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-4-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-5-id",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-6-id",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-7-id",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-8-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "fake-daniel-sofia-reyes-ch13-expenses-9-id",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "No",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 825,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 2100,
          "disposableIncomeNotes": "Entered budget must be reviewed against vehicle-retention feasibility."
        },
        "documents": [
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/daniel-sofia-reyes-ch13/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "2155f38f8fbfff46a9700762fd06a86f39939b140daaa3732f80f86e8b34f642",
                "size": 237437,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/daniel-sofia-reyes-ch13/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-last-year.pdf",
                "previewUrl": "./output/pilot-evidence/daniel-sofia-reyes-ch13/tax-return-last-year.pdf",
                "qualityIssue": null,
                "sha256": "afaa9952edb38d755aa5eb82e9d54aee0a002abbd7b77178cb1326aee038821a",
                "size": 4947,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/daniel-sofia-reyes-ch13/tax-return-last-year.pdf"
              }
            ]
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "name": "Bank statements - last 6 months",
            "category": "Banking",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "statements-for-all-debts.pdf",
                "previewUrl": "./output/pilot-evidence/daniel-sofia-reyes-ch13/statements-for-all-debts.pdf",
                "qualityIssue": null,
                "sha256": "c7b35dc8140c414c16ab277c0311e620a91debae9316200bb33125a752c9097b",
                "size": 6874,
                "source": "intake_upload",
                "sourceTemplate": "CFPB Regulation Z Appendix G sample periodic statements",
                "sourceUrl": "https://www.consumerfinance.gov/rules-policy/regulations/1026/g/",
                "url": "./output/pilot-evidence/daniel-sofia-reyes-ch13/statements-for-all-debts.pdf"
              }
            ]
          },
          {
            "id": "fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "name": "Vehicle loan or title statement",
            "category": "Property",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicabilityReason": "Daniel and Sofia reported a financed vehicle, arrears, retention intent, and imminent repossession.",
            "caseStageDeadline": "Same day",
            "priority": "high",
            "evidenceFiles": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-daniel-sofia-reyes-ch13-financialaffairs-creditor-payments-90-days-entries-0-id",
                "fields": {
                  "creditor": "Honda Financial Services",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "960"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-daniel-sofia-reyes-ch13-financialaffairs-property-taken-entries-0-id",
                "fields": {
                  "creditor": "Honda Financial Services",
                  "date": "2026-07-14",
                  "property": "2021 Honda Odyssey repossession scheduled",
                  "value": "23800"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Reyes",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-daniel-sofia-reyes-ch13",
      "phone": "(303) 555-0204",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-daniel-sofia-reyes-ch13",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 20,
        "blockers": [
          {
            "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
            "label": "Missing intake data: Spouse Social Security number",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
            "label": "Missing intake data: Spouse Social Security number",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-daniel-sofia-reyes-ch13-7",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-daniel-sofia-reyes-ch13-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2",
            "label": "Document requirement is unresolved: Tax return - last year",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "label": "Document requirement is unresolved: Pay stubs - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "label": "Document requirement is unresolved: Bank statements - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5",
            "label": "Document requirement is unresolved: Statements for all debts",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "label": "Document requirement is unresolved: Vehicle loan or title statement",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
            "label": "Intake still requires a Document response: Vehicle loan or title statement",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
            "label": "Intake still requires a Document response: Bank statements - last 6 months",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
            "label": "Intake still requires a Document response: Pay stubs - last 6 months",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-basics-Debtor identity is incomplete",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-chapter13-Arrears need plan treatment",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-daniel-sofia-reyes-ch13-7",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 6,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-basics-Debtor identity is incomplete",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-chapter13-Arrears need plan treatment",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-daniel-sofia-reyes-ch13-7",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 9,
            "blockers": [
              {
                "id": "document-open-fake-document-daniel-sofia-reyes-ch13-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-daniel-sofia-reyes-ch13-tax-return-last-year-2",
                "label": "Document requirement is unresolved: Tax return - last year",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
                "label": "Document requirement is unresolved: Pay stubs - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
                "label": "Document requirement is unresolved: Bank statements - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-daniel-sofia-reyes-ch13-statements-for-all-debts-5",
                "label": "Document requirement is unresolved: Statements for all debts",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
                "label": "Document requirement is unresolved: Vehicle loan or title statement",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-daniel-sofia-reyes-ch13-vehicle-loan-or-title-statement-6",
                "label": "Intake still requires a Document response: Vehicle loan or title statement",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-daniel-sofia-reyes-ch13-bank-statements-last-6-months-4",
                "label": "Intake still requires a Document response: Bank statements - last 6 months",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-daniel-sofia-reyes-ch13-pay-stubs-last-6-months-3",
                "label": "Intake still requires a Document response: Pay stubs - last 6 months",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 3,
              "imageCount": 1,
              "pdfCount": 2
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 5,
            "blockers": [
              {
                "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
                "label": "Missing intake data: Spouse Social Security number",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
                "label": "Missing intake data: Spouse Social Security number",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-daniel-sofia-reyes-ch13-7",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "daniel.reyes.fake@example.test",
          "firstName": "Daniel",
          "id": "intake-fake-matter-daniel-sofia-reyes-ch13-contact-1",
          "lastName": "Reyes",
          "middleName": "Luis",
          "name": "Daniel Luis Reyes",
          "phone": "(303) 555-0204",
          "role": "Lead"
        },
        {
          "email": "sofia.reyes.fake@example.test",
          "firstName": "Sofia",
          "id": "intake-fake-matter-daniel-sofia-reyes-ch13-contact-2",
          "lastName": "Reyes",
          "middleName": "Marisol",
          "name": "Sofia Marisol Reyes",
          "phone": "(303) 555-0205",
          "role": "Joint Debtor"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 13 scenario: chapter_13, vehicle_retain, repossession, joint_case, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-daniel-sofia-reyes-ch13-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "basics-Debtor identity is incomplete",
            "severity": "critical",
            "sectionId": "basics",
            "title": "Debtor identity is incomplete",
            "detail": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "chapter13-Arrears need plan treatment",
            "severity": "info",
            "sectionId": "chapter13",
            "title": "Arrears need plan treatment",
            "detail": "$820 in recorded arrears should be reconciled with plan treatment."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$33,000 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered Not employed while entering positive income from Metro Facilities Group.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "No"
              },
              {
                "path": "matter.income[0]",
                "value": "Metro Facilities Group"
              }
            ],
            "id": "inconsistency-erin-cole-mitchell-ch13-8",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 13",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered Not employed while entering positive income from Metro Facilities Group.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "No"
              },
              {
                "path": "matter.income[0]",
                "value": "Metro Facilities Group"
              }
            ],
            "id": "inconsistency-erin-cole-mitchell-ch13-8",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-erin-cole-mitchell-ch13-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-erin-cole-mitchell-ch13-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/driver-s-license.png",
              "sha256": "a9d8bd573fc6ff7b83733b4707e97138996016b95b3fc149f3b4bc7c635ae1b6",
              "size": 246209,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/driver-s-license.png"
            }
          ],
          "id": "fake-document-erin-cole-mitchell-ch13-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return - last year",
          "docId": "fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-last-year.pdf",
              "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/tax-return-last-year.pdf",
              "sha256": "67c27aa5323ef8ff2118d6fea59cf06394d8768b7ffd6758d80bd1e45d6ea4d3",
              "size": 4943,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/tax-return-last-year.pdf"
            }
          ],
          "id": "fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2",
          "name": "Tax return - last year",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Pay stubs - last 6 months",
          "docId": "fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3-file-1",
              "mimeType": "application/pdf",
              "name": "pay-stubs-last-6-months.pdf",
              "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/pay-stubs-last-6-months.pdf",
              "sha256": "724a160f24fe1237d2a4d9b5fd9164c5daa730a29ec3bec24d11d041f977f640",
              "size": 13511,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/pay-stubs-last-6-months.pdf"
            }
          ],
          "id": "fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3",
          "name": "Pay stubs - last 6 months",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
          "customName": "Court paperwork",
          "docId": "fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
          "files": [],
          "id": "fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
          "name": "Court paperwork",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "The household rents the residence involved in the eviction case.",
          "customName": "Lease or rental agreement",
          "docId": "fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5-file-1",
              "mimeType": "application/pdf",
              "name": "lease-or-rental-agreement.pdf",
              "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/lease-or-rental-agreement.pdf",
              "sha256": "1631fcc4e2b455f6a5e267ac4c03f2209e386495cc01309a26ce9b27a1211ea6",
              "size": 2703,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
              "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
              "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/lease-or-rental-agreement.pdf"
            }
          ],
          "id": "fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5",
          "name": "Lease or rental agreement",
          "status": "ai_accepted"
        }
      ],
      "email": "erin.mitchell.fake@example.test",
      "firstName": "Erin",
      "id": "intake-fake-matter-erin-cole-mitchell-ch13",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-erin-cole-mitchell-ch13-8",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Not employed while entering positive income from Metro Facilities Group."
          }
        ],
        "matterId": "fake-matter-erin-cole-mitchell-ch13",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 31,
            "percent": 94,
            "required": 33
          },
          "documentCollection": {
            "applicable": 5,
            "collected": 4,
            "percent": 80
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 27,
            "percent": 96
          },
          "intakeChecklistCompletion": 94
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": {
          "due": "same_day",
          "reason": "Eviction judgment entered; lockout date on court notice is three days away.",
          "title": "Same-day attorney review of urgent collection or legal deadline"
        },
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "canonicalPath": "matter.documents[name='Court paperwork']",
            "caseStageDeadline": "Same day",
            "clientActionable": true,
            "clientInstruction": "Upload Court paperwork, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "kind": "document",
            "label": "Court paperwork",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The filing date, case number, and deadline must be visible to the attorney promptly."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.basics",
            "caseStageDeadline": "Same-day attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-basics-Debtor identity is incomplete",
            "kind": "review",
            "label": "Debtor identity is incomplete",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "basics",
            "whyNeeded": "At least one debtor is missing name or SSN last-four intake data."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "Joint case has spouse identity but no spouse SSN.",
            "canonicalPath": "matter.debtors[1].socialSecurityNumber",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Complete: Spouse Social Security number.",
            "id": "missing-log-start.debtor2.socialSecurityNumber",
            "kind": "field",
            "label": "Spouse Social Security number",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The answer is absent from canonical Matter data and cannot be inferred by the firm."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-erin-cole-mitchell-ch13-8",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Not employed while entering positive income from Metro Facilities Group."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-erin-cole-mitchell-ch13",
        "title": "Erin Mitchell fake client-entered Chapter 13 intake",
        "chapter": "13",
        "status": "review",
        "filingState": "UT",
        "district": "District of Utah",
        "clientGoals": "Address priority debt and evaluate whether Chapter 13 can help preserve the tenancy.",
        "urgentConcerns": "Eviction judgment entered; lockout date on court notice is three days away.",
        "priorBankruptcyFiled": "Yes",
        "priorBankruptcyDetails": "Erin filed Chapter 7 in 2015 in Colorado; case number not entered.",
        "hasDependents": "Yes",
        "spouseFilingJointly": "Yes",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-erin-cole-mitchell-ch13-debtors-0-id",
            "firstName": "Erin",
            "middleName": "Claire",
            "lastName": "Mitchell",
            "otherNames": "",
            "email": "erin.mitchell.fake@example.test",
            "phone": "(801) 555-0206",
            "ssnLast4": "4506",
            "socialSecurityNumber": "222-33-4506",
            "address": "934 East 3900 South",
            "city": "Salt Lake City",
            "state": "UT",
            "zipCode": "84124",
            "county": "Salt Lake",
            "mailingAddressDifferent": false,
            "dateOfBirth": "12/04/1979"
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-debtors-1-id",
            "firstName": "Cole",
            "middleName": "Andrew",
            "lastName": "Mitchell",
            "otherNames": "",
            "email": "cole.mitchell.fake@example.test",
            "phone": "(801) 555-0207",
            "ssnLast4": "",
            "socialSecurityNumber": "",
            "address": "934 East 3900 South",
            "city": "Salt Lake City",
            "state": "UT",
            "zipCode": "84124",
            "county": "Salt Lake",
            "mailingAddressDifferent": false,
            "dateOfBirth": "03/11/1981"
          }
        ],
        "household": {
          "householdSize": 4,
          "maritalStatus": "Married",
          "dependents": [
            {
              "id": "fake-erin-cole-mitchell-ch13-household-dependents-0-id",
              "name": "Fake minor child A",
              "age": "12",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            },
            {
              "id": "fake-erin-cole-mitchell-ch13-household-dependents-1-id",
              "name": "Fake minor child B",
              "age": "8",
              "relationship": "Child",
              "livesWithDebtor": "Yes"
            }
          ]
        },
        "assets": [
          {
            "id": "fake-erin-cole-mitchell-ch13-assets-0-id",
            "category": "Vehicle",
            "description": "2019 Ford F-150",
            "estimatedValue": 28200,
            "lienAmount": 25100,
            "exemptionNote": "",
            "financingStatus": "Financed",
            "keepIntent": "Keep",
            "make": "Ford",
            "mileage": "81000",
            "model": "F-150",
            "year": "2019"
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-assets-1-id",
            "category": "Bank or financial account",
            "description": "Chase joint checking",
            "estimatedValue": 2150,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-assets-2-id",
            "category": "Retirement or pension account",
            "description": "Erin 401(k)",
            "estimatedValue": 69000,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "401(k)"
          }
        ],
        "debts": [
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-1",
            "type": "secured",
            "creditor": "Ford Credit",
            "amount": 25100,
            "collateral": "2019 Ford F-150",
            "arrears": 820,
            "notes": "One payment behind."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-2",
            "type": "priority",
            "creditor": "IRS",
            "amount": 7400,
            "collateral": "",
            "arrears": 0,
            "notes": "Recent federal tax debt; verify transcript and priority amount."
          },
          {
            "id": "fake-debt-erin-cole-mitchell-ch13-3",
            "type": "unsecured",
            "creditor": "Credit cards and personal loans",
            "amount": 33000,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor entered as group estimate."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-erin-cole-mitchell-ch13-income-0-id",
            "source": "Employment",
            "employer": "Metro Facilities Group",
            "amount": 7100,
            "frequency": "Biweekly",
            "sixMonthTotal": 42600
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-income-1-id",
            "source": "Employment",
            "employer": "Aurora Unified Schools",
            "amount": 3900,
            "frequency": "Twice monthly",
            "sixMonthTotal": 23400
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-0-id",
            "category": "Rent",
            "monthlyAmount": 2100,
            "notes": "Rental residence involved in eviction case."
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 310,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-2-id",
            "category": "Water, sewer, garbage collection",
            "monthlyAmount": 115,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-3-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 245,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-4-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 925,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-5-id",
            "category": "Childcare & children education",
            "monthlyAmount": 640,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-6-id",
            "category": "Transportation",
            "monthlyAmount": 560,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-7-id",
            "category": "Vehicle payments",
            "monthlyAmount": 610,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-8-id",
            "category": "Vehicle insurance",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "fake-erin-cole-mitchell-ch13-expenses-9-id",
            "category": "Taxes not deducted from wages",
            "monthlyAmount": 210,
            "notes": ""
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "Yes",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "",
          "medianIncomeState": "",
          "estimatedMonthlyIncome": 0,
          "securedPropertyIntent": "",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": ""
        },
        "chapter13": {
          "planMonths": 60,
          "proposedMonthlyPayment": 900,
          "priorityClaimsEstimate": 7400,
          "arrearsCureEstimate": 5400,
          "disposableIncomeNotes": "Entered budget requires attorney review of rent arrears and Chapter 13 eligibility."
        },
        "documents": [
          {
            "id": "fake-document-erin-cole-mitchell-ch13-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "a9d8bd573fc6ff7b83733b4707e97138996016b95b3fc149f3b4bc7c635ae1b6",
                "size": 246209,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2",
            "name": "Tax return - last year",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-last-year.pdf",
                "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/tax-return-last-year.pdf",
                "qualityIssue": null,
                "sha256": "67c27aa5323ef8ff2118d6fea59cf06394d8768b7ffd6758d80bd1e45d6ea4d3",
                "size": 4943,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/tax-return-last-year.pdf"
              }
            ]
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3",
            "name": "Pay stubs - last 6 months",
            "category": "Income",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "pay-stubs-last-6-months.pdf",
                "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/pay-stubs-last-6-months.pdf",
                "qualityIssue": null,
                "sha256": "724a160f24fe1237d2a4d9b5fd9164c5daa730a29ec3bec24d11d041f977f640",
                "size": 13511,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/pay-stubs-last-6-months.pdf"
              }
            ]
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "name": "Court paperwork",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicability": "essential_now",
            "applicabilityReason": "Erin and Cole reported an eviction judgment and a three-day lockout deadline.",
            "caseStageDeadline": "Same day",
            "priority": "high",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5",
            "name": "Lease or rental agreement",
            "category": "Housing",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "applicabilityReason": "The household rents the residence involved in the eviction case.",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "lease-or-rental-agreement.pdf",
                "previewUrl": "./output/pilot-evidence/erin-cole-mitchell-ch13/lease-or-rental-agreement.pdf",
                "qualityIssue": null,
                "sha256": "1631fcc4e2b455f6a5e267ac4c03f2209e386495cc01309a26ce9b27a1211ea6",
                "size": 2703,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program March 2023 Document Request",
                "sourceUrl": "https://www.justice.gov/ust/file/document_request.pdf/dl",
                "url": "./output/pilot-evidence/erin-cole-mitchell-ch13/lease-or-rental-agreement.pdf"
              }
            ]
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "Yes",
            "entries": [],
            "fields": {},
            "selected": [
              "Wages, commissions, bonuses, or tips"
            ]
          },
          "other-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-erin-cole-mitchell-ch13-financialaffairs-creditor-payments-90-days-entries-0-id",
                "fields": {
                  "creditor": "Fake Residential Landlord",
                  "paymentDates": "2026-05 and 2026-06",
                  "totalPaid": "1800"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-erin-cole-mitchell-ch13-financialaffairs-lawsuits-entries-0-id",
                "fields": {
                  "caseNumber": "FAKE-EV-2026-114",
                  "court": "Salt Lake County Justice Court",
                  "hearingDate": "2026-07-10",
                  "type": "Eviction"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Mitchell",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-erin-cole-mitchell-ch13",
      "phone": "(801) 555-0206",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-erin-cole-mitchell-ch13",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 17,
        "blockers": [
          {
            "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
            "label": "Missing intake data: Spouse Social Security number",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
            "label": "Missing intake data: Spouse Social Security number",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-erin-cole-mitchell-ch13-8",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-erin-cole-mitchell-ch13-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2",
            "label": "Document requirement is unresolved: Tax return - last year",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3",
            "label": "Document requirement is unresolved: Pay stubs - last 6 months",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "label": "Document requirement is unresolved: Court paperwork",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5",
            "label": "Document requirement is unresolved: Lease or rental agreement",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
            "label": "Intake still requires a Document response: Court paperwork",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-basics-Debtor identity is incomplete",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-chapter13-Arrears need plan treatment",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-erin-cole-mitchell-ch13-8",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 6,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-basics-Debtor identity is incomplete",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-chapter13-Arrears need plan treatment",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-erin-cole-mitchell-ch13-8",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 6,
            "blockers": [
              {
                "id": "document-open-fake-document-erin-cole-mitchell-ch13-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-erin-cole-mitchell-ch13-tax-return-last-year-2",
                "label": "Document requirement is unresolved: Tax return - last year",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-erin-cole-mitchell-ch13-pay-stubs-last-6-months-3",
                "label": "Document requirement is unresolved: Pay stubs - last 6 months",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
                "label": "Document requirement is unresolved: Court paperwork",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-erin-cole-mitchell-ch13-lease-or-rental-agreement-5",
                "label": "Document requirement is unresolved: Lease or rental agreement",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-erin-cole-mitchell-ch13-court-paperwork-4",
                "label": "Intake still requires a Document response: Court paperwork",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 4,
              "imageCount": 1,
              "pdfCount": 3
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 5,
            "blockers": [
              {
                "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
                "label": "Missing intake data: Spouse Social Security number",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-missing-log-start.debtor2.socialSecurityNumber",
                "label": "Missing intake data: Spouse Social Security number",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-erin-cole-mitchell-ch13-8",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "erin.mitchell.fake@example.test",
          "firstName": "Erin",
          "id": "intake-fake-matter-erin-cole-mitchell-ch13-contact-1",
          "lastName": "Mitchell",
          "middleName": "Claire",
          "name": "Erin Claire Mitchell",
          "phone": "(801) 555-0206",
          "role": "Lead"
        },
        {
          "email": "cole.mitchell.fake@example.test",
          "firstName": "Cole",
          "id": "intake-fake-matter-erin-cole-mitchell-ch13-contact-2",
          "lastName": "Mitchell",
          "middleName": "Andrew",
          "name": "Cole Andrew Mitchell",
          "phone": "(801) 555-0207",
          "role": "Joint Debtor"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 13 scenario: chapter_13, renter, eviction, joint_case, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-erin-cole-mitchell-ch13-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$18,000 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered Employed while entering only benefits or other non-employment income.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "Yes"
              },
              {
                "path": "matter.income[0]",
                "value": "Social Security / public benefits"
              }
            ],
            "id": "inconsistency-theo-bennett-ch7-retired-9",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered Employed while entering only benefits or other non-employment income.",
            "evidence": [
              {
                "path": "matter.isEmployed",
                "value": "Yes"
              },
              {
                "path": "matter.income[0]",
                "value": "Social Security / public benefits"
              }
            ],
            "id": "inconsistency-theo-bennett-ch7-retired-9",
            "sectionId": "income",
            "severity": "warning",
            "title": "Employment answer conflicts with entered income"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-theo-bennett-ch7-retired-driver-s-license-1",
          "files": [],
          "id": "fake-document-theo-bennett-ch7-retired-driver-s-license-1",
          "name": "Driver's license",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank or financial account statements",
          "docId": "fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
          "files": [],
          "id": "fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
          "name": "Bank or financial account statements",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Statements for all debts",
          "docId": "fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
          "files": [],
          "id": "fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
          "name": "Statements for all debts",
          "status": "open"
        },
        {
          "applicability": "conditional",
          "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
          "customName": "Transfer records",
          "docId": "fake-document-theo-bennett-ch7-retired-transfer-records-4",
          "files": [],
          "id": "fake-document-theo-bennett-ch7-retired-transfer-records-4",
          "name": "Transfer records",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Tax return unavailability explanation",
          "docId": "fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5-file-1",
              "mimeType": "application/pdf",
              "name": "tax-return-unavailability-explanation.pdf",
              "previewUrl": "./output/pilot-evidence/theo-bennett-ch7-retired/tax-return-unavailability-explanation.pdf",
              "sha256": "1adf5dbca5b345564881d32b4494833042c43990183b1a6f3556a4cf63fc2a74",
              "size": 2639,
              "source": "intake_upload",
              "sourceTemplate": "IRS 2025 Form 1040 line groupings",
              "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
              "url": "./output/pilot-evidence/theo-bennett-ch7-retired/tax-return-unavailability-explanation.pdf"
            }
          ],
          "id": "fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
          "name": "Tax return unavailability explanation",
          "status": "ai_accepted"
        }
      ],
      "email": "theo.bennett.fake@example.test",
      "firstName": "Theo",
      "id": "intake-fake-matter-theo-bennett-ch7-retired",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Driver's license']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "kind": "document",
            "label": "Driver's license",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-theo-bennett-ch7-retired-9",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Employed while entering only benefits or other non-employment income."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "conditional",
            "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
            "canonicalPath": "matter.documents[name='Transfer records']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Transfer records, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-transfer-records-4",
            "kind": "document",
            "label": "Transfer records",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The records preserve the raw dates, recipients, amounts, and property facts for attorney review without characterizing the transaction legally."
          }
        ],
        "matterId": "fake-matter-theo-bennett-ch7-retired",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 27,
            "percent": 84,
            "required": 32
          },
          "documentCollection": {
            "applicable": 5,
            "collected": 1,
            "percent": 20
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 82
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Driver's license']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "kind": "document",
            "label": "Driver's license",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": null,
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-theo-bennett-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Driver's license']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Driver's license, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "kind": "document",
            "label": "Driver's license",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.income",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-theo-bennett-ch7-retired-9",
            "kind": "review",
            "label": "Employment answer conflicts with entered income",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "income",
            "whyNeeded": "The debtor answered Employed while entering only benefits or other non-employment income."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "conditional",
            "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
            "canonicalPath": "matter.documents[name='Transfer records']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Transfer records, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-theo-bennett-ch7-retired-transfer-records-4",
            "kind": "document",
            "label": "Transfer records",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The records preserve the raw dates, recipients, amounts, and property facts for attorney review without characterizing the transaction legally."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-theo-bennett-ch7-retired",
        "title": "Theo Bennett fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Address consumer debt while disclosing a recent repayment to a family member.",
        "urgentConcerns": "None reported.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "Yes",
        "hasOtherHouseholdIncome": "Yes",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-theo-bennett-ch7-retired-debtors-0-id",
            "firstName": "Theo",
            "middleName": "James",
            "lastName": "Bennett",
            "otherNames": "",
            "email": "theo.bennett.fake@example.test",
            "phone": "(303) 555-0208",
            "ssnLast4": "5508",
            "socialSecurityNumber": "333-44-5508",
            "address": "2450 West Alameda Avenue Unit 4",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80219",
            "county": "Denver",
            "mailingAddressDifferent": false,
            "dateOfBirth": ""
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Widowed",
          "dependents": []
        },
        "assets": [
          {
            "id": "fake-theo-bennett-ch7-retired-assets-0-id",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-theo-bennett-ch7-retired-assets-1-id",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "fake-theo-bennett-ch7-retired-assets-2-id",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "fake-theo-bennett-ch7-retired-assets-3-id",
            "category": "Household goods and furnishings",
            "description": "Apartment furniture, clothing, television, mobility equipment",
            "estimatedValue": 3600,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-theo-bennett-ch7-retired-1",
            "type": "unsecured",
            "creditor": "Capital One",
            "amount": 11100,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor did not enter account number or collector details."
          },
          {
            "id": "fake-debt-theo-bennett-ch7-retired-2",
            "type": "unsecured",
            "creditor": "",
            "amount": 4300,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical collector letter; creditor name not entered."
          },
          {
            "id": "fake-debt-theo-bennett-ch7-retired-3",
            "type": "unsecured",
            "creditor": "QuickCash Installment Loans",
            "amount": 2600,
            "collateral": "",
            "arrears": 0,
            "notes": "Possible high-interest loan; payment drafting from bank account."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-theo-bennett-ch7-retired-income-0-id",
            "source": "Social Security / public benefits",
            "employer": "Social Security Administration",
            "amount": 1980,
            "frequency": "Monthly",
            "sixMonthTotal": 11880
          },
          {
            "id": "fake-theo-bennett-ch7-retired-income-1-id",
            "source": "Pension / retirement",
            "employer": "Former employer pension",
            "amount": 500,
            "frequency": "Monthly",
            "sixMonthTotal": 3000
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "fake-theo-bennett-ch7-retired-expenses-6-id",
            "category": "Other expenses",
            "monthlyAmount": 95,
            "notes": "Prescription delivery and mobility supplies"
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Likely fixed-income review",
          "medianIncomeState": "Utah",
          "estimatedMonthlyIncome": 2480,
          "securedPropertyIntent": "No secured property listed.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Low-value non-retirement property; exemption review still required."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-transfer-records-4",
            "name": "Transfer records",
            "category": "Financial affairs",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicability": "conditional",
            "applicabilityReason": "Theo reported a recent family repayment and property transfer.",
            "whyNeeded": "The records preserve the raw dates, recipients, amounts, and property facts for attorney review without characterizing the transaction legally.",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
            "name": "Tax return unavailability explanation",
            "category": "Taxes",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "application/pdf",
                "name": "tax-return-unavailability-explanation.pdf",
                "previewUrl": "./output/pilot-evidence/theo-bennett-ch7-retired/tax-return-unavailability-explanation.pdf",
                "qualityIssue": null,
                "sha256": "1adf5dbca5b345564881d32b4494833042c43990183b1a6f3556a4cf63fc2a74",
                "size": 2639,
                "source": "intake_upload",
                "sourceTemplate": "IRS 2025 Form 1040 line groupings",
                "sourceUrl": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
                "url": "./output/pilot-evidence/theo-bennett-ch7-retired/tax-return-unavailability-explanation.pdf"
              }
            ]
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-theo-bennett-ch7-retired-financialaffairs-other-income-entries-0-id",
                "fields": {
                  "amount": "2480",
                  "frequency": "Monthly",
                  "source": "Social Security retirement and pension"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-theo-bennett-ch7-retired-financialaffairs-insider-debt-payments-entries-0-id",
                "fields": {
                  "amount": "4200",
                  "date": "2026-05-18",
                  "recipient": "Fake sibling",
                  "relationship": "Sibling",
                  "reason": "Repayment of family loan"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-theo-bennett-ch7-retired-financialaffairs-property-transfers-entries-0-id",
                "fields": {
                  "date": "2026-04-02",
                  "property": "2012 utility trailer",
                  "recipient": "Fake nephew",
                  "value": "1500"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-theo-bennett-ch7-retired-financialaffairs-closed-accounts-entries-0-id",
                "fields": {
                  "account": "Mountain America Credit Union checking",
                  "closedDate": "2025-12",
                  "institution": "Mountain America Credit Union"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Bennett",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-theo-bennett-ch7-retired",
      "phone": "(303) 555-0208",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-theo-bennett-ch7-retired",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 19,
        "blockers": [
          {
            "id": "intake-field-schema-start.debtor.dateOfBirth",
            "label": "Missing intake data: Date of birth",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "label": "Missing intake data: Debt creditor name",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.dateOfBirth",
            "label": "Missing intake data: Date of birth",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
            "label": "Missing intake data: Debt creditor name",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-theo-bennett-ch7-retired-9",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "label": "Document requirement is unresolved: Bank or financial account statements",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "label": "Document requirement is unresolved: Statements for all debts",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-theo-bennett-ch7-retired-transfer-records-4",
            "label": "Document requirement is unresolved: Transfer records",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
            "label": "Document requirement is unresolved: Tax return unavailability explanation",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
            "label": "Intake still requires a Document response: Driver's license",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
            "label": "Intake still requires a Document response: Bank or financial account statements",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
            "label": "Intake still requires a Document response: Statements for all debts",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-theo-bennett-ch7-retired-9",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 4,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-theo-bennett-ch7-retired-9",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 8,
            "blockers": [
              {
                "id": "document-open-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
                "label": "Document requirement is unresolved: Bank or financial account statements",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
                "label": "Document requirement is unresolved: Statements for all debts",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-theo-bennett-ch7-retired-transfer-records-4",
                "label": "Document requirement is unresolved: Transfer records",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-theo-bennett-ch7-retired-tax-return-unavailability-explanation-5",
                "label": "Document requirement is unresolved: Tax return unavailability explanation",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-theo-bennett-ch7-retired-driver-s-license-1",
                "label": "Intake still requires a Document response: Driver's license",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-theo-bennett-ch7-retired-bank-or-financial-account-statements-2",
                "label": "Intake still requires a Document response: Bank or financial account statements",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-theo-bennett-ch7-retired-statements-for-all-debts-3",
                "label": "Intake still requires a Document response: Statements for all debts",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 1,
              "imageCount": 0,
              "pdfCount": 1
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "intake-field-schema-start.debtor.dateOfBirth",
                "label": "Missing intake data: Date of birth",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
                "label": "Missing intake data: Debt creditor name",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.dateOfBirth",
                "label": "Missing intake data: Date of birth",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-debt-creditor-fake-debt-theo-bennett-ch7-retired-2",
                "label": "Missing intake data: Debt creditor name",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-theo-bennett-ch7-retired-9",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "theo.bennett.fake@example.test",
          "firstName": "Theo",
          "id": "intake-fake-matter-theo-bennett-ch7-retired-contact-1",
          "lastName": "Bennett",
          "middleName": "James",
          "name": "Theo James Bennett",
          "phone": "(303) 555-0208",
          "role": "Lead"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, recent_transfer, possible_preference, retired, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-theo-bennett-ch7-retired-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    },
    {
      "attorneyReview": {
        "flags": [
          {
            "id": "documents-Document requests are still open",
            "severity": "info",
            "sectionId": "documents",
            "title": "Document requests are still open",
            "detail": "Use the checklist to track pay advices, tax returns, IDs, statements, and case-specific backups."
          },
          {
            "id": "debts-Unsecured debt captured",
            "severity": "info",
            "sectionId": "debts",
            "title": "Unsecured debt captured",
            "detail": "$18,000 in unsecured claims is recorded for review."
          },
          {
            "detail": "The debtor answered No to job or business income while the Income section contains a positive source.",
            "evidence": [
              {
                "path": "matter.financialAffairs['job-or-business-income'].answer",
                "value": "No"
              },
              {
                "path": "matter.income[0].amount",
                "value": 620
              }
            ],
            "id": "inconsistency-lucas-romero-ch7-retired-10",
            "sectionId": "affairs",
            "severity": "warning",
            "title": "SOFA income answer conflicts with income rows"
          }
        ],
        "status": "not_started"
      },
      "bankruptcyType": "Chapter 7",
      "dataReview": {
        "accuracyStatus": "needs_review",
        "completenessStatus": "needs_client_action",
        "discrepancies": [
          {
            "detail": "The debtor answered No to job or business income while the Income section contains a positive source.",
            "evidence": [
              {
                "path": "matter.financialAffairs['job-or-business-income'].answer",
                "value": "No"
              },
              {
                "path": "matter.income[0].amount",
                "value": 620
              }
            ],
            "id": "inconsistency-lucas-romero-ch7-retired-10",
            "sectionId": "affairs",
            "severity": "warning",
            "title": "SOFA income answer conflicts with income rows"
          }
        ],
        "missingFields": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          }
        ],
        "sourceRevision": 1
      },
      "docChecklist": [
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Driver's license",
          "docId": "fake-document-lucas-romero-ch7-retired-driver-s-license-1",
          "files": [
            {
              "accuracyStatus": "verified",
              "id": "fake-document-lucas-romero-ch7-retired-driver-s-license-1-file-1",
              "mimeType": "image/png",
              "name": "driver-s-license.png",
              "previewUrl": "./output/pilot-evidence/lucas-romero-ch7-retired/driver-s-license.png",
              "sha256": "c65cc3abcaf6342ad1c67b61e0cc7f6d194366fe2f0ca1031311647d0ac6df1c",
              "size": 249513,
              "source": "intake_upload",
              "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
              "sourceUrl": "https://www.justice.gov/ust/moc",
              "url": "./output/pilot-evidence/lucas-romero-ch7-retired/driver-s-license.png"
            }
          ],
          "id": "fake-document-lucas-romero-ch7-retired-driver-s-license-1",
          "name": "Driver's license",
          "status": "ai_accepted"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Bank or financial account statements",
          "docId": "fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
          "files": [],
          "id": "fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
          "name": "Bank or financial account statements",
          "status": "open"
        },
        {
          "applicability": "essential_now",
          "applicabilityReason": "",
          "customName": "Statements for all debts",
          "docId": "fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
          "files": [],
          "id": "fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
          "name": "Statements for all debts",
          "status": "open"
        },
        {
          "applicability": "conditional",
          "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
          "customName": "Tax return unavailability explanation",
          "docId": "fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
          "files": [],
          "id": "fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
          "name": "Tax return unavailability explanation",
          "status": "open"
        }
      ],
      "email": "lucas.romero.fake@example.test",
      "firstName": "Lucas",
      "id": "intake-fake-matter-lucas-romero-ch7-retired",
      "intakeCompletion": {
        "bundleVersion": 2,
        "generatedAt": "2026-07-24T18:00:00.000Z",
        "items": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.affairs",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-lucas-romero-ch7-retired-10",
            "kind": "review",
            "label": "SOFA income answer conflicts with income rows",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The debtor answered No to job or business income while the Income section contains a positive source."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "conditional",
            "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
            "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
            "kind": "document",
            "label": "Tax return unavailability explanation",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The explanation prevents repeated requests for a document that may not exist and routes the issue for firm confirmation."
          }
        ],
        "matterId": "fake-matter-lucas-romero-ch7-retired",
        "matterRevision": 1,
        "metrics": {
          "blockingReadiness": {
            "complete": 27,
            "percent": 87,
            "required": 31
          },
          "documentCollection": {
            "applicable": 4,
            "collected": 1,
            "percent": 25
          },
          "fieldCompletion": {
            "applicable": 28,
            "entered": 26,
            "percent": 93
          },
          "intakeChecklistCompletion": 84
        },
        "reminderItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          }
        ],
        "ruleSetVersion": "2026-07-13.pilot-v1",
        "states": {
          "attorneyReview": "not_started",
          "documentReview": "pending",
          "intakeCompletion": "needs_client_action",
          "submission": "submitted",
          "dataAccuracy": "needs_review"
        },
        "urgentAttorneyTask": null,
        "missingItems": [
          {
            "applicability": "essential_now",
            "applicabilityReason": "The canonical Intake schema marks this Personal Info answer as required for the current client step.",
            "canonicalPath": "matter.debtors[0].dateOfBirth",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Return to Personal Info and answer: Date of birth.",
            "id": "schema-start.debtor.dateOfBirth",
            "kind": "field",
            "label": "Date of birth",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "start",
            "whyNeeded": "The firm needs this answer in canonical Matter data before administrative Intake collection is complete."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "The debtor entered a balance but omitted the creditor or collection agency name.",
            "canonicalPath": "matter.debts[id='fake-debt-lucas-romero-ch7-retired-2'].creditor",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Enter the creditor or collection agency name for the $4,300 debt.",
            "id": "debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "kind": "field",
            "label": "Debt creditor name",
            "priority": "high",
            "resolutionStatus": "open",
            "sectionId": "property",
            "whyNeeded": "The firm cannot reliably identify or organize an unnamed debt."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Bank or financial account statements']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Bank or financial account statements, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "kind": "document",
            "label": "Bank or financial account statements",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "attorney_only",
            "applicabilityReason": "Canonical review logic identified a fact for firm judgment, not a debtor collection request.",
            "canonicalPath": "reviewFlags.affairs",
            "caseStageDeadline": "During attorney review",
            "clientActionable": false,
            "clientInstruction": "No debtor action is requested from this flag.",
            "id": "flag-inconsistency-lucas-romero-ch7-retired-10",
            "kind": "review",
            "label": "SOFA income answer conflicts with income rows",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "affairs",
            "whyNeeded": "The debtor answered No to job or business income while the Income section contains a positive source."
          },
          {
            "applicability": "essential_now",
            "applicabilityReason": "This document is applicable to the debtor's entered facts and is needed to finish Intake collection.",
            "canonicalPath": "matter.documents[name='Statements for all debts']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Statements for all debts, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "kind": "document",
            "label": "Statements for all debts",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The firm needs source support for the related canonical Matter facts before administrative collection is complete."
          },
          {
            "applicability": "conditional",
            "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
            "canonicalPath": "matter.documents[name='Tax return unavailability explanation']",
            "caseStageDeadline": "Before Intake Completion can close",
            "clientActionable": true,
            "clientInstruction": "Upload Tax return unavailability explanation, replace it if unreadable, or tell the firm why it is unavailable.",
            "id": "document-fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
            "kind": "document",
            "label": "Tax return unavailability explanation",
            "priority": "medium",
            "resolutionStatus": "open",
            "sectionId": "documents",
            "whyNeeded": "The explanation prevents repeated requests for a document that may not exist and routes the issue for firm confirmation."
          }
        ],
        "revision": 1,
        "status": "needs_client_action"
      },
      "intakePackage": {
        "id": "fake-matter-lucas-romero-ch7-retired",
        "title": "Lucas Romero fake client-entered Chapter 7 intake",
        "chapter": "7",
        "status": "review",
        "filingState": "CO",
        "district": "District of Colorado",
        "clientGoals": "Complete Intake despite not having filed recent tax returns after extended unemployment.",
        "urgentConcerns": "Needs help explaining missing returns and finding older bank records.",
        "priorBankruptcyFiled": "No",
        "priorBankruptcyDetails": "",
        "hasDependents": "No",
        "spouseFilingJointly": "No",
        "isEmployed": "No",
        "hasOtherHouseholdIncome": "No",
        "personalInfoSubmittedAt": "2026-07-24T18:00:00.000Z",
        "createdAt": "2026-07-24T18:00:00.000Z",
        "updatedAt": "2026-07-24T18:00:00.000Z",
        "debtors": [
          {
            "id": "fake-lucas-romero-ch7-retired-debtors-0-id",
            "firstName": "Lucas",
            "middleName": "Miguel",
            "lastName": "Romero",
            "otherNames": "",
            "email": "lucas.romero.fake@example.test",
            "phone": "(720) 555-0209",
            "ssnLast4": "5509",
            "socialSecurityNumber": "333-44-5509",
            "address": "4880 Morrison Road Unit 2",
            "city": "Denver",
            "state": "CO",
            "zipCode": "80219",
            "county": "Denver",
            "mailingAddressDifferent": false,
            "dateOfBirth": ""
          }
        ],
        "household": {
          "householdSize": 1,
          "maritalStatus": "Widowed",
          "dependents": []
        },
        "assets": [
          {
            "id": "fake-lucas-romero-ch7-retired-assets-0-id",
            "category": "Bank or financial account",
            "description": "Wells Fargo checking",
            "estimatedValue": 780,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Checking"
          },
          {
            "id": "fake-lucas-romero-ch7-retired-assets-1-id",
            "category": "Bank or financial account",
            "description": "Wells Fargo savings",
            "estimatedValue": 1100,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "Savings"
          },
          {
            "id": "fake-lucas-romero-ch7-retired-assets-2-id",
            "category": "Retirement or pension account",
            "description": "Small rollover IRA",
            "estimatedValue": 14600,
            "lienAmount": 0,
            "exemptionNote": "",
            "accountType": "IRA"
          },
          {
            "id": "fake-lucas-romero-ch7-retired-assets-3-id",
            "category": "Household goods and furnishings",
            "description": "Apartment furniture, clothing, television, mobility equipment",
            "estimatedValue": 3600,
            "lienAmount": 0,
            "exemptionNote": ""
          }
        ],
        "debts": [
          {
            "id": "fake-debt-lucas-romero-ch7-retired-1",
            "type": "unsecured",
            "creditor": "Capital One",
            "amount": 11100,
            "collateral": "",
            "arrears": 0,
            "notes": "Debtor did not enter account number or collector details."
          },
          {
            "id": "fake-debt-lucas-romero-ch7-retired-2",
            "type": "unsecured",
            "creditor": "",
            "amount": 4300,
            "collateral": "",
            "arrears": 0,
            "notes": "Medical collector letter; creditor name not entered."
          },
          {
            "id": "fake-debt-lucas-romero-ch7-retired-3",
            "type": "unsecured",
            "creditor": "QuickCash Installment Loans",
            "amount": 2600,
            "collateral": "",
            "arrears": 0,
            "notes": "Possible high-interest loan; payment drafting from bank account."
          }
        ],
        "contracts": [],
        "codebtors": [],
        "income": [
          {
            "id": "fake-lucas-romero-ch7-retired-income-0-id",
            "source": "Public benefits",
            "employer": "Colorado SNAP and cash assistance",
            "amount": 620,
            "frequency": "Monthly",
            "sixMonthTotal": 3720
          }
        ],
        "payStubIncomeEvidence": [],
        "expenses": [
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-0-id",
            "category": "Rent or home/mortgage payment",
            "monthlyAmount": 1180,
            "notes": ""
          },
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-1-id",
            "category": "Electricity, heat, natural gas",
            "monthlyAmount": 120,
            "notes": ""
          },
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-2-id",
            "category": "Phone, cell, internet, satellite & cable",
            "monthlyAmount": 135,
            "notes": ""
          },
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-3-id",
            "category": "Food & housekeeping supplies",
            "monthlyAmount": 425,
            "notes": ""
          },
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-4-id",
            "category": "Medical & dental expenses",
            "monthlyAmount": 220,
            "notes": ""
          },
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-5-id",
            "category": "Transportation",
            "monthlyAmount": 160,
            "notes": ""
          },
          {
            "id": "fake-lucas-romero-ch7-retired-expenses-6-id",
            "category": "Other expenses",
            "monthlyAmount": 95,
            "notes": "Prescription delivery and mobility supplies"
          }
        ],
        "sofaEvents": [],
        "petitionFlags": {
          "evictionJudgment": "No",
          "hazardousProperty": "No",
          "hazardousPropertyAddress": "",
          "hazardousPropertyCity": "",
          "hazardousPropertyDescription": "",
          "hazardousPropertyImmediateReason": "",
          "hazardousPropertyState": "",
          "hazardousPropertyStreet2": "",
          "hazardousPropertyZipCode": "",
          "rentsResidence": "Yes",
          "soleProprietor": "No",
          "soleProprietorBusinessCity": "",
          "soleProprietorBusinessName": "",
          "soleProprietorBusinessState": "",
          "soleProprietorBusinessStreet": "",
          "soleProprietorBusinessType": "",
          "soleProprietorBusinessUnit": "",
          "soleProprietorBusinessZipCode": ""
        },
        "chapter7": {
          "meansTestStatus": "Likely fixed-income review",
          "medianIncomeState": "Utah",
          "estimatedMonthlyIncome": 2480,
          "securedPropertyIntent": "No secured property listed.",
          "priorBankruptcyDischarge": "",
          "assetDistributionEstimate": "Low-value non-retirement property; exemption review still required."
        },
        "chapter13": {
          "planMonths": 0,
          "proposedMonthlyPayment": 0,
          "priorityClaimsEstimate": 0,
          "arrearsCureEstimate": 0,
          "disposableIncomeNotes": ""
        },
        "documents": [
          {
            "id": "fake-document-lucas-romero-ch7-retired-driver-s-license-1",
            "name": "Driver's license",
            "category": "Identity",
            "status": "received",
            "notes": "Marked received in fake data entry run. No file import was used.",
            "extractionReviews": [],
            "debtorResponse": "uploaded",
            "firstRequestedAt": "2026-07-24T18:00:00.000Z",
            "requestState": "responded",
            "evidenceFiles": [
              {
                "accuracyStatus": "verified",
                "mimeType": "image/png",
                "name": "driver-s-license.png",
                "previewUrl": "./output/pilot-evidence/lucas-romero-ch7-retired/driver-s-license.png",
                "qualityIssue": null,
                "sha256": "c65cc3abcaf6342ad1c67b61e0cc7f6d194366fe2f0ca1031311647d0ac6df1c",
                "size": 249513,
                "source": "intake_upload",
                "sourceTemplate": "U.S. Trustee Program acceptable identity evidence",
                "sourceUrl": "https://www.justice.gov/ust/moc",
                "url": "./output/pilot-evidence/lucas-romero-ch7-retired/driver-s-license.png"
              }
            ]
          },
          {
            "id": "fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "name": "Bank or financial account statements",
            "category": "Assets",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "name": "Statements for all debts",
            "category": "Debt",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "evidenceFiles": []
          },
          {
            "id": "fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
            "name": "Tax return unavailability explanation",
            "category": "Taxes",
            "status": "needed",
            "notes": "Still needed. Import files were intentionally skipped.",
            "extractionReviews": [],
            "debtorResponse": null,
            "firstRequestedAt": "",
            "requestState": "untouched",
            "applicability": "conditional",
            "applicabilityReason": "Lucas reported no recent tax filing because of extended unemployment.",
            "whyNeeded": "The explanation prevents repeated requests for a document that may not exist and routes the issue for firm confirmation.",
            "evidenceFiles": []
          }
        ],
        "financialAffairs": {
          "prior-addresses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "community-property-state": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "job-or-business-income": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "other-income": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-lucas-romero-ch7-retired-financialaffairs-other-income-entries-0-id",
                "fields": {
                  "amount": "620",
                  "frequency": "Monthly",
                  "source": "Public benefits"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "creditor-payments-90-days": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-debt-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "insider-benefit-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "lawsuits": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-taken": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "setoff": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "receiver-property": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "charitable-gifts": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "losses": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "bankruptcy-consult-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "creditor-help-payments": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-transfers": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "asset-protection-transfer": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "closed-accounts": {
            "answer": "Yes",
            "entries": [
              {
                "id": "fake-lucas-romero-ch7-retired-financialaffairs-closed-accounts-entries-0-id",
                "fields": {
                  "account": "Mountain America Credit Union checking",
                  "closedDate": "2025-12",
                  "institution": "Mountain America Credit Union"
                }
              }
            ],
            "fields": {},
            "selected": []
          },
          "safe-deposit-box": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "storage-unit": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "property-for-others": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-liability-notice": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "hazardous-material-release": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "environmental-proceeding": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-connections": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          },
          "business-financial-statements": {
            "answer": "No",
            "entries": [],
            "fields": {},
            "selected": []
          }
        }
      },
      "intakeSubmittedDate": "2026-07-24",
      "lastName": "Romero",
      "leadStage": "Intake Submitted",
      "packageId": "fake-matter-lucas-romero-ch7-retired",
      "phone": "(720) 555-0209",
      "readinessPolicy": {
        "requireFileEvidence": true
      },
      "source": {
        "importedAt": "2026-07-24T18:00:00.000Z",
        "kind": "bk_fastlane_intake",
        "packageId": "fake-matter-lucas-romero-ch7-retired",
        "revision": 1,
        "syntheticOnly": true
      },
      "readiness": {
        "blockerCount": 17,
        "blockers": [
          {
            "id": "intake-field-schema-start.debtor.dateOfBirth",
            "label": "Missing intake data: Date of birth",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "label": "Missing intake data: Debt creditor name",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-schema-start.debtor.dateOfBirth",
            "label": "Missing intake data: Date of birth",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-field-debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
            "label": "Missing intake data: Debt creditor name",
            "owner": "Debtor / intake staff",
            "source": "intake"
          },
          {
            "id": "intake-completeness-open",
            "label": "Intake Completion has not been closed",
            "owner": "Intake staff",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-inconsistency-lucas-romero-ch7-retired-10",
            "label": "Unresolved data accuracy issue: [object Object]",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "intake-accuracy-unverified",
            "label": "Intake data accuracy has not been verified",
            "owner": "Firm reviewer",
            "source": "intake"
          },
          {
            "id": "document-open-fake-document-lucas-romero-ch7-retired-driver-s-license-1",
            "label": "Document requirement is unresolved: Driver's license",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "label": "Document requirement is unresolved: Bank or financial account statements",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "label": "Document requirement is unresolved: Statements for all debts",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-open-fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
            "label": "Document requirement is unresolved: Tax return unavailability explanation",
            "owner": "Document Review",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
            "label": "Intake still requires a Document response: Bank or financial account statements",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "document-completion-document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
            "label": "Intake still requires a Document response: Statements for all debts",
            "owner": "Debtor / document staff",
            "source": "documents"
          },
          {
            "id": "attorney-review-open",
            "label": "Attorney Review has not been approved",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-documents-Document requests are still open",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-debts-Unsecured debt captured",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          },
          {
            "id": "attorney-flag-inconsistency-lucas-romero-ch7-retired-10",
            "label": "Attorney Review flag is unresolved: [object Object]",
            "owner": "Attorney",
            "source": "attorney"
          }
        ],
        "contractVersion": "bkfl.stage4-readiness.v1",
        "evaluatedAt": "2026-07-24T18:00:00.000Z",
        "gates": {
          "attorneyReview": {
            "blockerCount": 4,
            "blockers": [
              {
                "id": "attorney-review-open",
                "label": "Attorney Review has not been approved",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-documents-Document requests are still open",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-debts-Unsecured debt captured",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              },
              {
                "id": "attorney-flag-inconsistency-lucas-romero-ch7-retired-10",
                "label": "Attorney Review flag is unresolved: [object Object]",
                "owner": "Attorney",
                "source": "attorney"
              }
            ],
            "status": "blocked"
          },
          "documentReview": {
            "accuracy": true,
            "blockerCount": 6,
            "blockers": [
              {
                "id": "document-open-fake-document-lucas-romero-ch7-retired-driver-s-license-1",
                "label": "Document requirement is unresolved: Driver's license",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
                "label": "Document requirement is unresolved: Bank or financial account statements",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
                "label": "Document requirement is unresolved: Statements for all debts",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-open-fake-document-lucas-romero-ch7-retired-tax-return-unavailability-explanation-4",
                "label": "Document requirement is unresolved: Tax return unavailability explanation",
                "owner": "Document Review",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-lucas-romero-ch7-retired-bank-or-financial-account-statements-2",
                "label": "Intake still requires a Document response: Bank or financial account statements",
                "owner": "Debtor / document staff",
                "source": "documents"
              },
              {
                "id": "document-completion-document-fake-document-lucas-romero-ch7-retired-statements-for-all-debts-3",
                "label": "Intake still requires a Document response: Statements for all debts",
                "owner": "Debtor / document staff",
                "source": "documents"
              }
            ],
            "completeness": false,
            "evidence": {
              "fileCount": 1,
              "imageCount": 1,
              "pdfCount": 0
            },
            "status": "blocked"
          },
          "intakeCompletion": {
            "accuracy": false,
            "blockerCount": 7,
            "blockers": [
              {
                "id": "intake-field-schema-start.debtor.dateOfBirth",
                "label": "Missing intake data: Date of birth",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
                "label": "Missing intake data: Debt creditor name",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-schema-start.debtor.dateOfBirth",
                "label": "Missing intake data: Date of birth",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-field-debt-creditor-fake-debt-lucas-romero-ch7-retired-2",
                "label": "Missing intake data: Debt creditor name",
                "owner": "Debtor / intake staff",
                "source": "intake"
              },
              {
                "id": "intake-completeness-open",
                "label": "Intake Completion has not been closed",
                "owner": "Intake staff",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-inconsistency-lucas-romero-ch7-retired-10",
                "label": "Unresolved data accuracy issue: [object Object]",
                "owner": "Firm reviewer",
                "source": "intake"
              },
              {
                "id": "intake-accuracy-unverified",
                "label": "Intake data accuracy has not been verified",
                "owner": "Firm reviewer",
                "source": "intake"
              }
            ],
            "completeness": false,
            "status": "blocked"
          }
        },
        "ready": false,
        "targetStage": "Intake Submitted"
      },
      "calendarEvents": [],
      "communications": [],
      "contacts": [
        {
          "email": "lucas.romero.fake@example.test",
          "firstName": "Lucas",
          "id": "intake-fake-matter-lucas-romero-ch7-retired-contact-1",
          "lastName": "Romero",
          "middleName": "Miguel",
          "name": "Lucas Miguel Romero",
          "phone": "(720) 555-0209",
          "role": "Lead"
        }
      ],
      "createdDate": "2026-07-24",
      "customFields": {},
      "intakeSentDate": "2026-07-24",
      "leadNotes": "Synthetic Intake pipeline client. Chapter 7 scenario: chapter_7, unemployed, tax_return_unavailable, need_help, inconsistent_answer.",
      "notes": [],
      "tasks": [],
      "timeEntries": [],
      "timeline": [
        {
          "action": "Imported from BK FastLane Intake",
          "date": "2026-07-24",
          "detail": "Synthetic-only package with real PDF/image evidence files",
          "id": "intake-fake-matter-lucas-romero-ch7-retired-timeline-import",
          "user": "BK FastLane Intake Agent"
        }
      ]
    }
  ],
  "sourceManifest": "./realistic-intake-evidence-manifest.json",
  "status": "realistic-intake-pilot-ready",
  "syntheticOnly": true
})
})
