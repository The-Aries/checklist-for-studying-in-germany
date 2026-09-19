# Checklist for studying in Germany

一个面向准备赴德国攻读硕士的中国大陆普通高校本科毕业生的中文流程型 Checklist。

## 当前状态

项目的第一阶段规划、官方资料核验、内容冻结与独立验收测试已经准备完成，尚未进入网站正式实现。

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

