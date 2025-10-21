import vue from '@vitejs/plugin-vue'
import { type UserConfig } from 'vite'
import dts from 'vite-plugin-dts'

/**
 * 构建配置选项
 */
interface BuildOptions {
  name?: string // 库名称（UMD 格式使用）
  entry?: string // 入口文件路径
  external?: string[] // 外部依赖（不打包）
  globals?: Record<string, string> // UMD 格式的全局变量映射
  preserveModules?: boolean // 是否保留模块结构（ES 格式）
}

/**
 * 通用的 Vite 开发服务器配置
 */
const commonServerConfig = {
  host: '0.0.0.0', // 监听所有网络接口
  strictPort: false, // 端口被占用时自动尝试下一个可用端口
}

/**
 * 生成 Vue 组件库的构建配置
 * 用于打包 Vue 组件，生成单文件 ES 和 UMD 格式
 */
export function generateVueConfig(options: BuildOptions = {}): UserConfig {
  const {
    name = 'Library',
    entry = './src/index.ts',
    external = [],
    globals = {},
  } = options

  return {
    server: commonServerConfig,
    plugins: [
      vue(), // Vue 3 单文件组件支持
      dts({
        tsconfigPath: './tsconfig.build.json', // TypeScript 配置文件
        outDir: 'dist', // 类型声明文件输出目录
        cleanVueFileName: true, // 清理 Vue 文件名
        copyDtsFiles: true, // 复制已存在的 .d.ts 文件
        rollupTypes: true, // 合并所有类型声明为单个文件
      }),
    ],
    build: {
      lib: {
        entry, // 入口文件
        name, // 库的全局变量名（UMD 格式）
        formats: ['es', 'umd'], // 输出格式：ES Module 和 UMD
        fileName: format => `index.${format === 'es' ? 'js' : 'umd.js'}`, // 文件名规则
      },
      rollupOptions: {
        external: ['vue', ...external], // 不打包 Vue 和其他外部依赖
        output: {
          globals: {
            vue: 'Vue', // Vue 的全局变量名
            ...globals,
          },
          exports: 'named', // 使用命名导出
          assetFileNames: assetInfo => {
            if (assetInfo.name?.endsWith('.css')) return 'index.css' // CSS 文件统一命名
            return assetInfo.name || ''
          },
        },
      },
      cssCodeSplit: false, // 不分割 CSS
      outDir: 'dist', // 输出目录
    },
  }
}

/**
 * 生成普通库的构建配置
 * 支持保留模块结构（tree-shaking 友好）或单文件打包
 */
export function generateConfig(options: BuildOptions = {}): UserConfig {
  const {
    name = 'Library',
    entry = './src/index.ts',
    external = [],
    globals = {},
    preserveModules = true, // 默认保留模块结构
  } = options

  if (!preserveModules) {
    // 单文件模式：所有代码打包成一个文件
    return {
      server: commonServerConfig,
      plugins: [
        dts({
          tsconfigPath: './tsconfig.build.json', // TypeScript 配置
          outDir: 'dist', // 类型声明输出目录
          copyDtsFiles: true, // 复制已存在的 .d.ts 文件
          rollupTypes: true, // 合并类型声明
        }),
      ],
      build: {
        lib: {
          entry,
          name,
          formats: ['es', 'umd'], // ES 和 UMD 格式
          fileName: format => `index.${format === 'es' ? 'js' : 'umd.js'}`,
        },
        rollupOptions: {
          external, // 外部依赖
          output: {
            globals, // UMD 全局变量映射
            exports: 'named', // 命名导出
          },
        },
        outDir: 'dist',
      },
    }
  }

  // 保留模块结构模式：每个源文件对应一个输出文件，支持 tree-shaking
  return {
    server: commonServerConfig,
    plugins: [
      dts({
        tsconfigPath: './tsconfig.build.json', // TypeScript 配置
        outDir: 'dist/es', // 类型声明输出到 ES 目录
        copyDtsFiles: false, // 不复制文件，而是生成新的
        rollupTypes: false, // 不合并类型声明，保持模块结构
        entryRoot: 'src', // 源码根目录
        insertTypesEntry: true, // 自动插入 types 入口
        include: ['src/**/*'], // 包含所有源文件
      }),
    ],
    build: {
      lib: {
        entry, // 入口文件
        name, // UMD 格式的全局变量名
        formats: ['es', 'umd'], // 输出 ES 和 UMD 两种格式
      },
      rollupOptions: {
        external, // 不打包的外部依赖
        output: [
          // ES 格式：保留模块结构，支持按需引入
          {
            format: 'es',
            dir: 'dist/es', // 输出到 dist/es 目录
            entryFileNames: '[name].mjs', // 文件名保持原样，扩展名 .mjs
            preserveModules: true, // 保留模块结构
            preserveModulesRoot: 'src', // 保留的根目录
            exports: 'named', // 命名导出
          },
          // UMD 格式：单文件打包，用于浏览器直接引入
          {
            format: 'umd',
            dir: 'dist/umd', // 输出到 dist/umd 目录
            entryFileNames: `${name.toLowerCase()}.umd.js`, // 单个 UMD 文件
            name, // 全局变量名
            globals, // 外部依赖的全局变量映射
            exports: 'named', // 命名导出
          },
        ],
      },
    },
  }
}
