import { type Page } from 'playwright'

import { selectValues } from './selectValues'

export async function selectValuesFromMenuList (page: Page, { menuListCombination }: { menuListCombination: any }) {
  try {
    const values: any[] = []

    for (const { selector, label, value } of menuListCombination) {
      const selectedValues = await selectValues(page, { selector, label, value })
      values.push(selectedValues)
    }

    return values
  } catch (err) {
    console.log(err)
    throw new Error('No se pudo rellenar los selectores correctamente')
  }
}
