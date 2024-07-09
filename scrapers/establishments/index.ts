import dotenv from 'dotenv'

import { getMenuListCombinations } from '@noz/scrapers-helpers'
import { navigateTo, getBrowserAndPage } from '@noz/scrapers-utils'

import { menuOptionsList } from '~/config'
import { selectors } from '~/constants/selectors'
import { extractDataModal } from '~/extractDatamodal'
import { extractData } from '~/scripts/extractData'

dotenv.config()

const url = 'http://serviciosweb.digemid.minsa.gob.pe/Consultas/Establecimientos'

void (async () => {
  // TODO: Revisar Proxy
  const { browser, page } = await getBrowserAndPage()

  console.time('⏱️ Tiempo de recopilación')
  try {
    await navigateTo(page, { to: url })

    console.log('🚀 Iniciando recopilación...')

    const establishmentCategoryCombinations = getMenuListCombinations(menuOptionsList) ?? []

    for (const [categoryCombinationKey, combination] of Object.entries(establishmentCategoryCombinations)) {
      if (combination.length > 0) {
        console.info(`Extrayendo información
        ${combination.length} establecimientos: (${categoryCombinationKey}) para extraer datos...\n`)

        await extractData(page, {
          categoryCombinationKey,
          combinations: combination,
          modalDataExtracter: extractDataModal,
          selectors,
        })
      } else {
        console.log('☹️ No se encontraron combinaciones de búsquedas para recopilación')
      }
    }
  } catch (err) {
    console.log(err)
  } finally {
    await page.close()
    await browser.close()
  }

  console.timeEnd('⏱️ Tiempo de recopilación')
})()
