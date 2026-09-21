# UI Specification — Milestone 01

## 1. Visual direction

The site should look like a practical administrative checklist, not a marketing landing page.

Screen:

- very light warm/off-white page background;
- white or near-white content surface;
- black primary text;
- dark-gray secondary text;
- one restrained accent color for active navigation/progress;
- system font stack only;
- no decorative imagery;
- no animation required.

Print:

- pure white background;
- black text;
- no shadows, decorative backgrounds, sticky elements, or navigation chrome.

## 2. Current navigation

Navigation shows only implemented/useful destinations:

- APS
- 签证
- City Registration
- Residence Permit
- FAQ

Do not render an empty pre-departure tab. Add future stages only after their content is researched and verified.

Root behavior:

- opening the site with no hash renders APS;
- normalize the URL to `#aps` without adding a useless history entry;
- direct `#visa`, `#city-registration`, `#residence-permit` and `#faq` links work;
- browser back/forward follows section changes.

## 3. Persistent header

Every main section should expose, near the top:

- `Checklist for studying in Germany`;
- concise Chinese target-audience line;
- overall progress;
- active-stage progress;
- `Last Updated`;
- `Last Verified`;
- main tab navigation.

Checklist-stage tab labels must also expose compact live completion counts, for example:

```
APS 1/13   签证 0/19   FAQ
```

The APS denominator follows the graduation-age applicability rule. The counts update immediately when a checkbox or the applicability answer changes. FAQ has no progress count.

The header does not need to be sticky.

## 4. Progress display

Use simple text plus a native/CSS progress bar.

Example:

```
总进度 8 / 33 · 24%
[██████------------------]
```

Do not use canvas or image assets.

APS stage completion cannot become 100% until the graduation-age applicability question has been answered.

## 5. APS applicability control

Place a compact field before the APS checklist:

```
你本科毕业是否已经超过一年？
[请选择…]
  未超过一年
  已超过一年
```

Use a native `<select>` unless another equally simple accessible control is clearer.

Persist the answer in the same namespaced localStorage state.

Behavior:

- unanswered: CV row is visibly “待判断” and APS cannot show final 100%;
- within one year: CV row remains visible but marked “不适用”, disabled from interaction, excluded from denominator;
- over one year: CV row is normal/required and included in denominator.

The row must expose `data-applicable="true|false|unknown"` for independent testing.

## 6. Checklist table

Desktop columns:

| 完成 | 材料 / 步骤 | 一句话说明 | 来源 |
| --- | --- | --- | --- |

Guidelines:

- one logical row per checklist item;
- keep title and description concise;
- row-level source can be a short source label such as `[APS-001]` / `官方来源`;
- clicking the source opens the authoritative page in a new tab with safe `rel` attributes;
- checkboxes have proper labels and keyboard focus;
- do not hide essential detail inside hover-only UI.

## 7. Mobile behavior

At narrow widths:

- allow each logical row to wrap vertically;
- keep checkbox and item title easy to identify;
- source links remain tappable;
- avoid horizontal scrolling if practical;
- if semantic `<table>` layout becomes unreadable, CSS may visually stack cells while preserving accessible labels.

Mobile does not have to look identical to desktop.

## 8. Notes and references

After the checklist:

- compact source-backed notes where needed;
- `References` section listing all stage sources used;
- source title, authority, version/date if available, and direct URL.

Do not duplicate full official text.

## 9. Actions

Visible utility actions:

- `打印当前进度`
- `打印空白 Checklist`
- `重置 Checklist`

Reset:

- asks for a simple confirmation before deleting progress;
- removes only `study-in-germany-checklist:v1`.

## 10. Printing

Use `window.print()` and `@media print`.

Current-progress print:

- checked items visibly checked;
- unchecked items visibly blank;
- applicability text is retained where relevant.

Blank print:

- all checklist boxes are visually blank for that print operation;
- saved state is never changed;
- after print/cancel, the screen returns to normal state.

Print retains:

- project title;
- target audience;
- active stage;
- Last Updated / Last Verified;
- checklist;
- notes needed to interpret checklist;
- References.

Print hides:

- navigation links;
- reset/print buttons;
- analytics/privacy controls that are not content;
- community/footer actions except a simple repository/contact text if useful.

## 11. FAQ

Use simple question/answer blocks from `docs/CONTENT_APS_VISA.md`.

Below FAQ content show:

- `提出问题` → GitHub Discussions Q&A;
- `报告内容错误` → content-error Issue form;
- `报告网站 Bug` → bug Issue form;
- `邮件联系作者` → only when a public contact email is configured.

Do not implement an in-page submission form in Milestone 01.

## 12. Footer

Footer:

- copyright;
- repository link;
- ask question;
- report issue;
- contact author if configured;
- sponsor/support entry.

If sponsor URL is not configured, show a low-key `赞助（暂未开放）` text rather than a broken link.

Do not put Last Updated / Last Verified in the footer.

## 13. Accessibility baseline

- semantic headings;
- associated labels for checkbox/select controls;
- visible keyboard focus;
- sufficient text/background contrast;
- no information encoded only by color;
- external links distinguishable;
- buttons are actual `<button>` elements;
- progress has textual value as well as visual bar.

