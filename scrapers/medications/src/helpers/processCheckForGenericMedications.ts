import { getBrowserAndPage, navigateTo } from '@noz/scrapers-utils'
import { createFolderAndSaveFile, clog } from '@noz/utils'

import { config } from '~/config'
import { type DigemidSelectors } from '~/constants/selectors'
import { closeModals } from '~/utils/closeModals'

import { checkForGenericMedications } from './checkForGenericmedications'
import { retryGetGenericMedicationDataNotExtracted } from './retryGetGenericMedicationDataNotExtracted'

export async function processCheckForGenericMedications({
  medicationsList,
  pathExtracted,
  pathNotExtracted,
  selectors,
}: {
  medicationsList: string[]
  pathExtracted: string
  pathNotExtracted?: string | null
  selectors: DigemidSelectors
}) {
  const {
    modalButtonSelector,
    toastWarningSelector,
    inputNameMedicationSelector,
    suggestionsSelector,
  } = selectors

  const { browser, page } = await getBrowserAndPage()

  try {
    clog.message2Bg('🚀 Iniciando proceso de verificación de medicamentos genericos...')

    await navigateTo(page, { to: config.url.webPage })

    await closeModals(page, { selector: modalButtonSelector })

    const genericMedicationsList: string[] = []
    const genericMedicationsNonExistent: string[] = []

    const inputSearchElement = page.locator(inputNameMedicationSelector)

    await checkForGenericMedications(page, {
      genericMedicationsList,
      genericMedicationsNonExistent,
      inputSearchElement,
      medicationsList,
      pathNotExtracted,
      suggestionsSelector,
      toastWarningSelector,
    })

    await retryGetGenericMedicationDataNotExtracted(page, {
      genericMedicationsList,
      genericMedicationsNonExistent,
      inputSearchElement,
      pathNotExtracted,
      suggestionsSelector,
      toastWarningSelector,
    })

    await createFolderAndSaveFile(pathExtracted, genericMedicationsList)
  } catch (err) {
    clog.error('Error (checkForGenericMedication) ', err)
  } finally {
    await browser.close()
    process.exit(0)
  }
}
