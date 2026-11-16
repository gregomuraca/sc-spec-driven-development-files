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
| Testing | [Vitest](https://vitest.dev) | Fast, TypeScript- and ESM-native, no extra config; runs the same JSX settings as `tsc` |

## Conventions

- ES modules, modern `target` (ES2022+); update `tsconfig.json` accordingly, with `jsx: "react-jsx"` and `jsxImportSource: "hono/jsx"`.
- Source in `src/`: `routes/`, `views/` (layouts + components), `data/` (database access, schema, seed data).
- Database file lives in `data/agentclinic.db` (git-ignored); schema is created and seeded on startup if missing.
- Use plain SQL with prepared statements; no ORM.
- Pages are server-rendered; forms use standard POST + redirect.
- Keep dependencies few and well-known.

## Testing and validation

- Vitest tests are the automated validation for each phase: a phase's validation checklist is not complete until `npm test` passes.
- Run with `npm test` (single run, `vitest run`); use `npm run test:watch` while developing and `npm run typecheck` to type-check the tests.
- Tests live in `tests/`, mirroring `src/` (e.g. `tests/routes/home.test.ts`, `tests/views/components.test.tsx`), named `*.test.ts` / `*.test.tsx`. Keeping them out of `src/` keeps them out of the `tsc` build; `tests/tsconfig.json` type-checks them.
- `vitest.config.ts` compiles test JSX with `hono/jsx`, matching `tsconfig.json`.
- The Hono app is built in `src/app.tsx` and exported; `src/index.tsx` only starts the server. Tests import `app` and never open a port.
- Test routes through `app.request()` and assert on status, headers and rendered HTML. Test view components by rendering them to a string (`tests/views/render.ts`).
- Database tests use an in-memory SQLite database (`:memory:`), never `data/agentclinic.db`.
