import { generateConfig } from '../../build/build.config'

export default generateConfig({
  name: 'FangUtils',
  external: ['lodash-es'],
  globals: {
    'lodash-es': 'LodashEs',
  },
})
