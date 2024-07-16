import { type Page } from 'playwright'

import {
  type DataNotExtracted,
  type ExtractMedicationsUrl,
  type MedicationsList,
} from '@noz/medications-core/src/types/scraper'
import { clog } from '@noz/utils'

import { processMedicationData } from './processMedicationData'

import { type DigemidSelectors } from '~/constants/selectors'
import { saveDataExtracted } from '~/helpers/saveDataExtracted'
import { saveDataNotExtracted } from '~/helpers/saveDataNotExtracted'
import { type ElementsForSearch } from '~/types/types'

export async function processMedicationsList(
  page: Page,
  {
    medicationsList,
    pathExtractedData,
    pathNotExtractedData,
    ...restOfParams
  }: {
    department: string
    elements: ElementsForSearch
    medicationsList: MedicationsList
    pathExtractedData?: string
    pathNotExtractedData?: string
    selectors: DigemidSelectors
    url: ExtractMedicationsUrl
  }
) {
  try {
    const department = restOfParams.department
    const notExtracted: DataNotExtracted[] = []

    for (const [medicationIndex, medication] of medicationsList.entries()) {
      clog.message6Bg(
        `\nMedicamento ${medicationIndex + 1} de ${medicationsList.length}: ${medication}\n`
      )

      const { medicationsDataResults, medicationsNotExtractedData } = await processMedicationData(
        page,
        {
          ...restOfParams,
          medication,
        }
      )

      if (medicationsDataResults.results.length === 0) {
        notExtracted.push({
          department,
          medication,
          reason: 'medicationsList []',
          suggestion: null,
          suggestionIndex: null,
        })
      } else {
        notExtracted.push(...medicationsNotExtractedData)

        await saveDataExtracted({
          data: medicationsDataResults,
          department,
          medication,
          path: pathExtractedData,
        })
      }

      clog.info(`Fin Análisis de ${medication} en ${department.toUpperCase()}`)
    }

    await saveDataNotExtracted({
      path: pathNotExtractedData,
      data: notExtracted,
      department,
    })

    clog.infoBg(`Fin de análisis de Lista de medicamentos para ${department}... \n`)
  } catch (err) {
    clog.error(`Error durante el proceso (processMedicationsList): ${err.message}`)
  }
}
