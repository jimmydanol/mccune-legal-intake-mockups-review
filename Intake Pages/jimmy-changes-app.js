(function(){
  var meta = window.JIMMY_CHANGE_META || {};
  var items = Array.isArray(window.JIMMY_CHANGE_ITEMS) ? window.JIMMY_CHANGE_ITEMS : [];
  var apiUrl = meta.reviewApiUrl || "";
  var actorStorageKey = "mcl_jimmy_changes_actor_v1";
  var legacySelectionKey = "mcl_jimmy_changes_selected_v1";
  var outboxStorageKey = "mcl_jimmy_changes_outbox_v1";
  var textStorageKey = "mcl_jimmy_changes_text_edits_v1";
  var actor = readString(actorStorageKey);
  var outbox = readArray(outboxStorageKey);
  var textEdits = readJson(textStorageKey);
  var sharedState = { items: {}, revision: 0, updatedAt: null };
  var syncMode = "loading";
  var syncError = "";
  var flushing = false;
  var refreshTimer;
  var list = document.getElementById("changeList");
  var totalCount = document.getElementById("totalCount");
  var requestedCount = document.getElementById("requestedCount");
  var implementedCount = document.getElementById("implementedCount");
  var pageCount = document.getElementById("pageCount");
  var selectionNote = document.getElementById("selectionNote");
  var copyButton = document.getElementById("copySelected");
  var emailButton = document.getElementById("emailSelected");
  var clearButton = document.getElementById("clearSelected");
  var resetWritingButton = document.getElementById("resetWriting");
  var syncStatus = document.getElementById("syncStatus");
  var syncDetail = document.getElementById("syncDetail");
  var toast = document.getElementById("toast");

  document.getElementById("branchName").textContent = meta.branch || "Jimmy branch";
  document.getElementById("updatedOn").textContent = meta.updated ? "Updated " + meta.updated : "Updated from checklist data";

  document.querySelectorAll("[data-reviewer]").forEach(function(button){
    button.addEventListener("click", function(){
      setActor(button.getAttribute("data-reviewer"));
    });
  });

  list.addEventListener("click", function(event){
    var resetButton = event.target.closest("[data-reset-writing]");
    var actionButton = event.target.closest("[data-checklist-action]");
    if (resetButton) {
      resetItemWriting(resetButton.getAttribute("data-reset-writing"));
      return;
    }
    if (!actionButton) return;
    if (!actor) {
      showToast("Choose Matt or Jimmy first.");
      return;
    }
    var action = actionButton.getAttribute("data-checklist-action");
    var id = actionButton.getAttribute("data-change-id");
    if (action === "implemented" && actor !== "Jimmy") {
      showToast("Jimmy marks changes implemented.");
      return;
    }
    var item = findItem(id);
    if (!item) return;
    var state = effectiveItemState(id);
    var active = action === "implement"
      ? !Boolean(state.requests[actor] && state.requests[actor].active)
      : !Boolean(state.implemented && state.implemented.active);
    queueAction(item, action, active);
  });

  list.addEventListener("input", function(event){
    var editable = event.target.closest("[data-edit-change]");
    if (!editable) return;
    setTextEdit(
      editable.getAttribute("data-edit-change"),
      editable.getAttribute("data-edit-field"),
      editable.textContent
    );
    updateControls();
  });

  list.addEventListener("keydown", function(event){
    var editable = event.target.closest("[data-edit-change]");
    if (!editable || event.key !== "Enter") return;
    event.preventDefault();
    editable.blur();
  });

  list.addEventListener("focusout", function(event){
    if (!event.target.closest("[data-edit-change]")) return;
    render();
  });

  list.addEventListener("paste", function(event){
    var editable = event.target.closest("[data-edit-change]");
    if (!editable) return;
    event.preventDefault();
    var text = (event.clipboardData || window.clipboardData).getData("text/plain").replace(/\s+/g, " ");
    document.execCommand("insertText", false, text);
  });

  copyButton.addEventListener("click", function(){
    var text = buildRequestedText();
    if (!text) return showToast("No implementation requests yet.");
    copyText(text);
  });

  emailButton.addEventListener("click", function(){
    var text = buildRequestedText();
    if (!text) return showToast("No implementation requests yet.");
    window.location.href = "mailto:?subject=" + encodeURIComponent("McCune intake implementation requests") + "&body=" + encodeURIComponent(text);
  });

  clearButton.addEventListener("click", function(){
    if (!actor) return showToast("Choose Matt or Jimmy first.");
    var activeItems = items.filter(function(item){
      var request = effectiveItemState(item.id).requests[actor];
      return request && request.active;
    });
    if (!activeItems.length) return;
    activeItems.forEach(function(item){ queueAction(item, "implement", false, true); });
    flushOutbox();
    showToast(actor + " requests cleared.");
  });

  resetWritingButton.addEventListener("click", function(){
    textEdits = {};
    localStorage.removeItem(textStorageKey);
    render();
    showToast("Writing reset to branch defaults.");
  });

  window.addEventListener("online", function(){
    syncError = "";
    flushOutbox();
    refreshSharedState();
  });

  document.addEventListener("visibilitychange", function(){
    if (document.visibilityState === "visible") refreshSharedState();
  });

  render();
  refreshSharedState().finally(function(){ flushOutbox(); });
  refreshTimer = window.setInterval(refreshSharedState, 8000);
  window.addEventListener("beforeunload", function(){ window.clearInterval(refreshTimer); });

  function setActor(nextActor){
    if (nextActor !== "Matt" && nextActor !== "Jimmy") return;
    actor = nextActor;
    localStorage.setItem(actorStorageKey, actor);
    migrateLegacySelections();
    render();
    flushOutbox();
  }

  function migrateLegacySelections(){
    var legacy = readJson(legacySelectionKey);
    var selectedIds = Object.keys(legacy).filter(function(id){ return Boolean(legacy[id]); });
    if (!selectedIds.length) return;
    selectedIds.forEach(function(id){
      var item = findItem(id);
      var request = effectiveItemState(id).requests[actor];
      if (item && !(request && request.active)) queueAction(item, "implement", true, true);
    });
    localStorage.removeItem(legacySelectionKey);
    showToast("Existing selections queued for " + actor + ".");
  }

  function queueAction(item, action, active, deferFlush){
    outbox.push({
      eventId: createEventId(),
      featureId: item.id,
      featureTitle: getItemText(item, "title"),
      actor: actor,
      action: action,
      active: Boolean(active),
      queuedAt: new Date().toISOString()
    });
    saveOutbox();
    render();
    if (!deferFlush) flushOutbox();
  }

  async function flushOutbox(){
    if (flushing || !outbox.length || !apiUrl) return;
    flushing = true;
    syncMode = "saving";
    syncError = "";
    renderSyncStatus();
    try {
      while (outbox.length) {
        var response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(outbox[0]),
          cache: "no-store"
        });
        var body = await response.json().catch(function(){ return {}; });
        if (!response.ok || !body.ok) throw new Error(body.error || "Shared save failed.");
        acceptSharedState(body);
        outbox.shift();
        saveOutbox();
        render();
      }
      syncMode = "ready";
    } catch (error) {
      syncMode = "offline";
      syncError = error && error.message ? error.message : "Shared save is unavailable.";
    } finally {
      flushing = false;
      render();
    }
  }

  async function refreshSharedState(){
    if (!apiUrl || flushing) return;
    if (!outbox.length) syncMode = "loading";
    renderSyncStatus();
    try {
      var response = await fetch(apiUrl, { cache: "no-store" });
      var body = await response.json().catch(function(){ return {}; });
      if (!response.ok || !body.ok) throw new Error(body.error || "Shared checklist failed to load.");
      acceptSharedState(body);
      syncMode = outbox.length ? "saving" : "ready";
      syncError = "";
    } catch (error) {
      syncMode = "offline";
      syncError = error && error.message ? error.message : "Shared checklist is unavailable.";
    }
    render();
  }

  function render(){
    renderActorPicker();
    updateControls();
    renderSyncStatus();

    if (!items.length) {
      list.innerHTML = '<div class="empty">No Jimmy branch changes are listed yet.</div>';
      return;
    }

    list.innerHTML = items.map(function(item){
      var state = effectiveItemState(item.id);
      var requesters = activeRequesters(state);
      var isRequested = requesters.length > 0;
      var isImplemented = Boolean(state.implemented && state.implemented.active);
      var currentRequest = Boolean(actor && state.requests[actor] && state.requests[actor].active);
      var edited = Boolean(textEdits[item.id]);
      var pending = outbox.some(function(entry){ return entry.featureId === item.id; });
      var cardClass = "change-item" + (isRequested ? " requested" : "") + (isImplemented ? " completed" : "");
      return '<article class="' + cardClass + '">' +
        '<div class="change-main">' +
          '<div class="tags">' +
            '<span class="tag">' + escapeHtml(item.category || "Change") + '</span>' +
            '<span class="tag status">' + escapeHtml(item.status || "Listed") + '</span>' +
            '<span class="tag commit">' + escapeHtml(item.commit || "branch") + '</span>' +
            (pending ? '<span class="tag pending">Saving</span>' : '') +
          '</div>' +
          editableText(item, "title", "h3", "change-title") +
          editableText(item, "summary", "p", "change-summary") +
          editableText(item, "mattDecision", "p", "decision") +
          renderPages(item.pages) +
          renderLinks(item.links) +
        '</div>' +
        '<div class="pick-control">' +
          '<button type="button" class="implement' + (currentRequest ? ' active' : '') + '" data-checklist-action="implement" data-change-id="' + escapeAttribute(item.id) + '" aria-pressed="' + String(currentRequest) + '"' + disableAttribute(!actor || pending) + '>Implement</button>' +
          '<button type="button" class="implemented' + (isImplemented ? ' active' : '') + '" data-checklist-action="implemented" data-change-id="' + escapeAttribute(item.id) + '" aria-pressed="' + String(isImplemented) + '" title="Jimmy marks completed changes"' + disableAttribute(actor !== "Jimmy" || pending) + '>Implemented</button>' +
          '<div class="state-details">' + renderStateDetails(state) + '</div>' +
          (edited ? '<button type="button" class="ghost reset-copy" data-reset-writing="' + escapeAttribute(item.id) + '">Reset writing</button>' : '') +
        '</div>' +
      '</article>';
    }).join("");
  }

  function acceptSharedState(nextState){
    var currentTime = sharedState.updatedAt ? new Date(sharedState.updatedAt).getTime() : 0;
    var nextTime = nextState.updatedAt ? new Date(nextState.updatedAt).getTime() : 0;
    if (!currentTime || (nextTime && nextTime >= currentTime)) sharedState = nextState;
  }

  function renderActorPicker(){
    document.querySelectorAll("[data-reviewer]").forEach(function(button){
      var selected = button.getAttribute("data-reviewer") === actor;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function renderSyncStatus(){
    syncStatus.className = "sync-status";
    if (!actor) {
      syncStatus.textContent = "Choose Matt or Jimmy";
      syncStatus.classList.add("warning");
      syncDetail.textContent = "Selections are shared after a reviewer is chosen.";
      return;
    }
    if (syncMode === "offline") {
      syncStatus.textContent = outbox.length ? "Queued on this browser" : "Shared board unavailable";
      syncStatus.classList.add("error");
      syncDetail.textContent = syncError || "Changes will retry automatically.";
      return;
    }
    if (flushing || outbox.length) {
      syncStatus.textContent = "Saving shared changes";
      syncStatus.classList.add("warning");
      syncDetail.textContent = outbox.length + " action" + (outbox.length === 1 ? "" : "s") + " waiting.";
      return;
    }
    if (syncMode === "loading") {
      syncStatus.textContent = "Loading shared checklist";
      syncStatus.classList.add("warning");
      syncDetail.textContent = "Checking for Matt and Jimmy updates.";
      return;
    }
    syncStatus.textContent = "Shared and saved";
    syncDetail.textContent = sharedState.updatedAt ? "Last change " + formatDate(sharedState.updatedAt) + "." : "No shared selections yet.";
  }

  function updateControls(){
    var requestedItems = getRequestedItems();
    var implementedItems = items.filter(function(item){
      var state = effectiveItemState(item.id);
      return state.implemented && state.implemented.active;
    });
    var actorRequests = actor ? requestedItems.filter(function(item){
      var request = effectiveItemState(item.id).requests[actor];
      return request && request.active;
    }) : [];
    totalCount.textContent = String(items.length);
    requestedCount.textContent = String(requestedItems.length);
    implementedCount.textContent = String(implementedItems.length);
    pageCount.textContent = String(uniquePages(items).length);
    if (!actor) {
      selectionNote.textContent = "Choose Matt or Jimmy before changing the shared checklist.";
    } else if (requestedItems.length || implementedItems.length) {
      selectionNote.textContent = requestedItems.length + " requested and " + implementedItems.length + " implemented. Reviewing as " + actor + ".";
    } else {
      selectionNote.textContent = "No shared implementation requests yet. Reviewing as " + actor + ".";
    }
    copyButton.disabled = requestedItems.length === 0;
    emailButton.disabled = requestedItems.length === 0;
    clearButton.disabled = !actor || actorRequests.length === 0;
    resetWritingButton.disabled = !hasTextEdits();
  }

  function effectiveItemState(id){
    var source = sharedState.items && sharedState.items[id] ? sharedState.items[id] : {};
    var state = {
      requests: {
        Matt: source.requests && source.requests.Matt ? copyState(source.requests.Matt) : null,
        Jimmy: source.requests && source.requests.Jimmy ? copyState(source.requests.Jimmy) : null
      },
      implemented: source.implemented ? copyState(source.implemented) : null
    };
    outbox.forEach(function(entry){
      if (entry.featureId !== id) return;
      var next = { active: entry.active, actor: entry.actor, at: entry.queuedAt, pending: true };
      if (entry.action === "implement") state.requests[entry.actor] = next;
      if (entry.action === "implemented") state.implemented = next;
    });
    return state;
  }

  function copyState(value){
    return { active: Boolean(value.active), actor: value.actor, at: value.at, eventId: value.eventId };
  }

  function activeRequesters(state){
    return ["Matt", "Jimmy"].filter(function(name){
      return state.requests[name] && state.requests[name].active;
    });
  }

  function renderStateDetails(state){
    var requesters = activeRequesters(state);
    var lines = [];
    if (requesters.length) {
      lines.push('<span class="state-line"><strong>Implement:</strong> ' + requesters.map(function(name){
        return escapeHtml(name) + " " + escapeHtml(formatDate(state.requests[name].at));
      }).join("; ") + '</span>');
    } else {
      lines.push('<span class="state-line">No implementation request.</span>');
    }
    if (state.implemented && state.implemented.active) {
      lines.push('<span class="state-line complete"><strong>Implemented:</strong> ' + escapeHtml(state.implemented.actor) + " " + escapeHtml(formatDate(state.implemented.at)) + '</span>');
    } else {
      lines.push('<span class="state-line">Not implemented yet.</span>');
    }
    return lines.join("");
  }

  function getRequestedItems(){
    return items.filter(function(item){ return activeRequesters(effectiveItemState(item.id)).length > 0; });
  }

  function buildRequestedText(){
    var requestedItems = getRequestedItems();
    if (!requestedItems.length) return "";
    var lines = [
      "McCune intake implementation requests",
      "Jimmy branch: " + (meta.branch || "Jimmy branch"),
      "Review page: " + (meta.publishUrl || window.location.href),
      "Matt site: " + (meta.mattPublishUrl || "https://mmccune22.github.io/mccune-legal-intake-mockups/"),
      ""
    ];
    requestedItems.forEach(function(item, index){
      var state = effectiveItemState(item.id);
      lines.push((index + 1) + ". " + getItemText(item, "title"));
      lines.push("   Requested by: " + activeRequesters(state).join(", "));
      lines.push("   Status: " + (state.implemented && state.implemented.active ? "Implemented by " + state.implemented.actor : "Not implemented"));
      if (getItemText(item, "summary")) lines.push("   " + getItemText(item, "summary"));
      if (item.pages && item.pages.length) lines.push("   Pages: " + item.pages.join(", "));
      if (item.commit) lines.push("   Ref: " + item.commit);
      lines.push("");
    });
    return lines.join("\n").trim();
  }

  function editableText(item, field, tagName, className){
    return '<' + tagName + ' class="' + className + ' editable-copy" contenteditable="true" spellcheck="true" data-edit-change="' + escapeAttribute(item.id) + '" data-edit-field="' + escapeAttribute(field) + '" aria-label="Edit ' + escapeAttribute(field) + ' for ' + escapeAttribute(getItemText(item, "title")) + '">' + escapeHtml(getItemText(item, field)) + '</' + tagName + '>';
  }

  function renderPages(pages){
    if (!Array.isArray(pages) || !pages.length) return "";
    return '<ul class="page-list">' + pages.map(function(page){ return '<li>' + escapeHtml(page) + '</li>'; }).join("") + '</ul>';
  }

  function renderLinks(links){
    if (!Array.isArray(links) || !links.length) return "";
    return '<div class="card-links">' + links.map(function(link){ return '<a href="' + escapeAttribute(link.href) + '">' + escapeHtml(link.label) + '</a>'; }).join("") + '</div>';
  }

  function findItem(id){
    return items.find(function(item){ return item.id === id; });
  }

  function getItemText(item, field){
    var itemEdits = textEdits[item.id] || {};
    return Object.prototype.hasOwnProperty.call(itemEdits, field) ? itemEdits[field] : (item[field] || "");
  }

  function setTextEdit(id, field, value){
    var item = findItem(id);
    if (!item || !field) return;
    var original = item[field] || "";
    if (!textEdits[id]) textEdits[id] = {};
    if (value === original) delete textEdits[id][field];
    else textEdits[id][field] = value;
    if (!Object.keys(textEdits[id]).length) delete textEdits[id];
    localStorage.setItem(textStorageKey, JSON.stringify(textEdits));
  }

  function resetItemWriting(id){
    if (!textEdits[id]) return;
    delete textEdits[id];
    localStorage.setItem(textStorageKey, JSON.stringify(textEdits));
    render();
    showToast("Writing reset for that change.");
  }

  function hasTextEdits(){ return Object.keys(textEdits).length > 0; }

  function uniquePages(sourceItems){
    var seen = {};
    sourceItems.forEach(function(item){ (item.pages || []).forEach(function(page){ seen[page] = true; }); });
    return Object.keys(seen);
  }

  function saveOutbox(){ localStorage.setItem(outboxStorageKey, JSON.stringify(outbox)); }

  function readJson(key){
    try { return JSON.parse(localStorage.getItem(key) || "{}") || {}; }
    catch (error) { return {}; }
  }

  function readArray(key){
    try {
      var value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (error) { return []; }
  }

  function readString(key){
    var value = localStorage.getItem(key) || "";
    return value === "Matt" || value === "Jimmy" ? value : "";
  }

  function createEventId(){
    if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
    return "event-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
  }

  function formatDate(value){
    if (!value) return "";
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  }

  function disableAttribute(disabled){ return disabled ? ' disabled aria-disabled="true"' : ""; }

  function copyText(text){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function(){ showToast("Implementation requests copied."); }).catch(function(){ fallbackCopy(text); });
      return;
    }
    fallbackCopy(text);
  }

  function fallbackCopy(text){
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
    showToast("Implementation requests copied.");
  }

  function showToast(message){
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(function(){ toast.classList.remove("show"); }, 2400);
  }

  function escapeHtml(value){
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value){ return escapeHtml(value || "#"); }
})();
