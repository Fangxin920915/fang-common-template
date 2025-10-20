# 文档目录结构说明

## 📁 目录结构

```
docs/
├── .vitepress/           # VitePress 配置
│   ├── config.ts         # 主配置文件
│   ├── plugins/          # Markdown 插件
│   │   └── demo-container.ts  # 示例容器插件
│   └── theme/            # 主题配置
│       ├── index.ts      # 主题入口
│       ├── components/   # 主题组件
│       └── custom.css    # 自定义样式
├── components/           # 组件文档和示例
│   ├── button/           # Button 组件
│   │   └── basic.vue     # 基础示例
│   ├── button.md         # Button 文档
│   └── index.md          # 组件总览
├── guide/                # 指南文档
│   ├── index.md          # 介绍
│   ├── getting-started.md # 快速开始
│   └── installation.md   # 安装说明
├── utils/                # 工具函数文档
│   ├── index.md          # 工具总览
│   └── common.md         # 通用工具
├── public/               # 静态资源
└── index.md              # 首页
```

## 🎯 组件文档规范

### 文档结构

每个组件包含：

1. **文档文件** (`component-name.md`) - 组件说明和 API 文档
2. **示例目录** (`component-name/`) - 包含所有示例的 .vue 文件

### 示例

```
components/
├── button/
│   ├── basic.vue         # 基础用法
│   ├── types.vue         # 不同类型
│   └── sizes.vue         # 不同尺寸
└── button.md             # 文档
```

### 在文档中引用示例

在 Markdown 文档中使用 `:::demo` 语法：

```markdown
## 基础用法

:::demo 使用描述
button/basic
:::
```

插件会自动：

1. 从 `components/button/basic.vue` 读取源代码
2. 渲染组件示例
3. 显示源代码

## 🚀 开发命令

```bash
# 启动开发服务器
pnpm doc:dev

# 构建文档
pnpm --filter @fang-common/docs build

# 预览构建结果
pnpm --filter @fang-common/docs preview
```

## ✨ 添加新组件文档

1. 在 `components/` 下创建组件文档：

   ```bash
   # 创建文档文件
   touch docs/components/input.md

   # 创建示例目录
   mkdir docs/components/input

   # 创建示例文件
   touch docs/components/input/basic.vue
   ```

2. 更新 `.vitepress/config.ts` 的侧边栏配置：

   ```ts
   sidebar: {
     '/components/': [
       {
         text: '组件',
         items: [
           { text: '组件总览', link: '/components/' },
           { text: 'Button 按钮', link: '/components/button' },
           { text: 'Input 输入框', link: '/components/input' }, // 新增
         ],
       },
     ],
   }
   ```

3. 编写组件文档和示例

4. 文档会自动热更新

## 📝 注意事项

- 所有组件示例都必须是 `.vue` 文件
- 示例文件名使用 kebab-case（例如：`basic-usage.vue`）
- 文档引用示例时不需要 `.vue` 扩展名
- 插件会自动处理路径和组件注册

### 部署

```bash
pnpm build

1.docker build -t fang-common-docs . // 构建镜像
2.docker tag fang-common-docs 你的私有仓库地址/fang-commom-docs:v0.0.1 // 打标签
3.docker push 你的私有仓库地址/fang-commom-docs:v0.0.1 // 推送镜像
```
