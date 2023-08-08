import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'http://172.31.255.15:9990/v3/api-docs',
  apiFile: 'libs/redux/services/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFiles: {
    'libs/redux/services/pickup.ts': {
      filterEndpoints: (_, op) => op.path.includes('driver/pickup'),
      exportName: 'pickupApi',
    },
  },
  tag: true,
  hooks: { queries: true, lazyQueries: true, mutations: true },
}

export default config
