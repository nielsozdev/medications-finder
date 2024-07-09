import { type Page } from 'playwright'

import { getDataFromRow } from '@noz/scrapers-helpers/src/getDataFromRow'

import { type Selectors } from '~/constants/selectors'

export async function getColumnsData (page: Page, { selectors }: { selectors: Selectors }) {
  const { tableColumnsSelector } = selectors

  const columnTitles = await getDataFromRow(page, {
    selector: tableColumnsSelector,
  })

  return columnTitles
}
