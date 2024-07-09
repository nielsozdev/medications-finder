import { type Page } from 'playwright'

export async function existElement(page: Page, { selector }: { selector: string }) {
  try {
    await page.waitForLoadState('domcontentloaded')
    const $element = await page.locator(selector).isVisible()
    await page.waitForLoadState('domcontentloaded')

    if ($element) return true

    return false
  } catch (error) {
    console.log(error)

    return false
  }
}
