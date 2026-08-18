(function () {
  "use strict";

  window.BKFLSiteReplicatorData = Object.freeze({
    snapshotDate: "August 18, 2026",
    updateReceivedAt: "9:04 AM MT",
    source: {
      repository: "BKFastPassLLC/bkfp-react-fe",
      branch: "dev_v2",
      commit: "baa71e9",
      repositoryUrl: "https://github.com/BKFastPassLLC/bkfp-react-fe",
      commitUrl: "https://github.com/BKFastPassLLC/bkfp-react-fe/commit/baa71e9b1bd0fdb8a4b95bd5acdae9101f35363d"
    },
    reported: {
      frontendCompleted: [
        "Intake Form merge conflicts resolved and aligned with the common document step.",
        "Income, Debts, Financial Affairs, and Counselling Class now use the shared document sidebar.",
        "CRM browser Back and Forward navigation restrictions added.",
        "Assets page UI and field validations completed.",
        "Documents Upload UI completed."
      ],
      backendCompleted: [
        "Lead creation with automatic invite-link-sent behavior.",
        "Contact List API.",
        "Debtor sign-up with validations and email verification.",
        "Firm and debtor login and logout APIs.",
        "Forgot Password API."
      ],
      inProgress: [
        "Personal Details API.",
        "Sprint 2 frontend, backend, AI, and design work."
      ],
      design: [
        "Magic Upload",
        "CRM Leads and Leads Dashboard",
        "Documents and Communication",
        "Notes and Tasks",
        "AI screens and related popups"
      ]
    },
    verification: [
      {
        state: "verified",
        title: "Current development branch",
        detail: "The active Phase 2 frontend work is on dev_v2, not the older dev branch."
      },
      {
        state: "verified",
        title: "Source and build",
        detail: "The exact dev_v2 head was checked out and the production build completed successfully."
      },
      {
        state: "review",
        title: "Code-quality follow-up",
        detail: "Lint completed without errors, but warnings and dependency-audit findings still require engineering review."
      },
      {
        state: "review",
        title: "Authenticated acceptance",
        detail: "Tenant and login dependencies prevent this public replica from proving the completed CRM and Intake flows end to end."
      }
    ],
    pullRequests: [
      {
        number: 756,
        title: "UI fixes and field validations",
        url: "https://github.com/BKFastPassLLC/bkfp-react-fe/pull/756"
      },
      {
        number: 757,
        title: "V2 Intake document upload for personal info and assets",
        url: "https://github.com/BKFastPassLLC/bkfp-react-fe/pull/757"
      },
      {
        number: 758,
        title: "Latest dev_v2 integration",
        url: "https://github.com/BKFastPassLLC/bkfp-react-fe/pull/758"
      }
    ]
  });
})();
