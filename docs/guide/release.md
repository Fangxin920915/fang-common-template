# 版本发布指南

本项目使用 [Changeset](https://github.com/changesets/changesets) 进行版本管理。

## 🚀 快速发布

```bash
# 1. 添加变更记录并更新版本号
pnpm uv

# 2. 发布到私有仓库
pnpm publish:all
```

## 📋 Changeset 命令

| 命令                     | 说明                 |
| ------------------------ | -------------------- |
| `pnpm uv`                | 添加变更并更新版本   |
| `pnpm changeset add`     | 添加变更记录         |
| `pnpm changeset version` | 更新版本号           |
| `pnpm changeset publish` | 发布到 NPM           |
| `pnpm changeset status`  | 查看发布状态         |
| `pnpm publish:all`       | 发布所有包到私有仓库 |

## 📝 Commit 规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

### Commit 类型

| Type       | Emoji | 说明     | Changelog | 版本  |
| ---------- | ----- | -------- | --------- | ----- |
| `feat`     | ✨    | 新功能   | ✅        | minor |
| `fix`      | 🐛    | Bug 修复 | ✅        | patch |
| `perf`     | ⚡    | 性能优化 | ✅        | patch |
| `refactor` | ♻️    | 代码重构 | ✅        | -     |
| `docs`     | 📝    | 文档更新 | ✅        | -     |
| `style`    | 💄    | 代码格式 | ✅        | -     |
| `test`     | ✅    | 测试相关 | ✅        | -     |
| `build`    | 👷    | 构建系统 | ✅        | -     |
| `ci`       | 🔧    | CI 配置  | ✅        | -     |
| `chore`    | 🔨    | 其他修改 | ✅        | -     |

### 提交示例

```bash
# 使用交互式提交（推荐）
pnpm commit

# 手动编写 commit message
git commit -m "feat(button): add loading state"
git commit -m "fix(input): resolve input value bug"
git commit -m "perf(utils): optimize array processing"
git commit -m "docs(readme): update installation guide"
```

### 破坏性更新

```bash
git commit -m "feat(api): change response format

BREAKING CHANGE: response format changed from array to object"
```

## 🔄 完整发布流程

### 1️⃣ 添加变更记录

```bash
pnpm uv  # 或 pnpm changeset add
```

**Changeset 交互流程（中英对照）：**

| 英文提示                                      | 中文说明               | 操作方法            |
| --------------------------------------------- | ---------------------- | ------------------- |
| `Which packages would you like to include?`   | 选择要更新的包         | 空格选择，回车确认  |
| `Which packages should have a major bump?`    | 选择主版本更新 (Major) | 破坏性变更选这个    |
| `Which packages should have a minor bump?`    | 选择次版本更新 (Minor) | 新功能选这个        |
| `The following packages will be patch bumped` | 补丁版本更新 (Patch)   | Bug修复会自动归这里 |
| `Please enter a summary for this change`      | 输入变更说明           | 可以用中文描述      |
| `Is this your desired changeset? (Y/n)`       | 确认变更               | 输入 Y 或回车       |

**完整示例：**

```bash
🦋 Which packages would you like to include?
   → 选择: @fang-common/controls-sdk (空格选中)

🦋 Which packages should have a major bump?
   → 跳过 (不是破坏性变更)

🦋 Which packages should have a minor bump?
   → 跳过 (不是新功能)

🦋 The following packages will be patch bumped:
   @fang-common/controls-sdk@1.0.10

🦋 Summary » 修复控制SDK的连接问题

🦋 Is this your desired changeset? (Y/n) » Y
```

**自动执行：**

- ✅ 更新 package.json 版本号
- ✅ 生成 CHANGELOG.md

### 2️⃣ 构建项目

```bash
pnpm build
```

**Turbo 会自动：**

- ✅ 并行构建所有包
- ✅ 使用缓存加速构建
- ✅ 处理包之间的依赖关系

### 3️⃣ 发布到私有仓库

```bash
pnpm publish:all
```

**会发布以下包：**

- `@fang-common/ui`
- `@fang-common/utils`
- `@fang-common/shared`
- `@fang-common/controls-sdk`

## 🎯 版本策略

### 语义化版本（SemVer）

格式：`主版本.次版本.补丁版本` (例如：`1.2.3`)

- **主版本（Major）**: 不兼容的 API 修改
- **次版本（Minor）**: 向后兼容的新功能
- **补丁版本（Patch）**: 向后兼容的 bug 修复

### 版本类型说明

| 类型  | 说明                  | 版本变化      | 使用场景   |
| ----- | --------------------- | ------------- | ---------- |
| Major | 💥 不兼容的 API 变更  | 1.0.0 → 2.0.0 | 破坏性更新 |
| Minor | ✨ 向后兼容的新功能   | 1.0.0 → 1.1.0 | 功能新增   |
| Patch | 🐛 向后兼容的问题修正 | 1.0.0 → 1.0.1 | Bug 修复   |

### 预发布版本

```bash
# 进入预发布模式
pnpm changeset pre enter alpha  # 或 beta

# 添加变更并发布
pnpm changeset add
pnpm changeset version  # 生成 1.0.0-alpha.0
pnpm build
pnpm changeset publish

# 退出预发布模式
pnpm changeset pre exit
```

## 📊 CHANGELOG 格式

生成的 `CHANGELOG.md` 示例：

```markdown
# 更新日志

本项目的所有重要变更都将记录在此文件中。

## [1.1.0] (2025-10-16)

### ✨ 新功能

- **button**: 添加 loading 状态 ([abc1234](link))
- **input**: 添加清除按钮 ([def5678](link))

### 🐛 Bug 修复

- **utils**: 修复日期格式问题 ([ghi9012](link))

### 📝 文档更新

- 更新 README ([jkl3456](link))
```

## ⚠️ 注意事项

### 发布前检查

```bash
# 检查当前版本
cat package.json | grep version

# 检查未提交的文件
git status

# 检查当前分支
git branch --show-current
```

### 版本同步

所有子包（`@fang-common/ui`、`@fang-common/utils`、`@fang-common/shared`）使用**统一的版本号**。

### Git 标签

- 使用 `v` 前缀（例如：`v1.0.0`）
- 严格遵循 [语义化版本](https://semver.org/)

## 🔧 配置文件

### .changeset/config.json

Changeset 的配置文件，定义了：

```json
{
  "changelog": "@changesets/cli/changelog",
  "access": "public",
  "baseBranch": "master",
  "updateInternalDependencies": "patch",
  "ignore": ["@fang-common/docs", "@fang-common/build-config"]
}
```

- `baseBranch`: 主分支名称
- `access`: 发布访问级别（public/restricted）
- `ignore`: 忽略不需要发布的包
- `updateInternalDependencies`: 内部依赖更新策略

### commitlint.config.js

Commit message 校验规则，确保提交信息符合 Conventional Commits 规范。

## 🆘 常见问题

### 查看将要发布什么？

```bash
# 查看当前状态
pnpm changeset status

# 预览版本更新（不实际执行）
pnpm changeset version --dry-run
```

### 如何添加依赖？

```bash
# 在特定包中添加依赖
pnpm add <package-name> --filter @fang-common/ui
```

### 发布到哪个仓库？

私有仓库：`你的私有仓库地址`

已在各包的 `publishConfig` 中配置。

## 📚 参考资源

- [Changesets 文档](https://github.com/changesets/changesets)
- [Conventional Commits 规范](https://www.conventionalcommits.org/)
- [语义化版本 SemVer](https://semver.org/)
- [Commitizen 工具](https://github.com/commitizen/cz-cli)
- [Turborepo 文档](https://turbo.build/repo/docs)
