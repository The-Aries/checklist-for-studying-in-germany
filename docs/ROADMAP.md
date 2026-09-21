# Roadmap

## Current Milestone 01

- APS
- German study visa
- Lightweight FAQ/community shell
- Local progress + printing
- Independent Playwright acceptance flow

Milestone 01 was subsequently extended with the common Germany-wide City Registration and Residence Permit stages after source verification on 2026-09-22.

## Target broader V1

- Chinese interface/content.
- Mainland China regular university bachelor's graduates applying for German master's programs.
- APS → visa → pre-departure → Anmeldung → residence permit.
- Current implemented lifecycle: APS → visa → City Registration → Residence Permit.
- Pre-departure remains optional/deferred rather than an empty navigation stage.
- Local browser progress.
- Printing.
- Curated FAQ.
- GitHub Discussions/Issues/email feedback.
- Basic privacy-preserving traffic analytics if configured.

## Later, only if demand justifies it

### In-page question submission

Potential architecture:

```
browser form
    ↓
Cloudflare Worker
    ↓
GitHub App / GitHub API
    ↓
GitHub Discussion
```

Goals:

- do not expose GitHub credentials in browser code;
- optionally support anonymous submissions;
- optionally preserve authenticated contributor identity;
- add rate limiting / abuse controls only when needed;
- keep answers unverified until explicitly curated into the site FAQ.

### Audience expansion

- current undergraduate applicants;
- doctoral applicants;
- exchange students;
- special APS routes;
- applicants from additional countries/education systems.

### Language expansion

Translate only after the first-version Chinese information model is stable.

### Optional sync

Cross-device progress sync is deliberately deferred until there is demonstrated demand.

