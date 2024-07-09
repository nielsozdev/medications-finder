import { type LocationsList, type MedicationsList } from '@noz/medications-core/src/types/scraper'
import { getBrowserAndPage, navigateTo } from '@noz/scrapers-utils'
import { clog } from '@noz/utils'

import { processPlacesList } from './processPlacesList'

import { config } from '~/config'
import { selectors } from '~/constants/selectors'
import { closeModals } from '~/utils/closeModals'

export async function startPointExtractMedicationsData({
  locationsList,
  medicationsList,
  pathExtractedData,
  pathNotExtractedData,
}: {
  locationsList: LocationsList
  medicationsList: MedicationsList
  pathExtractedData?: string
  pathNotExtractedData?: string
}) {
  console.time('extract medications data from web page...')

  clog.messageBg('🚀 Iniciando...\n')
  const { browser, page } = await getBrowserAndPage()

  try {
    if (locationsList.length === 0 || medicationsList.length === 0) {
      return clog.warn('Sin datos para examinar')
    }

    await navigateTo(page, { to: config.url.webPage })

    await closeModals(page, { selector: selectors.medications.modalButtonSelector })

    await processPlacesList(page, {
      locationsList,
      medicationsList,
      pathExtractedData,
      pathNotExtractedData,
      selectors: selectors.medications,
      url: config.url,
    })
  } catch (error) {
    clog.error(error)
  } finally {
    await browser.close()

    console.timeEnd('extract medications data from web page...')
  }
}
