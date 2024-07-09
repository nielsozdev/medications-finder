import { type Page } from 'playwright'

import { selectValues } from '@noz/scrapers-helpers'
import { clog } from '@noz/utils'

import { type DigemidSelectors } from '~/constants/selectors'

export async function fillSelectInputs(page: Page,
  {
    department,
    selectors,
  }: {
    department: string
    selectors: DigemidSelectors
  }) {
  const { departmentSelector, provinceSelector, districtSelector } = selectors

  try {
    const isdepartmentSelected = await selectValues(page, {
      selector: departmentSelector,
      label: department.toUpperCase(),
    })
    await page.waitForTimeout(100)
    if (!isdepartmentSelected) throw new Error('No se pudo seleccionar el departamento')

    const isProvincesSelected = await selectValues(page, {
      selector: provinceSelector,
      label: '--Seleccione--',
    })
    await page.waitForTimeout(100)
    if (!isProvincesSelected) throw new Error('No se pudo seleccionar la provincia')

    const isDistrictSelected = await selectValues(page, {
      selector: districtSelector,
      label: '--Seleccione--',
    })

    if (!isDistrictSelected) throw new Error('No se pudo seleccionar el distrito')

    return true
  } catch (err) {
    clog.error('Error - al completar selectores: ', err)
    throw new Error(err)
  }
}
