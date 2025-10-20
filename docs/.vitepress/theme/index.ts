/// <reference types="vite/client" />
import DefaultTheme from 'vitepress/theme'
import Demo from './components/Demo.vue'
import DemoBlock from './components/DemoBlock.vue'
import './custom.css'

// 自动导入所有示例组件
const modules = import.meta.glob('../../components/**/*.vue', { eager: true })
const components: Record<string, any> = {}

for (const path in modules) {
  const componentName = path
    .replace(/^.*\/components\//, '')
    .replace(/\.vue$/, '')
    .replace(/\//g, '-')
  components[componentName] = (modules[path] as any).default
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FangDemo', Demo)
    app.component('DemoBlock', DemoBlock)

    // 注册所有示例组件
    Object.keys(components).forEach(key => {
      app.component(key, components[key])
    })
  },
}
