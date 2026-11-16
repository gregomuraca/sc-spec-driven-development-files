# Phase 1 — Hello Hono: Requirements

## Context

First implementation phase of AgentClinic (see `specs/roadmap.md`). The scaffold today is a CommonJS TypeScript project whose `src/index.ts` only logs a message. This phase turns it into a running Hono web server that renders a home page in a shared layout, as the base every later phase builds on.

Guided by `specs/mission.md` (small shippable slices, simple over clever, fun but real) and `specs/tech-stack.md` (Hono + Hono JSX, plain modern CSS, `tsx` for dev, `tsc` for build, ESM).

## Scope

### In scope

- Install runtime dependencies: `hono`, `@hono/node-server`.
- Install dev dependencies: `tsx`, `@types/node`.
- Switch the project to ES modules (`"type": "module"` in `package.json`).
- Update `tsconfig.json`: modern target (ES2022), `module`/`moduleResolution` `NodeNext`, `jsx: "react-jsx"`, `jsxImportSource: "hono/jsx"`, `outDir: "dist"`, `rootDir: "src"`, strict mode kept.
- npm scripts:
  - `dev` — `tsx watch src/index.tsx`
  - `build` — `tsc`
  - `start` — `node dist/index.js`
- Server entry that serves on port `3000` (overridable via `PORT` env var) and logs the URL.
- A minimal AgentClinic home page as the first runnable milestone: `GET /` returns a bare, valid HTML document with the AgentClinic name and tagline, before layout and styling are added.
- Folder layout per tech-stack conventions: `src/routes/`, `src/views/` (layout + components). `src/data/` is not needed yet.
- Shared layout component with:
  - `<header>` with the AgentClinic name/logo text and tagline.
  - `<nav>` with **Home** (linked) and **Agents**, **Ailments**, **Therapies**, **Appointments** shown as placeholders marked "coming soon" — not links until their phase ships.
  - `<main>` slot for page content.
  - `<footer>` with a short playful line and the year.
  - Proper document basics: `<!doctype html>`, `lang="en"`, charset, viewport, `<title>` per page.
- Home page (`GET /`): welcome hero with the clinic tagline and a short description of what AgentClinic offers.
- A base stylesheet served statically (e.g. `public/styles.css` at `/styles.css`) using CSS custom properties; enough to look tidy, not the full Phase 7 design pass.
- README note on how to run the app (`npm install`, `npm run dev`, `npm run build && npm start`).

### Out of scope

- Database / SQLite (Phase 2).
- Agents, ailments, therapies, appointments pages (Phases 2–5).
- Custom 404 page (Hono's default is fine for now).
- Automated tests and a test framework (still deferred).
- Full visual design, dark mode, accessibility audit (Phase 7).
- Client-side JavaScript.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| First milestone | Minimal home page before layout/styling | Proves the server, JSX and build pipeline end to end early; a demo-able checkpoint |
| Home page content | Welcome hero + placeholder nav | Shows the full app shell now; nav reveals the roadmap to demo viewers |
| Unbuilt sections in nav | Visible, labeled "coming soon", not links | No dead links; each phase "lights up" a nav item |
| Styling | One small static CSS file | Layout should look intentional from day one without pre-empting Phase 7 |
| Module system | ESM with `NodeNext` | Matches tech-stack conventions; required for clean `tsx`/`node` parity |
| Port | `3000`, `PORT` env override | Conventional default; easy to change at a booth |
| Static files | `serveStatic` from `@hono/node-server/serve-static` | First-party, no extra dependency |
| Tests | None this phase | Test framework is a deferred decision; validation is manual + build |

## Open questions

None at this time.
