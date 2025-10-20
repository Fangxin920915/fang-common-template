import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  // 基础 JavaScript 推荐配置
  js.configs.recommended,

  // Vue 3 推荐配置
  ...vue.configs['flat/recommended'],

  // 全局配置
  {
    files: ['**/*.{js,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js 全局变量
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // 浏览器全局变量
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        alert: 'readonly',
        setTimeout: false,
        clearTimeout: false,
        setInterval: false,
        clearInterval: false,
      },
    },
    rules: {
      // 通用规则
      'no-console': 'off',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // 由 TypeScript 插件处理
      'prefer-const': 'error',
      'no-var': 'error',
      // 代码风格
      indent: 'off', // 由 Prettier 处理缩进
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      // 空行规则 - 最多允许 1 个连续空行
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'padded-blocks': ['error', 'never'],
    },
  },

  // TypeScript 文件配置
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript 特定规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Vue 文件配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsparser,
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Vue 特定规则
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',
      'vue/no-multiple-template-root': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      // TypeScript 规则在 Vue 文件中
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      // 空行规则 - 最多允许 1 个连续空行
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'padded-blocks': ['error', 'never'],
    },
  },

  // 忽略文件
  {
    ignores: [
      // 依赖
      'node_modules/**',
      '**/node_modules/**',
      // 构建产物
      '**/dist/**',
      // '**/build/**',
      '**/.vitepress/dist/**',
      '**/.vitepress/cache/**',
      '**/*.min.js',
      '**/*.min.css',
      // Turbo 缓存
      '**/.turbo/**',
      '.turbo/**',
      // 测试覆盖率
      'coverage/**',
      '**/coverage/**',
      // 编辑器
      '.vscode/**',
      '.idea/**',
      // 日志
      '**/*.log',
      // 锁文件
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      // Git
      '.git/**',
      // 临时文件
      '**/*.tmp',
      '.cache/**',
      '**/.cache/**',
    ],
  },

  // Prettier 配置 - 必须放在最后，用于关闭与 Prettier 冲突的规则
  prettierConfig,

  // 重新启用某些格式规则，让 ESLint 能够检测格式错误
  {
    files: ['**/*.{js,ts,tsx,vue}'],
    rules: {
      // 重新启用格式规则，即使 Prettier 会处理它们
      // 这样可以在编辑器中看到错误提示
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      indent: 'off', // 由 Prettier 处理缩进
    },
  },
])
