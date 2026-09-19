# Acceptance Criteria

The first public version is accepted only when all applicable items below pass.

The current implementation milestone is APS + visa. Criteria for pre-departure, Anmeldung, residence permit, and broader later content remain future release criteria and are not grounds to invent unfinished content in this milestone.

These are release criteria, not the Codex-owned test suite. Independent tests are prepared and executed separately by the evaluator.

## Scope and content

- [ ] Site is Chinese-first and targets Mainland China regular university bachelor's graduates, including fresh and long-graduated applicants, preparing for a German master's degree.
- [ ] Out-of-scope applicant types are clearly excluded or redirected to official sources rather than silently treated as identical.
- [ ] APS and visa content exist and are complete for the active milestone.
- [ ] Every normative checklist row has an appropriate traceable source.
- [ ] City-specific implementation details are not presented as nationwide rules.
- [ ] Conditional requirements within the target audience are clearly labeled.
- [ ] The APS “毕业超过一年” row offers the project convenience CV template and labels it clearly as non-official.

## Navigation

- [ ] No separate landing page is required.
- [ ] Root/default view resolves to APS.
- [ ] Hash routes work for every implemented main section (APS, visa, FAQ).
- [ ] Browser back/forward behavior is coherent.
- [ ] Directly opening a section hash renders the intended section.
- [ ] APS and visa tab labels show compact live completed/total counts; APS count respects the graduation-age condition and updates immediately.

## Checklist UI

- [ ] Desktop presents checklist content in a compact table.
- [ ] Each item is one logical row containing checkbox, name, concise explanation, and source.
- [ ] Mobile remains usable and may wrap rows responsively.
- [ ] No v1 feature depends on images.

## Persistence and progress

- [ ] Checklist completion state persists with localStorage.
- [ ] Refresh does not lose state.
- [ ] Browser restart does not lose state under normal localStorage behavior.
- [ ] Reset clears only this application's localStorage namespace.
- [ ] Overall progress is calculated from data.
- [ ] Stage progress is calculated from data.
- [ ] Non-applicable conditional items do not incorrectly lower progress.
- [ ] No personal application documents or sensitive identifiers are stored.

## Dates and references

- [ ] Each main content section exposes `Last Updated`.
- [ ] Each main content section exposes `Last Verified`.
- [ ] The two dates are maintained independently.
- [ ] Row-level source links work.
- [ ] Bottom-of-section References are present.
- [ ] References point to canonical official sources wherever possible.

## Printing

- [ ] `打印当前进度` opens a useful browser print view.
- [ ] `打印空白 Checklist` renders all checkboxes blank without altering saved state.
- [ ] Printed output is A4-friendly, white-background, and legible in black-and-white.
- [ ] Navigation/action controls are omitted from print.
- [ ] References and verification dates remain available in print.

## FAQ and feedback

- [ ] Minimal curated FAQ from `docs/CONTENT_APS_VISA.md` is available.
- [ ] Ask-question action reaches GitHub Discussions.
- [ ] Error-report action reaches a structured GitHub Issue flow.
- [ ] Contact-author action opens a usable pre-filled email.
- [ ] Public Discussion content is not automatically treated as verified FAQ content.
- [ ] Email contact is configuration-driven and no private/unverified email is published automatically.

## Analytics and privacy

- [ ] If Cloudflare Web Analytics is enabled, blocking/failure of the beacon does not break the site.
- [ ] No advertising is included.
- [ ] No custom tracking cookie is required.
- [ ] A concise privacy disclosure exists.
- [ ] No secret/token is embedded in public client code.
- [ ] If analytics is not configured, the site still ships normally and reports analytics as not configured rather than using a placeholder token.

## Technical

- [ ] Functional assets are self-hosted in the repository.
- [ ] No front-end framework is required.
- [ ] No database/server/account system is required.
- [ ] Site works from the GitHub Pages project-path base URL, not only from domain root.
- [ ] Source code remains readable and maintainable without unnecessary abstraction.

## GitHub/deployment

- [ ] Repository is pushed successfully.
- [ ] GitHub Pages is enabled and the live URL loads.
- [ ] GitHub Discussions is enabled/configured for questions.
- [ ] Issue forms exist for content errors and software bugs.
- [ ] Live site passes a post-deployment smoke test.
- [ ] README identifies scope and limitations.

