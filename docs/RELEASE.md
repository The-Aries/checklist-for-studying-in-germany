# Milestone 01 candidate — 2026-09-19

- Repository: https://github.com/The-Aries/checklist-for-studying-in-germany
- Candidate: https://the-aries.github.io/checklist-for-studying-in-germany/
- Accepted implementation commit: `3701742` (initial implementation `1e91e28`; Repair 01 updated navigation counts and APS provenance; later test/release-record commits do not change application behavior).
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

Pre-departure, additional applicant routes and broader FAQ remain deferred. The future Worker/GitHub App submission boundary is described in `ROADMAP.md`; no in-page submission or backend was introduced.

## Independent technical verification — 2026-09-19

The evaluator completed the independent verification loop after the initial candidate.

The first run exposed one real product gap: the top APS/Visa tabs did not show the compact live completed/total counts that had been requested. Repair 01 added those counts and strengthened the source trail for the graduate-interview path with APS-007.

After the repair:

- the complete committed Playwright suite passed: **72/72 tests**;
- coverage ran on desktop Chromium, mobile Chromium, and desktop WebKit;
- live GitHub Pages smoke checks confirmed `#aps`, `#visa`, and `#faq`, localStorage persistence, live tab counts, mobile no-horizontal-overflow behavior, and the DOCX download;
- all registered APS/Visa official source URLs plus the VIDEX and §54 direct-form links returned HTTP 200 during the verification pass;
- current/blank print media were exercised through Chromium PDF generation; actions were hidden, references retained, saved state preserved, and APS/Visa each produced readable multi-page A4 PDFs;
- the DOCX convenience template opened successfully as an OOXML document and contained no macros or external relationships.

Two evaluator-test defects discovered during the loop were corrected without weakening product requirements: the official `videx.diplo.de` host was added to the authoritative-source allowlist, and asynchronous source rendering assertions were made wait-safe to remove timing flakes.

This constitutes **independent technical acceptance for Milestone 01**. A subjective human visual/editorial review may still be performed before wider promotion; it is not a known functional blocker.

## Post-arrival extension — 2026-09-22

Added two public checklist stages:

- `#city-registration` — City Registration / Anmeldung;
- `#residence-permit` — study Residence Permit / Aufenthaltserlaubnis under §16b AufenthG.

The implementation deliberately separates Germany-wide/common requirements from local administration. The Ulm university handout supplied for comparison was not copied into the repository and was not treated as a nationwide authority. Federal law and federal-government sources control the common checklist; the site tells users to use Bundesportal/local government pages for appointment systems, forms and extra city-specific evidence.

Implementation commit: `f13fe93`.

Verification performed after implementation:

- JSON/data integrity and Git whitespace checks passed;
- the pre-existing Playwright suite passed on desktop/mobile Chromium; WebKit's parallel full-suite run hit existing 30-second timing limits in several old APS/Visa tests, and the affected source/state checks passed when rerun serially with a larger timeout;
- a separate local evaluator check for the two new stages passed on both Chromium and WebKit, including direct hashes, expected row counts (City Registration 6, Residence Permit 10), live nav progress, localStorage persistence and 390px mobile no-overflow behavior;
- every newly registered REG/RES official source returned HTTP 200 during the verification pass;
- GitHub Pages built `f13fe93` successfully;
- live smoke check at `https://de.010406.space/` confirmed 6 City Registration rows, 10 Residence Permit rows, `Last Verified: 2026-09-22`, responsive layout and zero page/console errors.
