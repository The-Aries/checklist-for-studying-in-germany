# Frozen Content Specification — APS + Study Visa

Status: **ready for implementation**

Verified: **2026-09-19**

This document is the public-content authority for Milestone 01. Codex should implement these items without inventing additional policy requirements.

## 1. Audience boundary

Milestone 01 covers:

- Chinese citizens / applicants with a regular Mainland China university bachelor's degree;
- fresh graduates and people who graduated earlier;
- applicants preparing to pursue a master's degree at a German university;
- the APS general domestic applicant procedure;
- the ordinary student-visa route under Residence Act §16b after obtaining university admission.

Not covered by this milestone:

- current undergraduate applicants;
- doctoral applicants;
- exchange students;
- pure language-course visa;
- visa for seeking a university place;
- art/music special route;
- vocational/special education pathways;
- applicants whose relevant higher-education qualification was not obtained through the normal Mainland China route.

The public page must state this scope clearly.

## 2. Source-precedence rule

When official sources differ:

1. use the more current live instruction for mutable operational details;
2. use the currently linked purpose-specific official PDF for study-visa documents not contradicted by a newer official instruction;
3. cross-check mutable numeric amounts with a current federal official source;
4. never combine contradictory values into one statement;
5. if a future conflict cannot be resolved, display a concise warning and link users to the responsible authority rather than guessing.

For the 2026-09-19 freeze:

- current live China study-visa page controls passport-validity wording and the 2–4 week normal-processing statement;
- the 2025-01 study-visa PDF remains an active official checklist because the current national-visa page still links it;
- the current federal “Make it in Germany” page confirms the 2026 student proof-of-funds amount of EUR 11,904 / EUR 992 per month.

## 3. APS page

### 3.1 Page-level copy

Title:

**APS 审核**

Applicability:

**适用于已取得中国大陆普通高校本科学历、计划赴德国攻读硕士，并走 APS 一般国内申请人程序的申请人。**

Important note:

**本科已经毕业的申请人当前继续参加 APS 面谈审核；本页不按本科在读生的 TestAS 路径设计。**

Special-history warning:

**如果你有交换学习、转专业、专升本、更高一级学历或延期毕业等经历，本清单不足以覆盖你的补充材料，请同时查看 APS 官方“特殊情况另须补充材料”。**

### 3.2 Profile condition

The site needs one small persisted profile question:

**你本科毕业是否已经超过一年？**

Values:

- `within-one-year` — 未超过一年
- `over-one-year` — 已超过一年

The conditional CV row applies only to `over-one-year`.

Until the user chooses a value:

- show the common checklist normally;
- show the CV row as “待判断”;
- do not report a misleading 100% stage completion;
- prompt the user to answer this one question before APS can be shown as fully complete.

### 3.3 APS process checklist

| ID | 材料 / 步骤 | 一句话说明 | Applies | Sources |
| --- | --- | --- | --- | --- |
| aps-register | 在线注册 | 在 APS 官网选择“一般国内申请人审核程序”完成注册，信息必须完整真实。 | all | APS-001, APS-002 |
| aps-pay-fee | 支付审核费 | 当前一般国内申请人审核费为人民币 2500 元，按 APS 官方汇款要求支付并保存汇款凭证。 | all | APS-001, APS-003 |
| aps-mail-package | 邮寄完整材料 | 本科毕业生走面谈审核；上海辖区（江苏、安徽、浙江、上海）按官方要求寄上海审核部，其它辖区寄北京审核部。 | all | APS-001, APS-006 |
| aps-monitor-review | 关注审核状态 | APS 收到材料后约 10 天给出档案号；持续查看注册邮箱及 APS 账号，按系统通知补交材料。 | all | APS-001 |
| aps-interview | 参加 APS 面谈 | 材料审核通过后按系统邮件通知参加面谈；面谈含约 20 分钟书面准备和最长约 25 分钟口头部分，可使用英语和/或德语。 | all | APS-001, APS-004 |
| aps-download-digzert | 下载 DigZert | 审核通过后在 APS 个人账号下载数字签名审核证书 DigZert，后续高校申请和签证使用。 | all | APS-001, APS-002 |

### 3.4 APS document checklist

