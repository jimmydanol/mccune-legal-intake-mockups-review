window.JIMMY_CHANGE_META = {
  updated: "2026-07-09",
  branch: "jimmy/assets-address-autocomplete-review-2026-07-08",
  publishUrl: "https://jimmydanol.github.io/mccune-legal-intake-mockups-review/"
};

window.JIMMY_CHANGE_ITEMS = [
  {
    id: "phone-formatting",
    title: "Phone number entry formatting",
    category: "Data entry",
    status: "Live on Jimmy branch",
    commit: "c3d43f8",
    pages: ["Personal Information"],
    summary: "Debtor and spouse phone fields format typed or pasted digits as (202) 507-9145.",
    mattDecision: "Select this if Matt wants the phone formatting behavior copied into his branch.",
    links: [
      { label: "Open personal info", href: "personal.html" }
    ]
  },
  {
    id: "asset-address-zestimate",
    title: "House asset Zestimate and geo/address API",
    category: "Assets",
    status: "Live on Jimmy branch",
    commit: "Jimmy branch",
    pages: ["Assets"],
    summary: "Real estate entries use the geo/address suggestion API and include a Get Zestimate button for property value lookup.",
    mattDecision: "Select this if Matt wants the house asset Zestimate and geo/address workflow copied into his branch.",
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
    mattDecision: "Select this if Matt wants definite duplicate-entry carry-forward copied into his branch.",
    links: [
      { label: "Open login", href: "login.html" },
      { label: "Open debts", href: "debts.html" },
      { label: "Open expenses", href: "expenses.html" }
    ]
  }
];
