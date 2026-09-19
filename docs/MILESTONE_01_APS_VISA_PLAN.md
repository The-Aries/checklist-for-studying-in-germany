# Milestone 01 — APS and Study Visa

Planning status: **complete for Codex handoff**

Authoritative content freeze: **2026-09-19**

Implementation authority for APS/Visa wording: `docs/CONTENT_APS_VISA.md`

## Purpose

This milestone proves the information model and implementation workflow on the two most important early stages:

1. APS;
2. German study visa application.

The broader product remains planned, but pre-departure, Anmeldung, residence permit, and later audience expansion are deliberately deferred until this milestone is complete and independently verified.

## Target audience for this milestone

- Mainland China regular university bachelor's graduates;
- includes fresh graduates and applicants who graduated years earlier;
- preparing to pursue a master's degree at a German university;
- using the common APS general domestic applicant route.

Do not silently broaden requirements to current undergraduates, doctoral applicants, exchange students, art/music special routes, or other education systems.

## Workstream A — APS source pack

Primary source:

- APS “一般中国境内申请人审核程序须知”, version 2026-09.

Supporting source:

- APS “一般国内申请人审核程序” live page.

### A1. Archive

Save working copies under:

`local/references/aps/`

At minimum retain:

- the current official PDF;
- source URL;
- retrieval date;
- source version date.

### A2. Extract only target-audience requirements

Build a candidate checklist from:

- online registration;
- APS fee/payment;
- mailing/submission;
- common documents required from all applicants;
- graduate-specific documents;
- conditional requirement for applicants who graduated more than one year earlier;
- material review;
- interview path relevant to graduates;
- result/DigZert;
- transition to visa application.

Do not import current-undergraduate-only/TestAS-only rows into the graduate checklist unless they are needed as an explicit exclusion/notice.

### A3. Keep conditions explicit

Examples:

- “毕业超过一年” is a real condition within the target audience and must remain visible;
- exchange/transfer/special academic histories are not the main v1 path and should be handled as a short official-warning/reference rather than expanded into a large branch.

### A4. Template handling

For any required form or template:

1. prefer the official downloadable file;
2. link to the official file from the public site;
3. only create a project convenience template when no official template exists and there is a clear user need;
4. label every project-created template as non-official.

## Workstream B — Study visa source pack

Primary source:

- German Missions in China / Federal Foreign Office “留学” live page.

Secondary source:

- downloadable “留学签证申请材料清单” PDF.

### B1. Archive

Save working copies under:

`local/references/visa/`

Retain:

- the current live-page snapshot or equivalent reference;
- the downloadable checklist PDF where useful;
- source URL;
- retrieval date;
- publication/version date when available.

### B2. Resolve source freshness before content freeze

The live page and downloadable PDF may have different dates or wording.

Before creating public checklist rows:

1. compare both official sources;
2. prefer the clearly current official instruction;
3. do not merge conflicting numbers/requirements;
4. record any discrepancy in local research notes;
5. if current status remains ambiguous, state the uncertainty instead of guessing.

### B3. Extract target-audience requirements

Candidate groups include:

- VIDEX/application form;
- required declarations;
- biometric photos;
- passport;
- proof of residence in China where required;
- visa fee;
- German university admission evidence;
- financing evidence;
- insurance/other supporting evidence where the current official source requires it;
- appointment/submission process;
- processing-time guidance only when current and clearly sourced;
- immediate post-issuance checks that directly belong to the visa stage.

The final row list must be derived from the current official source, not from this candidate list.

## Workstream C — Content model

For each APS/visa checklist row record:

- stable ID;
- stage;
- Chinese item name;
- one-sentence Chinese explanation;
- applicability condition, if any;
- source ID(s);
- direct source URL;
- display order;
- whether the item contributes to progress.

For each stage record:

- `lastUpdated`;
- `lastVerified`;
- stage-level note;
- References list.

## Workstream D — Independent test preparation

The independent verifier, not Codex, owns the release tests.

Before implementation is handed to Codex:

1. create/update `local/test-plan.md`;
2. create and commit the Playwright harness under `tests/` with a locked dev dependency;
3. define source-integrity tests for APS and visa content;
4. define browser tests for hash routing, table rendering, localStorage, progress, reset, responsive behavior, and printable state;
5. define negative tests for non-applicable conditions and blocked analytics;
6. keep only evaluator-private notes/test orchestration under `local/`; commit the reusable Playwright tests.

Playwright is a test-only tool. It is not a production dependency and does not imply React, Node-based production code, or a build step for the website.

Codex may read the public acceptance criteria as requirements, but must not modify or execute the independent test plan.

After Codex implementation:

1. evaluator runs the independent tests;
2. failures are converted into explicit repair tasks;
3. Codex fixes implementation/content;
4. evaluator re-runs failed and regression checks;
5. repeat until the milestone passes or an external blocker is documented.

## Exit criteria for research/content phase

APS:

- current official source version identified;
- target graduate path extracted;
- every row mapped to a source;
- graduate-over-one-year condition represented correctly;
- no undergraduate-only items incorrectly marked required.

Visa:

- current official page identified;
- downloadable checklist reconciled against the current page;
- every row mapped to a source;
- no stale amount/document count is copied from an older official PDF when newer instructions supersede it.

Shared:

- `docs/SOURCES.md` is complete for all used sources;
- local source archive exists under `local/references/`;
- content dataset can be implemented without Codex inventing policy facts;
- independent `local/test-plan.md` and the committed Playwright harness are ready before Codex implementation starts.