| ID | 材料 / 步骤 | 一句话说明 | Applies | Sources |
| --- | --- | --- | --- | --- |
| aps-registration-proof | 在线注册证明 | 打印注册证明，贴 6 个月内 2 寸证件照，亲笔签名并写明签字地点和日期。 | all | APS-001 p.3 |
| aps-transfer-proof | 汇款单复印件 | 应清楚显示汇款人、金额、时间、汇出银行和申请人姓名等信息。 | all | APS-001 p.3 |
| aps-id-passport | 身份证 / 护照复印件 | 提交身份证正反面复印件；如已有护照，同时提交护照复印件。 | all | APS-001 p.3 |
| aps-admission-roster | 大学录取花名册 | 提交高校招生办或档案馆出具的中英双语密封件，或中英翻译公证件；大学录取通知书不能替代。 | all | APS-001 p.3 |
| aps-transcript | 大学成绩单 | 提交中英双语密封件或中英翻译公证件；成绩单按学期排列并包含全部课程，包括未通过课程。 | all | APS-001 p.3 |
| aps-language-proof | 德语 / 英语水平证明 | 提交德语和/或英语语言水平证明复印件；没有相应证明时按官方要求提供自学学时说明。 | all | APS-001 p.3 |
| aps-degree-docs | 本科毕业证和学位证 | 提交毕业证书及学位证书的中英双语密封件或中英翻译公证件。 | all | APS-001 p.3 |
| aps-postgrad-cv | 毕业后表格式简历 | 本科毕业超过一年时，提交德文或英文表格式简历，按时间段说明毕业后的经历。 | graduationAge=over-one-year | APS-001 p.3 |

### 3.5 APS compact notes

These are short notes below the table, not extra progress rows:

**双语密封件**

由学校出具，包含中英文材料原件并加盖学校公章，信封封口同样需学校盖章且不得自行拆封；只有院系级盖章无效。学校不能提供时，可按 APS 说明改交中英翻译公证件。

**成绩单**

应由教务处或档案馆出具，按学期排列并包含全部课程及结果；辅修/双学位成绩与主修专业分开开具。

### 3.6 APS reference list

Render at the bottom of the APS tab:

1. APS-001 — 一般中国境内申请人审核程序须知，2026-09
2. APS-002 — 一般国内申请人审核程序
3. APS-003 — 审核相关费用
4. APS-004 — 审核部面谈
5. APS-006 — 德国驻上海总领事馆留德人员审核部

## 4. Study visa page

### 4.1 Page-level copy

Title:

**德国留学签证**

Applicability:

**适用于已经取得德国高校硕士专业录取、准备按照《居留法》第 16b 条申请普通留学签证的本项目目标用户。**

Scope warning:

**本页不覆盖“留学申请人签证”、纯语言班、博士、交换项目等其它居留目的。**

Current timing note:

**德国驻华使领馆现行留学页面写明：正常处理时间约 2–4 周，个别情况更长；最早可在计划出行前 6 个月递交。处理时间不是承诺，应尽早准备。**

### 4.2 Visa checklist

| ID | 材料 / 步骤 | 一句话说明 | Applies | Sources |
| --- | --- | --- | --- | --- |
| visa-confirm-jurisdiction | 确认递签地点与预约方式 | 递交地点按当前常住地和官方辖区规则确定；北京/上海等辖区的 APS 申请人可能通过 APS 递签，其它辖区按领馆规则办理。 | all | APS-005, VISA-003, VISA-004 |
| visa-book-appointment | 预约递签 | 按主管机构的当前在线预约/等候名单规则预约，长期签证原则上需要本人递交。 | all | VISA-001, VISA-003, VISA-004 |
| visa-prepare-copy-set | 按要求整理材料 | 携带材料原件和一套复印件；复印件单面、按官方顺序整理，不订书或粘贴；中文材料附德文译文，英文材料无需再译德文。 | all | VISA-001, VISA-002, VISA-003, VISA-004 |
| visa-videx | VIDEX 申请表 | 使用官方 VIDEX 用德语或英语完整填写，打印后亲笔签名。 | all | VISA-001, VISA-002 |
| visa-section54 | 《居留法》第 54 条告知书 | 打印官方告知书，阅读后亲笔签名。 | all | VISA-001, VISA-002 |
| visa-biometric-photos | 生物识别证件照 | 准备 2 张近期生物识别照片，不接受精修照片或 6 个月前的照片。 | all | VISA-001, VISA-002 |
| visa-passport | 护照及相关页面复印件 | 护照自签证签发之日起应仍有一年以上有效期且至少有两页完全空白页；携带原件及信息页、签证和出入境印章页复印件。 | all | VISA-001 |
| visa-china-residence-proof | 中国常住地 / 地址证明 | 提供能证明当前实际居住或工作/学习地点的材料；户口簿通常不足以单独证明当前常住地。 | all | VISA-001, VISA-004 |
| visa-admission | 德国高校录取通知书 | 提交德国高校硕士专业录取通知书；官方现行页面允许提交电子版录取通知书打印件。 | all | VISA-001, VISA-002 |
| visa-language | 授课语言要求及语言证明 | 提交学校对授课语言/要求级别的说明，并提供与录取要求相符的语言水平证明。 | all | VISA-002 |
| visa-finance | 资金证明 | 2026 年普通留学路径按至少 992 欧元/月、11,904 欧元/年证明生活费，可用限制提款账户、奖学金或经济担保函等官方接受方式。 | all | VISA-002, VISA-005 |
| visa-degree | 本科毕业证和学位证 | 提交已取得的高等教育毕业/学位证明；中文材料按当前长期签证规则附德文译文。 | all | VISA-002, VISA-003, VISA-004 |
| visa-cv | 个人简历 | 提交完整个人经历的清晰表格式简历，可使用德语或英语。 | all | VISA-002, VISA-004 |
| visa-motivation | 留学动机说明信 | 由本人撰写并签名，说明赴德学习的个人具体理由，可使用德语或英语。 | all | VISA-002, VISA-004 |
| visa-aps-proof | APS 审核证明 / DigZert | 中国高校学历申请人按当前要求提交 APS 审核证明；持 DigZert 的申请人使用其打印版。 | all | VISA-002, APS-005 |
| visa-insurance | 医疗保险证明 | 申请时需有足够医疗保险；若德国法定学生保险尚未生效，入境至其生效前的时间需有适用的私人/旅行医疗保险覆盖。 | all | VISA-002, VISA-004 |
| visa-fee | 签证费 | 成年申请人当前签证费为 75 欧元等值人民币；具体支付方式按实际递交地点的最新规则执行。 | all | VISA-001, VISA-002, APS-005 |
| visa-submit | 本人递交并提供生物识别信息 | 按预约携带完整材料本人递交，并按主管机构要求提交照片/指纹等生物识别信息。 | all | VISA-003 |
| visa-check-issued-label | 收到签证后立即核对 | 核对姓名、护照号码、照片和有效期；发现错误立即联系签发使领馆。 | all | VISA-001, VISA-003 |

