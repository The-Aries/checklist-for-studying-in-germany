# Implementation Plan

## Current active milestone

The active milestone is intentionally limited to:

1. APS;
2. German study visa application.

Pre-departure, Anmeldung, residence permit, and broader FAQ/content remain in the product specification and roadmap, but they are not part of the current source-research/content-freeze milestone.

Do not invent placeholder requirements for deferred sections merely to make the site look complete.

## Phase 0 — Preflight

1. Confirm the project directory is the intended repository root.
2. Confirm Git is available.
3. Confirm GitHub CLI/authentication or an equivalent authenticated Git path is available.
4. Confirm the intended GitHub owner/account.
5. Confirm repository creation/push permission.
6. Confirm GitHub Pages can be enabled for the target repository.
7. Confirm GitHub Discussions can be enabled.
8. Confirm the project contact email and support/sponsor URL before public release.
9. Confirm Cloudflare Web Analytics credentials/site token if analytics is to ship in the first public release.

Do not embed secrets in client-side code.

## Phase 1 — Source research (APS + visa only)

1. Collect current authoritative sources for APS and the German study visa.
2. Save local working copies under `local/references/` where useful.
3. Fill `docs/SOURCES.md` with traceable metadata.
4. Derive first-version checklist content only for the defined audience.
5. Mark genuine conditional items explicitly.
6. Record source/version dates before implementation begins.
7. For any conflicting or differently dated official visa material, identify which source is current before turning it into a checklist row.

Exit criterion: every normative checklist item has at least one appropriate source.

## Phase 2 — Content freeze for the active milestone

Create the final structured content dataset for:

- APS;
- visa.

Each checklist item needs:

- stable ID;
- stage;
- Chinese title;
- concise Chinese description;
- applicability/condition if any;
- source reference(s);
- display order.

Each stage needs:

- title;
- concise applicability note;
- `lastUpdated`;
- `lastVerified`;
- references.

Exit criterion: the content can be rendered without inventing any missing public-facing facts.

## Phase 3 — Static implementation

Implement a dependency-light static site using semantic HTML, CSS, vanilla JavaScript, and local structured data.

Required features:

- default `#aps` route;
- hash navigation;
- checklist table rendering;
- responsive narrow-screen layout;
- localStorage persistence;
- overall/stage progress calculation;
- reset;
- print current progress;
- print blank checklist;
- row-level references and bottom references;
- curated FAQ;
- links to GitHub Discussions, Issues, email, repository, and support;
- privacy disclosure;
- optional Cloudflare Web Analytics integration.

## Phase 4 — GitHub community configuration

Add:

- Q&A Discussion category/form where supported;
- content-error Issue form;
- bug Issue form;
- contribution guidance sufficient for factual corrections.

Keep public submissions separate from curated FAQ content.

## Phase 5 — Candidate repository and deployment

1. Initialize/verify Git repository.
2. Use `main` as the default branch unless the GitHub target already uses another convention.
3. Commit with project-consistent messages; if no convention exists, use Conventional Commits.
4. Create or connect the GitHub repository `checklist-for-studying-in-germany` unless a different final name is selected before deployment.
5. Push.
6. Enable GitHub Pages.
7. Enable Discussions.
8. Confirm the live GitHub Pages candidate URL.
9. Hand back the candidate without claiming independent acceptance.

Deployment is not complete merely because `git push` succeeds.

## Phase 6 — Independent verification

Acceptance verification is intentionally independent from Codex implementation.

The evaluator/ChatGPT side owns the independent test plan under `local/test-plan.md`, executes those checks after Codex hands back the implementation, and reports failures back to Codex as concrete repair targets.

Codex must not modify, weaken, replace, or execute the independent acceptance plan in `local/test-plan.md`.

Codex may inspect the public acceptance criteria so it knows the target, but passing status is determined by the independent verification pass.

Use Playwright for repeatable browser-level checks where it adds value. The Playwright test harness is committed under `tests/` together with `package.json`, `package-lock.json`, and `playwright.config.mjs` so the same independent checks can be reused on Windows, macOS, or Linux. Playwright is a development/test dependency only; the deployed website remains dependency-free. Manual verification remains appropriate for browser print-preview details that cannot be asserted reliably through automation alone.

At minimum test:

- Chrome/Chromium desktop;
- one narrow mobile viewport;
- persistent completion state;
- reset scope;
- all hash routes;
- print current;
- print blank;
- broken/missing source links;
- GitHub Pages base-path behavior;
- analytics failure without functional regression.

If tests fail:

1. evaluator reports concrete failures;
2. Codex repairs implementation/content without changing the independent tests;
3. Codex redeploys;
4. evaluator re-runs failed and regression checks.

## Phase 7 — Release record

Record:

- deployed URL;
- release date;
- source verification date;
- known limitations;
- deferred roadmap items.

