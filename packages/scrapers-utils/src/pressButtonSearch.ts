import { type Locator, type Page } from 'playwright'

interface PressButtonSearchArgs {
  element?: Locator | null
  message?: string | null
  selector?: string
  timeout?: number
}

export async function pressButtonSearch(page: Page, { selector = '', element = null, timeout = 0, message = null }: PressButtonSearchArgs) {
  try {
    if (element && selector) throw new Error('pressButtonSearch/ No se puede usar selector y element(Locator) al mismo tiempo')

    if (selector) {
      await page.waitForSelector(selector)
      page.locator(selector).click()
    }

    if (element) {
      element.click()
    }

    await page.waitForTimeout(timeout)
    await page.waitForLoadState('domcontentloaded')
    // await page.waitForLoadState('networkidle')

    message
      ? console.log(message)
      : console.log('🔎 Buscando...')

    await page.waitForLoadState('domcontentloaded')

    return true
  } catch (err) {
    console.log('Error en (presSeachrButton) ', err.nmessage)

    return false
  }
}
