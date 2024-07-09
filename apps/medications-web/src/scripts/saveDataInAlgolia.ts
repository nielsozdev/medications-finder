import fs from 'node:fs/promises'

import algoliasearch from 'algoliasearch'
import 'dotenv/config'

import { clog } from '@noz/utils'

interface Medication {
  concentration: string
  fractions: number
  id: string
  name: string
}

(async function () {
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID ?? '' as string
  const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY ?? '' as string
  const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME ?? '' as string

  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY)
  const index = client.initIndex(ALGOLIA_INDEX_NAME)

  const content = await fs.readFile('./src/data/medications.json', 'utf-8')
  const data = JSON.parse(content) as Medication[]

  const medications = data.map((item) => ({
    objectID: item.id,
    name: item.name,
    concentration: item.concentration,
    fractions: item.fractions,
  }))

  index.saveObjects(medications)
    .then((objectIDs) => {
      clog.info({ objectIDs })
    }).catch((error) => {
      console.error(error)
    })
}())
