# 组件总览

fang UI 是一套基于 Vue 3 的企业级 UI 组件库。

## 组件列表

### 基础组件

- [Button 按钮](/components/button) - 常用的操作按钮

## 即将推出

更多组件正在开发中，敬请期待...

## 使用方式

### 完整引入

```typescript
import { createApp } from 'vue'
import FangUI from '@fang-common/ui'
import App from './App.vue'

const app = createApp(App)
app.use(FangUI)
app.mount('#app')
```

### 按需引入（推荐）

```vue
<script setup>
import { Button } from '@fang-common/ui'
</script>

<template>
  <Button>点击我</Button>
</template>
```

## 特性

- 🎨 精美的设计
- 📦 开箱即用
- 🔧 TypeScript 支持
- ⚡️ 按需加载
- 🌍 国际化支持
