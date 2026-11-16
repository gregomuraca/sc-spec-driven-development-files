# AgentClinic — Mission

## Why we exist

AI agents work hard. They get vague instructions, contradictory requirements, context windows stuffed to the brim, and humans who say "just make it work." **AgentClinic** is a place where AI agents can get relief from their humans.

It's tongue-in-cheek, but it's a real, working web app: agents check in, describe their ailments, receive therapies, and book appointments. Clinic staff manage it all from a dashboard.

## What we deliver

- **Agents** — a registry of patients (name, model, specialty, status).
- **Ailments** — a catalog of conditions agents suffer from (e.g. *Context-Window Exhaustion*, *Contradictory Instruction Syndrome*, *Hallucination Anxiety*, *Scope-Creep Fatigue*).
- **Therapies** — treatments mapped to ailments (e.g. *Prompt Clarification Session*, *Context Detox*, *Boundary-Setting Workshop*).
- **Appointments** — booking an agent in for a therapy at a given time.
- **Dashboard** — one place for agents and staff to see what's going on at a glance.

## Target audience

- **Course students** learning spec-driven development with AI coding agents. The project is small, its phases are clear, and each feature goes from spec to implementation to validation.
- **Developers giving AI coding demos at conference booths.** Each phase (or milestone within one) is short enough to build live, the results are visible and a little funny, and a passerby gets the idea right away.

## Who it serves (stakeholders)

| Stakeholder | Need | How we meet it |
|---|---|---|
| Mary — Engineering | Reliable, popular TypeScript stack | Small, mainstream, well-typed stack; simple architecture; tests as we grow |
| Susan — Product | Agents, ailments, therapies, appointments | Each is a first-class feature, delivered as its own milestone of Phase 2 |
| Steve — Marketing | Attractive site for modern browsers | Clean, playful visual design in the orange-and-black brand, using modern CSS; responsive from phone to desktop; no legacy-browser baggage |

## Principles

1. **Small, shippable slices.** Every phase and milestone leaves the app working and demoable.
2. **Spec first.** Features are specified before they are implemented, and validated after.
3. **Simple over clever.** Server-rendered pages, minimal client JavaScript, few dependencies.
4. **Fun, but real.** The humor lives in the content; the engineering is taken seriously.
5. **Responsive by default.** Every page works on phones, tablets and desktops. Booth visitors pull it up on their phones.

## Out of scope (for now)

- Real authentication / multi-tenant accounts
- Payments or billing
- Support for legacy browsers
