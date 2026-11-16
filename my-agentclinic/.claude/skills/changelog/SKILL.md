---
name: changelog
description: Create or update AgentClinic's CHANGELOG.md from git history, with a heading per date and bullets per change. Run manually before merging a branch into main.
disable-model-invocation: true
---

# Changelog

Keep `CHANGELOG.md` in the project root (`my-agentclinic/CHANGELOG.md`) up to date from git history. The user runs this before merging a branch into `main`, so the changelog update lands in the same merge as the work it describes.

Run all git commands from `my-agentclinic/` and limit them to the project with `-- .`, so course material elsewhere in the repo is left out.

## Format

```markdown
# Changelog

All notable changes to AgentClinic, newest first.

## 2026-11-17

- Add Agents list and detail pages backed by SQLite seed data.
- Document the agents schema in the Phase 2 spec.

## 2026-11-16

- Set up Hono server with a shared Header/Main/Footer layout and home page.
- Add Vitest route, view and responsive test suites (`npm test`).
```

- One `## YYYY-MM-DD` heading per date, newest date first. No empty headings.
- Dates are each commit's author date: `git log --date=short`.
- Under each date, one `- ` bullet per meaningful change, newest first.
- Bullets start with an imperative verb (Add, Update, Fix, Remove, Split…), end with a period and fit on one line where possible.
- Write for someone reading the project's history: say what changed for the app, specs, tests or tooling, not which files were touched. Use the commit body for detail, not just the subject.
- Combine commits that are one change (e.g. a spec commit and its follow-up tweak) into one bullet. Skip merge commits and commits that only touch `CHANGELOG.md`.
- Mention the phase when a change belongs to one (e.g. "Phase 1").

## Steps

1. **Check the branch.** `git branch --show-current`. If it is `main`, warn the user that CLAUDE.md says to update the changelog on a feature branch before merging, and ask whether to continue on `main`.

2. **Find the commits to record.**
   - If `CHANGELOG.md` does not exist, this is a bootstrap: take every project commit.
     ```sh
     git log --no-merges --date=short --format='%ad%x09%h%x09%s%n%b%x1e' -- .
     ```
   - Otherwise, take the commits since `CHANGELOG.md` was last committed:
     ```sh
     last=$(git log -1 --format=%H -- CHANGELOG.md)
     git log --no-merges --date=short --format='%ad%x09%h%x09%s%n%b%x1e' "$last"..HEAD -- .
     ```
     If `CHANGELOG.md` exists but has never been committed (`$last` is empty), use the bootstrap command and skip commits whose change is already in the file.
   - If there are no commits to record, say so and stop.

3. **Write the bullets.** Group the commits by date and write bullets following the format rules.
   - Bootstrap: create `CHANGELOG.md` with the title, the intro line and every date.
   - Update: for a date that already has a heading, add the new bullets at the top of that section. Otherwise insert a new heading above the existing ones, keeping dates in descending order. Don't rewrite existing bullets, and don't repeat a change that's already listed.

4. **Show the user** the new or changed section(s) and wait for approval or edits.

5. **Commit on approval.** Commit only `CHANGELOG.md` on the current branch, following the CLAUDE.md commit rules:
   ```
   Update CHANGELOG for <branch or summary>

   Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
   ```
   On a bootstrap, use the subject `Add CHANGELOG.md from git history`. Don't merge or push: that's a separate step the user approves.
