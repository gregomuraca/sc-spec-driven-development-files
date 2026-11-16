# Phase 1 — Hello Hono: Plan

Each task group ends with the project in a consistent state. See `requirements.md` for scope and `validation.md` for acceptance.

## 1. Dependencies & configuration

1.1 Install runtime deps: `npm install hono @hono/node-server`.
1.2 Install dev deps: `npm install -D tsx @types/node`.
1.3 Add `"type": "module"` to `package.json`; set `"main": "dist/index.js"`.
1.4 Add scripts: `dev` (`tsx watch src/index.tsx`), `build` (`tsc`), `start` (`node dist/index.js`).
1.5 Update `tsconfig.json`: `target: "ES2022"`, `module: "NodeNext"`, `moduleResolution: "NodeNext"`, `jsx: "react-jsx"`, `jsxImportSource: "hono/jsx"`, `rootDir: "src"`, `outDir: "dist"`, keep `strict`, `skipLibCheck`, `forceConsistentCasingInFileNames`.
1.6 Confirm `.gitignore` covers `node_modules/` and `dist/`.

## 2. Server entry

2.1 Replace `src/index.ts` with `src/index.tsx`.
2.2 Create the Hono `app`, mount routes, and start it with `serve()` from `@hono/node-server` on `Number(process.env.PORT) || 3000`.
2.3 Log `AgentClinic running at http://localhost:<port>` on startup.
2.4 Create `src/routes/home.tsx` exporting a Hono sub-app (or handler) for `GET /`; mount it in `index.tsx`. Use `.js` extensions in relative imports (NodeNext).

## 3. Layout & home view

3.1 Create `src/views/Layout.tsx`: accepts `title` and `children`; renders doctype, `<html lang="en">`, head (charset, viewport, `<title>`, stylesheet link), header, nav, main, footer.
3.2 Create `src/views/Nav.tsx`: Home as a link (marked current with `aria-current="page"`); Agents, Ailments, Therapies, Appointments as non-link items labeled "coming soon".
3.3 Create `src/views/HomePage.tsx`: welcome hero (tagline, short description of agents/ailments/therapies/appointments).
3.4 Render `HomePage` inside `Layout` from the `GET /` route via `c.html(...)`.

## 4. Static CSS & docs

4.1 Create `public/styles.css`: CSS custom properties for colors/spacing/fonts, base typography, header/nav/footer layout with flex or grid, styling for "coming soon" items.
4.2 Serve it with `serveStatic({ root: './public' })` for `/styles.css` (or `/static/*`); confirm it works from both `npm run dev` and `npm start` (paths resolved from project root).
4.3 Add a "Running the app" section to `README.md` (`npm install`, `npm run dev`, `npm run build && npm start`, `PORT` override).
4.4 Walk through `validation.md` and tick every item.
