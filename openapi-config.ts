import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'http://172.16.55.161/Customer.json',
  apiFile: 'libs/redux/services/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFiles: {
    'libs/redux/services/edit.ts': {
      filterEndpoints: [/edit/i],
      exportName: 'editApi',
    },
  },
  tag: true,
  hooks: { queries: true, lazyQueries: true, mutations: true },
}

export default config
