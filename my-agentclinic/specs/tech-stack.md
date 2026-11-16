# AgentClinic — Tech Stack

## Summary

Server-side TypeScript with **Hono**, rendering HTML with **Hono JSX**. Minimal client-side JavaScript.

## Choices

| Area | Choice | Why |
|---|---|---|
| Language | TypeScript (strict) | Mary's requirement; type safety end to end |
| Runtime | Node.js (v18+) | Already required by the course; ubiquitous |
| Web framework | [Hono](https://hono.dev) + `@hono/node-server` | Popular, lightweight, TypeScript-first, fast to demo |
| Views | Hono JSX (server-side rendering) | Components without a client framework or build-heavy frontend |
| Styling | Plain modern CSS (custom properties, grid/flex, `:has`, container queries) | Steve's "attractive, modern browser" goal without a CSS framework |
| Client interactivity | Progressive enhancement; small inline scripts only where needed | Keeps the app simple and reliable |
| Database | SQLite via [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3) | Zero-config, file-based, no server to run; synchronous API keeps code simple; ideal for demos |
| Dev runner | `tsx` (watch mode) | Run TypeScript directly with fast reloads |
| Build | `tsc` | Already in the scaffold |

## Conventions

- ES modules, modern `target` (ES2022+); update `tsconfig.json` accordingly, with `jsx: "react-jsx"` and `jsxImportSource: "hono/jsx"`.
- Source in `src/`: `routes/`, `views/` (layouts + components), `data/` (database access, schema, seed data).
- Database file lives in `data/agentclinic.db` (git-ignored); schema is created and seeded on startup if missing.
- Use plain SQL with prepared statements; no ORM.
- Pages are server-rendered; forms use standard POST + redirect.
- Keep dependencies few and well-known.

## Deferred decisions

- Test framework (to be chosen when tests are introduced).
