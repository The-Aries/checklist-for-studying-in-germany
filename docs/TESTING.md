# Independent Browser Testing

## Why Playwright

Playwright is framework-agnostic browser automation. It can test this plain HTML/CSS/JavaScript site exactly as it could test React or Vue.

The project uses the JavaScript/TypeScript Playwright Test runner, so the **development/test toolchain requires Node.js and npm**. The deployed website does not.

## Portability model

Commit:

- `package.json`;
- `package-lock.json`;
- `playwright.config.mjs`;
- `tests/`.

Do not commit:

- `node_modules/`;
- Playwright browser binaries;
- `playwright-report/`;
- `test-results/`.

On a new Windows/macOS/Linux development machine:

```bash
npm ci
npx playwright install chromium webkit
```

On Linux, browser system dependencies may also require:

```bash
npx playwright install --with-deps chromium webkit
```

## Ownership rule

The tests are committed so they are portable and versioned with the product requirements, but they remain **independent acceptance tests**.

Codex:

- may read the test contract and acceptance requirements;
- must not modify, delete, weaken, skip, or rewrite tests;
- must not claim acceptance by running the tests itself;
- hands implementation back to the evaluator.

Evaluator/ChatGPT:

- installs/runs the committed test suite;
- performs manual checks where automation is insufficient;
- reports concrete failures to Codex;
- re-runs regression tests after repairs.

## Intended commands for evaluator

```bash
npm ci
npx playwright install chromium webkit
npm run test:e2e
```

Fast Chromium-only pass:

```bash
npm run test:e2e:chromium
```

Test discovery/syntax check without needing the application to be complete:

```bash
npx playwright test --list
```

## Manual complement

Automation should cover:

- routing;
- content presence;
- checkbox interaction;
- localStorage persistence;
- profile-condition logic;
- progress;
- reset scope;
- mobile usability;
- reference links;
- print-media state;
- analytics failure tolerance.

Manual acceptance still checks:

- actual browser print dialog;
- final A4 pagination/legibility;
- subjective but bounded readability problems not captured by DOM assertions.

