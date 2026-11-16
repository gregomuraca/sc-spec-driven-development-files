# Phase 1 — Hello Hono: Requirements

## Context

First implementation phase of AgentClinic (see `specs/roadmap.md`). The scaffold today is a CommonJS TypeScript project whose `src/index.ts` only logs a message. This phase turns it into a running Hono web server that renders a home page in a shared layout, as the base every later phase builds on.

Guided by `specs/mission.md` (small shippable slices, simple over clever, fun but real) and `specs/tech-stack.md` (Hono + Hono JSX, plain modern CSS, `tsx` for dev, `tsc` for build, ESM).

## Scope

### In scope

- Install runtime dependencies: `hono`, `@hono/node-server`.
- Install dev dependencies: `tsx`, `@types/node`, `vitest`.
- Switch the project to ES modules (`"type": "module"` in `package.json`).
- Update `tsconfig.json`: modern target (ES2022), `module`/`moduleResolution` `NodeNext`, `jsx: "react-jsx"`, `jsxImportSource: "hono/jsx"`, `outDir: "dist"`, `rootDir: "src"`, strict mode kept.
- npm scripts:
  - `dev` — `tsx watch src/index.tsx`
  - `build` — `tsc`
  - `start` — `node dist/index.js`
  - `test` — `vitest run`; `test:watch` — `vitest`; `typecheck` — `tsc -p tests`
- Hono app built and exported from `src/app.tsx`; server entry `src/index.tsx` serves it on port `3000` (overridable via `PORT` env var) and logs the URL.
- A minimal AgentClinic home page as the first runnable milestone: `GET /` returns a bare, valid HTML document with the AgentClinic name and tagline, before layout and styling are added.
- Folder layout per tech-stack conventions: `src/routes/`, `src/views/` (layout + components). `src/data/` is not needed yet.
- Main layout component (`Layout`, in `src/views/Layout.tsx`) composed of three subcomponents, each in its own file: `Header` (`src/views/Header.tsx`), `Main` (`src/views/Main.tsx`) and `Footer` (`src/views/Footer.tsx`). `Layout` imports them and does not inline those regions. Together they render:
  - `<header>` with the AgentClinic name/logo text and tagline.
  - `<nav>` with **Home** (linked) and **Agents**, **Ailments**, **Therapies**, **Appointments** shown as placeholders marked "coming soon" — not links until their phase ships.
  - `<main>` slot for page content.
  - `<footer>` with a short playful line and the year.
  - Proper document basics: `<!doctype html>`, `lang="en"`, charset, viewport, `<title>` per page.
- Home page (`GET /`): welcome hero with the clinic tagline and a short description of what AgentClinic offers.
- Static stylesheets using CSS custom properties, linked from the layout: `public/styles.css` (tokens, breakpoints, base, page styles) and `public/layout.css` (header/nav/main/footer). Enough to look tidy, not the full Phase 4 design pass.
- Responsive, mobile-first layout per `specs/tech-stack.md`: works from 320px to desktop with no horizontal scroll; header, nav, hero and offering cards adapt at the `40rem` breakpoint; nav items meet the 44px touch target; viewport meta allows zoom.
- Vitest test suites in `tests/`: route tests for `GET /` and the stylesheets (via `app.request()`), view tests for `Nav`, `Header`, `Main`, `Footer`, `Layout` and `HomePage`, and responsive rules in `tests/responsive.test.ts`.
- README note on how to run the app (`npm install`, `npm run dev`, `npm run build && npm start`) and the tests (`npm test`).

### Out of scope

- Database / SQLite (Phase 2).
- Agents, ailments, therapies, appointments pages (Phase 2).
- Custom 404 page (Hono's default is fine for now).
- Full visual design, dark mode, accessibility audit, cross-page responsive audit (Phase 4).
- Client-side JavaScript.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| First milestone | Minimal home page before layout/styling | Proves the server, JSX and build pipeline end to end early; a demo-able checkpoint |
| Home page content | Welcome hero + placeholder nav | Shows the full app shell now; nav reveals the roadmap to demo viewers |
| Unbuilt sections in nav | Visible, labeled "coming soon", not links | No dead links; each phase "lights up" a nav item |
| Layout structure | `Layout` composes `Header`, `Main`, `Footer` subcomponents, one file per component | Each region is small and reusable; later phases change one without touching the others |
| Styling | Two small static CSS files (base + layout) | Layout should look intentional from day one without pre-empting Phase 4 |
| Responsive approach | Mobile-first, `min-width` breakpoints at `40rem`/`64rem`, intrinsic grids and `clamp()` | Booth visitors use phones; establishing the pattern in Phase 1 means later pages inherit it |
| Nav on phones | Items wrap onto extra rows; no hamburger menu | Five short items fit in a few rows; no client JS needed |
| Module system | ESM with `NodeNext` | Matches tech-stack conventions; required for clean `tsx`/`node` parity |
| Port | `3000`, `PORT` env override | Conventional default; easy to change at a booth |
| Static files | `serveStatic` from `@hono/node-server/serve-static` | First-party, no extra dependency |
| Tests | Vitest; route tests via `app.request()` plus view component tests | Chosen in `specs/tech-stack.md`; automates the HTTP checks so validation is repeatable |
| App vs server | `src/app.tsx` exports the app, `src/index.tsx` calls `serve()` | Tests import the app without starting a server or binding a port |

## Open questions

None at this time.
