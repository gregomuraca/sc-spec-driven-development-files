# Phase 1 — Hello Hono: Validation

The branch can be merged when every check below passes. No automated test framework yet (deferred per `specs/tech-stack.md`); checks are build + manual.

## Build

- [ ] `npm install` completes from a clean checkout with no errors.
- [ ] `npm run build` succeeds with `strict` TypeScript and produces `dist/index.js`.
- [ ] No `any` escapes or `@ts-ignore` added to get the build passing.

## Run

- [ ] `npm run dev` starts the server and logs `AgentClinic running at http://localhost:3000`.
- [ ] Editing a view while `npm run dev` runs reloads the server automatically.
- [ ] `npm run build && npm start` serves the same page from compiled output.
- [ ] `PORT=4000 npm start` serves on port 4000.

## HTTP checks

- [ ] `curl -i http://localhost:3000/` returns `200` with `content-type: text/html`.
- [ ] Response starts with `<!DOCTYPE html>` and has `<html lang="en">`, a viewport meta tag and a `<title>`.
- [ ] Response contains `<header>`, `<nav>`, `<main>` and `<footer>` elements.
- [ ] Nav contains a link to `/` and the text Agents, Ailments, Therapies, Appointments, each marked "coming soon" and **not** wrapped in `<a>`.
- [ ] `curl -i http://localhost:3000/styles.css` returns `200` with a CSS content type (in both dev and start modes).

## Visual check (modern browser)

- [ ] Home page shows the header, welcome hero, nav and footer, styled by the stylesheet (not browser defaults).
- [ ] Layout holds up at phone width (~375px) with no horizontal scroll.
- [ ] Tone matches the mission: playful copy, serious engineering.

## Housekeeping

- [ ] Project structure matches tech-stack conventions (`src/routes/`, `src/views/`, `public/`).
- [ ] `node_modules/` and `dist/` are git-ignored.
- [ ] README explains how to run the app.
- [ ] Nothing out of scope (database, other feature pages, client JS) was added.
