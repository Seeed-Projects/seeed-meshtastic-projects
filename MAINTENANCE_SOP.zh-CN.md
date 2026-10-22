# LoRa Mesh Lab 网站维护与交接 SOP

适用对象：内容运营、AE 审核、活动执行和技术维护同事。最后核对：**2026-10-22**。

日常投稿审核可以在 GitHub 网页完成，不需要原维护人的电脑或 Codex。修改页面、直接编辑项目目录和处理发布故障时，请按下文的 PR 流程操作。

## 1. 接手先看这页

### 常用入口

| 用途 | 入口 |
| --- | --- |
| 正式合集页 | https://seeed-projects.github.io/seeed-meshtastic-projects/ |
| L2 活动页 | https://seeed-projects.github.io/seeed-meshtastic-projects/l2.html |
| 正式仓库 | https://github.com/Seeed-Projects/seeed-meshtastic-projects |
| 投稿、问题和社媒奖励申请 | https://github.com/Seeed-Projects/seeed-meshtastic-projects/issues |
| 内容改动与合并 | https://github.com/Seeed-Projects/seeed-meshtastic-projects/pulls |
| 自动审核、校验和部署记录 | https://github.com/Seeed-Projects/seeed-meshtastic-projects/actions |
| 公共联系邮箱 | sensecap@seeed.cc |

正式发布来源是 **Seeed-Projects 仓库的 `main` 分支**，网站文件位于 `docs/`。只改 Yvesgoat 或 hack-embed 的副本，不会更新这个正式网站。首页的 `#projects` 是同一页面内的项目区域；L2 活动页是 `docs/l2.html`。

### 交接时的状态快照

这些是核对当天的状态，后续接手人应重新确认，不把它们当成永久配置。

| 项目 | 当前状态 |
| --- | --- |
| 项目数量 | 21 个；以正式页面和 `docs/data/projects.json` 为准 |
| 发布方式 | GitHub Pages，Source 为 GitHub Actions |
| 自动流程 | 校验、目录更新、部署三个 workflow 均为 active |
| 审核标签 | 已有 `ae-approved`、`project-discussion` |
| 审核人额外名单 | 未设置 `AE_REVIEWERS`；目前仓库 Write / Maintain / Admin 成员均可通过脚本的审核身份检查 |
| 自动审批邮件 | 未启用，`docs/notification-config.js` 中 `enabled: false`；仓库级邮件 secrets 未配置 |
| 联系与奖励发放 | 通过团队私有渠道人工跟进；网站不会自动发券或寄礼品 |

### 人员和权限交接

| 工作 | 所需条件 | 由谁开通 |
| --- | --- | --- |
| 查看网站、提交普通项目 | 自己的 GitHub 账号；提交 Issue 无须仓库写权限 | 同事自己注册/登录 |
| 整理反馈、检查链接、提出修改建议 | 可先用普通账号发 Issue / PR | 无须共享维护人账号 |
| 给投稿加审核标签、合并内容 PR | 正式仓库的 **Write 或更高权限**；还需满足仓库当前合并规则 | 仓库/组织管理员 |
| 管理仓库权限、Pages、Actions 配置、secrets | Admin 或组织授予的相应管理权限 | 组织管理员 |
| 回复私有联系邮件、核对券和礼品 | 团队单独授予的邮箱、活动台账和发放系统权限 | 邮箱及活动负责人 |

使用同事自己的账号，不交接 GitHub 密码、个人 token 或浏览器登录状态。如果以后启用了 `AE_REVIEWERS`，新审核人必须同时拥有仓库写权限并列入该变量，只有其中一项不够。Triage 权限可以协助整理，但不满足当前脚本的发布审核要求。

交接负责人安排一名主维护人和一名备份，并在团队**私有文档**填写：内容负责人、AE、活动发放负责人、技术维护人、组织管理员及各自联系方式。离任时由管理员调整其授权；邮件密钥和服务账号通过团队凭据管理工具交接。

