// Generated from court-notice-automations.jsx with scripts/build-court-notice-automations.mjs.
"use strict";
(function () {
    const { useEffect, useMemo, useState } = React;
    const AUTOMATIONS_KEY = "bkfl_lite_court_notice_automations_v2";
    const NOTICES_KEY = "bkfl_lite_court_notices_v2";
    const RUNS_KEY = "bkfl_lite_court_notice_runs_v2";
    const TEAM = ["Matt McCune", "Angie Sullivan", "Erin Park", "Marcus Reed"];
    const CHAPTERS = ["Chapter 7", "Chapter 13"];
    const JUDGES = ["Hon. Sandra Lee", "Hon. Barry Russell", "Hon. Michael Romero", "Hon. Elizabeth Brown"];
    const TRUSTEES = ["Robert Martinez", "Linda Chen", "David Wadsworth"];
    const NOTICE_TYPES = ["Credit Counseling Certificate", "341 Meeting Notice", "Trustee Request", "Motion for Relief from Stay", "Proof of Claim Deadline Notice", "Plan Confirmation Hearing Notice"];
    const TOKENS = ["client_name", "notice_type", "case_number", "notice_date", "chapter", "judge", "trustee", "document_name", "deadline_name", "deadline_date"];
    const clone = value => JSON.parse(JSON.stringify(value));
    const uid = prefix => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const blankFilters = () => ({ chapter: "", judge: "", trustee: "", logic1: "and", logic2: "and" });
    const blankTask = () => ({ id: uid("task-action"), type: "task", title: "Review {{notice_type}} for {{client_name}}", priority: "Medium", dueDays: 3, description: "Review {{document_name}} and complete the required case follow-up.", rules: [{ id: uid("rule"), chapter: "", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: [] }] });
    const blankEmail = () => ({ id: uid("email-action"), type: "email", from: "BK FastLane notifications", toMode: "Internal team", recipients: [], cc: [], subject: "{{notice_type}} received for {{client_name}}", body: "A new {{notice_type}} was received for {{client_name}} (case {{case_number}}).\n\nReview {{document_name}} before {{deadline_date}}." });
    const INITIAL_NOTICES = [
        { id: "notice-1001", receivedAt: "2026-08-17T08:42:00", clientName: "James & Sarah Thompson", caseNumber: "24-10234", chapter: "Chapter 7", judge: "Hon. Sandra Lee", trustee: "Robert Martinez", noticeType: "Credit Counseling Certificate", documentName: "Certificate of Credit Counseling.pdf", deadlineName: "Certificate review", deadlineDate: "2026-08-20", matterId: 1, status: "Ready" },
        { id: "notice-1002", receivedAt: "2026-08-17T09:18:00", clientName: "Maria Gonzalez", caseNumber: "24-10567", chapter: "Chapter 13", judge: "Hon. Barry Russell", trustee: "Linda Chen", noticeType: "Trustee Request", documentName: "Trustee Request for Documents.pdf", deadlineName: "Trustee response", deadlineDate: "2026-08-24", matterId: 2, status: "Ready" },
        { id: "notice-1003", receivedAt: "2026-08-17T10:06:00", clientName: "Tuan & Mai Nguyen", caseNumber: "25-01122", chapter: "Chapter 7", judge: "Hon. Michael Romero", trustee: "David Wadsworth", noticeType: "341 Meeting Notice", documentName: "Notice of Chapter 7 Bankruptcy Case.pdf", deadlineName: "341 preparation", deadlineDate: "2026-08-29", matterId: 7, status: "Ready" },
        { id: "notice-1004", receivedAt: "2026-08-17T11:31:00", clientName: "Kevin Bradley", caseNumber: "25-01340", chapter: "Chapter 7", judge: "Hon. Elizabeth Brown", trustee: "David Wadsworth", noticeType: "Motion for Relief from Stay", documentName: "Motion for Relief from Stay.pdf", deadlineName: "Objection deadline", deadlineDate: "2026-08-21", matterId: 8, status: "Ready" },
        { id: "notice-1005", receivedAt: "2026-08-17T13:04:00", clientName: "Diane & Mark Foster", caseNumber: "25-01478", chapter: "Chapter 13", judge: "Hon. Michael Romero", trustee: "David Wadsworth", noticeType: "Proof of Claim Deadline Notice", documentName: "Notice of Claims Bar Date.pdf", deadlineName: "Claims bar date", deadlineDate: "2026-09-15", matterId: 9, status: "Ready" },
        { id: "notice-1006", receivedAt: "2026-08-17T14:26:00", clientName: "Angela Morrison", caseNumber: "24-10891", chapter: "Chapter 13", judge: "Hon. Barry Russell", trustee: "Linda Chen", noticeType: "Plan Confirmation Hearing Notice", documentName: "Confirmation Hearing Notice.pdf", deadlineName: "Confirmation preparation", deadlineDate: "2026-09-03", matterId: 5, status: "Ready" }
    ];
    const INITIAL_AUTOMATIONS = [
        { id: "automation-certificate", name: "Credit counseling certificate review", noticeType: "Credit Counseling Certificate", enabled: true, filters: blankFilters(), actions: [{ id: "task-certificate", type: "task", title: "Review {{document_name}} for {{client_name}}", priority: "Medium", dueDays: 3, description: "Confirm that the certificate is legible, timely, and filed to the correct case.\n\nCase: {{case_number}} · {{chapter}}\nDeadline: {{deadline_date}}", rules: [
                        { id: "rule-certificate-13", chapter: "Chapter 13", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: ["Angie Sullivan"] },
                        { id: "rule-certificate-lee", chapter: "", judge: "Hon. Sandra Lee", trustee: "", logic1: "and", logic2: "and", assignees: ["Matt McCune"] }
                    ] }] },
        { id: "automation-trustee", name: "Route trustee document requests", noticeType: "Trustee Request", enabled: true, filters: blankFilters(), actions: [{ id: "task-trustee", type: "task", title: "Respond to {{trustee}} request for {{client_name}}", priority: "High", dueDays: 2, description: "Review {{document_name}} and prepare the requested response before {{deadline_date}}. Do not send or file without attorney approval.", rules: [
                        { id: "rule-trustee-wadsworth", chapter: "", judge: "", trustee: "David Wadsworth", logic1: "and", logic2: "and", assignees: ["Erin Park"] },
                        { id: "rule-trustee-ch13", chapter: "Chapter 13", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: ["Angie Sullivan", "Matt McCune"] },
                        { id: "rule-trustee-default", chapter: "", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: ["Angie Sullivan"] }
                    ] }] },
        { id: "automation-341", name: "Prepare for 341 meeting notices", noticeType: "341 Meeting Notice", enabled: true, filters: blankFilters(), actions: [{ id: "task-341", type: "task", title: "Prepare {{client_name}} for the 341 meeting", priority: "Medium", dueDays: 5, description: "Confirm the hearing details in {{document_name}}, update the case calendar, and prepare the client reminder. Attorney approval remains required before any message is sent.", rules: [
                        { id: "rule-341-13", chapter: "Chapter 13", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: ["Angie Sullivan", "Matt McCune"] },
                        { id: "rule-341-default", chapter: "", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: ["Erin Park"] }
                    ] }] }
    ];
    const readStored = (key, fallback) => { try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : clone(fallback);
    }
    catch {
        return clone(fallback);
    } };
    const localDate = value => new Date(value).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
    const addDays = (days, baseValue) => { const date = baseValue ? new Date(baseValue) : new Date(); date.setHours(12, 0, 0, 0); date.setDate(date.getDate() + Number(days || 0)); return date.toISOString().slice(0, 10); };
    const noticeTokenMap = notice => ({ client_name: notice.clientName, notice_type: notice.noticeType, case_number: notice.caseNumber, notice_date: new Date(notice.receivedAt).toLocaleDateString("en-US"), chapter: notice.chapter, judge: notice.judge || "Unassigned", trustee: notice.trustee || "Unassigned", document_name: notice.documentName, deadline_name: notice.deadlineName || "Court deadline", deadline_date: notice.deadlineDate || "Not provided" });
    const renderTokens = (text, notice) => String(text || "").replace(/\{\{([a-z_]+)\}\}/g, (match, key) => noticeTokenMap(notice)[key] || match);
    const rawTerms = rule => [
        { index: 0, label: `the case is ${rule.chapter}`, active: !!rule.chapter, key: "chapter" },
        { index: 1, label: `the judge is ${rule.judge}`, active: !!rule.judge, key: "judge" },
        { index: 2, label: `the trustee is ${rule.trustee}`, active: !!rule.trustee, key: "trustee" }
    ].filter(term => term.active);
    const connectorFor = (previous, current, rule) => previous.index === 1 && current.index === 2 ? (rule.logic2 || "and") : (rule.logic1 || "and");
    function ruleMatches(rule, notice) { const terms = rawTerms(rule).map(term => ({ ...term, match: notice[term.key] === rule[term.key] })); if (!terms.length)
        return true; let result = terms[0].match; for (let index = 1; index < terms.length; index += 1) {
        result = connectorFor(terms[index - 1], terms[index], rule) === "or" ? (result || terms[index].match) : (result && terms[index].match);
    } return result; }
    function ruleSummary(rule) { const terms = rawTerms(rule); const conditions = terms.length ? terms.reduce((text, term, index) => index === 0 ? term.label : `${text} ${connectorFor(terms[index - 1], term, rule).toUpperCase()} ${term.label}`, "") : "every matching notice"; return `Assigns ${rule.assignees?.length ? rule.assignees.join(", ") : "nobody yet"} when ${conditions}.`; }
    function filterSummary(filters) { const terms = rawTerms(filters || blankFilters()); if (!terms.length)
        return "Any chapter, judge, or trustee"; return terms.reduce((text, term, index) => index === 0 ? term.label : `${text} ${connectorFor(terms[index - 1], term, filters).toUpperCase()} ${term.label}`, "").replace(/^the /, "The "); }
    const actionValid = action => action?.type === "task" ? !!action.title.trim() && action.rules.length > 0 && action.rules.every(rule => rule.assignees?.length) : action?.type === "email" ? !!action.subject.trim() && !!action.body.trim() && (action.toMode !== "Internal team" || action.recipients.length > 0) : false;
    const emailDestination = action => action.toMode === "Internal team" ? (action.recipients.join(", ") || "No internal recipient selected") : action.toMode;
    function Icon({ name }) { const icons = { notice: "⚖", automation: "↯", task: "✓", email: "✉", search: "⌕", download: "⇩", spark: "✦", history: "↺", activity: "◷", warning: "!", close: "×", filter: "⌘", plus: "+" }; return React.createElement("span", { "aria-hidden": "true" }, icons[name] || name); }
    function Pill({ children, tone = "neutral" }) { return React.createElement("span", { className: `cn-pill cn-pill-${tone}` }, children); }
    function PrimaryButton({ children, className = "", ...props }) { return React.createElement("button", { className: `cn-button cn-button-primary ${className}`, ...props }, children); }
    function SecondaryButton({ children, className = "", ...props }) { return React.createElement("button", { className: `cn-button cn-button-secondary ${className}`, ...props }, children); }
    function Field({ label, hint, children, wide = false }) { return React.createElement("label", { className: `cn-field${wide ? " cn-field-wide" : ""}` },
        React.createElement("span", null, label),
        children,
        hint && React.createElement("small", null, hint)); }
    function TabButton({ active, children, ...props }) { return React.createElement("button", { className: `cn-tab${active ? " active" : ""}`, ...props }, children); }
    function EmptyState({ title, body, action }) { return React.createElement("div", { className: "cn-empty" },
        React.createElement("span", null,
            React.createElement(Icon, { name: "spark" })),
        React.createElement("h3", null, title),
        React.createElement("p", null, body),
        action); }
    function StatCard({ label, value, tone = "neutral" }) { return React.createElement("div", { className: `cn-stat cn-stat-${tone}` },
        React.createElement("strong", null, value),
        React.createElement("span", null, label)); }
    function TokenPicker({ onPick }) { return React.createElement("details", { className: "cn-token-picker" },
        React.createElement("summary", null, "+ Token"),
        React.createElement("div", { className: "cn-token-menu" }, TOKENS.map(token => React.createElement("button", { type: "button", key: token, onClick: () => onPick(`{{${token}}}`) }, `{{${token}}}`)))); }
    function TeamPicker({ selected, onChange, label = "Assign to" }) { const toggle = name => onChange(selected.includes(name) ? selected.filter(item => item !== name) : [...selected, name]); return React.createElement("div", { className: "cn-team-picker", role: "group", "aria-label": label }, TEAM.map(name => React.createElement("label", { key: name, className: selected.includes(name) ? "selected" : "" },
        React.createElement("input", { type: "checkbox", checked: selected.includes(name), onChange: () => toggle(name) }),
        React.createElement("span", { className: "cn-avatar" }, name.split(" ").map(part => part[0]).join("")),
        name))); }
    function ConditionEditor({ value, onChange, prefix = "Automation", compact = false }) {
        const patch = next => onChange({ ...value, ...next });
        return React.createElement("div", { className: `cn-condition-editor${compact ? " compact" : ""}`, "data-testid": `${prefix.toLowerCase().replace(/\s+/g, "-")}-conditions` },
            React.createElement(Field, { label: "Chapter" },
                React.createElement("select", { "aria-label": `${prefix} chapter`, value: value.chapter, onChange: e => patch({ chapter: e.target.value }) },
                    React.createElement("option", { value: "" }, "Any chapter"),
                    CHAPTERS.map(item => React.createElement("option", { key: item }, item)))),
            React.createElement("label", { className: "cn-logic" },
                React.createElement("span", null, "Combine"),
                React.createElement("select", { "aria-label": `${prefix} chapter and judge logic`, value: value.logic1, onChange: e => patch({ logic1: e.target.value }) },
                    React.createElement("option", { value: "and" }, "AND"),
                    React.createElement("option", { value: "or" }, "OR"))),
            React.createElement(Field, { label: "Judge" },
                React.createElement("select", { "aria-label": `${prefix} judge`, value: value.judge, onChange: e => patch({ judge: e.target.value }) },
                    React.createElement("option", { value: "" }, "Any judge"),
                    JUDGES.map(item => React.createElement("option", { key: item }, item)))),
            React.createElement("label", { className: "cn-logic" },
                React.createElement("span", null, "Combine"),
                React.createElement("select", { "aria-label": `${prefix} judge and trustee logic`, value: value.logic2, onChange: e => patch({ logic2: e.target.value }) },
                    React.createElement("option", { value: "and" }, "AND"),
                    React.createElement("option", { value: "or" }, "OR"))),
            React.createElement(Field, { label: "Trustee" },
                React.createElement("select", { "aria-label": `${prefix} trustee`, value: value.trustee, onChange: e => patch({ trustee: e.target.value }) },
                    React.createElement("option", { value: "" }, "Any trustee"),
                    TRUSTEES.map(item => React.createElement("option", { key: item }, item)))));
    }
    function RuleEditor({ rule, index, onChange, onRemove, canRemove }) {
        const patch = next => onChange({ ...rule, ...next });
        return React.createElement("div", { className: "cn-rule", "data-testid": `assignment-rule-${index + 1}` },
            React.createElement("div", { className: "cn-rule-head" },
                React.createElement("div", null,
                    React.createElement("strong", null,
                        "Rule ",
                        index + 1),
                    React.createElement("span", null, "Each matching rule contributes its assignees to one task.")),
                canRemove && React.createElement("button", { type: "button", "aria-label": `Remove assignment rule ${index + 1}`, onClick: onRemove },
                    React.createElement(Icon, { name: "close" }))),
            React.createElement(ConditionEditor, { value: rule, onChange: patch, prefix: `Rule ${index + 1}`, compact: true }),
            React.createElement("div", { className: "cn-assignees" },
                React.createElement("span", { className: "cn-label" },
                    "Assign to ",
                    React.createElement("em", null, "Required")),
                React.createElement(TeamPicker, { selected: rule.assignees || [], onChange: assignees => patch({ assignees }) }),
                !rule.assignees?.length && React.createElement("div", { className: "cn-inline-error" }, "Choose at least one person for this rule.")),
            React.createElement("div", { className: "cn-rule-summary" },
                React.createElement(Icon, { name: "spark" }),
                React.createElement("span", null, ruleSummary(rule))));
    }
    function TaskFields({ action, onChange }) {
        const patch = next => onChange({ ...action, ...next });
        const setRule = (index, rule) => patch({ rules: action.rules.map((item, itemIndex) => itemIndex === index ? rule : item) });
        const addRule = () => patch({ rules: [...action.rules, { id: uid("rule"), chapter: "", judge: "", trustee: "", logic1: "and", logic2: "and", assignees: [] }] });
        return React.createElement("div", { className: "cn-action-card editing", "data-testid": "court-notice-task-editor" },
            React.createElement("div", { className: "cn-action-head" },
                React.createElement("div", { className: "cn-action-icon" },
                    React.createElement(Icon, { name: "task" })),
                React.createElement("div", null,
                    React.createElement("h3", null, "Create task"),
                    React.createElement("p", null, "Create one case task and route it using chapter, judge, and trustee rules."))),
            React.createElement("div", { className: "cn-editor-grid cn-task-fields" },
                React.createElement(Field, { label: "Task title", hint: "Use tokens to insert case and notice details." },
                    React.createElement("div", { className: "cn-input-with-action" },
                        React.createElement("input", { "aria-label": "Task title", value: action.title, onChange: e => patch({ title: e.target.value }) }),
                        React.createElement(TokenPicker, { onPick: token => patch({ title: `${action.title}${action.title ? " " : ""}${token}` }) }))),
                React.createElement(Field, { label: "Priority" },
                    React.createElement("select", { "aria-label": "Task priority", value: action.priority, onChange: e => patch({ priority: e.target.value }) },
                        React.createElement("option", null, "Low"),
                        React.createElement("option", null, "Medium"),
                        React.createElement("option", null, "High"))),
                React.createElement(Field, { label: "Due" },
                    React.createElement("div", { className: "cn-due-field" },
                        React.createElement("input", { "aria-label": "Task due days", type: "number", min: "0", max: "60", value: action.dueDays, onChange: e => patch({ dueDays: Number(e.target.value) }) }),
                        React.createElement("span", null, "days after notice")))),
            React.createElement("div", { className: "cn-section-heading" },
                React.createElement("h4", null, "Assignment rules"),
                React.createElement("p", null, "Leave a dropdown empty to ignore it. Every rule needs at least one person.")),
            React.createElement("div", { className: "cn-rules" }, action.rules.map((rule, index) => React.createElement(RuleEditor, { key: rule.id, rule: rule, index: index, onChange: next => setRule(index, next), onRemove: () => patch({ rules: action.rules.filter((_, itemIndex) => itemIndex !== index) }), canRemove: action.rules.length > 1 }))),
            React.createElement(SecondaryButton, { type: "button", onClick: addRule, className: "cn-add-rule" }, "+ Add assignment rule"),
            React.createElement(Field, { label: "Description", hint: "Markdown and tokens are supported." },
                React.createElement("div", { className: "cn-description-wrap" },
                    React.createElement("textarea", { "aria-label": "Task description", rows: "6", value: action.description, onChange: e => patch({ description: e.target.value }) }),
                    React.createElement(TokenPicker, { onPick: token => patch({ description: `${action.description}${action.description ? " " : ""}${token}` }) }))));
    }
    function EmailFields({ action, onChange }) {
        const patch = next => onChange({ ...action, ...next });
        return React.createElement("div", { className: "cn-action-card editing", "data-testid": "court-notice-email-editor" },
            React.createElement("div", { className: "cn-action-head" },
                React.createElement("div", { className: "cn-action-icon email" },
                    React.createElement(Icon, { name: "email" })),
                React.createElement("div", null,
                    React.createElement("h3", null, "Send an email"),
                    React.createElement("p", null, "Prepare a notice email. In this prototype the message is logged locally and never transmitted."))),
            React.createElement("div", { className: "cn-email-safety" },
                React.createElement(Icon, { name: "warning" }),
                React.createElement("span", null, "Simulation only \u2014 processing a notice will prepare an email record, not send a message.")),
            React.createElement("div", { className: "cn-editor-grid cn-email-fields" },
                React.createElement(Field, { label: "From", hint: "Automation messages use the configured firm sender." },
                    React.createElement("input", { "aria-label": "Email from", value: action.from, readOnly: true })),
                React.createElement(Field, { label: "To" },
                    React.createElement("select", { "aria-label": "Email recipient type", value: action.toMode, onChange: e => patch({ toMode: e.target.value, recipients: e.target.value === "Internal team" ? action.recipients : [] }) },
                        React.createElement("option", null, "Internal team"),
                        React.createElement("option", null, "Client"),
                        React.createElement("option", null, "Filing attorney")))),
            action.toMode === "Internal team" && React.createElement("div", { className: "cn-recipient-block" },
                React.createElement("span", { className: "cn-label" },
                    "Internal recipients ",
                    React.createElement("em", null, "Required")),
                React.createElement(TeamPicker, { selected: action.recipients, onChange: recipients => patch({ recipients }), label: "Email recipients" }),
                !action.recipients.length && React.createElement("div", { className: "cn-inline-error" }, "Choose at least one internal recipient.")),
            React.createElement("div", { className: "cn-recipient-block" },
                React.createElement("span", { className: "cn-label" },
                    "Cc ",
                    React.createElement("small", null, "Optional")),
                React.createElement(TeamPicker, { selected: action.cc, onChange: cc => patch({ cc }), label: "Email cc recipients" })),
            React.createElement(Field, { label: "Subject" },
                React.createElement("div", { className: "cn-input-with-action" },
                    React.createElement("input", { "aria-label": "Email subject", value: action.subject, onChange: e => patch({ subject: e.target.value }) }),
                    React.createElement(TokenPicker, { onPick: token => patch({ subject: `${action.subject}${action.subject ? " " : ""}${token}` }) }))),
            React.createElement(Field, { label: "Body", hint: "Markdown and tokens are supported." },
                React.createElement("div", { className: "cn-description-wrap" },
                    React.createElement("textarea", { "aria-label": "Email body", rows: "7", value: action.body, onChange: e => patch({ body: e.target.value }) }),
                    React.createElement(TokenPicker, { onPick: token => patch({ body: `${action.body}${action.body ? " " : ""}${token}` }) }))));
    }
    function ActionEditor({ action, onCancel, onSave, saveLabel = "Save changes" }) { const [draft, setDraft] = useState(clone(action)); useEffect(() => setDraft(clone(action)), [action.id]); const valid = actionValid(draft); return React.createElement("div", { className: "cn-editor" },
        React.createElement("div", { className: "cn-editor-title" },
            React.createElement("div", null,
                React.createElement("div", { className: "cn-eyebrow" }, "ACTION"),
                React.createElement("h3", null, draft.type === "task" ? "Configure task action" : "Configure email action"))),
        draft.type === "task" ? React.createElement(TaskFields, { action: draft, onChange: setDraft }) : React.createElement(EmailFields, { action: draft, onChange: setDraft }),
        " ",
        !valid && React.createElement("div", { className: "cn-save-warning" },
            React.createElement(Icon, { name: "warning" }),
            " Complete the required content and recipient or assignment fields before saving."),
        React.createElement("div", { className: "cn-editor-actions" },
            React.createElement(SecondaryButton, { type: "button", onClick: onCancel }, "Cancel"),
            React.createElement(PrimaryButton, { type: "button", disabled: !valid, onClick: () => onSave(draft) }, saveLabel))); }
    function ActionChoice({ selected, onSelect }) { return React.createElement("div", { className: "cn-action-choice", role: "group", "aria-label": "Choose first action" },
        React.createElement("button", { type: "button", className: selected === "email" ? "selected" : "", "aria-pressed": selected === "email", onClick: () => onSelect("email") },
            React.createElement("span", { className: "cn-action-icon email" },
                React.createElement(Icon, { name: "email" })),
            React.createElement("strong", null, "Send an email"),
            React.createElement("small", null, "Prepare a notice message for the team, client, or filing attorney."),
            React.createElement("em", null, selected === "email" ? "Selected" : "Choose email")),
        React.createElement("button", { type: "button", className: selected === "task" ? "selected" : "", "aria-pressed": selected === "task", onClick: () => onSelect("task") },
            React.createElement("span", { className: "cn-action-icon" },
                React.createElement(Icon, { name: "task" })),
            React.createElement("strong", null, "Create a task"),
            React.createElement("small", null, "Route a case task by chapter, judge, or trustee."),
            React.createElement("em", null, selected === "task" ? "Selected" : "Choose task"))); }
    function CreateAutomationPanel({ onCancel, onCreate }) {
        const [draft, setDraft] = useState({ name: "", noticeType: "", enabled: true, filters: blankFilters(), actionType: "", action: null });
        const chooseAction = type => setDraft(current => ({ ...current, actionType: type, action: type === "task" ? blankTask() : blankEmail() }));
        const valid = !!draft.name.trim() && !!draft.noticeType && !!draft.action && actionValid(draft.action);
        const save = () => onCreate({ id: uid("automation"), name: draft.name.trim(), noticeType: draft.noticeType, enabled: draft.enabled, filters: clone(draft.filters), actions: [clone(draft.action)] });
        return React.createElement("div", { className: "cn-create", "data-testid": "create-automation-panel" },
            React.createElement("button", { type: "button", className: "cn-back", onClick: onCancel }, "\u2039 Court notice automations"),
            React.createElement("div", { className: "cn-create-header" },
                React.createElement("div", null,
                    React.createElement("div", { className: "cn-eyebrow" }, "NEW AUTOMATION"),
                    React.createElement("h2", null, "Create court notice automation"),
                    React.createElement("p", null, "Run an action whenever an imported court notice matches the notice type and optional case filters.")),
                React.createElement("div", { className: "cn-create-progress" },
                    React.createElement("span", { className: draft.name && draft.noticeType ? "done" : "active" }, "1"),
                    React.createElement("i", null),
                    React.createElement("span", { className: draft.actionType ? "done" : "" }, "2"),
                    React.createElement("small", null, "Setup \u00B7 First action"))),
            React.createElement("div", { className: "cn-create-layout" },
                React.createElement("div", { className: "cn-create-form" },
                    React.createElement("section", { className: "cn-form-section" },
                        React.createElement("div", { className: "cn-section-number" }, "1"),
                        React.createElement("div", { className: "cn-form-section-body" },
                            React.createElement("h3", null, "Name and notice type"),
                            React.createElement("p", null, "The automation runs only for this notice category."),
                            React.createElement("div", { className: "cn-editor-grid" },
                                React.createElement(Field, { label: "Name", hint: "Use a name your team will recognize in run history." },
                                    React.createElement("input", { "aria-label": "Automation name", placeholder: "Example: Route Chapter 13 trustee requests", value: draft.name, onChange: e => setDraft({ ...draft, name: e.target.value }) })),
                                React.createElement(Field, { label: "Notice type" },
                                    React.createElement("select", { "aria-label": "Notice type", value: draft.noticeType, onChange: e => setDraft({ ...draft, noticeType: e.target.value }) },
                                        React.createElement("option", { value: "" }, "Choose a court notice type"),
                                        NOTICE_TYPES.map(type => React.createElement("option", { key: type }, type))))))),
                    React.createElement("section", { className: "cn-form-section" },
                        React.createElement("div", { className: "cn-section-number" }, "2"),
                        React.createElement("div", { className: "cn-form-section-body" },
                            React.createElement("h3", null,
                                "Additional filters ",
                                React.createElement(Pill, null, "Optional")),
                            React.createElement("p", null, "Leave a filter empty to match any value. These filters decide whether the entire automation runs."),
                            React.createElement(ConditionEditor, { value: draft.filters, onChange: filters => setDraft({ ...draft, filters }) }),
                            React.createElement("div", { className: "cn-filter-summary" },
                                React.createElement(Icon, { name: "filter" }),
                                React.createElement("span", null, filterSummary(draft.filters))))),
                    React.createElement("section", { className: "cn-form-section" },
                        React.createElement("div", { className: "cn-section-number" }, "3"),
                        React.createElement("div", { className: "cn-form-section-body" },
                            React.createElement("h3", null, "Choose the first action"),
                            React.createElement("p", null, "You can add more email or task actions from the automation page after saving."),
                            React.createElement(ActionChoice, { selected: draft.actionType, onSelect: chooseAction }),
                            draft.action && (draft.action.type === "task" ? React.createElement(TaskFields, { action: draft.action, onChange: action => setDraft({ ...draft, action }) }) : React.createElement(EmailFields, { action: draft.action, onChange: action => setDraft({ ...draft, action }) }))))),
                React.createElement("aside", { className: "cn-create-review" },
                    React.createElement("div", { className: "cn-review-sticky" },
                        React.createElement("div", { className: "cn-eyebrow" }, "REVIEW"),
                        React.createElement("h3", null, draft.name || "Untitled automation"),
                        React.createElement("div", { className: "cn-review-line" },
                            React.createElement("span", null, "When"),
                            React.createElement("strong", null, draft.noticeType || "Choose a notice type")),
                        React.createElement("div", { className: "cn-review-line" },
                            React.createElement("span", null, "Filters"),
                            React.createElement("strong", null, filterSummary(draft.filters))),
                        React.createElement("div", { className: "cn-review-line" },
                            React.createElement("span", null, "Then"),
                            React.createElement("strong", null, draft.actionType ? draft.actionType === "task" ? "Create a task" : "Prepare an email" : "Choose an action")),
                        React.createElement("label", { className: "cn-enable-row" },
                            React.createElement("input", { type: "checkbox", checked: draft.enabled, onChange: e => setDraft({ ...draft, enabled: e.target.checked }) }),
                            React.createElement("span", null,
                                React.createElement("strong", null, "Enable after creating"),
                                React.createElement("small", null, "Turn it off to save a paused automation."))),
                        !valid && React.createElement("div", { className: "cn-review-warning" },
                            React.createElement(Icon, { name: "warning" }),
                            " Complete the required setup and action fields."),
                        React.createElement("div", { className: "cn-review-actions" },
                            React.createElement(SecondaryButton, { type: "button", onClick: onCancel }, "Cancel"),
                            React.createElement(PrimaryButton, { type: "button", disabled: !valid, onClick: save }, "Create automation"))))));
    }
    function ActionMenu({ onEdit, onRemove, removeDisabled = false, label }) { const [open, setOpen] = useState(false); return React.createElement("div", { className: "cn-card-menu" },
        React.createElement("button", { type: "button", "aria-label": `Open ${label} menu`, onClick: () => setOpen(!open) }, "\u22EF"),
        open && React.createElement("div", null,
            React.createElement("button", { type: "button", onClick: () => { setOpen(false); onEdit(); } }, "Edit"),
            React.createElement("button", { type: "button", disabled: removeDisabled, onClick: () => { setOpen(false); onRemove(); } }, "Remove"))); }
    function TaskActionSummary({ action, onEdit, onRemove, removeDisabled }) { return React.createElement("div", { className: "cn-action-card", "data-testid": "create-task-card" },
        React.createElement("div", { className: "cn-action-head" },
            React.createElement("div", { className: "cn-action-icon" },
                React.createElement(Icon, { name: "task" })),
            React.createElement("div", null,
                React.createElement("h3", null, "Create task"),
                React.createElement("p", null, action.title)),
            React.createElement(ActionMenu, { label: "create task", onEdit: onEdit, onRemove: onRemove, removeDisabled: removeDisabled })),
        React.createElement("div", { className: "cn-action-meta" },
            React.createElement(Pill, null,
                action.priority,
                " priority"),
            React.createElement(Pill, null,
                "Due in ",
                action.dueDays,
                " days"),
            React.createElement(Pill, { tone: "green" },
                action.rules.length,
                " assignment ",
                action.rules.length === 1 ? "rule" : "rules")),
        React.createElement("div", { className: "cn-summary-rules" }, action.rules.map((rule, index) => React.createElement("div", { key: rule.id },
            React.createElement("span", null, index + 1),
            React.createElement("p", null, ruleSummary(rule))))),
        React.createElement(SecondaryButton, { type: "button", onClick: onEdit }, "Edit task action")); }
    function EmailActionSummary({ action, onEdit, onRemove, removeDisabled }) { return React.createElement("div", { className: "cn-action-card", "data-testid": "send-email-card" },
        React.createElement("div", { className: "cn-action-head" },
            React.createElement("div", { className: "cn-action-icon email" },
                React.createElement(Icon, { name: "email" })),
            React.createElement("div", null,
                React.createElement("h3", null, "Send an email"),
                React.createElement("p", null, action.subject)),
            React.createElement(ActionMenu, { label: "send email", onEdit: onEdit, onRemove: onRemove, removeDisabled: removeDisabled })),
        React.createElement("div", { className: "cn-action-meta" },
            React.createElement(Pill, { tone: "blue" },
                "To: ",
                emailDestination(action)),
            action.cc.length > 0 && React.createElement(Pill, null,
                "Cc: ",
                action.cc.length),
            React.createElement(Pill, { tone: "amber" }, "Simulation")),
        React.createElement("div", { className: "cn-email-preview" },
            React.createElement("strong", null, "Message preview"),
            React.createElement("p", null, action.body)),
        React.createElement(SecondaryButton, { type: "button", onClick: onEdit }, "Edit email action")); }
    function AutomationList({ automations, runs, onSelect, onCreate, onToggle }) { const [query, setQuery] = useState(""); const filtered = automations.filter(item => `${item.name} ${item.noticeType}`.toLowerCase().includes(query.toLowerCase())); return React.createElement("div", { className: "cn-panel", "data-testid": "automation-list" },
        React.createElement("div", { className: "cn-panel-toolbar" },
            React.createElement("div", { className: "cn-search" },
                React.createElement(Icon, { name: "search" }),
                React.createElement("input", { "aria-label": "Search automations", placeholder: "Search automations", value: query, onChange: e => setQuery(e.target.value) })),
            React.createElement(PrimaryButton, { onClick: onCreate }, "+ Create automation")),
        filtered.length ? React.createElement("div", { className: "cn-automation-list" }, filtered.map(automation => { const automationRuns = runs.filter(run => run.automationId === automation.id); const taskCount = automation.actions.filter(action => action.type === "task").length; const emailCount = automation.actions.filter(action => action.type === "email").length; return React.createElement("article", { key: automation.id, className: "cn-automation-row" },
            React.createElement("button", { className: "cn-automation-main", type: "button", onClick: () => onSelect(automation.id) },
                React.createElement("span", { className: "cn-automation-icon" },
                    React.createElement(Icon, { name: "automation" })),
                React.createElement("span", null,
                    React.createElement("strong", null, automation.name),
                    React.createElement("small", null,
                        "When ",
                        automation.noticeType,
                        " \u00B7 ",
                        filterSummary(automation.filters)),
                    React.createElement("em", null,
                        taskCount > 0 && React.createElement(React.Fragment, null,
                            React.createElement(Icon, { name: "task" }),
                            " ",
                            taskCount,
                            " task action",
                            taskCount === 1 ? "" : "s"),
                        taskCount > 0 && emailCount > 0 && " · ",
                        emailCount > 0 && React.createElement(React.Fragment, null,
                            React.createElement(Icon, { name: "email" }),
                            " ",
                            emailCount,
                            " email action",
                            emailCount === 1 ? "" : "s")))),
            React.createElement("div", { className: "cn-automation-runs" },
                React.createElement("strong", null, automationRuns.length),
                React.createElement("span", null, "runs logged")),
            React.createElement("label", { className: "cn-switch" },
                React.createElement("input", { type: "checkbox", "aria-label": `${automation.name} enabled`, checked: automation.enabled, onChange: () => onToggle(automation.id) }),
                React.createElement("span", null),
                React.createElement("em", null, automation.enabled ? "Enabled" : "Paused")),
            React.createElement("button", { className: "cn-open", type: "button", "aria-label": `Open ${automation.name}`, onClick: () => onSelect(automation.id) }, "\u203A")); })) : React.createElement(EmptyState, { title: "No automations found", body: "Try another search or create a court notice automation.", action: React.createElement(PrimaryButton, { onClick: onCreate }, "Create automation") })); }
    function NoticeTable({ notices, automations, onProcess, readOnly = false }) { const [query, setQuery] = useState(""); const [type, setType] = useState(""); const filtered = notices.filter(notice => (!type || notice.noticeType === type) && `${notice.clientName} ${notice.caseNumber} ${notice.noticeType} ${notice.judge} ${notice.trustee}`.toLowerCase().includes(query.toLowerCase())); const downloadCsv = () => { const values = [["Received", "Client", "Case number", "Chapter", "Notice type", "Judge", "Trustee", "Status"], ...filtered.map(n => [n.receivedAt, n.clientName, n.caseNumber, n.chapter, n.noticeType, n.judge, n.trustee, n.status])]; const csv = values.map(row => row.map(value => `"${String(value || "").replace(/"/g, '""')}"`).join(",")).join("\n"); const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); const link = document.createElement("a"); link.href = url; link.download = "bk-fastlane-court-notices.csv"; link.click(); URL.revokeObjectURL(url); }; return React.createElement("div", { className: readOnly ? "cn-notice-subtable" : "cn-panel", "data-testid": "court-notices-list" },
        React.createElement("div", { className: "cn-panel-toolbar" },
            React.createElement("div", { className: "cn-toolbar-left" },
                React.createElement("div", { className: "cn-search" },
                    React.createElement(Icon, { name: "search" }),
                    React.createElement("input", { "aria-label": "Search court notices", placeholder: "Search notices, clients, cases", value: query, onChange: e => setQuery(e.target.value) })),
                React.createElement("select", { "aria-label": "Filter notice type", value: type, onChange: e => setType(e.target.value) },
                    React.createElement("option", { value: "" }, "All notice types"),
                    NOTICE_TYPES.map(value => React.createElement("option", { key: value }, value)))),
            !readOnly && React.createElement(SecondaryButton, { onClick: downloadCsv },
                React.createElement(Icon, { name: "download" }),
                " Download CSV")),
        React.createElement("div", { className: "cn-table-wrap" },
            React.createElement("table", { className: "cn-table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Received"),
                        React.createElement("th", null, "Client / case"),
                        React.createElement("th", null, "Chapter"),
                        React.createElement("th", null, "Notice type"),
                        React.createElement("th", null, "Judge / trustee"),
                        React.createElement("th", null, "Status"),
                        !readOnly && React.createElement("th", { "aria-label": "Actions" }))),
                React.createElement("tbody", null, filtered.map(notice => { const available = automations.filter(item => item.enabled && item.noticeType === notice.noticeType && ruleMatches(item.filters, notice)); return React.createElement("tr", { key: notice.id },
                    React.createElement("td", null, localDate(notice.receivedAt)),
                    React.createElement("td", null,
                        React.createElement("strong", null, notice.clientName),
                        React.createElement("small", null, notice.caseNumber)),
                    React.createElement("td", null,
                        React.createElement(Pill, null, notice.chapter)),
                    React.createElement("td", null,
                        React.createElement("strong", null, notice.noticeType),
                        React.createElement("small", { className: "cn-attachment" }, notice.documentName)),
                    React.createElement("td", null,
                        React.createElement("span", null, notice.judge),
                        React.createElement("small", null, notice.trustee)),
                    React.createElement("td", null,
                        React.createElement(Pill, { tone: notice.status === "Task created" || notice.status === "Processed" ? "green" : notice.status === "Skipped" ? "amber" : "blue" }, notice.status)),
                    !readOnly && React.createElement("td", null,
                        React.createElement("button", { type: "button", className: "cn-run", disabled: !available.length || ["Task created", "Processed"].includes(notice.status), title: !available.length ? "No enabled automation matches this notice and its filters" : "", onClick: () => onProcess(notice) }, ["Task created", "Processed"].includes(notice.status) ? "Processed" : available.length ? "Run automation" : "No match"))); })))),
        !readOnly && React.createElement("div", { className: "cn-panel-foot" },
            React.createElement("span", null,
                filtered.length,
                " notices"),
            React.createElement("span", null,
                React.createElement(Icon, { name: "spark" }),
                " Demo notices only \u00B7 no court or ECF connection"))); }
    function RunHistory({ runs, automationId, notices }) { const filtered = runs.filter(run => !automationId || run.automationId === automationId); if (!filtered.length)
        return React.createElement(EmptyState, { title: "No runs yet", body: "Process a matching demo notice to see action results, routing, and skip reasons here." }); return React.createElement("div", { className: "cn-run-list" }, filtered.map(run => { const notice = notices.find(item => item.id === run.noticeId); const success = run.tasksCreated || run.emailsPrepared; return React.createElement("article", { key: run.id },
        React.createElement("span", { className: `cn-run-status ${success ? "task-created" : run.status}` },
            React.createElement(Icon, { name: run.tasksCreated ? "task" : run.emailsPrepared ? "email" : run.status === "failed" ? "warning" : "activity" })),
        React.createElement("div", null,
            React.createElement("strong", null, run.summary),
            React.createElement("p", null,
                notice?.clientName || "Unknown case",
                " \u00B7 ",
                notice?.caseNumber || "—"),
            React.createElement("small", null,
                localDate(run.createdAt),
                " \u00B7 ",
                run.assignees?.join(", ") || run.emailRecipients?.join(", ") || "No recipient")),
        React.createElement(Pill, { tone: success ? "green" : run.status === "failed" ? "red" : "amber" }, success ? "completed" : run.status.replace("-", " "))); })); }
    function AutomationDetail({ automation, runs, notices, onBack, onUpdate, onToggle }) { const [section, setSection] = useState("configuration"); const [editingCriteria, setEditingCriteria] = useState(false); const [criteriaDraft, setCriteriaDraft] = useState(clone(automation.filters)); const [editingAction, setEditingAction] = useState(null); const scopedRuns = runs.filter(run => run.automationId === automation.id); const scopedNotices = notices.filter(notice => scopedRuns.some(run => run.noticeId === notice.id)); const stats = { matched: scopedRuns.filter(run => run.matched).length, emails: scopedRuns.reduce((total, run) => total + (run.emailsPrepared || 0), 0), tasks: scopedRuns.reduce((total, run) => total + (run.tasksCreated || 0), 0), skipped: scopedRuns.filter(run => run.status === "skipped").length, failed: scopedRuns.filter(run => run.status === "failed").length }; useEffect(() => { setSection("configuration"); setEditingCriteria(false); setCriteriaDraft(clone(automation.filters)); setEditingAction(null); }, [automation.id]); const saveAction = action => { const exists = automation.actions.some(item => item.id === action.id); onUpdate({ ...automation, actions: exists ? automation.actions.map(item => item.id === action.id ? action : item) : [...automation.actions, action] }); setEditingAction(null); }; const removeAction = id => { if (automation.actions.length <= 1)
        return; onUpdate({ ...automation, actions: automation.actions.filter(item => item.id !== id) }); }; return React.createElement("div", { className: "cn-detail" },
        React.createElement("button", { type: "button", className: "cn-back", onClick: onBack }, "\u2039 Court notice automations"),
        React.createElement("div", { className: "cn-detail-title" },
            React.createElement("div", null,
                React.createElement("div", { className: "cn-eyebrow" }, "COURT NOTICE AUTOMATION"),
                React.createElement("h2", null, automation.name),
                React.createElement("p", null,
                    "Runs when ",
                    React.createElement("strong", null, automation.noticeType),
                    " matches the configured case filters.")),
            React.createElement("label", { className: "cn-switch large" },
                React.createElement("input", { type: "checkbox", "aria-label": "Automation enabled", checked: automation.enabled, onChange: onToggle }),
                React.createElement("span", null),
                React.createElement("em", null, automation.enabled ? "Enabled" : "Paused"))),
        React.createElement("div", { className: "cn-detail-tabs" },
            React.createElement(TabButton, { active: section === "configuration", onClick: () => setSection("configuration") }, "Configuration"),
            React.createElement(TabButton, { active: section === "history", onClick: () => setSection("history") }, "Run history"),
            React.createElement(TabButton, { active: section === "matched", onClick: () => setSection("matched") }, "Matched notices"),
            React.createElement(TabButton, { active: section === "activity", onClick: () => setSection("activity") }, "Activity")),
        React.createElement("div", { className: "cn-stats" },
            React.createElement(StatCard, { label: "Matched", value: stats.matched, tone: "blue" }),
            React.createElement(StatCard, { label: "Email prepared", value: stats.emails, tone: "blue" }),
            React.createElement(StatCard, { label: "Tasks created", value: stats.tasks, tone: "green" }),
            React.createElement(StatCard, { label: "Skipped", value: stats.skipped, tone: "amber" }),
            React.createElement(StatCard, { label: "Failed", value: stats.failed, tone: "red" })),
        section === "configuration" && (editingAction ? React.createElement(ActionEditor, { action: editingAction, onCancel: () => setEditingAction(null), onSave: saveAction }) : React.createElement("div", { className: "cn-configuration" },
            React.createElement("div", { className: "cn-match-card expanded" },
                React.createElement("div", null,
                    React.createElement("span", null, "Match criteria"),
                    React.createElement("strong", null,
                        "Notice type is ",
                        automation.noticeType),
                    React.createElement("small", null, filterSummary(automation.filters))),
                React.createElement(SecondaryButton, { type: "button", onClick: () => setEditingCriteria(!editingCriteria) }, editingCriteria ? "Cancel" : "Edit criteria")),
            editingCriteria && React.createElement("div", { className: "cn-criteria-edit" },
                React.createElement(ConditionEditor, { value: criteriaDraft, onChange: setCriteriaDraft }),
                React.createElement("div", { className: "cn-filter-summary" },
                    React.createElement(Icon, { name: "filter" }),
                    React.createElement("span", null, filterSummary(criteriaDraft))),
                React.createElement("div", { className: "cn-editor-actions" },
                    React.createElement(SecondaryButton, { type: "button", onClick: () => { setCriteriaDraft(clone(automation.filters)); setEditingCriteria(false); } }, "Cancel"),
                    React.createElement(PrimaryButton, { type: "button", onClick: () => { onUpdate({ ...automation, filters: criteriaDraft }); setEditingCriteria(false); } }, "Save criteria"))),
            React.createElement("div", { className: "cn-actions-heading" },
                React.createElement("div", null,
                    React.createElement("h3", null, "Actions"),
                    React.createElement("p", null, "Actions run in order whenever this automation matches a notice.")),
                React.createElement("div", null,
                    React.createElement(SecondaryButton, { type: "button", onClick: () => setEditingAction(blankEmail()) },
                        React.createElement(Icon, { name: "email" }),
                        " Add email"),
                    React.createElement(PrimaryButton, { type: "button", onClick: () => setEditingAction(blankTask()) },
                        React.createElement(Icon, { name: "task" }),
                        " Add task"))),
            React.createElement("div", { className: "cn-action-stack" }, automation.actions.map(action => action.type === "task" ? React.createElement(TaskActionSummary, { key: action.id, action: action, onEdit: () => setEditingAction(clone(action)), onRemove: () => removeAction(action.id), removeDisabled: automation.actions.length <= 1 }) : React.createElement(EmailActionSummary, { key: action.id, action: action, onEdit: () => setEditingAction(clone(action)), onRemove: () => removeAction(action.id), removeDisabled: automation.actions.length <= 1 }))),
            React.createElement("div", { className: "cn-safety-note" },
                React.createElement(Icon, { name: "warning" }),
                React.createElement("div", null,
                    React.createElement("strong", null, "Prototype safety boundary"),
                    React.createElement("p", null, "Actions use synthetic notices and local browser storage. No court, ECF, email service, or production case database is connected."))))),
        section === "history" && React.createElement("div", { className: "cn-panel cn-history-panel" },
            React.createElement(RunHistory, { runs: runs, automationId: automation.id, notices: notices })),
        section === "matched" && React.createElement("div", { className: "cn-panel cn-history-panel" }, scopedNotices.length ? React.createElement(NoticeTable, { notices: scopedNotices, automations: [automation], onProcess: () => { }, readOnly: true }) : React.createElement(EmptyState, { title: "No matched notices yet", body: "Process a demo notice from the Notices tab to populate this view." })),
        section === "activity" && React.createElement("div", { className: "cn-panel cn-history-panel" },
            React.createElement(RunHistory, { runs: runs, automationId: automation.id, notices: notices }))); }
    const courtNoticeViewFromHash = () => window.location.hash.replace(/^#\/?/, "").toLowerCase() === "court-notices/automations" ? "automations" : "notices";
    function CourtNoticesPage({ matters, setMatters }) {
        const [view, setView] = useState(courtNoticeViewFromHash);
        const [automations, setAutomations] = useState(() => readStored(AUTOMATIONS_KEY, INITIAL_AUTOMATIONS));
        const [notices, setNotices] = useState(() => readStored(NOTICES_KEY, INITIAL_NOTICES));
        const [runs, setRuns] = useState(() => readStored(RUNS_KEY, []));
        const [selectedId, setSelectedId] = useState(null);
        const [creating, setCreating] = useState(false);
        const [toast, setToast] = useState(null);
        useEffect(() => { try {
            localStorage.setItem(AUTOMATIONS_KEY, JSON.stringify(automations));
        }
        catch { } }, [automations]);
        useEffect(() => { try {
            localStorage.setItem(NOTICES_KEY, JSON.stringify(notices));
        }
        catch { } }, [notices]);
        useEffect(() => { try {
            localStorage.setItem(RUNS_KEY, JSON.stringify(runs));
        }
        catch { } }, [runs]);
        useEffect(() => { if (!toast)
            return; const timer = setTimeout(() => setToast(null), 4500); return () => clearTimeout(timer); }, [toast]);
        useEffect(() => { const syncView = () => { setSelectedId(null); setCreating(false); setView(courtNoticeViewFromHash()); }; window.addEventListener("hashchange", syncView); return () => window.removeEventListener("hashchange", syncView); }, []);
        useEffect(() => { if (selectedId || creating)
            return; const nextHash = `#court-notices/${view}`; if (window.location.hash !== nextHash)
            window.history.replaceState(null, "", nextHash); }, [view, selectedId, creating]);
        const selectView = next => { setView(next); window.history.replaceState(null, "", `#court-notices/${next}`); };
        const selected = automations.find(item => item.id === selectedId);
        const counts = useMemo(() => ({ notices: notices.length, active: automations.filter(item => item.enabled).length, tasks: runs.reduce((total, run) => total + (run.tasksCreated || 0), 0) }), [notices, automations, runs]);
        const toggleAutomation = id => setAutomations(items => items.map(item => item.id === id ? { ...item, enabled: !item.enabled } : item));
        const saveAutomation = next => { setAutomations(items => items.map(item => item.id === next.id ? clone(next) : item)); setToast({ tone: "green", message: "Automation changes saved locally." }); };
        const createAutomation = automation => { setAutomations(items => [clone(automation), ...items]); setCreating(false); setSelectedId(automation.id); selectView("automations"); setToast({ tone: "green", message: "Automation created. Add more actions or run a matching demo notice." }); };
        const processNotice = notice => { const matching = automations.filter(item => item.enabled && item.noticeType === notice.noticeType && ruleMatches(item.filters, notice)); const newRuns = []; const newTasks = []; matching.forEach(automation => { let tasksCreated = 0; let emailsPrepared = 0; let assignees = []; let emailRecipients = []; const summaries = []; automation.actions.forEach(action => { if (action.type === "task") {
            const matchedRules = action.rules.filter(rule => ruleMatches(rule, notice));
            const actionAssignees = [...new Set(matchedRules.flatMap(rule => rule.assignees || []))];
            assignees = [...new Set([...assignees, ...actionAssignees])];
            const taskId = `court-task-${automation.id}-${action.id}-${notice.id}`;
            const alreadyCreated = matters.some(matter => (matter.tasks || []).some(task => task.id === taskId));
            if (!actionAssignees.length) {
                summaries.push("Task skipped: no assignment rule matched");
                return;
            }
            if (alreadyCreated) {
                summaries.push("Task skipped: duplicate prevented");
                return;
            }
            const task = { id: taskId, title: renderTokens(action.title, notice), description: renderTokens(action.description, notice), due: addDays(action.dueDays, notice.receivedAt), status: "Pending", assignee: actionAssignees.join(", "), assignees: actionAssignees, assignedBy: "Court Notice Automation", priority: action.priority, stage: "Court notice review", source: "Court Notice Automation", automationId: automation.id, noticeId: notice.id };
            newTasks.push(task);
            tasksCreated += 1;
            summaries.push(`Task created: ${task.title}`);
        }
        else {
            const recipients = action.toMode === "Internal team" ? action.recipients : [action.toMode];
            emailRecipients = [...new Set([...emailRecipients, ...recipients])];
            emailsPrepared += 1;
            summaries.push(`Email prepared: ${renderTokens(action.subject, notice)}`);
        } }); const success = tasksCreated || emailsPrepared; newRuns.push({ id: uid("run"), automationId: automation.id, noticeId: notice.id, createdAt: new Date().toISOString(), matched: true, tasksCreated, emailsPrepared, status: success ? (tasksCreated ? "task-created" : "email-prepared") : "skipped", assignees, emailRecipients, summary: summaries.join(" · ") || "No action completed" }); }); if (!matching.length)
            newRuns.push({ id: uid("run-unmatched"), automationId: null, noticeId: notice.id, createdAt: new Date().toISOString(), matched: false, tasksCreated: 0, emailsPrepared: 0, status: "skipped", assignees: [], emailRecipients: [], summary: "No enabled automation matched this notice and its filters" }); if (newTasks.length)
            setMatters(items => items.map(matter => matter.id === notice.matterId ? { ...matter, tasks: [...newTasks.filter(task => !((matter.tasks || []).some(existing => existing.id === task.id))), ...(matter.tasks || [])], timeline: [{ id: uid("court-activity"), date: new Date().toISOString().slice(0, 10), action: "Court notice automation completed", detail: `${notice.noticeType} produced ${newTasks.length} task${newTasks.length === 1 ? "" : "s"}`, user: "System" }, ...(matter.timeline || [])] } : matter)); const prepared = newRuns.reduce((total, run) => total + (run.emailsPrepared || 0), 0); setRuns(items => [...newRuns, ...items]); const status = newTasks.length ? "Task created" : prepared ? "Processed" : "Skipped"; setNotices(items => items.map(item => item.id === notice.id ? { ...item, status, processedAt: new Date().toISOString() } : item)); const parts = []; if (newTasks.length)
            parts.push(`${newTasks.length} task${newTasks.length === 1 ? "" : "s"} created and added to the case`); if (prepared)
            parts.push(`${prepared} email${prepared === 1 ? "" : "s"} prepared in simulation`); setToast({ tone: newTasks.length || prepared ? "green" : "amber", message: parts.length ? `${parts.join("; ")}.` : "The notice was skipped because no automation action could run." }); };
        return React.createElement("main", { className: "court-notice-page" },
            toast && React.createElement("div", { className: `cn-toast cn-toast-${toast.tone}`, role: "status" },
                React.createElement(Icon, { name: toast.tone === "green" ? "task" : "warning" }),
                React.createElement("span", null, toast.message),
                React.createElement("button", { type: "button", "aria-label": "Dismiss notification", onClick: () => setToast(null) },
                    React.createElement(Icon, { name: "close" }))),
            React.createElement("header", { className: "cn-page-header" },
                React.createElement("div", null,
                    React.createElement("div", { className: "cn-eyebrow" }, "WORKFLOW REPORTS"),
                    React.createElement("h1", null, "Court Notices"),
                    React.createElement("p", null, "Turn synthetic court notices into routed CRM tasks and safe email simulations using case-aware rules.")),
                React.createElement("div", { className: "cn-header-metrics" },
                    React.createElement("span", null,
                        React.createElement("strong", null, counts.notices),
                        " demo notices"),
                    React.createElement("span", null,
                        React.createElement("strong", null, counts.active),
                        " active automations"),
                    React.createElement("span", null,
                        React.createElement("strong", null, counts.tasks),
                        " tasks created"),
                    React.createElement(Pill, { tone: "amber" }, "Simulation only"))),
            !selected && !creating && React.createElement("div", { className: "cn-page-tabs", role: "tablist", "aria-label": "Court notices views" },
                React.createElement(TabButton, { role: "tab", "aria-selected": view === "notices", active: view === "notices", onClick: () => setView("notices") },
                    React.createElement(Icon, { name: "notice" }),
                    " Notices"),
                React.createElement(TabButton, { role: "tab", "aria-selected": view === "automations", active: view === "automations", onClick: () => setView("automations") },
                    React.createElement(Icon, { name: "automation" }),
                    " Automations")),
            creating ? React.createElement(CreateAutomationPanel, { onCancel: () => { setCreating(false); setView("automations"); }, onCreate: createAutomation }) : selected ? React.createElement(AutomationDetail, { automation: selected, runs: runs, notices: notices, onBack: () => { setSelectedId(null); setView("automations"); }, onUpdate: saveAutomation, onToggle: () => toggleAutomation(selected.id) }) : view === "notices" ? React.createElement(NoticeTable, { notices: notices, automations: automations, onProcess: processNotice }) : React.createElement(AutomationList, { automations: automations, runs: runs, onSelect: id => setSelectedId(id), onCreate: () => setCreating(true), onToggle: toggleAutomation }));
    }
    window.BKFLCourtNotices = { CourtNoticesPage, ruleMatches, ruleSummary, filterSummary, renderTokens, INITIAL_AUTOMATIONS, INITIAL_NOTICES };
})();
