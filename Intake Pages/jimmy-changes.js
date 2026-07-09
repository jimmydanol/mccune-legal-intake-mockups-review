window.JIMMY_CHANGE_META = {
  updated: "2026-07-09",
  branch: "main - Matt + Jimmy shared",
  publishUrl: window.location.origin + window.location.pathname,
  mattPublishUrl: "https://mmccune22.github.io/mccune-legal-intake-mockups/Intake%20Pages/",
  reviewApiUrl: "https://mccune-review-api.pages.dev/api/checklist",
  reviewMessagesApiUrl: "https://mccune-review-api.pages.dev/api/messages"
};

window.JIMMY_CHANGE_ITEMS = [
  {
    id: "phone-formatting",
    title: "Data intake formatting best practices",
    category: "Data entry",
    status: "Live on Matt and Jimmy sites",
    commit: "618bc91",
    pages: ["All intake pages"],
    summary: "Structured fields now clean up as the debtor types or leaves the field: phone numbers, Social Security numbers, ZIP codes, dates, dollar amounts, email addresses, years, ages, EINs, and mileage.",
    mattDecision: "The data-intake formatting behavior is included on both sites.",
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
    status: "Live on Matt and Jimmy sites",
    commit: "675714b + c795738",
    pages: ["Assets"],
    summary: "Real estate entries use the geo/address suggestion API and include a Get Zestimate button for property value lookup.",
    mattDecision: "The Zestimate and geo/address workflow is included on both sites.",
    links: [
      { label: "Open assets", href: "assets.html" }
    ]
  },
  {
    id: "duplicate-entry-carryover",
    title: "Definite duplicate entry carry-forward",
    category: "Data entry",
    status: "Live on Matt and Jimmy sites",
    commit: "f96cb1e",
    pages: ["Login", "Personal Information", "Debts", "Monthly expenses"],
    summary: "Clearly duplicate values carry forward: login name and email populate Personal, and mortgage, HOA, and vehicle payment amounts populate matching Expense rows.",
    mattDecision: "Definite duplicate-entry carry-forward is included on both sites.",
    links: [
      { label: "Open login", href: "login.html" },
      { label: "Open debts", href: "debts.html" },
      { label: "Open expenses", href: "expenses.html" }
    ]
  },
  {
    id: "shared-page9-conversation",
    title: "Shared Page 9 conversation",
    category: "Collaboration",
    status: "Live on Matt and Jimmy sites",
    commit: "c80fa1e + shared sync",
    pages: ["Jimmy's changes"],
    summary: "Page 9 includes a shared comment feed where Matt and Jimmy can post messages, see the same conversation, and receive automatic updates.",
    mattDecision: "The shared conversation is included on both Page 9 URLs.",
    links: [
      { label: "Open Page 9", href: "jimmy-changes.html" }
    ]
  }
];