接手验收：同事能打开正式仓库和 Actions、找到待处理 Issue、创建一个文档修改分支/PR，并说清楚审核项目与审核奖励的区别。初次实际审批建议由原 AE 陪同，使用真实且已审完的投稿，避免把测试项目发布到正式目录。

## 2. 哪些要定期维护

以下频率是建议的工作安排，不代表已经创建了提醒或新的定时任务。活动集中投稿期可提高频率。

| 频率 | 人工要做的事 | 完成标准 / 负责人 |
| --- | --- | --- |
| 每个工作日 | 查看新项目、修改请求、故障反馈和 `[L2 Share Reward]` 申请；检查联系邮箱 | 每条申请有负责人和下一步；内容运营 / AE / 活动执行 |
| 每个工作日及每次发布后 | 看 Actions 最近的失败/取消记录，打开首页和 L2 页 | 能看到正确项目和图片；审核更新与部署结果对应；技术维护 |
| 每周 | 抽查新项目和重点项目的封面、GitHub、Wiki、官网、演示视频；手机上检查表单入口 | 记录失效链接、图片限制、错误产品标签并修正；内容运营 |
| 每周 | 核对固件的新版本、硬件支持、Beta / 预发布状态；审核未发放奖励和重复申请 | 有来源支撑的状态更新；券和礼品分别记账；AE / 活动执行 |
| 每月 | 全量检查目录中的资源与配图、购买链接、活动页规则、FAQ、Past Activities 和联系入口 | 去重、补来源、处理归档/失效项目；内容与活动负责人 |
| 每月 | 检查 Actions 是否仍 active、最近定时运行是否正常、GitHub 相关通知与用量；若启用邮件则看退信和服务额度 | 自动流程未停用；异常有处理记录；技术维护 |
| 每季度或人员变动时 | 复核仓库、邮箱、活动台账权限；检查交接人和密钥备份归属；审阅依赖/Action 版本更新 | 权限与实际职责一致，升级经过 PR 和验证；管理员 / 技术维护 |
| 每次活动规则变更或活动结束 | 同步页面、配置、测试、审批邮件模板及执行台账；明确是否继续接收申请 | 对外承诺与实际发放一致；活动负责人批准规则后再发布 |

### 已经自动做的事

- 加 `ae-approved`：对这条项目 Issue 校验审核人和内容，更新目录。
- GitHub 评论事件、相关标签事件、手动运行以及每小时的计划任务：更新关联 Issue 的公开 hearts / 评论快照。计划设为每小时第 17 分钟，GitHub 可能延迟，不保证准点。
- 更新目录的 workflow 成功后：触发部署。符合路径条件的 `main` 文件修改也会触发部署。
- 如果未来启用邮件：处理已发表项目的审批通知和安全重试；这不等于奖励发放。

### 仍需人工做的事

发现/新增外部项目、核实硬件支持、审稿、检查外部图片和链接、审核社媒真实数据、发放奖励、维护活动规则。系统不会自动追踪所有上游项目，也不会抓取 Reddit / Facebook / X / YouTube 的达标数据。

首页 Like 和分享数包含当前浏览器的本地记录，不能当成活动审核数据。GitHub 互动数字也是快照，不能当成全站实时访问统计。

## 3. 审核社区投稿：以 GitHub 网页为主

### 3.1 确认收到的是项目投稿

用户在网站填表后，还必须在 GitHub 最终点击 **Create issue**。只在网站选择本地图片并不代表已上传；图片还要在 GitHub 最终提交步骤上传为有效附件。

在 Issues 中打开投稿，确认它包含 Project Title、Author / Maker、Project Description、Project Cover Image、Hardware、Category、Setup Instructions、Resources & Links 等项目字段。`[L2 Share Reward]` 是另一类申请，转到第 6 节处理。

### 3.2 AE 审核内容

