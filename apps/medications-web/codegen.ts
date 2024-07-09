import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: '../../servers/medications-api/src/schemas/*.graphql',
  documents: ['src/graphql/**/*.{ts,tsx,js,jsx,graphql}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
    },
  },
  watch: true,
}

export default config
