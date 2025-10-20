---
layout: home

hero:
  name: 'fang Common'
  text: ''
  tagline: 企业级前端通用组件库和工具集
  image:
    src: /logo.svg
    alt: fang Common
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 组件总览
      link: /components/
    - theme: alt
      text: 飞控SDK
      link: /controls-sdk/

features:
  - icon:
      src: /icons/vue.svg
    title: Vue 3 组件库
    details: 基于 Vue 3 Composition API 开发，提供丰富且高质量的 UI 组件，开箱即用
    link: /components/
    linkText: 查看组件
  - icon:
      src: /icons/typescript.svg
    title: TypeScript 优先
    details: 完整的类型定义和智能提示，提供一流的开发体验和类型安全保障
  - icon:
      src: /icons/vite.svg
    title: Vite & Turborepo
    details: 使用 Vite 极速构建，Turborepo 智能缓存，构建速度提升 19 倍
  - icon:
      src: /icons/tools.svg
    title: 工具函数集
    details: 提供常用的工具函数和辅助方法，经过充分测试，提高开发效率
    link: /utils/
    linkText: 查看工具
  - icon:
      src: /icons/monorepo.svg
    title: Monorepo 架构
    details: 使用 pnpm workspace + Turborepo 管理，支持多包开发和发布
  - icon:
      src: /icons/docs.svg
    title: 完善的文档
    details: 详细的文档和交互式示例，帮助你快速上手并深入了解每个功能
    link: /guide/
    linkText: 阅读指南
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
