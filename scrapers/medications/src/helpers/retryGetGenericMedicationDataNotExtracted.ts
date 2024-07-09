import fs from 'fs'

import { type Page } from 'playwright'

import { clog } from '@noz/utils'

import { checkForGenericMedications } from './checkForGenericmedications'

export async function retryGetGenericMedicationDataNotExtracted(
  page: Page,
  {
    genericMedicationsList,
    genericMedicationsNonExistent,
    inputSearchElement,
    pathNotExtracted,
    suggestionsSelector,
    toastWarningSelector,
  }
) {
  await page.waitForTimeout(1000)

  clog.message2Bg('Reiniciando la verificación de medicamentos y poniendo el array vacío')

  genericMedicationsNonExistent = []

  const file = pathNotExtracted
  const buffer = fs.readFileSync(file, 'utf8')
  const medicationsList = JSON.parse(buffer)

  await checkForGenericMedications(page, {
    genericMedicationsList,
    genericMedicationsNonExistent,
    inputSearchElement,
    medicationsList,
    pathNotExtracted,
    suggestionsSelector,
    toastWarningSelector,
  })
}
