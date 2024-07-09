import { type Page } from 'playwright'

import { type Selectors } from '~/constants/selectors'

export async function extractDataModal (page: Page,
  {
    i,
    rows,
    selectors,
  }: {
    i: number
    rows: any
    selectors: Selectors
  }) {
  const { modalButtonOpenSelector, modalButtonCloseSelector } = selectors

  const tdList = await rows[i].locator('td').all()
  const item = Number(await tdList[1].innerText())
  const id = Number(await tdList[2].innerText())

  const button = await page.locator(modalButtonOpenSelector).all()
  await page.waitForTimeout(3000)
  await button[i].click()

  await page.waitForTimeout(3000)
  const startDate = await getDataFromInputDisabled(page, { selector: 'input[name="p4"]' })
  const category = await getDataFromInputDisabled(page, { selector: 'input[name="p6"]' })

  const legalRepresentative = await page.locator(selectors.filedLegalRepresentativeSelector).allInnerTexts()
  const activity = await page.locator(selectors.fieldActivitySelector).allInnerTexts()
  const staff = await page.locator(selectors.fieldStaffSelector).allInnerTexts()

  const staffList: any[] = []

  staff.forEach((item, index) => {
    if (index % 3 === 0) {
      const [name, position, horario] = staff.slice(index, index + 3)

      staffList.push({ name, position, horario })
    }
  })

  const data = {
    category,
    startDate,
    activity: activity[0] ?? '',
    legalRepresentative: {
      name: legalRepresentative[0],
      position: legalRepresentative[1],
      hoursOfAtention: legalRepresentative[2],
    },
    staff: staffList,

  }
  const buttonClose = page.locator(modalButtonCloseSelector).nth(-1)

  console.log(`Fila ${String(i + 1).padStart(2, '0')} - id: ${id} - item: ${item} datos obtenidos correctamente...`)

  await buttonClose.click()

  return data
}

async function getDataFromInputDisabled (page: Page, { selector }: { selector: string }) {
  await page.waitForLoadState('networkidle')

  await page.waitForSelector(selector, { state: 'visible' })
  await page.waitForTimeout(200)

  const dataLocator = page.locator(selector)
  const dataElement = dataLocator.first()
  const data = dataElement === null
    ? ''
    : await dataElement.evaluate((el) => {
      el.removeAttribute('disabled')
      el.removeAttribute('readonly')
      if (el instanceof HTMLInputElement) {
        return el.value
      }
    })
  await page.waitForLoadState('domcontentloaded')
  await page.waitForLoadState('networkidle')

  return data
}
