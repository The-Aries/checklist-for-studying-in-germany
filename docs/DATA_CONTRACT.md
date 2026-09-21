# Data Contract

The production implementation should be data-driven. Codex may choose the exact file split, but the public data model must preserve the semantics below.

## Stage

```json
{
  "id": "aps",
  "title": "APS 审核",
  "appliesTo": "适用于……",
  "lastUpdated": "2026-09-19",
  "lastVerified": "2026-09-19",
  "notes": [],
  "groups": [],
  "references": []
}
```

## Checklist group

```json
{
  "id": "documents",
  "title": "材料 Checklist",
  "items": []
}
```

## Checklist item

```json
{
  "id": "aps-degree-docs",
  "title": "本科毕业证和学位证",
  "description": "提交毕业证书及学位证书的中英双语密封件或中英翻译公证件。",
  "sources": ["APS-001"],
  "progress": true,
  "condition": null
}
```

Conditional example:

```json
{
  "id": "aps-postgrad-cv",
  "title": "毕业后表格式简历",
  "description": "本科毕业超过一年时……",
  "sources": ["APS-001"],
  "progress": true,
  "condition": {
    "field": "graduationAge",
    "equals": "over-one-year"
  }
}
```

## Reference

```json
{
  "id": "APS-001",
  "label": "一般中国境内申请人审核程序须知",
  "authority": "德国驻华大使馆文化处留德人员审核部（APS）",
  "url": "https://...",
  "sourceDate": "2026-09",
  "retrieved": "2026-09-19"
}
```

## User state

Use a single namespaced object in `localStorage`:

`study-in-germany-checklist:v1`

Conceptual shape:

```json
{
  "schemaVersion": 1,
  "completed": {
    "aps-register": true,
    "visa-videx": false
  },
  "profile": {
    "graduationAge": "over-one-year"
  },
  "activeRoute": "aps"
}
```

Rules:

- unknown item IDs are ignored safely;
- missing state uses clean defaults;
- corrupted JSON must not break page rendering;
- reset removes only this key;
- do not store names, emails, passport data, files, addresses, school applications or other sensitive personal data.

## Progress semantics

- count only `progress: true` items;
- count a conditional item only when its condition applies;
- APS cannot show a final 100% state while the graduation-age profile question remains unanswered;
- deferred/non-implemented stages do not enter the denominator; implemented City Registration and Residence Permit rows do;
- FAQ never enters progress.

## DOM/test contract

Keep these stable attributes so independent browser tests can be implementation-independent:

- `[data-testid="app-title"]`
- `[data-testid="overall-progress"]`
- `[data-testid="stage-progress"]`
- `[data-testid="last-updated"]`
- `[data-testid="last-verified"]`
- `[data-route="aps"]`
- `[data-route="visa"]`
- `[data-route="faq"]`
- `[data-section="aps"]`
- `[data-section="visa"]`
- `[data-checklist-id="<stable item id>"]`
- `[data-item-checkbox="<stable item id>"]`
- conditional rows expose `data-applicable="true|false|unknown"`
- `[data-profile="graduationAge"]`
- `[data-action="print-current"]`
- `[data-action="print-blank"]`
- `[data-action="reset"]`
- `[data-testid="references"]`
- `[data-testid="faq-list"]`
- `[data-testid="footer"]`

These attributes are for testing/stability and need not affect visual design.