- 标题和介绍清楚，面向网站的文案使用英文；项目存在且与实际演示一致。
- 原作者、代码/教程、图片来源可追溯；转载和图片使用确认已完成。
- Hardware 选的是有依据的硬件；区分已验证、Beta、预发布、尚未集成，不能只凭名称相近就写“支持”。
- 封面是可公开访问的 HTTPS 图片直链，或有效的 GitHub 图片附件；不是网页地址、本地文件路径、登录后才可见的链接或上传占位符。
- 配图能说明功能。优先作者公开的实机演示或界面图；作者渲染图、样例数据、其他硬件上的截图要说明。不要自己编造屏幕内容作为项目截图。`imageAlt` 用于替代文本，关键硬件限制还要写进可见的介绍。
- 教程和链接可用，没有误填私人信息；Social Links 是公开帖子/视频，允许为空。
- Related Activity 与实际投稿一致。普通合集收录不自动获得 L2 奖励资格。

内容不完整时，通过 Issue 指出需要补充的内容，先不加批准标签。修正标题等字段时保留 GitHub 模板的 `###` 字段名称；解析器依赖这些名称。

### 3.3 审核通过并检查上线

1. 在投稿 Issue 右侧 **Labels** 添加 `ae-approved`。
2. 打开 **Actions → Review and update project catalog**，找到此次 `issues` 事件对应的运行。
3. 检查 `update` job 成功；必要时核对日志中的项目 ID 和自动提交。已批准的投稿 ID 为 `community-<Issue编号>`。
4. 打开 **Deploy Mesh Lab**，确认对应目录更新之后的部署成功。
5. 访问 `https://seeed-projects.github.io/seeed-meshtastic-projects/?project=community-编号#projects`，检查文案、配图、链接和筛选。
6. 在团队台账记录审核人、Issue、发布日期和待跟进事项。需要通知作者时由负责同事回复；当前自动邮件未开启，不要只等系统发信。

若审核失败，先看报错：常见原因是审核人权限/名单、缺字段、重复 URL、错误分类、非 HTTPS 链接、图片占位符或未勾选授权。修正文稿后，**移除并重新添加** `ae-approved`，触发新的审核。

### 3.4 更新、撤下和恢复已发布投稿

| 需求 | 正确操作 |
| --- | --- |
| 投稿作者修改了 Issue | AE 重新核对，再移除并重新添加 `ae-approved`。仅编辑、评论、关闭/重开 Issue 或等每小时任务，不会重新导入项目字段 |
| 改错别字、图片或资源链接 | 对社区投稿优先修正原 Issue 后重新审批；直接改目录的字段以后可能被重新审批覆盖 |
| 临时撤下项目 | 移除批准标签防止误认为仍获批准，再通过 PR 从目录移除该项目；同时清理它在 `engagement.json` 和社媒导出中的对应记录，运行校验后部署 |
| 恢复投稿 | 重新审核原 Issue，再添加批准标签；需要保留原收录日期等历史元数据时让技术维护人核对差异 |

**移除标签、关闭 Issue 都不会自动下架。** 下架须完成目录修改和部署。保留原 Issue 便于追溯；删除仍被目录引用的 Issue 可能使后续同步失败。不要为下架清空整个目录、互动数据或邮件发送记录。

## 4. 主动收录外部项目、改页面和图片

### 4.1 新增整理收录的项目

例如 Cairn、WADAMESH 这类由团队找到的项目，直接通过 PR 编辑 [docs/data/projects.json](docs/data/projects.json)，可以保留更准确的作者和资源标签。

1. 先搜索现有目录，核对是否已收录，避免重复 ID 和重复主项目 URL。
2. 在 GitHub 打开文件，点击编辑；从 `main` 建一个新分支，例如 `content/add-project-name`，不要直接提交到 `main`。
3. 参考现有完整条目填写以下字段，保持合法 JSON（不能写注释或多余尾逗号）。

