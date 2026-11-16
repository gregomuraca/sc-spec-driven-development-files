# Changelog

All notable changes to AgentClinic, newest first.

## 2026-11-16

- Combine roadmap Phases 2–5 into one Phase 2 built in four milestones (Agents, Ailments, Therapies, Appointments), adding Ailments and Therapies list pages, renumbering Dashboard and Polish to Phases 3 and 4, and aligning the mission and Phase 1 spec.
- Apply the orange-and-black brand: brand color tokens, a black header with an orange border, AA-contrast orange text, a keyboard focus outline, and a Brand section in the tech-stack spec.
- Extract component props into named `<Component>Props` types, make `children` required in `Layout` and `Main`, and document the convention.
- Add a manual `/changelog` skill and require a changelog update before merging.
- Add CLAUDE.md with branch, pre-commit check, commit message and remote rules.
- Make the web UI responsive by default: mobile-first CSS with shared breakpoints and 44px touch targets, responsive requirements in every spec, and `tests/responsive.test.ts`.
- Add Vitest route, view and stylesheet tests (`npm test`, `npm run typecheck`), splitting the exported Hono app from the server entry point.
- Split the layout into Header, Main and Footer components with their own `layout.css`, and mark Phase 1 complete.
- Implement Phase 1 Hello Hono: ESM setup, Hono server, shared layout with "coming soon" nav, home page, styles and README run instructions.
- Add the Phase 1 Hello Hono feature spec (requirements, plan, validation), with a minimal home page as the first runnable milestone.
- Add the AgentClinic constitution: mission, tech stack and a seven-phase roadmap.
