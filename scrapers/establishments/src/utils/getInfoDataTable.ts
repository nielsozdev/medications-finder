import { type Page } from 'playwright'

import { type Selectors } from '~/constants/selectors'

const rowsPerPage = 25

export async function getInfoDataTable (page: Page, { selectors }: { selectors: Selectors }) {
  const {
    resultsSelector,
    tableRowsSelector,
    totalRowsInEstablishmentSelector,
  } = selectors

  await page.waitForLoadState('networkidle')
  await page.waitForSelector(resultsSelector, { state: 'visible' })

  const totalRowsInEstablishments = Number(await page.locator(totalRowsInEstablishmentSelector).textContent())
  const rowsInPage = (await page.locator(tableRowsSelector).all()).length

  const maxPages = Math.ceil(totalRowsInEstablishments / rowsPerPage)

  console.info(`Total de establecimientos: ${totalRowsInEstablishments}`)
  console.info(`Establecimientos por página: ${rowsInPage}`)
  console.info(`Páginas totales: ${maxPages}`)

  return {
    totalRowsInEstablishments,
    rowsPerPage,
    maxPages,
    rowsInPage,
  }
}
