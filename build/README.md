# Build 配置包

统一管理所有包的 Vite 构建配置。

## 📦 功能

提供两个配置生成函数：

1. **generateVueConfig** - Vue 组件库配置
2. **generateConfig** - 普通库配置

## 🔧 通用配置

所有包自动包含以下配置：

```typescript
{
  server: {
    host: '0.0.0.0',    // 允许 IP 访问
    strictPort: false,  // 端口被占用时自动切换
  }
}
```

## 📝 使用方式

### Vue 组件库（fang-ui）

```typescript
// packages/fang-ui/vite.config.ts
import { generateVueConfig } from '../../build/build.config'

export default generateVueConfig({
  name: 'FangUi',
  entry: './src/index.ts',
  external: ['@fang-common/utils', '@fang-common/shared'],
  globals: {
    '@fang-common/utils': 'FangUtils',
    '@fang-common/shared': 'FangShared',
  },
})
```

### 普通库（fang-utils, fang-shared）

```typescript
// packages/fang-utils/vite.config.ts
import { generateConfig } from '../../build/build.config'

export default generateConfig({
  name: 'FangUtils',
  entry: './src/index.ts',
  external: ['lodash-es'],
  globals: {
    'lodash-es': 'LodashEs',
  },
})
```

## ✨ 优势

### 之前（每个包重复配置）

```typescript
// 每个包都要写
import { defineConfig } from 'vite'
import { generateConfig } from '../../build/build.config'

export default defineConfig(() =>
  generateConfig({
    // 配置...
  }),
)
```

### 现在（简洁配置）

```typescript
// 直接使用，无需 defineConfig
import { generateConfig } from '../../build/build.config'

export default generateConfig({
  // 只写差异化配置
})
```

**代码减少**: 从 5 行减少到 2 行

## 🎯 配置选项

```typescript
interface BuildOptions {
  name?: string              // 库名称（UMD 格式使用）
  entry?: string             // 入口文件，默认 './src/index.ts'
  external?: string[]        // 外部依赖
  globals?: Record<string, string>  // UMD 全局变量映射
  preserveModules?: boolean  // 是否保留模块结构，默认 true
}
```

## 📊 输出格式

### 保留模块结构（默认）

```
dist/
├── es/                    # ESM 格式
│   ├── index.mjs
│   ├── utils.mjs
│   └── *.d.ts
└── umd/                   # UMD 格式
    └── packagename.umd.js
```

### 单文件模式

设置 `preserveModules: false`

```
dist/
├── index.js              # ESM 格式
├── index.umd.js          # UMD 格式
└── index.d.ts            # 类型定义
```

## 🔄 更新日志

- v1.0.0: 初始版本
- v1.2.0: 添加统一的 server 配置

