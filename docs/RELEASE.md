# Milestone 01 candidate — 2026-09-19

- Repository: https://github.com/The-Aries/checklist-for-studying-in-germany
- Candidate: https://the-aries.github.io/checklist-for-studying-in-germany/
- Implementation commit: `1e91e28` (subsequent release-record commits do not change application behavior).
- Source verification: 2026-09-19; no material change to frozen policy content. See `SOURCES.md` for retrieval evidence and the federal site's direct-download challenge limitation.
- Scope: 14 APS rows (one conditional), 19 visa rows, five curated FAQ entries, local progress, reset, native current/blank printing, official form links and a clearly unofficial editable CV template.
- Hosting: public GitHub Pages, `main` branch root, relative asset/data/template paths, no production build or runtime dependencies.
- Community: Discussions enabled; actual answerable category `Q&A` / `q-a`; matching Discussion form and separate content-error/software-bug Issue forms committed.
- Public email: not configured; authenticated GitHub profile has no public email. Contact is configuration-driven and disabled visibly, without publishing a private address.
- Sponsorship: not configured; shown as unavailable.
- Analytics: not configured; no external analytics script, ads or custom tracking cookies.

## Implementation checks and handoff boundary

JavaScript syntax and Git whitespace checks passed. A limited Microsoft Edge browser smoke check loaded the local default APS route (14 rows), visa route (19 rows), and FAQ route (five entries). The DOCX ZIP package and every XML part parsed successfully; it has no macros, external relationships or personal sample data.

The live GitHub Pages candidate returned HTTP 200 and normalized to `#aps`. A limited post-deployment Edge smoke check confirmed all three routes, a checked APS item surviving reload, 19 visa rows, five FAQ entries, and a successful DOCX download (HTTP 200, 1,650 bytes). No page script errors were observed. GitHub's initial Pages build and deployment completed successfully for `1e91e28`.

These checks are implementation smoke checks, not independent acceptance. The evaluator-owned `tests/`, package manifest/lockfile and Playwright configuration were left unchanged. The independent suite and private test plan were not executed or modified.

The evaluator should run the committed independent suite against the candidate and perform the manual browser print/pagination check. Candidate deployment does not claim final acceptance. The functional email acceptance item remains conditional on an explicitly supplied public email, as allowed by `DEPLOYMENT.md`.

## Deferred scope

Pre-departure, Anmeldung, residence permits, additional applicant routes and broader FAQ remain deferred. The future Worker/GitHub App submission boundary is described in `ROADMAP.md`; no in-page submission or backend was introduced.
