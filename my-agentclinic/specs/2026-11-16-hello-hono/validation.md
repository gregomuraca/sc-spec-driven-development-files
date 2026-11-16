# Phase 1 — Hello Hono: Validation

The branch can be merged when every check below passes. The HTTP checks are automated with Vitest (see `specs/tech-stack.md`); `npm test` covers them. Visual checks stay manual.

## Build

- [x] `npm install` completes from a clean checkout with no errors.
- [x] `npm run build` succeeds with `strict` TypeScript and produces `dist/index.js`.
- [x] No `any` escapes or `@ts-ignore` added to get the build passing.

## Tests

- [x] `npm test` passes (route, static CSS and view component suites).
- [x] `npm run typecheck` passes for the test files.
- [x] Tests import `app` from `src/app.tsx` and never start a server.
- [x] Breaking a checked behavior (e.g. turning a "coming soon" item into a link) makes `npm test` fail.

## Run

- [x] `npm run dev` starts the server and logs `AgentClinic running at http://localhost:3000`.
- [x] Editing a view while `npm run dev` runs reloads the server automatically.
- [x] `npm run build && npm start` serves the same page from compiled output.
- [x] `PORT=4000 npm start` serves on port 4000.

## HTTP checks

Automated in `tests/routes/home.test.ts` and `tests/static.test.ts`, except the group 2 checkpoint, which is a manual `curl` against the running server.

- [ ] Minimal home page checkpoint (plan task group 2): after group 2 alone, `curl -i http://localhost:3000/` returns `200` HTML containing "AgentClinic" (no layout or stylesheet yet).
- [x] `curl -i http://localhost:3000/` returns `200` with `content-type: text/html`.
- [x] Response starts with `<!DOCTYPE html>` and has `<html lang="en">`, a viewport meta tag and a `<title>`.
- [x] Response contains `<header>`, `<nav>`, `<main>` and `<footer>` elements.
- [x] Nav contains a link to `/` and the text Agents, Ailments, Therapies, Appointments, each marked "coming soon" and **not** wrapped in `<a>`.
- [x] `curl -i http://localhost:3000/styles.css` returns `200` with a CSS content type (in both dev and start modes).
- [x] `curl -i http://localhost:3000/layout.css` returns `200` with a CSS content type, and the page `<head>` links both `/styles.css` and `/layout.css`.

## Visual check (modern browser)

- [ ] Home page shows the header, welcome hero, nav and footer, styled by the stylesheet (not browser defaults).
- [ ] Layout holds up at phone width (~375px) with no horizontal scroll.
- [ ] Tone matches the mission: playful copy, serious engineering.

## Housekeeping

- [x] Project structure matches tech-stack conventions (`src/routes/`, `src/views/`, `public/`, `tests/`).
- [x] `Header`, `Main` and `Footer` each live in their own file (`src/views/Header.tsx`, `Main.tsx`, `Footer.tsx`), and `Layout.tsx` imports and composes them rather than inlining those regions.
- [x] `node_modules/` and `dist/` are git-ignored.
- [x] README explains how to run the app.
- [x] Nothing out of scope (database, other feature pages, client JS) was added.
