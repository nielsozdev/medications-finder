import { type Locator, type Page } from 'playwright'

import { createFolderAndSaveFile, clog } from '@noz/utils'

import { type DigemidSelectors } from '~/constants/selectors'

import { getSuggestionElements } from './getSuggestionElements'

interface Params {
  genericMedicationsList: string[]
  genericMedicationsNonExistent: string[]
  inputSearchElement: Locator
  medicationsList: string[]
  pathNotExtracted: string
  selectors: DigemidSelectors
  suggestionElementsList: Locator[]
  suggestionsSelector: string
  toastWarningSelector: string
  url: string
}
export async function checkForGenericMedications(page: Page, params: Params) {
  const {
    medicationsList,
    inputSearchElement,
    toastWarningSelector,
    suggestionsSelector,
    genericMedicationsList,
    genericMedicationsNonExistent,
    pathNotExtracted,
  } = params

  for (const [index, medication] of medicationsList.entries()) {
    await page.waitForLoadState('domcontentloaded')

    const suggestionElementsList = await getSuggestionElements(page, {
      inputSearchElement,
      toastWarningSelector,
      suggestionsSelector,
      medication,
      timeout: 6000,
    })

    if (suggestionElementsList?.length === 0 || suggestionElementsList === null) {
      clog.warn(`Medicamento: ${index + 1}/${medicationsList.length}: ${medication}`)

      genericMedicationsNonExistent.push(medication)
    } else {
      clog.info(`Medicamento: ${index + 1}/${medicationsList.length}: ${medication}`)

      genericMedicationsList.push(medication)
    }
  }

  await createFolderAndSaveFile(pathNotExtracted, genericMedicationsNonExistent)

  return null
}
