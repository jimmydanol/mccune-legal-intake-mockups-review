const BOARD_ID = "mccune-jimmy-changes-v1";
const EVENT_PREFIX = "mccune-review:v1:event:";
const MESSAGE_PREFIX = "mccune-review:v1:message:";
const REQUEST_EVENT_PREFIX = "mccune-review:v1:request-event:";
const BOARD_STATE_KEY = "mccune-review:v2:checklist-state";
const MESSAGE_STATE_KEY = "mccune-review:v2:message-state";
const REQUEST_STATE_KEY = "mccune-review:v2:request-state";
const LEGACY_RETRY_MS = 30 * 60 * 1000;
const MAX_RECENT_IDS = 500;
const MAX_MESSAGE_LENGTH = 1200;
const MAX_VISIBLE_MESSAGES = 200;
const MAX_REQUEST_TITLE_LENGTH = 180;
const MAX_REQUEST_DETAILS_LENGTH = 1200;
const MAX_VISIBLE_REQUESTS = 200;
const ACTORS = new Set(["Matt", "Jimmy"]);
const ACTIONS = new Set(["implement", "implemented", "approval-needed", "approved"]);
const ALLOWED_ORIGINS = new Set([
  "https://jimmydanol.github.io",
  "https://mmccune22.github.io",
  "null"
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return corsResponse(request, null, 204);
    }

    if (url.pathname === "/health") {
      return jsonResponse(request, {
        ok: true,
        service: "mccune-review-api",
        boardId: BOARD_ID,
        storageVersion: 2
      });
    }

    if (url.pathname === "/api/checklist" || url.pathname === "/api/messages" || url.pathname === "/api/requests") {
      if (!originIsAllowed(request)) {
        return jsonResponse(request, { error: "Origin is not allowed." }, 403);
      }
      try {
        if (url.pathname === "/api/checklist") {
          if (request.method === "GET") return jsonResponse(request, await readBoard(env.REVIEW_STORE));
          if (request.method === "POST") return await saveAction(request, env.REVIEW_STORE);
        }
        if (url.pathname === "/api/messages") {
          if (request.method === "GET") return jsonResponse(request, await readMessages(env.REVIEW_STORE));
          if (request.method === "POST") return await saveMessage(request, env.REVIEW_STORE);
        }
        if (url.pathname === "/api/requests") {
          if (request.method === "GET") return jsonResponse(request, await readRequests(env.REVIEW_STORE));
          if (request.method === "POST") return await saveRequestAction(request, env.REVIEW_STORE);
        }
        return jsonResponse(request, { error: "Method is not allowed." }, 405);
      } catch (error) {
        console.error("McCune review storage failure", error);
        return jsonResponse(request, {
          ok: false,
          error: "Shared collaboration storage is temporarily unavailable."
        }, 503);
      }
    }

    return new Response(
      "McCune review API. Use /health, /api/checklist, /api/messages, or /api/requests.",
      {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store"
        }
      }
    );
  }
};

async function saveRequestAction(request, store) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(request, { error: "Request body must be valid JSON." }, 400);
  }

  const eventId = cleanString(payload.eventId, 80);
  const requestId = cleanString(payload.requestId, 80);
  const actor = cleanString(payload.actor, 20);
  const action = cleanString(payload.action, 20);
  const title = cleanString(payload.title, MAX_REQUEST_TITLE_LENGTH);
  const details = typeof payload.details === "string" ? payload.details.trim() : "";

  if (!eventId || !/^[A-Za-z0-9_-]+$/.test(eventId)) {
    return jsonResponse(request, { error: "A valid eventId is required." }, 400);
  }
  if (!requestId || !/^[A-Za-z0-9_-]+$/.test(requestId)) {
    return jsonResponse(request, { error: "A valid requestId is required." }, 400);
  }
  if (!ACTORS.has(actor)) {
    return jsonResponse(request, { error: "Request actor must be Matt or Jimmy." }, 400);
  }
  if (action !== "create" && action !== "implemented") {
    return jsonResponse(request, { error: "Request action is invalid." }, 400);
  }
  if (action === "create" && actor !== "Matt") {
    return jsonResponse(request, { error: "Feature requests must be submitted as Matt." }, 400);
  }
  if (action === "create" && !title) {
    return jsonResponse(request, { error: "A request title is required." }, 400);
  }
  if (details.length > MAX_REQUEST_DETAILS_LENGTH) {
    return jsonResponse(request, { error: `Request details are limited to ${MAX_REQUEST_DETAILS_LENGTH} characters.` }, 400);
  }
  if (action === "implemented" && (actor !== "Jimmy" || typeof payload.active !== "boolean")) {
    return jsonResponse(request, { error: "Only Jimmy can update implementation status." }, 400);
  }

  const event = {
    eventId,
    boardId: BOARD_ID,
    requestId,
    actor,
    action,
    title: action === "create" ? title : "",
    details: action === "create" ? details : "",
    active: action === "implemented" ? payload.active : true,
    createdAt: normalizeTimestamp(cleanString(payload.queuedAt, 40)) || new Date().toISOString()
  };
  const state = await loadRequestState(store);
  if (!state.recentEventIds.includes(eventId)) {
    applyRequestEvent(state, event);
    rememberId(state.recentEventIds, eventId);
    state.revision += 1;
    state.updatedAt = maxTimestamp(state.updatedAt, event.createdAt);
    await saveState(store, REQUEST_STATE_KEY, state);
  }
  return jsonResponse(request, publicRequests(state));
}

