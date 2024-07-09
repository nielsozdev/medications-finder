
import { type Page } from 'playwright'

import { getDataFromRows } from '@noz/scrapers-helpers/src/getDataFromRows'
import { pressButtonNext } from '@noz/scrapers-utils'

export async function getRowsData (page: Page, {
  categoryName,
  columns,
  combinationIndex,
  estabishmentName,
  maxPages,
  modalDataExtracter,
  rowsInPage,
  selectors,
  totalRegistersToExtract,
}: {
  categoryName: string
  columns: any
  combinationIndex: string
  estabishmentName: string
  maxPages: number
  modalDataExtracter: any
  rowsInPage: number
  selectors: any
  totalRegistersToExtract: number
}) {
  const { resultsSelector, tableRowsSelector } = selectors

  try {
    let currentPage = 1

    const results: any = []

    do {
      await page.waitForSelector(resultsSelector, { state: 'visible' })

      const rows = await page.locator(tableRowsSelector).all()

      if (rowsInPage <= 0) {
        console.log('❌ No hay datos para extraer')
        break
      }

      console.log(`⚡Obteniendo ${rowsInPage} registros de la página ${currentPage}/${maxPages} ${':'} - ${estabishmentName} - ${categoryName} - Establecimiento N° ${parseInt(combinationIndex) + 1}/${totalRegistersToExtract} \n`)

      const dataFromRows = await getDataFromRows(page, {
        rows,
        columns,
        modalDataExtracter,
        selectors,
      })

      // 👉 aqui deberia guardarse en la base de datos o en un archivo

      results.push(...dataFromRows)

      const nextPage = currentPage + 1

      if (nextPage > maxPages) break

      const paginacionElementWithOnClickEvent = await page.waitForSelector(`a[onclick="jsIr(${currentPage + 1});"]`)

      await page.waitForLoadState()
      await pressButtonNext({ element: paginacionElementWithOnClickEvent })

      // le da tiempo a la página para que cargue correctmente la siguiente página
      await page.waitForLoadState('domcontentloaded')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(1200)

      currentPage++
    } while (currentPage <= maxPages)

    return results
  } catch (error) {
    console.log(error)
  }
}
