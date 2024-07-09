import { type Page } from 'playwright'

export async function closeModals(page: Page, { selector }: { selector: string }) {
  let modalExist = true
  let modalsCount = 0

  await page.waitForLoadState('networkidle')

  while (modalExist) {
    const modalButtons = await page.locator(selector).all()
    modalsCount = modalButtons.length

    await page.waitForLoadState('domcontentloaded')
    console.log(modalsCount)
    modalExist = modalButtons.length > 0
    // if (!modalExist) break
    if (modalExist) {
      console.log(`${modalButtons.length} modales encontrados`)

      for (const button of modalButtons) {
        try {
          await button.press('Enter')
          modalsCount++
          console.log(`Modal ${modalsCount} closed`)
        } catch (error) {
          console.error(`Error closing modal: ${error}`)
        }
      }

      await page.waitForLoadState('domcontentloaded')
    }
  }

  console.log(`✅ ${modalsCount} modales cerradas`)
}
