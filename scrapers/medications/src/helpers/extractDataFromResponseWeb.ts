import { type Page } from 'playwright'

import { type DigemidWebData, type ExtractMedicationsUrl } from '@noz/medications-core'
import { clog } from '@noz/utils'

interface ExtractDataFromResponseWeb {
  suggestion: string
  url: ExtractMedicationsUrl
}
export async function extractDataFromResponseWeb(page: Page, params: ExtractDataFromResponseWeb): Promise<DigemidWebData | null> {
  const { suggestion, url } = params

  clog.std(`🧪⚡Interceptando datos de ${suggestion}...`)

  let dataWeb: DigemidWebData | null = null

  const response = new Promise<void>(async (resolve) => {
    await page.route(url.fetchResources, async (route) => {
      if (route.request().method() !== 'POST') {
        await route.fallback()

        return
      }

      try {
        const response = await route.fetch()

        if (response.ok()) {
          const responseJsonData = await response.json()
          dataWeb = await response.json()

          clog.std(`✍️ obtenido: ${responseJsonData.data.length} / esperado: ${responseJsonData.cantidad}`)
        } else {
          clog.errorBg(`🟥🌐not ok (extractDataFromResponse) - 🏳️: ${response.status} ${response.statusText}`)
        }
      } catch (e: any) {
        clog.warnBg(`🟧🌐Error (extractDataFromResponse) - 🚩: ${e.message}`)
      } finally {
        await route.continue()

        resolve()
      }
    })
  })

  await response

  return dataWeb
}
