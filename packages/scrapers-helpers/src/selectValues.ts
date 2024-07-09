import { type Page } from 'playwright'

interface SelectValues {
  label?: string
  onBlurSelector?: string
  selector: string
  simulateClick?: boolean
  timeout?: number
  value?: string
}
export async function selectValues (page: Page, params: SelectValues) {
  const {
    label = '',
    value = '',
    selector,
    timeout = 150,
    simulateClick = false,
    onBlurSelector = false,
  } = params

  try {
    label && value && await page.locator(selector).selectOption({ label, value })
    label && await page.locator(selector).selectOption({ label })
    value && await page.locator(selector).selectOption({ value })

    if (simulateClick) {
      await page.waitForTimeout(timeout)
      await page.locator(selector).click()
      await page.waitForTimeout(timeout)
    }

    onBlurSelector && await page.locator(onBlurSelector).click()
    await page.waitForLoadState()

    return true
  } catch (err: any) {
    console.error(err.message)

    return false
  }
}
// await page.click('#m_pie1')
