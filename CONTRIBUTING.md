# Contributing

Content corrections should identify the affected stage/item, explain the discrepancy, and link the responsible official authority with its publication date and page/section. Use the content-error issue form. Use the bug-report form for software problems and Discussions for general questions. Do not post personal documents or identifiers.

The maintainer verifies official sources before updating `docs/SOURCES.md`, `docs/CONTENT_APS_VISA.md`, and `data/checklist.json`. Update the content date for factual edits; update the verification date only after checking all sources used by the stage. Preserve stable item IDs and the storage namespace. Manually curate verified useful answers into `data/faq.json`; community answers are not automatically authoritative.

The website is plain HTML, CSS, JavaScript and JSON without a production build. Keep all functional assets local and URLs relative. Do not add backend services or expand applicant/stage coverage without researched requirements.

The acceptance suite in `tests/` is evaluator-owned. Implementation work must not alter or execute it as self-certification. The evaluator runs it after candidate handoff.

Regenerate the non-official CV template with `python scripts/generate-cv-template.py`. It uses only the Python standard library and creates an editable, macro-free DOCX without personal sample data.
