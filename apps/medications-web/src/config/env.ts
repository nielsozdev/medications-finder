const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? ''
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? ''
const indexName = 'medication_finder_index'

export const ENV = {
  appId,
  apiKey,
  indexName,
}
