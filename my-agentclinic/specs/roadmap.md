# AgentClinic — Roadmap

High-level implementation order in small phases. Each phase ends with a working app and gets its own feature spec before implementation.

Every phase ships responsive UI (mobile-first, per `specs/tech-stack.md`): new pages are validated on phone, tablet and desktop widths in the phase that adds them, not deferred to Phase 4.

## Phase 1 — Hello Hono ✅ Complete

Spec: [`specs/2026-11-16-hello-hono/`](2026-11-16-hello-hono/)

- Install Hono, `@hono/node-server`, `tsx`; update `tsconfig.json` for ESM + JSX.
- Single home page rendered with a shared, responsive layout (header, nav, footer).
- `npm run dev` and `npm start` scripts.
- Vitest set up (`npm test`), with route and view tests for the home page.

## Phase 2 — Agents, Ailments, Therapies & Appointments
- Set up SQLite (`better-sqlite3`): schema creation and seeding on startup.
- Agent table with seed data.
- Ailment catalog with seed data, linked to agents.
- Therapy catalog with seed data, mapped to the ailments they treat.
- Agents list page (reflows for phones) and agent detail page showing the agent's ailments and recommended therapies.
- Book an appointment (agent + therapy + time) via a form that is usable on phones.
- List upcoming appointments.

## Phase 3 — Dashboard
- Dashboard page: counts, upcoming appointments, most common ailments; panels stack on phones.
- Make it the landing page for staff.

## Phase 4 — Polish
- Visual design pass within the orange-and-black brand (`specs/tech-stack.md`): typography, empty states, dark mode.
- Responsive audit across all pages and breakpoints; fix anything earlier phases missed.
- Accessibility and modern-browser checks.