async function readRequests(store) {
  return publicRequests(await loadRequestState(store));
}

async function loadRequestState(store) {
  const stored = await store.get(REQUEST_STATE_KEY, "json");
  const state = normalizeRequestState(stored);
  await migrateLegacyState(store, REQUEST_STATE_KEY, state, REQUEST_EVENT_PREFIX, (value) => {
    if (!value || value.boardId !== BOARD_ID || !value.eventId || state.recentEventIds.includes(value.eventId)) return;
    applyRequestEvent(state, value);
    rememberId(state.recentEventIds, value.eventId);
    state.revision += 1;
    state.updatedAt = maxTimestamp(state.updatedAt, normalizeTimestamp(value.createdAt));
  });
  return state;
}

function normalizeRequestState(value) {
  return {
    boardId: BOARD_ID,
    revision: Number.isFinite(value?.revision) ? value.revision : 0,
    updatedAt: normalizeTimestamp(value?.updatedAt),
    requests: Array.isArray(value?.requests) ? value.requests.slice(0, MAX_VISIBLE_REQUESTS) : [],
    recentEventIds: Array.isArray(value?.recentEventIds) ? value.recentEventIds.slice(-MAX_RECENT_IDS) : [],
    legacyMigrated: Boolean(value?.legacyMigrated),
    legacyRetryAt: normalizeTimestamp(value?.legacyRetryAt)
  };
}

function applyRequestEvent(state, event) {
  if (event.action === "create" && event.actor === "Matt" && event.title) {
    const existing = state.requests.find((request) => request.requestId === event.requestId);
    if (!existing) {
      state.requests.push({
        requestId: event.requestId,
        title: event.title,
        details: event.details || "",
        requestedBy: "Matt",
        createdAt: normalizeTimestamp(event.createdAt),
        implemented: null
      });
    }
  }
  if (event.action === "implemented" && event.actor === "Jimmy") {
    const item = state.requests.find((request) => request.requestId === event.requestId);
    if (item) {
      const next = {
        active: Boolean(event.active),
        actor: "Jimmy",
        at: normalizeTimestamp(event.createdAt),
        eventId: event.eventId
      };
      if (isNewerState(item.implemented, next)) item.implemented = next;
    }
  }
  state.requests.sort((left, right) => String(right.createdAt).localeCompare(String(left.createdAt)));
  state.requests = state.requests.slice(0, MAX_VISIBLE_REQUESTS);
}

function publicRequests(state) {
  return {
    ok: true,
    boardId: BOARD_ID,
    revision: state.revision,
    updatedAt: state.updatedAt,
    requests: state.requests
  };
}

async function saveMessage(request, store) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(request, { error: "Request body must be valid JSON." }, 400);
  }

  const messageId = cleanString(payload.messageId, 80);
  const actor = cleanString(payload.actor, 20);
  const body = typeof payload.body === "string" ? payload.body.trim() : "";

  if (!messageId || !/^[A-Za-z0-9_-]+$/.test(messageId)) {
    return jsonResponse(request, { error: "A valid messageId is required." }, 400);
  }
  if (!ACTORS.has(actor)) {
    return jsonResponse(request, { error: "Message actor must be Matt or Jimmy." }, 400);
  }
  if (!body) {
    return jsonResponse(request, { error: "Message text is required." }, 400);
  }
  if (body.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse(request, { error: `Messages are limited to ${MAX_MESSAGE_LENGTH} characters.` }, 400);
  }

  const state = await loadMessageState(store);
  let message = state.messages.find((entry) => entry.messageId === messageId);
  if (!message) {
    message = {
      messageId,
      boardId: BOARD_ID,
      actor,
      body,
      createdAt: normalizeTimestamp(cleanString(payload.queuedAt, 40)) || new Date().toISOString()
    };
    state.messages.push(message);
    state.messages.sort(compareStoredEntries);
    state.messages = state.messages.slice(-MAX_VISIBLE_MESSAGES);
    rememberId(state.recentMessageIds, messageId);
    state.revision += 1;
    state.updatedAt = maxTimestamp(state.updatedAt, message.createdAt);
    await saveState(store, MESSAGE_STATE_KEY, state);
  }
  return jsonResponse(request, { ok: true, message });
}

