# 安装

## 环境准备

确保你的开发环境满足以下要求：

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0

## 安装 pnpm

如果还没有安装 pnpm，可以通过以下命令安装：

```bash
npm install -g pnpm
```

## 使用 pnpm workspace

本项目采用 pnpm workspace 管理 Monorepo，所有依赖统一在根目录安装：

```bash
# 在项目根目录执行
pnpm install
```

## 包管理

### 安装依赖到根目录

```bash
pnpm add -Dw <package-name>
```

### 安装依赖到特定包

```bash
pnpm add <package-name> --filter @fang/ui
```

### 安装 workspace 内部依赖

在 `package.json` 中使用 `workspace:` 协议：

```json
{
  "dependencies": {
    "@fang/utils": "workspace:^"
  }
}
```

## 开发工具

推荐使用以下开发工具：

- **VS Code** - 代码编辑器
- **Volar** - Vue 3 语言支持
- **ESLint** - 代码检查
- **Prettier** - 代码格式化

## VS Code 配置

项目已经包含了 `.vscode/settings.json` 配置，克隆项目后会自动生效。
