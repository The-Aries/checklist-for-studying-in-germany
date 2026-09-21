# Frozen Content Specification — City Registration + Residence Permit

Status: **ready and implemented**

Verified: **2026-09-22**

This document defines the common Germany-wide baseline used for the post-arrival modules. It intentionally does not copy Ulm-specific appointment screenshots or treat one city's extra documents as nationwide requirements.

## 1. What is nationwide and what is local

### City Registration / Anmeldung

Nationwide federal law establishes the core obligation:

- after moving into a dwelling, register with the competent registration authority within two weeks;
- obtain a `Wohnungsgeberbestätigung` from the housing provider/landlord or an authorized person;
- provide accepted identity documentation;
- receive an official registration confirmation after registration.

Appointment systems, local forms, online-service availability and extra supporting documents are local.

The Ulm university handout supplied for comparison includes an enrolment certificate. That may be useful or requested locally, but it is **not** part of the federal core and is therefore not presented as a nationwide required row.

### Residence Permit / Aufenthaltserlaubnis

For the project's target audience, the common route is a study residence permit under §16b AufenthG.

Common core:

- complete address registration;
- identify the competent local `Ausländerbehörde`;
- apply before the current entry visa expires;
- valid passport;
- current biometric photograph;
- current enrolment/admission evidence;
- proof of secured livelihood;
- proof of health insurance;
- applicable fee;
- local identity/biometric appointment and eAT production.

Local authorities may require additional documents such as a rental contract, `Meldebestätigung`, local application forms, passport/visa copies or other case-specific evidence. The public checklist therefore tells users to confirm the local list instead of presenting one city's workflow as national law.

## 2. City Registration checklist

| ID | Item | Common rule |
| --- | --- | --- |
| city-find-office | 确认当地登记机关和办理方式 | Use Bundesportal/local authority to find the responsible Meldebehörde/Bürgeramt and local appointment/online process. |
| city-register-two-weeks | 入住后两周内办理 Anmeldung | Federal Registration Act §17. |
| city-id-document | 有效身份证明 | Bring a valid passport/accepted identity document; foreign students should also keep current visa/residence documents available. |
| city-housing-confirmation | Wohnungsgeberbestätigung | Required under Federal Registration Act §19. |
| city-local-form | 核对当地表格和附加材料 | Local implementation varies; do not assume Ulm's extra documents are universal. |
| city-receive-confirmation | 取得 Meldebestätigung | Keep the official registration confirmation for later procedures. |

## 3. Residence Permit checklist

| ID | Item | Common rule |
| --- | --- | --- |
| residence-complete-registration | 先完成 City Registration | Federal guidance places home-address registration before the local residence-permit application. |
| residence-find-authority | 确认主管 Ausländerbehörde | Local authority controls the actual application channel and document list. |
| residence-apply-before-visa-expiry | 在签证到期前提交申请 | Apply before the entry visa expires. |
| residence-passport | 有效护照 | Common required identity document. |
| residence-photo | 当前生物识别照片 | Common requirement; submission mechanism can vary locally. |
| residence-enrollment | Immatrikulationsbescheinigung | Proof of current full-time study/admission. |
| residence-finance | 生活费资金证明 | 2026 orientation: EUR 992/month, EUR 11,904/year for studying. |
| residence-insurance | 医疗保险证明 | Proof of current health-insurance coverage. |
| residence-fee | 居留许可费用 | Current standard first-issuance fee under §45 AufenthV: EUR 100, subject to exemptions/reductions. |
| residence-biometric-appointment | 完成现场核验并等待 eAT | Fingerprints/document production and collection process are handled locally. |

## 4. Local-detail rule

The website should not maintain a manually curated list of every German city.

Instead:

- for City Registration, direct users to the Bundesportal region selector or tell them to search `Anmeldung + <city>`;
- for Residence Permit, tell users to search `Aufenthaltserlaubnis Studium + <city>` and use the responsible `Ausländerbehörde`'s current page;
- if a future city-specific guide is added, label it clearly as a local example and do not merge local extras into the nationwide denominator.

