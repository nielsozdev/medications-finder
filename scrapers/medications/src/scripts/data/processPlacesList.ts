import { type Page } from 'playwright'

import { type LocationsList, type MedicationsList, type ExtractMedicationsUrl } from '@noz/medications-core/src/types/scraper'
import { clog } from '@noz/utils'

import { processMedicationsList } from './processMedicationsList'

import { type DigemidSelectors } from '~/constants/selectors'

export async function processPlacesList(
  page: Page,
  {
    locationsList,
    medicationsList,
    pathExtractedData,
    pathNotExtractedData,
    selectors,
    url,
  }:
  {
    locationsList: LocationsList
    medicationsList: MedicationsList
    pathExtractedData?: string
    pathNotExtractedData?: string
    selectors: DigemidSelectors
    url: ExtractMedicationsUrl
  }) {
  try {
    const elements = {
      buttonCleanElement: page.locator(selectors.buttonActionSelector).nth(1),
      buttonSearchElement: page.locator(selectors.buttonActionSelector).nth(0),
      inputSearchElement: page.locator(selectors.inputNameMedicationSelector),
    }

    for (const [indexLocation, department] of locationsList.entries()) {
      clog.infoBg(`\n🔥${indexLocation + 1} de ${locationsList.length} Examinando Ubicación: ${department.toUpperCase()}`)

      await processMedicationsList(page, {
        department,
        elements,
        medicationsList,
        pathExtractedData,
        pathNotExtractedData,
        selectors,
        url,
      })

      clog.success(`Análisis de departamento ${department} completado...`)
    }

    clog.success('Fin de análisis de departamentos...')
  } catch (err) {
    clog.error(`Error durante el proceso (processPlacesList): ${err.message}`)
  }
}
