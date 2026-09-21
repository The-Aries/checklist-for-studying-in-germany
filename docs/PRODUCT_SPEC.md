# Product Specification

## 1. Product

Display name: **Checklist for studying in Germany**

Repository slug (initial): `checklist-for-studying-in-germany`

The repository name is not treated as permanent and may be renamed later.

## 2. Goal

Build a small, trustworthy, maintainable, Chinese-language checklist website that helps a defined group of applicants follow the common process from APS through their first German residence permit.

The website is an organizational aid, not a replacement for official authorities. Requirements that can change over time must be tied to authoritative sources and verification dates.

## 3. First-version audience

The first version covers only:

- applicants with a regular Mainland China university bachelor's degree;
- both fresh graduates and people who graduated years ago;
- applicants preparing to pursue a master's degree at a German university;
- the common APS general domestic applicant route.

The first version does not attempt to cover:

- current undergraduate students;
- doctoral applicants;
- exchange students;
- art/music special procedures;
- vocational/special-degree pathways;
- applicants whose primary education background is outside Mainland China;
- unusual immigration or residence cases.

Explicit conditional requirements that still occur within the target audience, such as a document required only after a certain number of years since graduation, may be included and clearly labeled.

## 4. Information architecture

There is no separate landing page.

The root site loads the application shell and defaults to the APS section. Navigation is hash-based so every main section is directly linkable.

The current public lifecycle exposes APS, visa, City Registration, Residence Permit and FAQ. Pre-departure remains deferred until it has enough distinct, verified content to justify a separate stage.

Initial routes:

- `#aps`
- `#visa`
- `#pre-departure`
- `#city-registration`
- `#residence-permit`
- `#faq`

Main lifecycle:

1. APS
2. 签证
3. City Registration（Anmeldung）
4. Residence Permit（Aufenthaltserlaubnis）
5. FAQ

Deferred: 赴德前准备（only when it contains enough non-duplicative verified content).

## 5. Shared page header

Every main content tab displays:

- product name;
- target-audience summary;
- overall progress;
- current-stage progress;
- `Last Updated`;
- `Last Verified`;
- tab navigation with compact per-stage completion counts for checklist stages.

`Last Updated` means the content/data was last changed.

`Last Verified` means the relevant authoritative sources were re-checked and the content was confirmed still current.

These two dates are intentionally independent.

## 6. Checklist presentation

Checklist content is table-oriented rather than card-oriented.

Desktop columns:

| 完成 | 材料 / 步骤 | 一句话说明 | 来源 |
| --- | --- | --- | --- |

Each item is one logical table row. A row may wrap on small screens; it must not be expanded into a large card merely to preserve a single physical line.

No images are required in v1.

Each item should contain only the minimum information needed to act:

- checkbox;
- material/step name;
- concise Chinese explanation;
- direct authoritative source link or source reference.

When a term requires explanation, explain it briefly inside the one-line description and link to the best available authoritative definition. Do not create a separate glossary in v1.

## 7. Source and trust model

Use source priority in this order:

1. competent official authority;
2. German federal/state/municipal government or German mission;
3. official university/recognized public institution when directly relevant;
4. reputable reference source only when no suitable official definition exists.

For administrative requirements, prefer the authority that actually owns the procedure.

Every tab has:

- row-level source links/references where appropriate;
- a `References` section at the bottom.

For City Registration and Residence Permit, distinguish nationally common requirements from city-specific implementation. State only the robust Germany-wide/common core in progress rows. Appointment portals, local forms, office addresses, opening hours, photo-transfer details and local add-on documents must be resolved through the user's own city/authority rather than copied from Ulm or another single city.

## 8. Progress persistence

Do not use login accounts.

Persist checklist state in browser `localStorage`.

Requirements:

- state survives refresh and browser restart;
- state is namespaced to this project;
- reset removes only this project's keys;
- no cross-device synchronization in v1;
- do not store personal application documents, passport data, names, addresses, or other sensitive personal data.

## 9. Progress UI

Show:

- overall completion percentage;
- completed/total count for the active stage;
- optionally completed/total counts in tab labels where readable.

Progress must be calculated from the active checklist data rather than hard-coded totals.

Conditional items that are not applicable must not incorrectly reduce progress.

## 10. Printing

Use browser-native printing; do not introduce a PDF-generation library.

Provide:

- `打印当前进度`;
- `打印空白 Checklist`;
- `重置 Checklist`.

Print output requirements:

- A4-friendly;
- white background and black text;
- hide interactive navigation/buttons that do not belong on paper;
- retain checklist text, checkbox marks, verification dates, and references;
- blank-print mode renders all checklist boxes unchecked;
- current-progress mode reflects the user's current state.

Checkbox visuals should be CSS/native-vector based and remain legible when printed.

## 11. FAQ and feedback

V1 uses no custom backend.

FAQ behavior:

- curated static FAQ in the repository;
- `提出问题` links to a GitHub Discussions Q&A form/category;
- `报告错误` links to a structured GitHub Issue form;
- `联系作者` opens a pre-filled email via `mailto:`.

Questions/answers are not automatically promoted into the public FAQ. The maintainer manually reviews useful discussions and adds vetted entries to the repository.

No requirement exists to preserve or hide user identity beyond GitHub's normal behavior in v1. Users who post through GitHub Discussions use their own GitHub identity.

## 12. Analytics

V1 may use Cloudflare Web Analytics to obtain basic aggregate usage information such as visits/page views.

Requirements:

- analytics must not be required for any site functionality;
- failure/blocking of the analytics request must not affect the checklist;
- no advertising;
- no custom tracking cookies;
- no login;
- no first-party behavioral profiling;
- include a concise privacy disclosure.

All functional CSS/JS/fonts/icons must be hosted in the repository. The analytics beacon is the only planned external runtime script exception.

## 13. Footer

Footer should include:

- copyright;
- GitHub repository;
- ask a question;
- report an issue;
- contact author;
- support/sponsor link or placeholder.

Do not duplicate `Last Updated` or `Last Verified` in the footer.

## 14. Technical constraints

Prefer the minimum viable stack:

- semantic HTML;
- CSS;
- vanilla JavaScript;
- JSON or similarly simple local data files;
- GitHub Pages.

No React/Vue/Next.js or equivalent framework in v1.

No runtime CDN for functional assets.

No database.

No server.

No account system.

No build step unless a concrete need emerges during implementation and is documented.

## 15. Responsive behavior

Desktop is the primary dense-table presentation.

Mobile must remain usable:

- no mandatory horizontal scrolling for normal operation if avoidable;
- one logical checklist row may wrap;
- controls remain large enough to tap;
- references remain accessible;
- printing remains desktop/browser-native.

## 16. Future directions, not v1

- in-page question submission;
- Cloudflare Worker as a small backend boundary;
- GitHub App/API integration for creating Discussions without exposing credentials in browser code;
- optional anonymous submission or authenticated user attribution;
- anti-abuse/rate limiting if needed;
- additional applicant categories;
- additional source countries;
- multilingual UI;
- optional cross-device sync if there is real demand;
- richer community contribution workflows.

