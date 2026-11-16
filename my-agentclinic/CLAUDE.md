# AgentClinic — Claude instructions

Spec-driven project. Product specs live in `specs/` (`mission.md`, `tech-stack.md`, `roadmap.md`); each phase has a feature spec folder (`specs/YYYY-MM-DD-<name>/`: `requirements.md`, `plan.md`, `validation.md`).

## Commit rules

### Branches

- Never commit directly to `main`. Start each phase or change on its own branch, named in kebab case after the work (e.g. `phase-2-agents`, `add-vitest`, `responsive-design`).
- Merge into `main` with `git merge --no-ff <branch>` so each change stays a visible unit, then delete the branch.
- Commit, merge and push only when the user asks or approves.

### Before every commit

- `npm test`, `npm run typecheck` and `npm run build` all pass. Never commit with failing tests; never skip or delete a test to get green.
- Specs match the code. When behavior, structure, scripts or dependencies change, update the affected specs (`tech-stack.md`, the phase's `requirements.md` / `plan.md` / `validation.md`, `roadmap.md`) and `README.md` in the same commit.
- Only tick a `validation.md` item when it has actually been checked. Leave manual browser checks unticked until someone has done them.
- Stage only files in `my-agentclinic/`. Course material elsewhere in the repo (e.g. `prompts/`, `VideoNN_*/`) is committed separately, if at all.
- Never commit `node_modules/`, `dist/` or `data/*.db`.

### Messages

- Subject: imperative mood, sentence case, no trailing period, ≤ 72 characters (e.g. `Add Vitest test suites and reflect testing in specs`).
- Body (for anything beyond a one-line change): a blank line, then short `-` bullets saying what changed and why, grouped by specs / code / tests.
- One logical change per commit: a spec commit, then an implementation commit, is fine; unrelated changes are not.
- End with the co-author trailer:

  ```
  Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
  ```

- Merge commits keep Git's default subject (`Merge branch '<branch>'`) plus the trailer.

### Remotes

- `origin` is the read-only course repo (`https-deeplearning-ai/...`); never push to it. Use it only to `git fetch origin` for course updates.
- `mine` is the user's fork; `main` tracks `mine/main`. Push with `git push mine main`.
