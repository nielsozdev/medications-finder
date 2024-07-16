import { type ExtractMedicationsUrl, type DataNotExtracted, type ExtractedDataResult } from '@noz/medications-core/src/types/scraper'
import { clog } from '@noz/utils'

import { type DigemidSelectors } from '~/constants/selectors'
import { getSuggestionElements } from '~/helpers/getSuggestionElements'
import { processMedicationSuggestionsList } from '~/helpers/processMedicationSuggestionsList'
import type { ElementsForSearch } from '~/types/types'

import type { Page } from 'playwright'

export async function processMedicationData(
  page: Page,
  {
    department,
    elements,
    medication,
    selectors,
    url,
  }: {
    department: string
    elements: ElementsForSearch
    medication: string
    selectors: DigemidSelectors
    url: ExtractMedicationsUrl
  }
): Promise<{
    medicationsDataResults: ExtractedDataResult
    medicationsNotExtractedData: DataNotExtracted[]
  }> {
  const { toastWarningSelector, suggestionsSelector } = selectors

  let medicationsDataResults: ExtractedDataResult = {
    medication,
    results: [],
  }
  const medicationsNotExtractedData: DataNotExtracted[] = []

  try {
    clog.message6(`Extrayendo datos de  de ${medication}...`)

    const suggestionElementsList = await getSuggestionElements(page, {
      inputSearchElement: elements.inputSearchElement,
      medication,
      suggestionsSelector,
      timeout: 5000,
      toastWarningSelector,
    })

    if (suggestionElementsList === null || suggestionElementsList.length === 0) {
      medicationsNotExtractedData.push({
        department,
        medication,
        reason: suggestionElementsList === null ? 'No se pudo extraer sugerencias' : 'Lista de sugerencias vacía',
        suggestion: suggestionElementsList === null ? null : [],
        suggestionIndex: null,
      })
    }

    if (suggestionElementsList !== null && suggestionElementsList.length > 0) {
      const { data, dataNotExtractedList } = await processMedicationSuggestionsList(page, {
        department,
        elements,
        medication,
        selectors,
        suggestionElementsList,
        url,
      })

      medicationsDataResults = data
      medicationsNotExtractedData.push(...dataNotExtractedList)
    }

    return { medicationsDataResults, medicationsNotExtractedData }
  } catch (err) {
    clog.error('Error (processmedicationData) ', err.message)

    return { medicationsDataResults, medicationsNotExtractedData }
  }
}
