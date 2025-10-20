import { generateVueConfig } from '../../build/build.config'

export default generateVueConfig({
  name: 'FangUi',
  external: ['@fang-common/utils', '@fang-common/shared'],
  globals: {
    '@fang-common/utils': 'FangUtils',
    '@fang-common/shared': 'FangShared',
  },
})
