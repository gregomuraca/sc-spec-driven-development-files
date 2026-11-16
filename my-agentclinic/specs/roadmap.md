# AgentClinic — Roadmap

High-level implementation order in very small phases. Each phase is roughly one sitting, ends with a working app, and gets its own feature spec before implementation.

## Phase 1 — Hello Hono ✅ Complete

Spec: [`specs/2026-11-16-hello-hono/`](2026-11-16-hello-hono/)

- Install Hono, `@hono/node-server`, `tsx`; update `tsconfig.json` for ESM + JSX.
- Single home page rendered with a shared layout (header, nav, footer).
- `npm run dev` and `npm start` scripts.
- Vitest set up (`npm test`), with route and view tests for the home page.

## Phase 2 — Agents
- Set up SQLite (`better-sqlite3`): schema creation and seeding on startup.
- Agent table with seed data.
- Agents list page and agent detail page.

## Phase 3 — Ailments
- Ailment catalog with seed data.
- Link ailments to agents; show them on the agent detail page.

## Phase 4 — Therapies
- Therapy catalog with seed data, mapped to the ailments they treat.
- Show recommended therapies for an agent's ailments.

## Phase 5 — Appointments
- Book an appointment (agent + therapy + time) via a form.
- List upcoming appointments.

## Phase 6 — Dashboard
- Dashboard page: counts, upcoming appointments, most common ailments.
- Make it the landing page for staff.

## Phase 7 — Polish
- Visual design pass (color, typography, empty states, responsive layout).
- Accessibility and modern-browser checks.