| 字段 | 如何维护 |
| --- | --- |
| `id` | 唯一的小写英文、数字、短横线，如 `project-name`；发布后尽量不变，更改会破坏旧链接和互动关联。`community-编号` 留给投稿流程 |
| `title` / `description` / `author` | 英文标题、准确功能与限制、原作者署名 |
| `categories` / `products` | 必须使用 [docs/config.js](docs/config.js) 已定义的原样值；不是自由填写 |
| `devices` / `tags` | 真实硬件细节、版本状态与搜索词；这些字段会参与搜索 |
| `url` / `source` | 主项目地址、核实资料来源，均为 HTTPS |
| `image` / `imageAlt` | 图片 HTTPS 直链及准确说明；不能把电脑路径写入 `image` |
| `addedAt` | 加入本合集的日期，格式 `YYYY-MM-DD`，不是猜测的项目首次发布时间 |
| `setup` / `resources` | 简洁步骤、带标签的教程/代码/官网等链接；详细操作以原项目为准 |
| `socialLinks` | 可选的公开视频或社媒帖子；保留有意义的视频时间参数，去掉无关追踪参数 |
| `activity` | 普通收录填 `null`；不要为了显示 L2 示例而设成 `l2-pro` |
| `issueNumber` | 普通收录不填；不要拿别的项目 Issue 编号或旧仓库编号凑数 |

4. 若使用仓库内图片，先上传到 `docs/assets/projects/`，再填写正式站完整 HTTPS 地址，例如 `https://seeed-projects.github.io/seeed-meshtastic-projects/assets/projects/文件名.jpg`。保留署名并记录原始来源；不要覆盖另一个项目的文件。
5. 提交 PR，说明收录来源、适配状态、配图来源和验证情况。新增后同步 README 中的目录说明/数量。
6. 按第 7 节检查并合并、验证正式页面。新图片在分支上传后尚未出现在正式站是正常的；必须在部署后核对实际加载。

### 4.2 L2 分类示例如何更新

活动页从目录里选择 `products` 包含 `Wio Tracker L2 Pro` 的项目，并按分类匹配示例，通常优先较新条目。每个分类目前只显示一个示例，所以新增项目不等于每个项目都会同时出现在活动页。

要改变固定展示顺序或增加每类示例数量，交技术维护人修改 `docs/l2.js`；不要伪造 `addedAt` 或 `activity`。没有合适项目的类别保留投稿邀请。普通收录即使出现在示例区，也不自动进入社媒奖励可选项目。

### 4.3 常见修改改哪里

| 要改的内容 | 文件 |
| --- | --- |
| 合集项目内容、配图、链接、搜索标签 | [docs/data/projects.json](docs/data/projects.json) |
| 首页文案、横幅照片、Past Activities、联系入口 | [docs/index.html](docs/index.html) |
| L2 活动文案、奖励说明、FAQ、表格 | [docs/l2.html](docs/l2.html) |
| L2 购买链接、Wiki、联系人、社媒门槛配置 | [docs/l2-config.js](docs/l2-config.js) |
| 产品/分类选项、活动 ID、仓库名 | [docs/config.js](docs/config.js)，并同步 [.github/ISSUE_TEMPLATE/project.yml](.github/ISSUE_TEMPLATE/project.yml) |
| 投稿表单字段和交互 | [docs/partials/project-form.html](docs/partials/project-form.html)、[docs/project-form.js](docs/project-form.js)，技术维护同时核对解析器和测试 |
| 首页 / L2 样式 | [docs/hub.css](docs/hub.css)、[docs/l2.css](docs/l2.css)；共用样式在 [docs/base.css](docs/base.css) |
| 自动更新、校验、部署 | [.github/workflows/catalog.yml](.github/workflows/catalog.yml)、[check.yml](.github/workflows/check.yml)、[pages.yml](.github/workflows/pages.yml) |
| 审批邮件开关、模板与设置 | [docs/notification-config.js](docs/notification-config.js)、[scripts/approval-notifications.mjs](scripts/approval-notifications.mjs)、[邮件设置说明](APPROVAL_EMAIL_SETUP.md) |

