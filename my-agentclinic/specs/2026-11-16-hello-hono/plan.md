# Phase 1 — Hello Hono: Plan

Each task group ends with the project in a consistent, runnable state. See `requirements.md` for scope and `validation.md` for acceptance.

## 1. Dependencies & configuration

1.1 Install runtime deps: `npm install hono @hono/node-server`.
1.2 Install dev deps: `npm install -D tsx @types/node vitest`.
1.3 Add `"type": "module"` to `package.json`; set `"main": "dist/index.js"`.
1.4 Add scripts: `dev` (`tsx watch src/index.tsx`), `build` (`tsc`), `start` (`node dist/index.js`), `test` (`vitest run`), `test:watch` (`vitest`), `typecheck` (`tsc -p tests`).
1.5 Update `tsconfig.json`: `target: "ES2022"`, `module: "NodeNext"`, `moduleResolution: "NodeNext"`, `jsx: "react-jsx"`, `jsxImportSource: "hono/jsx"`, `rootDir: "src"`, `outDir: "dist"`, keep `strict`, `skipLibCheck`, `forceConsistentCasingInFileNames`.
1.6 Confirm `.gitignore` covers `node_modules/` and `dist/`.
1.7 Add `vitest.config.ts` (test JSX compiled with `hono/jsx`; tests in `tests/**/*.test.{ts,tsx}`) and `tests/tsconfig.json` (extends the root config, `noEmit`, covers `tests/` and `src/`).

## 2. Minimal AgentClinic home page

The first "it's alive" milestone: a running server that answers `GET /` with a bare AgentClinic page, before any layout or styling.

2.1 Replace `src/index.ts` with `src/index.tsx`.
2.2 Create the Hono `app` and start it with `serve()` from `@hono/node-server` on `Number(process.env.PORT) || 3000`.
2.3 Log `AgentClinic running at http://localhost:<port>` on startup.
2.4 Add `GET /` returning `c.html(...)` with a minimal valid document: `<!DOCTYPE html>`, `<html lang="en">`, `<title>AgentClinic</title>`, an `<h1>AgentClinic</h1>` and the one-line tagline.
2.5 Checkpoint: `npm run dev`, then `curl -i http://localhost:3000/` returns `200` HTML containing "AgentClinic".

## 3. Routes & layout

3.1 Move the home handler into `src/routes/home.tsx` as a Hono sub-app. Build and export the `app` in `src/app.tsx` (mount with `app.route('/', home)`); `src/index.tsx` imports it and only calls `serve()`. Use `.js` extensions in relative imports (NodeNext).
3.2 Create the three layout subcomponents in `src/views/`, each in its own file exporting one component:
  - `Header.tsx` — AgentClinic brand, tagline and `Nav`.
  - `Main.tsx` — `<main>` wrapper for page content (`children`).
  - `Footer.tsx` — playful line and the current year.
3.3 Create `src/views/Layout.tsx` (the main layout component): accepts `title`, `current` and `children`; renders doctype, `<html lang="en">`, head (charset, viewport, `<title>`, stylesheet links), then composes `<Header />`, `<Main>{children}</Main>` and `<Footer />`.
3.4 Create `src/views/Nav.tsx`: Home as a link (marked current with `aria-current="page"`); Agents, Ailments, Therapies, Appointments as non-link items labeled "coming soon".
3.5 Render the minimal home content inside `Layout` from the `GET /` route.

## 4. Home view

4.1 Create `src/views/HomePage.tsx`: welcome hero (tagline, short description of agents/ailments/therapies/appointments).
4.2 Replace the minimal home content with `HomePage` inside `Layout`.

## 5. Static CSS & docs

5.1 Create `public/styles.css`, mobile-first: breakpoint notes (`40rem`, `64rem`), CSS custom properties for colors/spacing/fonts plus `--gutter` and `--tap-target`, base typography, `img/svg/video { max-width: 100% }`, `overflow-wrap`, shared `.container`, and home page styles (hero, cards) that grow at `40rem`.
5.2 Create `public/layout.css`, mobile-first: styles for the layout subcomponents only — header/brand, nav (wrapping items, 44px touch targets, "coming soon" items), main and footer, enhanced at `40rem`.
5.3 Link both from `Layout.tsx` (`/styles.css` first, then `/layout.css`) and serve them with `app.use('/*.css', serveStatic({ root: './public' }))` in `src/app.tsx`; confirm both load from `npm run dev` and `npm start` (paths resolved from project root).
5.4 Add a "Running the app" section to `README.md` (`npm install`, `npm run dev`, `npm run build && npm start`, `PORT` override, `npm test`).

## 6. Tests

6.1 `tests/routes/home.test.ts`: `GET /` returns `200` HTML with doctype, `lang`, viewport and `<title>`; has header/nav/main/footer; nav links Home and shows the four unbuilt sections as "coming soon" without links; head links both stylesheets.
6.2 `tests/static.test.ts`: `/styles.css` and `/layout.css` return `200` with a CSS content type.
6.3 `tests/responsive.test.ts`: viewport meta allows zoom; stylesheets use only `min-width` queries at the shared breakpoints; no fixed widths over 320px; media capped at `100%`; nav touch targets.
6.4 `tests/views/components.test.tsx` (with `tests/views/render.ts` helper): unit tests for `Nav`, `Header`, `Main`, `Footer`, `Layout` (document shell, stylesheet order, region order) and `HomePage` (hero, four offering cards).
6.5 `npm test` and `npm run typecheck` pass.
6.6 Walk through `validation.md` and tick every item.
