# AgentClinic — Roadmap

High-level implementation order in very small phases. Each phase is roughly one sitting, ends with a working app, and gets its own feature spec before implementation.

Every phase ships responsive UI (mobile-first, per `specs/tech-stack.md`): new pages are validated on phone, tablet and desktop widths in the phase that adds them, not deferred to Phase 7.

## Phase 1 — Hello Hono ✅ Complete

Spec: [`specs/2026-11-16-hello-hono/`](2026-11-16-hello-hono/)

- Install Hono, `@hono/node-server`, `tsx`; update `tsconfig.json` for ESM + JSX.
- Single home page rendered with a shared, responsive layout (header, nav, footer).
- `npm run dev` and `npm start` scripts.
- Vitest set up (`npm test`), with route and view tests for the home page.

## Phase 2 — Agents
- Set up SQLite (`better-sqlite3`): schema creation and seeding on startup.
- Agent table with seed data.
- Agents list page and agent detail page (list reflows for phones).

## Phase 3 — Ailments
- Ailment catalog with seed data.
- Link ailments to agents; show them on the agent detail page.

## Phase 4 — Therapies
- Therapy catalog with seed data, mapped to the ailments they treat.
- Show recommended therapies for an agent's ailments.

## Phase 5 — Appointments
- Book an appointment (agent + therapy + time) via a form that is usable on phones.
- List upcoming appointments.

## Phase 6 — Dashboard
- Dashboard page: counts, upcoming appointments, most common ailments; panels stack on phones.
- Make it the landing page for staff.

## Phase 7 — Polish
- Visual design pass (color, typography, empty states).
- Responsive audit across all pages and breakpoints; fix anything earlier phases missed.
- Accessibility and modern-browser checks.