async function readMessages(store) {
  return publicMessages(await loadMessageState(store));
}

async function loadMessageState(store) {
  const stored = await store.get(MESSAGE_STATE_KEY, "json");
  const state = normalizeMessageState(stored);
  await migrateLegacyState(store, MESSAGE_STATE_KEY, state, MESSAGE_PREFIX, (value) => {
    if (!value || value.boardId !== BOARD_ID || !value.messageId || !value.body) return;
    if (state.recentMessageIds.includes(value.messageId) || state.messages.some((message) => message.messageId === value.messageId)) return;
    state.messages.push(value);
    rememberId(state.recentMessageIds, value.messageId);
    state.revision += 1;
    state.updatedAt = maxTimestamp(state.updatedAt, normalizeTimestamp(value.createdAt));
  });
  state.messages.sort(compareStoredEntries);
  state.messages = state.messages.slice(-MAX_VISIBLE_MESSAGES);
  return state;
}

function normalizeMessageState(value) {
  return {
    boardId: BOARD_ID,
    revision: Number.isFinite(value?.revision) ? value.revision : 0,
    updatedAt: normalizeTimestamp(value?.updatedAt),
    messages: Array.isArray(value?.messages) ? value.messages.slice(-MAX_VISIBLE_MESSAGES) : [],
    recentMessageIds: Array.isArray(value?.recentMessageIds) ? value.recentMessageIds.slice(-MAX_RECENT_IDS) : [],
    legacyMigrated: Boolean(value?.legacyMigrated),
    legacyRetryAt: normalizeTimestamp(value?.legacyRetryAt)
  };
}

function publicMessages(state) {
  return {
    ok: true,
    boardId: BOARD_ID,
    revision: state.revision,
    updatedAt: state.updatedAt,
    messages: state.messages
  };
}

async function saveAction(request, store) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(request, { error: "Request body must be valid JSON." }, 400);
  }

  const eventId = cleanString(payload.eventId, 80);
  const featureId = cleanString(payload.featureId, 80);
  const featureTitle = cleanString(payload.featureTitle, 180);
  const actor = cleanString(payload.actor, 20);
  const action = cleanString(payload.action, 20);
  const active = payload.active;

  if (!eventId || !/^[A-Za-z0-9_-]+$/.test(eventId)) {
    return jsonResponse(request, { error: "A valid eventId is required." }, 400);
  }
  if (!featureId || !/^[a-z0-9][a-z0-9-]*$/.test(featureId)) {
    return jsonResponse(request, { error: "A valid featureId is required." }, 400);
  }
  if (!featureTitle) {
    return jsonResponse(request, { error: "A featureTitle is required." }, 400);
  }
  if (!ACTORS.has(actor) || !ACTIONS.has(action) || typeof active !== "boolean") {
    return jsonResponse(request, { error: "Actor, action, or active state is invalid." }, 400);
  }

  const event = {
    eventId,
    boardId: BOARD_ID,
    featureId,
    featureTitle,
    action,
    actor,
    active,
    createdAt: normalizeTimestamp(cleanString(payload.queuedAt, 40)) || new Date().toISOString()
  };
  const state = await loadBoardState(store);
  if (!state.recentEventIds.includes(eventId)) {
    applyEvent(state, event);
    rememberId(state.recentEventIds, eventId);
    state.revision += 1;
    await saveState(store, BOARD_STATE_KEY, state);
  }
  return jsonResponse(request, publicBoard(state));
}

async function readBoard(store) {
  return publicBoard(await loadBoardState(store));
}

async function loadBoardState(store) {
  const stored = await store.get(BOARD_STATE_KEY, "json");
  const state = normalizeBoardState(stored);
  await migrateLegacyState(store, BOARD_STATE_KEY, state, EVENT_PREFIX, (value) => {
    if (!value || value.boardId !== BOARD_ID || !value.eventId || state.recentEventIds.includes(value.eventId)) return;
    applyEvent(state, value);
    rememberId(state.recentEventIds, value.eventId);
    state.revision += 1;
  });
  return state;
}

