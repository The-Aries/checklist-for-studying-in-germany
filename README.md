# Checklist for studying in Germany

一个面向准备赴德国攻读硕士的中国大陆普通高校本科毕业生的中文流程型 Checklist。

## 当前状态

APS、签证与轻量常见问题的静态候选版本已实现；独立验收由评估方在交付后执行，当前不声明验收通过。

候选网站：https://the-aries.github.io/checklist-for-studying-in-germany/

提供 33 个条目、官方来源、毕业年限条件、本地保存、重置、当前进度/空白打印，以及非官方毕业后简历 DOCX 模板。不适用的条件条目不计入进度。

当前实现里程碑：

- APS
- 签证

后续规划范围（本里程碑暂不实现）：

- 赴德前准备
- 住址登记（Anmeldung）
- 居留许可（Aufenthaltstitel）

FAQ / GitHub Discussions / Issues 属于网站基础设施，会在当前里程碑中提供轻量版本。

第一版目标用户：

- 中国大陆普通高校本科毕业生
- 包括应届毕业生与毕业多年的申请人
- 准备赴德国高校攻读硕士
- 走常见的 APS 一般国内申请人流程

详细规格见 `docs/`。Codex 执行目标文件位于本地忽略目录 `local/goal.md`，不会提交到 Git。

独立浏览器验收使用 Playwright。测试代码、`package.json`、`package-lock.json` 与 Playwright 配置提交到仓库，便于在 Windows、macOS、Linux 上复用；Node.js/npm 仅属于开发/测试工具链，不是部署网站的运行依赖。

当前已冻结内容见 `docs/CONTENT_APS_VISA.md`，当前独立验收契约见 `docs/ACCEPTANCE.md` 与 `tests/`。

## 本地使用与维护

在仓库目录运行 `python -m http.server 4173`，打开 `http://localhost:4173/`。无需安装前端依赖或构建；请通过 HTTP 使用，直接打开本地 HTML 文件可能阻止 JSON 加载。

事实内容位于 `data/checklist.json`、`data/faq.json`；公开社区链接、联系邮箱和赞助链接位于 `data/config.json`。当前公开邮箱与赞助未配置，访问统计未启用。网站不会自动使用私人 Git 邮箱。

进度只存储于当前浏览器的 `study-in-germany-checklist:v1`，不跨设备同步。清除网站数据会丢失进度。打印使用浏览器原生功能，最终分页由浏览器决定。

简历模板生成方法见 `scripts/generate-cv-template.py`。纠错与维护流程见 `CONTRIBUTING.md`；部署与候选交付记录见 `docs/RELEASE.md`。
