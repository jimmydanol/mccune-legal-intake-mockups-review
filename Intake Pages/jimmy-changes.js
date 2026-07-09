window.JIMMY_CHANGE_META = {
  updated: "2026-07-09",
  branch: "jimmy/assets-address-autocomplete-review-2026-07-08",
  publishUrl: "https://jimmydanol.github.io/mccune-legal-intake-mockups-review/Intake%20Pages/jimmy-changes.html",
  mattPublishUrl: "https://mmccune22.github.io/mccune-legal-intake-mockups/Intake%20Pages/",
  reviewApiUrl: "https://mccune-review-api.pages.dev/api/checklist",
  reviewMessagesApiUrl: "https://mccune-review-api.pages.dev/api/messages"
};

window.JIMMY_CHANGE_ITEMS = [
  {
    id: "phone-formatting",
    title: "Data intake formatting best practices",
    category: "Data entry",
    status: "Live on Jimmy branch",
    commit: "618bc91",
    pages: ["All intake pages"],
    summary: "Structured fields now clean up as the debtor types or leaves the field: phone numbers, Social Security numbers, ZIP codes, dates, dollar amounts, email addresses, years, ages, EINs, and mileage.",
    mattDecision: "Choose Implement to request the full data-intake formatting behavior for Matt's branch.",
    links: [
      { label: "Open login", href: "login.html" },
      { label: "Open personal info", href: "personal.html" },
      { label: "Open assets", href: "assets.html" },
      { label: "Open debts", href: "debts.html" },
      { label: "Open expenses", href: "expenses.html" }
    ]
  },
  {
    id: "asset-address-zestimate",
    title: "House asset Zestimate and geo/address API",
    category: "Assets",
    status: "Live on Jimmy branch",
    commit: "675714b + c795738",
    pages: ["Assets"],
    summary: "Real estate entries use the geo/address suggestion API and include a Get Zestimate button for property value lookup.",
    mattDecision: "Choose Implement to request the house asset Zestimate and geo/address workflow for Matt's branch.",
    links: [
      { label: "Open assets", href: "assets.html" }
    ]
  },
  {
    id: "duplicate-entry-carryover",
    title: "Definite duplicate entry carry-forward",
    category: "Data entry",
    status: "Live on Jimmy branch",
    commit: "f96cb1e",
    pages: ["Login", "Personal Information", "Debts", "Monthly expenses"],
    summary: "Clearly duplicate values carry forward: login name and email populate Personal, and mortgage, HOA, and vehicle payment amounts populate matching Expense rows.",
    mattDecision: "Choose Implement to request definite duplicate-entry carry-forward for Matt's branch.",
    links: [
      { label: "Open login", href: "login.html" },
      { label: "Open debts", href: "debts.html" },
      { label: "Open expenses", href: "expenses.html" }
    ]
  }
];
