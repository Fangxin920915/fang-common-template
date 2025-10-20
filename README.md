# Fang Common

基于 Turborepo + pnpm workspace 的 Monorepo 项目，包含 UI 组件库、工具函数库、飞控SDK 和文档站点。

## 📦 包列表

- `@fang-common/shared` - 共享工具库
- `@fang-common/utils` - 工具函数库
- `@fang-common/ui` - UI 组件库
- `@fang-common/controls-sdk` - 飞控SDK
- `.....` - 更多包

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建项目

```bash
pnpm build
```

## 📝 开发命令

### 代码检查

| 命令                  | 说明                                              |
| --------------------- | ------------------------------------------------- |
| `pnpm lint`           | 运行 ESLint 检查所有包的代码                      |
| `pnpm lint:fix`       | 自动修复 ESLint 问题                              |
| `pnpm lint:style`     | 运行 Stylelint 检查样式文件                       |
| `pnpm lint:style:fix` | 自动修复 Stylelint 问题                           |
| `pnpm format`         | 使用 Prettier 格式化代码                          |
| `pnpm format:check`   | 检查代码格式是否符合 Prettier 规范                |
| `pnpm lint:all`       | 运行所有代码检查（ESLint + Stylelint）            |
| `pnpm fix:all`        | 自动修复所有问题（ESLint + Stylelint + Prettier） |

### 构建和清理

| 命令               | 说明                                |
| ------------------ | ----------------------------------- |
| `pnpm build`       | 使用 Turbo 构建所有包（支持缓存）   |
| `pnpm clean`       | 清理所有包的构建产物                |
| `pnpm clean:cache` | 清理 Turborepo 和 node_modules 缓存 |

### 文档开发

| 命令           | 说明               |
| -------------- | ------------------ |
| `pnpm doc:dev` | 启动文档开发服务器 |

### 代码提交

```bash
git add .
pnpm commit  # 使用 Commitizen 交互式提交（自动校验格式）
```

## 📦 版本发布流程

### 发布命令

| 命令               | 说明                     |
| ------------------ | ------------------------ |
| `pnpm uv`          | 添加变更记录并更新版本号 |
| `pnpm publish:all` | 发布所有包到私有仓库     |
| `pnpm push`        | 推送代码和标签到远程仓库 |

---

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

自动执行：更新 package.json 版本号 + 生成 CHANGELOG

### 2️⃣ 发布到私有仓库

```bash
pnpm publish:all    # 发布到私有仓库
```

### 📋 版本类型说明

| 类型  | 说明                  | 版本变化      | 使用场景   |
| ----- | --------------------- | ------------- | ---------- |
| Major | 💥 不兼容的 API 变更  | 1.0.0 → 2.0.0 | 破坏性更新 |
| Minor | ✨ 向后兼容的新功能   | 1.0.0 → 1.1.0 | 功能新增   |
| Patch | 🐛 向后兼容的问题修正 | 1.0.0 → 1.0.1 | Bug 修复   |

## 🆘 常见问题

**Q: 如何添加依赖？**

```bash
pnpm add <package-name> --filter @fang-common/ui
```

**Q: 查看将要发布什么？**

```bash
pnpm changeset status
```

**Q: 发布到哪个仓库？**