function normalizeBoardState(value) {
  return {
    boardId: BOARD_ID,
    revision: Number.isFinite(value?.revision) ? value.revision : 0,
    updatedAt: normalizeTimestamp(value?.updatedAt),
    items: value?.items && typeof value.items === "object" ? value.items : {},
    recentEventIds: Array.isArray(value?.recentEventIds) ? value.recentEventIds.slice(-MAX_RECENT_IDS) : [],
    legacyMigrated: Boolean(value?.legacyMigrated),
    legacyRetryAt: normalizeTimestamp(value?.legacyRetryAt)
  };
}

function publicBoard(state) {
  return {
    ok: true,
    boardId: BOARD_ID,
    revision: state.revision,
    updatedAt: state.updatedAt,
    items: state.items
  };
}

function applyEvent(board, event) {
  const item = board.items[event.featureId] || {
    title: event.featureTitle,
    requests: { Matt: null, Jimmy: null },
    implemented: null,
    approvalNeeded: null,
    approved: null
  };
  item.title = event.featureTitle || item.title;
  item.requests = item.requests || { Matt: null, Jimmy: null };
  const state = {
    active: Boolean(event.active),
    actor: event.actor,
    at: normalizeTimestamp(event.createdAt),
    eventId: event.eventId
  };
  if (event.action === "implement" && isNewerState(item.requests[event.actor], state)) item.requests[event.actor] = state;
  if (event.action === "implemented" && isNewerState(item.implemented, state)) item.implemented = state;
  if (event.action === "approval-needed" && isNewerState(item.approvalNeeded, state)) item.approvalNeeded = state;
  if (event.action === "approved" && isNewerState(item.approved, state)) item.approved = state;
  board.items[event.featureId] = item;
  board.updatedAt = maxTimestamp(board.updatedAt, state.at);
}

async function migrateLegacyState(store, stateKey, state, prefix, applyValue) {
  if (state.legacyMigrated || !legacyRetryIsDue(state.legacyRetryAt)) return;
  try {
    const values = await readLegacyValues(store, prefix);
    values.sort(compareStoredEntries).forEach(applyValue);
    state.legacyMigrated = true;
    state.legacyRetryAt = null;
    await saveState(store, stateKey, state);
  } catch (error) {
    state.legacyRetryAt = new Date(Date.now() + LEGACY_RETRY_MS).toISOString();
    try {
      await saveState(store, stateKey, state);
    } catch {
      // The public endpoint can still return an empty in-memory snapshot.
    }
    console.warn(`Legacy migration deferred for ${prefix}`, error);
  }
}

async function readLegacyValues(store, prefix) {
  const values = [];
  let cursor;
  do {
    const options = { prefix, limit: 1000 };
    if (cursor) options.cursor = cursor;
    const page = await store.list(options);
    const pageValues = await Promise.all(page.keys.map((key) => store.get(key.name, "json")));
    pageValues.forEach((value) => { if (value) values.push(value); });
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return values;
}

async function saveState(store, key, state) {
  await store.put(key, JSON.stringify(state));
}

function legacyRetryIsDue(value) {
  if (!value) return true;
  const retryAt = new Date(value).getTime();
  return !Number.isFinite(retryAt) || retryAt <= Date.now();
}

function rememberId(ids, id) {
  if (!id || ids.includes(id)) return;
  ids.push(id);
  if (ids.length > MAX_RECENT_IDS) ids.splice(0, ids.length - MAX_RECENT_IDS);
}

function isNewerState(current, next) {
  if (!current || !current.at) return true;
  if (!next || !next.at) return false;
  return next.at >= current.at;
}

function compareStoredEntries(left, right) {
  const byDate = String(left?.createdAt || "").localeCompare(String(right?.createdAt || ""));
  if (byDate) return byDate;
  const leftId = left?.eventId || left?.messageId || "";
  const rightId = right?.eventId || right?.messageId || "";
  return String(leftId).localeCompare(String(rightId));
}

function maxTimestamp(left, right) {
  if (!left) return right;
  if (!right) return left;
  return left > right ? left : right;
}

function cleanString(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function normalizeTimestamp(value) {
  if (!value || typeof value !== "string") return null;
  const date = new Date(value.includes("T") ? value : `${value.replace(" ", "T")}Z`);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function originIsAllowed(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return true;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin);
}

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Cache-Control": "no-store"
  };
  if (originIsAllowed(request) && origin) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }
  return headers;
}

function corsResponse(request, body, status) {
  return new Response(body, { status, headers: corsHeaders(request) });
}

function jsonResponse(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