图片要在**正式站页面里**检查。原图单独打开成功，不保证能被其他网站引用；有些图床会拒绝外站请求。确认图片使用条件后，可选用作者提供的其他公开配图，或像 Cairn 一样随站点保存有来源记录的原图。看见替代占位图不等于原图加载成功。

## 5. 评论和互动数据维护

社区投稿自动关联原投稿 Issue。主动收录的项目如需开通评论关联：

1. 在项目详情点击 Comments，创建正文中保留 `<!-- mesh-lab-project: 项目ID -->` 的讨论 Issue。
2. 维护人核对内容和项目 ID，添加 `project-discussion` 标签。
3. 等同步和部署完成，验证评论链接及展示内容。一个项目只保留一个正式关联讨论，不给重复讨论同时加此标签。

公开评论会被同步到站点。发现垃圾内容或误公开的个人信息，先按团队规则处理原 GitHub 评论，再运行目录同步并确认站点快照更新；敏感信息如已进入 Git 历史，交管理员单独处置，普通删帖不能保证历史副本一起消失。

`docs/data/engagement.json` 是生成的互动快照，`docs/data/activity-social-links.json` 是生成的 L2 投稿社媒导出，日常不手工改数字。后者只汇总**已发布 L2 项目条目自身的 `socialLinks`**，不会自动把每条独立社媒奖励申请收集进去，活动同事仍须查看奖励 Issues。

## 6. 社媒奖励和发放：人工审核

1. 找到 `[L2 Share Reward]` Issue，核对关联的原项目确实已批准并发布，属于 L2 活动，且申请人与原投稿使用同一 GitHub 身份。
2. 打开申请中的公开帖子/视频，在审核当天记录可见数据、链接、审核时间和依据。一个门槛对应单条帖子/视频，不合计多个平台或多条帖子的数值。
3. 由 AE 判断数据与内容是否符合活动要求；无法核实时请申请人补充，不按表单提交成功就批准。
4. 查询内部发放台账，分别检查该项目的券和礼品包是否已发。
5. 通过团队私有邮箱/系统联系申请人并安排发放，记录结果。

**不要给社媒奖励 Issue 添加 `ae-approved`。** 这个标签用于导入项目目录，不是“所有审批通过”的通用标签。

### 当前对外规则

| 奖励/平台 | 规则 |
| --- | --- |
| Build Reward | 可用且审核通过的项目：满 $100 减 $20；适用 Seeed Mesh 产品线，排除 XIAO 开发套件；运费不计入门槛、不参与抵扣 |
| Reddit | 单条帖子 200 upvotes |
| Facebook | 单条帖子 100 **likes**，不把其他 reaction 算进去 |
| X | 单条帖子 100 likes |
| YouTube / Shorts | 单个视频 1,000 organic views |
| Share Reward | 达标并获审核通过的项目领取一份 Seeed Merchandise Pack；多个平台达标不重复领取 |

每个项目最多一张券和一份礼品包。礼品内容取决于库存。当前网站未承诺截止日期、券有效期或寄送时限，新增承诺前由活动负责人确认。

改变规则时同步检查 `docs/l2.html`、`docs/l2-config.js`、`tests/l2-rules.test.mjs`、`scripts/approval-notifications.mjs`、README 和本 SOP，避免页面、逻辑、邮件和实际发放不一致。

建议在**内部台账**记录：项目 ID、原投稿 Issue、奖励申请 Issue、申请人账号、平台/帖子、核验日期/指标、审核人、券状态、礼品状态、跟进负责人。邮箱、地址、券码和物流信息放在团队授权的私有系统，不写入公开 Issue、PR、JSON 或截图。

当前审批邮件未启用，用户需实际发送页面提供的私有联系邮件；页面只是打开邮件草稿。未来如需启用邮件，请由管理员完整执行 [APPROVAL_EMAIL_SETUP.md](APPROVAL_EMAIL_SETUP.md)，不是只把 `enabled` 改成 `true`。

