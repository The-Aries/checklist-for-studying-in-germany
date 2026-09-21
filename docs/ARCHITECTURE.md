# Implementation Architecture — Milestone 01

## 1. Principle

Keep the production site static and dependency-free.

Node.js/npm/Playwright exist only for development and independent acceptance testing.

No production bundler, framework, package runtime, server, database, or API is required.

## 2. Recommended repository layout

```
/
├── index.html
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.mjs
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── print.css
│   └── js/
│       └── app.js
├── data/
│   ├── checklist.json
│   └── faq.json
├── templates/
│   └── aps-post-graduation-cv-template.docx
├── docs/
│   └── ...
├── tests/
│   └── ...
└── .github/
    ├── ISSUE_TEMPLATE/
    │   ├── content-error.yml
    │   ├── bug-report.yml
    │   └── config.yml
    └── DISCUSSION_TEMPLATE/
        └── <actual-q-and-a-category-slug>.yml
```

Codex may merge `main.css` / `print.css` or split `app.js` if doing so is materially simpler, but it must not introduce a framework or build system without a concrete need.

## 3. HTML shell

`index.html` should contain:

- semantic page landmarks;
- static shell/header/navigation/actions/footer;
- containers for APS, visa, FAQ, references;
- local CSS/JS links using relative URLs;
- no inline secret/config credential.

The application may render data-driven rows with JavaScript.

The page should remain understandable if CSS is unavailable. JavaScript is required for checklist persistence/progress, but failure should not expose sensitive data or produce a blank document.

## 4. Data

Use local JSON for factual/public content.

Recommended:

- `data/checklist.json` — sources, stages, groups, checklist items, dates, notes;
- `data/faq.json` — curated FAQ.

Keep policy/factual text out of rendering logic wherever practical so future official-source updates are data edits rather than DOM rewrites.

Use `docs/DATA_CONTRACT.md` for semantics.

## 5. Routing

Supported milestone routes:

- `#aps`
- `#visa`
- `#city-registration`
- `#residence-permit`
- `#faq`

Algorithm:

1. read `location.hash`;
2. if unknown/empty, use `#aps` via `history.replaceState`;
3. render/show matching section;
4. update active navigation state;
5. preserve browser back/forward behavior.

Do not require a server rewrite rule.

## 6. State

Single localStorage key:

`study-in-germany-checklist:v1`

State logic:

- safe JSON parse with clean fallback;
- ignore stale/unknown checklist IDs;
- save only after user-driven state changes;
- reset only this namespace;
- state migration can be added later if schema version changes.

No cookies are needed for checklist state.

## 7. Rendering and progress

Render all checklist rows from data with stable IDs.

For each route:

- render stage metadata;
- render groups/tables;
- attach row source links;
- render references from referenced source IDs;
- bind checkbox events;
- recalculate stage and overall progress.

Overall progress denominator contains all currently implemented checklist stages (APS, visa, City Registration and Residence Permit) whose item conditions apply.

FAQ and deferred roadmap stages never enter progress.

## 8. Conditional APS CV

Profile field:

`graduationAge`

Use values from `docs/DATA_CONTRACT.md`.

The CV row should always remain discoverable:

- unknown → “待判断”;
- within one year → “不适用”;
- over one year → active checklist row.

For the applicable state, expose the project-created downloadable template described in `docs/TEMPLATE_SPEC.md`.

## 9. Print implementation

Use:

- `window.print()`;
- a transient root/body class or data attribute to distinguish current vs blank print;
- `@media print`.

Blank-print flow:

1. set transient blank-print presentation state;
2. call `window.print()`;
3. restore screen state;
4. never change localStorage/check states.

Use `afterprint` plus a defensive immediate/short cleanup if needed for cross-browser behavior.

## 10. Analytics

Analytics is an optional enhancement.

If configured, inject/load the official Cloudflare Web Analytics beacon without coupling it to application initialization.

If not configured, do nothing. No placeholder network request.

## 11. Public configuration

Safe public configuration may contain:

- repository URL;
- Discussions URL;
- Issues URL;
- optional public contact email;
- optional sponsor URL;
- optional Cloudflare Web Analytics site token.

These are public values by design. Never use a GitHub PAT, GitHub App private key, Cloudflare API token, password, or other secret in client code.

## 12. Error handling

At minimum:

- invalid localStorage JSON → reset in-memory state to default, continue rendering;
- unknown hash → APS;
- missing optional contact/sponsor/analytics config → hide/disable optional feature, do not fail app;
- missing content data → show a visible non-destructive error rather than an empty page;
- external source failures do not prevent local checklist rendering.

## 13. GitHub Pages compatibility

All local asset/data/template URLs must be relative to the current document or derived safely from `document.baseURI`.

Do not assume site is hosted at `/`.

The same checkout must work at:

- local `http://127.0.0.1:4173/`;
- GitHub project page `/<repository-name>/`;
- a future custom domain root.

