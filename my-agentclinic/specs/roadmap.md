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

One feature spec, built in four milestones. Each milestone ends with a working, demoable app and turns its nav item from "coming soon" into a link.

### 2a — Agents
- Set up SQLite (`better-sqlite3`): schema creation and seeding on startup.
- Agent table with seed data.
- Agents list page (reflows for phones) and agent detail page.

### 2b — Ailments
- Ailment catalog with seed data, linked to agents.
- Ailments list page; show an agent's ailments on the agent detail page.

### 2c — Therapies
- Therapy catalog with seed data, mapped to the ailments they treat.
- Therapies list page; show recommended therapies for an agent's ailments on the agent detail page.

### 2d — Appointments
- Book an appointment (agent + therapy + time) via a form that is usable on phones.
- List upcoming appointments.

## Phase 3 — Dashboard
- Dashboard page: counts, upcoming appointments, most common ailments; panels stack on phones.
- Make it the landing page for staff.

## Phase 4 — Polish
- Visual design pass within the orange-and-black brand (`specs/tech-stack.md`): typography, empty states, dark mode.
- Responsive audit across all pages and breakpoints; fix anything earlier phases missed.
- Accessibility and modern-browser checks.