## 7. 修改、验证和发布

### GitHub 网页流程

1. 从正式仓库的最新 `main` 建分支，在分支修改文件；内容运营无法编辑时可提修改 Issue，由技术同事建 PR。
2. 创建 PR，以正式仓库的 `main` 为目标。写明改了什么、来源、涉及哪些页面、如何验证；请另一位同事核对对外规则或较大修改。
3. 等 **Validate Mesh Lab** 通过。它会做目录校验、部分 JS 语法检查和 Node 单元测试，**不会自动跑桌面/手机浏览器检查，也不会核验外部链接和图片能否加载**。
4. 对照下方页面清单检查。若 `main` 已有自动目录更新，先处理 PR 冲突或更新分支，保留其他新投稿，禁止用旧目录整份覆盖最新数据。
5. 由有权限的维护人合并到 `main`，再检查对应的 **Deploy Mesh Lab** 运行及正式页面。
6. 记录 PR、发布结果和检查人；遇到失败按第 8 节处理。

纯根目录文档或测试修改不命中 Pages 的普通 push 部署路径，不需要为了发布 SOP 手动部署网站。页面、目录、脚本修改才需要核对页面部署结果。PR 分支本身没有自动提供独立的 Pages 预览站，合并前用本地预览或由技术同事协助。

### 每次页面改动后的验收清单

- [ ] 首页能加载项目；搜索、分类和设备组合筛选结果正确。
- [ ] 修改过的项目详情与 `?project=项目ID#projects` 直达链接正确。
- [ ] 新增/更换的图片已加载，不是占位图；在正式页面点击资源能到正确内容，而非只看 HTTP 状态。
- [ ] 首页 Submit a Project 会跳转并展开同一处折叠表单；再次点击可收起。
- [ ] L2 页项目提交能打开表单；`#submit-social` 的奖励入口正常。
- [ ] 普通收录不会误出现在奖励项目选择中；暂无合格项目时显示空状态是正常情况。
- [ ] 桌面和约 390 px 手机宽度下无横向溢出、遮挡和无法点击的按钮。
- [ ] 奖励、购买、Wiki、联系信息与本次批准内容一致；没有真实个人信息用于公开测试。

### 技术同事的本地步骤

需要 Git、Node.js（CI 使用 22）、npm 和 Python 3。第一次克隆；已有工作目录先保存自己的改动，再同步 `main`。

```sh
git clone https://github.com/Seeed-Projects/seeed-meshtastic-projects.git
cd seeed-meshtastic-projects
npm ci
npm run validate
npm test
```

本地预览：

```sh
npm run serve
```

打开 `http://127.0.0.1:8765/` 和 `/l2.html`。完成后在启动服务的终端按 Ctrl+C 停止。

修改交互或布局时，还应运行现有浏览器测试，并人工验证真实外链：

```sh
npx playwright test
```

配置会自行启动本地服务。macOS 默认使用 `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`；未安装 Chrome 时可由技术同事改用 Playwright Chromium。其他平台可先运行 `npx playwright install chromium`，并准备 Python 3。不要把测试截图、临时联系人文件或本地配置意外提交到仓库。

目录总数和 Firmware / L2 筛选测试读取当前目录，不需要每次添加项目后手改固定数量；如果新增了分类、规则或测试场景涉及的硬件，仍要审阅相关断言。

只改 `projects.json` 通常不需改脚本版本参数，因为两页获取目录时使用重新验证缓存的请求。修改 JS/CSS 时同步更新页面的 `?v=...`，若修改的是导入模块，也要检查引用它的模块 URL，避免用户继续拿到旧版文件。

## 8. 常见故障处理

