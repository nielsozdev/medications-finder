import { type Page } from 'playwright'

import { selectValuesFromMenuList } from '@noz/scrapers-helpers'
import { pressButtonSearch } from '@noz/scrapers-utils'
import { createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'
import { type Selectors } from '~/constants/selectors'
import { saveDataInDatabase } from '~/database/saveDataInDatabase'
import { getColumnsData } from '~/helpers/getColumnsData'
import { getRowsData } from '~/helpers/getRowsData'
import { logExtractData } from '~/helpers/logExtractData'
import { saveDataNotExtracted } from '~/helpers/saveDataNotExtracted'
import { formatText } from '~/utils/formatText'
import { getInfoDataTable } from '~/utils/getInfoDataTable'

export async function extractData (page: Page, {
  categoryCombinationKey,
  combinations,
  modalDataExtracter,
  selectors,
}: {
  categoryCombinationKey: string
  combinations: any
  modalDataExtracter: any
  selectors: Selectors
}
) {
  const { searchButtonSelector } = selectors
  const totalRegistersToExtract = combinations.length
  const dataNotExtracted: any[] = []
  let estabishmentName, categoryName, combinationIndex, combination

  try {
    for (const [currentIndex, currentCombination] of combinations.entries()) {
      logExtractData({ combination: currentCombination, combinationIndex: currentIndex, totalRegistersToExtract })

      combinationIndex = currentIndex
      combination = currentCombination
      estabishmentName = formatText(combination[2].establishment)
      categoryName = formatText(combination[1].category)

      await selectValuesFromMenuList(page, { menuListCombination: combination })

      await pressButtonSearch(page, { selector: searchButtonSelector, timeout: 1500 })

      const { totalRowsInEstablishments, rowsInPage, maxPages } = await getInfoDataTable(page, { selectors })

      const establishmentsEmpty = totalRowsInEstablishments <= 0

      if (establishmentsEmpty) {
        dataNotExtracted.push({
          estabishmentName,
          categoryName,
          combinationIndex,
          combination,
          reason: 'No data available',
        })

        console.log(`❌ Sin datos: ${estabishmentName}/${categoryName}\n\n`)
      }

      if (!establishmentsEmpty) {
        const columns = await getColumnsData(page, { selectors })

        const rowsData = await getRowsData(page, {
          maxPages,
          columns,
          selectors,
          rowsInPage,
          modalDataExtracter,
          estabishmentName,
          categoryName,
          combinationIndex,
          totalRegistersToExtract,
        })

        const folderName = `${PATHS.rawData}/${categoryName}/${estabishmentName}`
        const fileName = `${estabishmentName}.json`
        const file = `${folderName}/${fileName}`
        await saveDataInDatabase(rowsData)

        await createFolderAndSaveFile(file, rowsData)
      }
    }
  } catch (err: any) {
    console.log(err)

    dataNotExtracted.push({
      estabishmentName,
      categoryName,
      combinationIndex,
      combination,
      reason: err.message || 'Error extracting data', // Mensaje de error o razón por el error
    })

    throw new Error('Error al extraer datos de los establecimientos farmaceúticos')
  } finally {
    saveDataNotExtracted({ dataNotExtracted, categoryCombinationKey })
    dataNotExtracted.length = 0
  }
}