### 4.3 Visa clarification notes

**资金证明**

The public row should show the 2026 study amount only. Do not show the higher amount for the separate “study-place-seeking” route because that route is out of scope.

**护照有效期**

Use the current live China study-visa page wording (“自签证签发之日起仍有一年以上有效期”), not the older 2025 PDF wording (“超出签证有效期三个月”).

**处理时间**

Use the current live page 2–4 week normal-processing statement, not the older PDF's ~5 week statement.

**付款方式**

Do not hard-code “cash” or “bank card” globally. Official sources differ by submission venue. The row should state the 75-euro fee and direct the user to the current rule for their actual submission location.

### 4.4 Visa reference list

Render at the bottom of the Visa tab:

1. VISA-001 — 德国驻华使领馆：留学
2. VISA-002 — 留学签证申请须知（居留法第 16b 条），2025-01, still linked by current official national-visa page
3. VISA-003 — 德国驻华使领馆：长期居留
4. VISA-004 — 德国驻华使领馆：长期居留常见问题
5. VISA-005 — 德国联邦政府 Make it in Germany：Visa for studying
6. APS-005 — APS：申请德国签证

## 5. Content maintenance rule

Before changing `Last Verified`:

1. re-open every source used by that stage;
2. check whether the source version/date changed;
3. verify every amount, deadline, count, validity rule and required document;
4. update content only after resolving conflicts;
5. record replaced sources in Git history; do not silently reuse a stale value.

## 6. Minimal FAQ for Milestone 01

The FAQ is intentionally small. It is not a third process stage.

### FAQ-001 — 这个清单适合谁？

适用于已取得中国大陆普通高校本科学历、准备赴德国攻读硕士，并走普通 APS 一般国内申请人程序和 §16b 留学签证路径的人。其它学历、博士、交换、纯语言班、留学申请人签证等路径暂不覆盖。

### FAQ-002 — 如果官网和本网站内容不一致怎么办？

始终以负责该事项的官方机构最新要求为准。网站显示 `Last Verified` 只是说明最后核验时间，不代表官方要求此后不会变化。发现差异请通过 GitHub Issue 报告。

### FAQ-003 — 勾选进度保存在哪里？

进度只保存在当前浏览器的 `localStorage` 中，不需要账号，也不会跨设备同步。清除浏览器网站数据后进度可能丢失。

### FAQ-004 — 如何提问或纠错？

一般问题进入 GitHub Discussions；明确的内容错误、过期链接或网站 Bug 使用 GitHub Issues；如果配置了公开联系邮箱，也提供 `mailto:` 联系入口。Discussion 中的回答不会自动变成网站正式 FAQ，正式 FAQ 由维护者人工整理。

### FAQ-005 — 为什么毕业超过一年要回答一个额外问题？

APS 2026-09 官方须知要求毕业超过一年的高校毕业生额外提交德文或英文表格式简历，因此网站需要知道该条件是否适用，才能正确计算 APS 进度。


