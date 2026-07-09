const BOARD_ID = "mccune-jimmy-changes-v1";
const EVENT_PREFIX = "mccune-review:v1:event:";
const MESSAGE_PREFIX = "mccune-review:v1:message:";
const MAX_MESSAGE_LENGTH = 1200;
const MAX_VISIBLE_MESSAGES = 200;
const ACTORS = new Set(["Matt", "Jimmy"]);
const ACTIONS = new Set(["implement", "implemented"]);
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

    if (url.pathname === "/api/checklist") {
      if (!originIsAllowed(request)) {
        return jsonResponse(request, { error: "Origin is not allowed." }, 403);
      }

      if (request.method === "GET") {
        return jsonResponse(request, await readBoard(env.REVIEW_STORE));
      }

      if (request.method === "POST") {
        return saveAction(request, env.REVIEW_STORE);
      }

      return jsonResponse(request, { error: "Method is not allowed." }, 405);
    }

    if (url.pathname === "/api/messages") {
      if (!originIsAllowed(request)) {
        return jsonResponse(request, { error: "Origin is not allowed." }, 403);
      }

      if (request.method === "GET") {
        return jsonResponse(request, await readMessages(env.REVIEW_STORE));
      }

      if (request.method === "POST") {
        return saveMessage(request, env.REVIEW_STORE);
      }

      return jsonResponse(request, { error: "Method is not allowed." }, 405);
    }

    if (url.pathname === "/health") {
      return jsonResponse(request, {
        ok: true,
        service: "mccune-review-api",
        boardId: BOARD_ID
      });
    }

    return new Response(
      "McCune review API. Use /health, /api/checklist, or /api/messages.",
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

  const key = MESSAGE_PREFIX + messageId;
  const existing = await store.get(key, "json");
  if (existing && existing.boardId === BOARD_ID) {
    return jsonResponse(request, { ok: true, message: existing });
  }

  const message = {
    messageId,
    boardId: BOARD_ID,
    actor,
    body,
    createdAt: new Date().toISOString()
  };
  await store.put(key, JSON.stringify(message));
  return jsonResponse(request, { ok: true, message });
}

async function readMessages(store) {
  const messages = [];
  let cursor;
  do {
    const page = await store.list({ prefix: MESSAGE_PREFIX, cursor, limit: 1000 });
    const values = await Promise.all(page.keys.map((key) => store.get(key.name, "json")));
    values.forEach((value) => {
      if (value && value.boardId === BOARD_ID && ACTORS.has(value.actor) && value.body) {
        messages.push(value);
      }
    });
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  messages.sort((left, right) => {
    const byDate = String(left.createdAt).localeCompare(String(right.createdAt));
    return byDate || String(left.messageId).localeCompare(String(right.messageId));
  });

  const visibleMessages = messages.slice(-MAX_VISIBLE_MESSAGES);
  return {
    ok: true,
    boardId: BOARD_ID,
    revision: messages.length,
    updatedAt: visibleMessages.length ? visibleMessages[visibleMessages.length - 1].createdAt : null,
    messages: visibleMessages
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
  const queuedAt = normalizeTimestamp(cleanString(payload.queuedAt, 40)) || new Date().toISOString();
  const event = {
    eventId,
    boardId: BOARD_ID,
    featureId,
    featureTitle,
    action,
    actor,
    active,
    createdAt: queuedAt
  };
  await store.put(EVENT_PREFIX + eventId, JSON.stringify(event));

  const board = await readBoard(store);
  applyEvent(board, event);
  return jsonResponse(request, board);
}

async function readBoard(store) {
  const events = [];
  let cursor;
  do {
    const page = await store.list({ prefix: EVENT_PREFIX, cursor, limit: 1000 });
    const values = await Promise.all(page.keys.map((key) => store.get(key.name, "json")));
    values.forEach((value) => { if (value && value.boardId === BOARD_ID) events.push(value); });
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  events.sort((left, right) => {
    const byDate = String(left.createdAt).localeCompare(String(right.createdAt));
    return byDate || String(left.eventId).localeCompare(String(right.eventId));
  });

  const board = {
    ok: true,
    boardId: BOARD_ID,
    revision: events.length,
    updatedAt: null,
    items: {}
  };
  events.forEach((event) => applyEvent(board, event));
  return board;
}

function applyEvent(board, event) {
  const item = board.items[event.featureId] || {
    title: event.featureTitle,
    requests: { Matt: null, Jimmy: null },
    implemented: null
  };
  item.title = event.featureTitle || item.title;
  const state = {
    active: Boolean(event.active),
    actor: event.actor,
    at: normalizeTimestamp(event.createdAt),
    eventId: event.eventId
  };
  if (event.action === "implement") item.requests[event.actor] = state;
  if (event.action === "implemented") item.implemented = state;
  board.items[event.featureId] = item;
  board.updatedAt = maxTimestamp(board.updatedAt, state.at);
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
  if (!value) return null;
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
