import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import demoContainer from './plugins/demo-container'

export default defineConfig({
  title: 'fang Common',
  description: 'fang 前端通用组件库和工具集',
  base: '/',
  markdown: {
    config: md => {
      md.use(demoContainer)
    },
  },

  vite: {
    server: {
      host: '0.0.0.0',
      port: 5050,
      strictPort: false,
    },
    resolve: {
      alias: {
        '@fang-common/ui': resolve(__dirname, '../../packages/ui/src'),
        '@fang-common/utils': resolve(__dirname, '../../packages/utils/src'),
        '@fang-common/shared': resolve(__dirname, '../../packages/shared/src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
        {
          text: '开发指南',
          items: [{ text: '版本发布', link: '/guide/release' }],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '组件总览', link: '/components/' },
            { text: 'Button 按钮', link: '/components/button' },
          ],
        },
      ],
      '/controls-sdk/': [
        {
          text: '开始',
          items: [{ text: '飞控SDK总览', link: '/controls-sdk/' }],
        },
      ],
      '/utils/': [
        {
          text: '工具函数',
          items: [
            { text: '工具总览', link: '/utils/' },
            { text: '通用工具', link: '/utils/common' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/your-org/fang-common' }],
    search: {
      provider: 'local',
    },
  },
})
