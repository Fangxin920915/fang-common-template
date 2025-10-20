# 快速开始

## 前置要求

- Node.js >= 18
- pnpm >= 8

## 克隆项目

```bash
git clone https://github.com/your-org/fang-common.git
cd fang-common
```

## 安装依赖

```bash
pnpm install
```

## 开发

### 启动文档站点

```bash
pnpm doc:dev
```

## 构建

### 构建所有包

```bash
pnpm build
```

### 构建文档

```bash
cd docs
pnpm build
```

### 发布文档

```bash
cd docs/.vitepress/
1.docker build -t fang-common-docs .
2.docker tag fang-common-docs 你的私有仓库地址/fang-commom-docs:v0.0.1
3.docker push 你的私有仓库地址/fang-commom-docs:v0.0.1
```

## 在项目中使用

### 安装组件库

```bash
pnpm add @fang/ui
```

### 使用组件

```vue
<script setup>
import { Button } from '@fang/ui'
</script>

<template>
  <Button>点击我</Button>
</template>
```

### 使用工具函数

```typescript
import { hello, random } from '@fang/utils'

hello('World') // 弹出 "Hello World!"
random(1, 10) // 返回 1-10 之间的随机数
```
