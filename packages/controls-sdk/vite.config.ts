import { generateConfig } from '../../build/build.config'

export default generateConfig({
  name: 'fangUtils',
  external: ['lodash-es', 'mqtt'],
  globals: {
    'lodash-es': 'LodashEs',
    mqtt: 'Mqtt',
  },
  preserveModules: false,
})
