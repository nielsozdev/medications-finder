import { type Locator, type Page } from 'playwright'

import { clog } from '@noz/utils'

export async function fillInputText(page: Page,
  {
    element,
    text,
    delay = 0,
  }: {
    delay: number
    element: Locator
    text: string
  }) {
  // const { element, text, delay = 0 } = params
  try {
    await page.waitForLoadState('domcontentloaded')
    await element.fill('')
    await page.keyboard.type(text, { delay })

    await page.waitForLoadState('domcontentloaded')

    return true
  } catch (err: any) {
    clog.error(err, 'Error la rellenar información')

    return false
  }
}
