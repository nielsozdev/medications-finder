import { type Locator, type Page } from 'playwright'

import { clog } from '@noz/utils'

import { existElement } from '~/utils/existElement'
import { fillInputText } from '~/utils/fillInputText'

export async function getSuggestionElements(
  page: Page,
  {
    inputSearchElement,
    medication,
    suggestionsSelector,
    timeout = 0,
    toastWarningSelector,
  }: {
    inputSearchElement: Locator
    medication: string
    suggestionsSelector: string
    timeout?: number
    toastWarningSelector: string
  }): Promise<Locator[] | null> {
  clog.message2(`⌛ obteniendo lista de sugerencias para ${medication}...`)

  try {
    await page.waitForLoadState('domcontentloaded')

    await fillInputText(page, {
      delay: 300,
      element: inputSearchElement,
      text: medication,
    })

    const existWarningToast = await existElement(page, { selector: toastWarningSelector })

    if (existWarningToast) {
      await page.waitForTimeout(timeout)

      return []
    }

    await page.waitForSelector(suggestionsSelector, { state: 'visible', timeout: 1000 })

    const suggestions = await page.locator(suggestionsSelector).all()

    return suggestions
  } catch (err) {
    clog.error(`⌨️ Error (getSuggestionElements) No se pudieron obtener sugerencias para ${medication}. Error: ${err.message}`)

    return null
  }
}
