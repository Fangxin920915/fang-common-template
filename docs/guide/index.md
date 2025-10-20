# 介绍

## Fang Common 是什么？

Fang Common 是一个基于 Vue 3 + TypeScript + Vite 的企业级前端通用库，采用 Monorepo 架构管理多个相关包。

## 特性

- 🎨 **Vue 3 组件库** - 提供丰富的 UI 组件
- 🛠️ **工具函数集** - 常用工具函数和辅助方法
- 📦 **Monorepo 架构** - pnpm workspace 管理
- 🔧 **TypeScript** - 完整的类型定义
- ⚡️ **Vite 构建** - 快速的开发和构建体验
- 📝 **完善文档** - 详细的使用文档和示例

## 包结构

```
fang-common/
├── packages/
│   ├── fang-ui/          # Vue 3 组件库
│   ├── fang-utils/       # 工具函数库
│   └── fang-shared/      # 共享模块
├── demo/                # 演示应用
├── docs/                # 文档站点
└── build/               # 构建配置
```

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - JavaScript 的超集
- **Vite** - 下一代前端构建工具
- **pnpm** - 快速、节省磁盘空间的包管理器
- **VitePress** - Vue 驱动的静态站点生成器
