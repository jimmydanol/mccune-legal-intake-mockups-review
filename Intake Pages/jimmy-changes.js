window.JIMMY_CHANGE_META = {
  updated: "2026-07-09",
  branch: "main - Matt + Jimmy shared",
  publishUrl: window.location.origin + window.location.pathname,
  mattPublishUrl: "https://mmccune22.github.io/mccune-legal-intake-mockups/Intake%20Pages/",
  reviewApiUrl: "https://mccune-review-api.pages.dev/api/checklist",
  reviewMessagesApiUrl: "https://mccune-review-api.pages.dev/api/messages",
  reviewRequestsApiUrl: "https://mccune-review-api.pages.dev/api/requests"
};

window.JIMMY_CHANGE_ITEMS = [
  {
    id: "phone-formatting",
    title: "Data intake formatting best practices",
    date: "2026-07-09",
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
    date: "2026-07-09",
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
    date: "2026-07-09",
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
    date: "2026-07-09",
    category: "Collaboration",
    status: "Live on Matt and Jimmy sites",
    commit: "c80fa1e + shared sync",
    pages: ["Colab"],
    summary: "Page 9 includes a shared comment feed where Matt and Jimmy can post messages, see the same conversation, and receive automatic updates.",
    mattDecision: "The shared conversation is included on both Page 9 URLs.",
    links: [
      { label: "Open Page 9", href: "jimmy-changes.html" }
    ]
  },
  {
    id: "matt-feature-requests",
    title: "Matt-to-Jimmy feature requests",
    date: "2026-07-09",
    category: "Collaboration",
    status: "Live on Matt and Jimmy sites",
    commit: "feature-requests-v1",
    pages: ["Colab"],
    summary: "Page 9 includes a shared feature request section where Matt can submit requests and Jimmy can record when each request is implemented.",
    mattDecision: "Requests and implementation status stay synchronized across both Page 9 URLs.",
    links: [
      { label: "Open Page 9", href: "jimmy-changes.html" }
    ]
  },
  {
    id: "financial-affairs-simplified-labels",
    title: "Simplified Financial affairs question labels",
    date: "2026-07-09",
    category: "Design",
    status: "Live on Matt and Jimmy sites",
    commit: "financial-affairs-labels-v1",
    pages: ["Financial affairs"],
    summary: "Financial affairs keeps its descriptive section headings while removing the Part 1, Part 2, and similar prefixes, separator bullets, and numbered tiles beside all 27 questions.",
    mattDecision: "The question wording, answer controls, conditional details, and court-paperwork trigger remain unchanged.",
    links: [
      { label: "Open Financial affairs", href: "financial-affairs.html" }
    ]
  },
  {
    id: "assets-default-no",
    title: "Assets questions default to No",
    date: "2026-07-09",
    category: "Data entry",
    status: "Live on Matt and Jimmy sites",
    commit: "assets-default-no-v1",
    pages: ["Assets"],
    summary: "Every unanswered Yes/No question on Assets now starts with No selected, while answers already saved in the current session remain unchanged.",
    mattDecision: "Conditional asset details remain hidden until the debtor changes the related answer to Yes.",
    links: [
      { label: "Open Assets", href: "assets.html" }
    ]
  },
  {
    id: "colab-newest-first",
    title: "Newest Page 9 changes appear first",
    date: "2026-07-09",
    category: "Design",
    status: "Live on Matt and Jimmy sites",
    commit: "colab-newest-first-v1",
    pages: ["Colab"],
    summary: "Page 9 now displays the newest feature and design changes at the top, including later changes logged on the same day.",
    mattDecision: "This changes only the changelog display order; shared statuses, comments, feature requests, and editable writing remain unchanged.",
    links: [
      { label: "Open Page 9", href: "jimmy-changes.html" }
    ]
  }
];
