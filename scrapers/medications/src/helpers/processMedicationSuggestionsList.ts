import {
  type ExtractMedicationsUrl,
  type DataNotExtracted,
  type ExtractedDataResult,
  type DigemidWebData,
} from '@noz/medications-core/src/types/scraper'
import { pressButtonSearch } from '@noz/scrapers-utils'
import { clog } from '@noz/utils'

import { extractDataFromResponseWeb } from './extractDataFromResponseWeb'
import { logSuggestionsList } from './logSuggestionsList'

import { type DigemidSelectors } from '~/constants/selectors'
// import { type MedicationsExtractedDataFromDigemidWeb, type ExtractedDataResult } from '~/types/medicationsData'
import { type ElementsForSearch } from '~/types/types'
import { existElement } from '~/utils/existElement'
import { fillInputText } from '~/utils/fillInputText'
import { fillSelectInputs } from '~/utils/fillSelectInputs'

import type { Locator, Page } from 'playwright'

const numberOfMedicationsToExtract = 5
const intervaloDeExtraccion = 11000
export async function processMedicationSuggestionsList(
  page: Page,
  {
    department,
    elements,
    medication,
    selectors,
    suggestionElementsList,
    url,
  }: {
    department: string
    elements: ElementsForSearch
    medication: string
    selectors: DigemidSelectors
    suggestionElementsList: Locator[]
    url: ExtractMedicationsUrl
  }
): Promise<{
    data: ExtractedDataResult
    dataNotExtractedList: DataNotExtracted[]
  }> {
  const { buttonCleanElement, inputSearchElement, buttonSearchElement } = elements

  const medicationsData: ExtractedDataResult['results'] = []
  const dataNotExtractedList: DataNotExtracted[] = []

  let suggestion: string = ''
  try {
    await logSuggestionsList({ medication, suggestionElements: suggestionElementsList })

    for (const [suggestionIndex, $suggestionElement] of suggestionElementsList.entries()) {
      await page.waitForLoadState('domcontentloaded')

      await fillInputText(page, {
        delay: 300,
        element: inputSearchElement,
        text: medication,
      })

      suggestion = (await $suggestionElement.textContent()) ?? ''

      await $suggestionElement.click({ timeout: 1000 })

      await fillSelectInputs(page, { selectors, department })

      await pressButtonSearch(page, {
        element: buttonSearchElement,
        message: `🔍 Buscando: ${medication} Sugerencia ${suggestionIndex + 1}/${suggestionElementsList.length} ✨ ${suggestion}...`,
      })

      await page.waitForLoadState('domcontentloaded') /* Esperar el tiempo de carga de la página para la extracción */

      const medicationsDataResponse: DigemidWebData | null = await extractDataFromResponseWeb(page, { url, suggestion })

      if (medicationsDataResponse === null) {
        dataNotExtractedList.push({
          department,
          medication,
          reason: null,
          suggestion,
          suggestionIndex,
        })
        clog.error(`📌No se pudo extraer: ${medication}, sugerencia: ${suggestion}, department: ${department}`)
        continue
      }

      if (medicationsDataResponse !== null) {
        const existDataTable = existElement(page, { selector: '.table-responsive' })

        if (!existDataTable) {
          console.log('No se encontro la tabla de resultados.')
        }

        if (medicationsDataResponse?.data.length === 0) {
          dataNotExtractedList.push({
            department,
            medication,
            reason: [],
            suggestion,
            suggestionIndex,
          })
          clog.error(`📌No se pudo extraer: ${medication}, sugerencia: ${suggestion}, department: ${department}`)
          continue
        }

        const modifiedDataResponse = {
          ...medicationsDataResponse,
          suggestion,
        }

        medicationsData.push(modifiedDataResponse)
      }

      await buttonCleanElement.click()
      // if (suggestionIndex === numberOfMedicationsToExtract - 1) {
      console.log('🚀 Esperando...' + intervaloDeExtraccion / 1000 + ' segundos')
      await page.waitForTimeout(intervaloDeExtraccion)
      // await new Promise((resolve) => setTimeout(resolve, intervaloDeExtraccion))
      // }
    }

    const newData: ExtractedDataResult = {
      medication,
      results: medicationsData,
    }

    return { data: newData, dataNotExtractedList }
  } catch (err) {
    clog.error('Error en (processMedicationSuggestionsList) ', err.message)

    return {
      data: {
        medication,
        results: medicationsData,
      },
      dataNotExtractedList,
    }
  }
}