| 现象 | 先查什么 | 如何处理 |
| --- | --- | --- |
| 加批准标签后没有新项目 | 标签是否正确、是否为项目 Issue、审核人的仓库权限和 `AE_REVIEWERS`、目录更新运行结果 | 修正内容/权限后重新移除并添加批准标签。单纯手动运行 workflow 不会把未导入的 Issue 当作新审批 |
| 修改已批准的 Issue，页面没变 | 是否重新审批 | 审核变更后移除再添加标签；保留字段标题 |
| 目录自动提交失败 | `update` job 中 Git push 报错、分支规则或其他同时发生的提交 | 技术维护人处理规则/冲突；当前机制需要 Actions bot 写入 `main`，不能一边禁止该写入一边依赖旧自动流程。不要直接关掉保护来“试一试” |
| PR / 审核已成功，正式页没更新 | 合并目标、Deploy Mesh Lab 是否成功、正在看的是否是正式站、浏览器缓存 | 先核对部署对应版本；需要时 Actions → Deploy Mesh Lab → Run workflow，选 `main`，等待完成再刷新 |
| 项目列表显示加载失败 | 网络、控制台、`projects.json` 是否可获取、最近部署 | 先点页面重试；数据损坏则修复 PR 并校验，不反复重新批准无关项目 |
| 图片单独能打开，卡片显示占位图 | 外站防引用、权限/有效期、图片直链、是否部署了本地新文件 | 在正式页面复现；换有授权的可靠图源或保存有来源记录的图片随站部署 |
| 评论/点赞没立即更新 | 正式关联的 Issue、标签、小时同步是否运行 | Actions → Review and update project catalog → Run workflow，选择 `main`。不要手改快照伪造数字 |
| L2 奖励列表没有某项目 | `activity`、L2 产品、`issueNumber` 是否满足已批准投稿条件 | 普通收录/尚未批准项目不在列表；按实际投稿流程处理，不给整理收录项目编一个 Issue 编号 |
| 作者没收到审批邮件 | 是否启用、是否提交了加密联系信息，或是否真的发出私有邮件 | 当前关闭时按人工邮件跟进；启用后检查 `notify` job 和邮件服务记录，目录部署成功不代表邮件送达 |
| 邮件提示 `NOTIFICATION_REQUIRES_RECONCILIATION` | 邮件服务是否已经投递、pending 记录是否超时或内容已改 | 按邮件设置文档核对投递后再处理；不要清空发送台账来强制重发 |
| 想回退误改 | 本次 PR 涉及的文件、合并后的其他内容更新 | 对误改创建 Revert PR，检查差异并重新发布；不要 force push `main` 或整仓回到旧版 |

回退自动目录提交时，技术维护人应只撤销错误条目/字段，保留之后新增的项目和互动记录。涉及优惠规则、联系地址等对外信息的误改，优先修正或回退并通知活动负责人。

## 9. 维护记录与交接完成标准

日常内容变更的长期记录是 **Issue + PR + Actions 运行**，不只保存在聊天记录或个人电脑里。用下面的格式在 PR 或不含私人信息的工作记录里留痕：

```text
日期：
经办 / 核对人：
项目 ID 或页面：
Issue / PR：
变更原因与来源：
内容及桌面/手机检查结果：
部署运行及正式页面：
遗留事项 / 下一位负责人：
```

交接完成前确认：

- [ ] 主维护人和备份已获得所需权限，能使用自己的账号完成日常工作。
- [ ] 待审项目、未解决故障、未发放奖励都有去向，内部台账归团队所有。
- [ ] 正式仓库、Pages 来源和三个 workflow 的职责已经讲清楚。
- [ ] 同事了解当前邮件未启用，以及公开 Issue 与私有联系资料的边界。
- [ ] Git 历史、团队内部台账、外部服务账户和（如果未来启用）邮件私钥有各自的保管责任人；私钥不放公开仓库。
- [ ] 本 SOP 与 README 已更新；涉及邮件实现时同时维护 [APPROVAL_EMAIL_SETUP.md](APPROVAL_EMAIL_SETUP.md)。

本 SOP 是维护流程，不替代上游固件的安装文档或活动负责人对新奖励规则的批准。修改工作流、权限策略或奖励流程后，应在同一 PR 更新相应操作说明。
