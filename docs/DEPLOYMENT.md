# GitHub / Deployment Plan

## Repository

Initial repository slug:

`checklist-for-studying-in-germany`

Repository should be public.

The name may be changed later; implementation must not hard-code an absolute GitHub Pages path into application logic.

## GitHub authentication preflight

Codex should inspect:

```bash
gh auth status
gh api user
```

Never print a token value into project files or public logs.

If the repository does not yet exist, create it only after the implementation candidate is ready:

```bash
gh repo create <owner>/checklist-for-studying-in-germany --public --source=. --remote=origin
git push -u origin main
```

If it already exists, inspect it before modifying remote settings.

## GitHub Pages

Use the simplest supported static Pages setup.

Requirements:

- serve the repository's static site without a production build dependency;
- project-page URL must work under `https://<owner>.github.io/checklist-for-studying-in-germany/`;
- all application asset URLs must be relative/base-path safe;
- root and hash routes must work on the project-page URL.

After enabling Pages, record the actual returned/live URL rather than assuming it.

## GitHub Discussions

Enable repository Discussions.

With the current GitHub CLI this can be done after repository creation with:

```bash
gh repo edit <owner>/checklist-for-studying-in-germany --enable-discussions --enable-issues
```

Use a Q&A category for user questions.

GitHub Discussion category forms are YAML files in `.github/DISCUSSION_TEMPLATE/` and the filename must match the selected category slug. Therefore, after enabling Discussions:

1. inspect the repository's actual Discussion categories/slugs;
2. use the existing Q&A category if suitable;
3. create the form using that actual slug rather than guessing a filename.

If a Discussion form is configured, keep it concise:

- 问题标题;
- 你正在办理的阶段（APS / 签证 / 其它）;
- 问题正文;
- 已查阅的官方来源（可选）;
- confirmation that no passport number / ID number / other sensitive data should be posted.

Do not create a custom backend in Milestone 01.

## GitHub Issue forms

Create two forms:

### Content error

Fields:

- page/stage;
- checklist item or text;
- what appears wrong/outdated;
- proposed corrected information;
- official source URL;
- optional notes.

### Software bug

Fields:

- browser/device;
- page/hash;
- steps to reproduce;
- expected behavior;
- actual behavior;
- optional screenshot.

Templates should remind users not to post sensitive application documents or personal identifiers.

## Public contact email

Do not infer or publish a private Git/GitHub email.

Resolution order:

1. use an explicitly configured project public contact email;
2. otherwise use a public email returned by the authenticated GitHub profile;
3. if neither exists, omit/disable the mailto link and report this as a configuration limitation rather than inventing an address.

The page logic should make the mailto action configuration-driven so it can be enabled later without redesign.

## Sponsor/support

Sponsor/support URL is configuration-driven.

If no valid support URL is available at deployment, render `赞助（暂未开放）` and do not create a dead link.

## Cloudflare Web Analytics

Analytics is optional for candidate deployment.

If a valid Cloudflare Web Analytics token is already available/configured:

- add the official beacon;
- disclose it in the privacy note;
- keep it isolated from application logic.

If no token/account configuration is available:

- deploy without analytics;
- do not block Milestone 01;
- report analytics as not configured.

Never place unrelated Cloudflare API credentials in browser code.

## Candidate deployment and verification

Codex deploys a candidate and returns:

- repository URL;
- commit SHA;
- Pages URL;
- whether Discussions is enabled;
- whether email is configured;
- whether sponsor is configured;
- whether Cloudflare analytics is configured;
- known blockers/limitations.

Codex does not run or modify the evaluator-owned Playwright suite.

The evaluator then runs the committed tests and manual print check. Repairs are sent back to Codex, followed by redeployment.

