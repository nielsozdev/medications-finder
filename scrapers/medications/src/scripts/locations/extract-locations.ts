import { type Page, type Locator } from 'playwright'

import { selectValues } from '@noz/scrapers-helpers'
import { getBrowserAndPage, navigateTo } from '@noz/scrapers-utils'
import { createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'
import { selectors } from '~/constants/selectors'
import { type Country, type Department, type Province, type District } from '~/types/locationsOfPeru'

const RAW_PATH_FOLDER = `${PATHS.rawData}/peru/departments`
const ON_BLUR_SELECTOR = '#m_pie1'// Este selector no exite pero sirve para evitar que la pagina que qeude colgada
// const ON_BLUR_SELECTOR = '#tab1';
const { DEPARTMENTS_SELECTOR, PROVINCES_SELECTOR, DISTRICTS_SELECTOR } = selectors.locations;
(async function getLocationsFromPeru() {
  const URL = 'http://serviciosweb.digemid.minsa.gob.pe/Consultas/Establecimientos'

  const { browser, page } = await getBrowserAndPage()

  try {
    await navigateTo(page, { to: URL })
    await page.waitForLoadState('networkidle')

    const departmentsData = await getDepartments(page)

    const file = `${RAW_PATH_FOLDER}/departments.raw.json`

    createFolderAndSaveFile(file, departmentsData)
  } catch (err) {
    console.log(err)
  } finally {
    await browser.close()
  }
})()

export async function getDepartments(page: Page) {
  try {
    const departments: Department = []

    const $departmentsOptions = await page.locator(DEPARTMENTS_SELECTOR + ' option').all()

    for (let i = 0; i < $departmentsOptions.length - 1; i++) {
      const [departmentLabel, departmentValue, departmentName] = await getLabelAndValue($departmentsOptions[i])

      departments.push({ label: departmentLabel, value: departmentValue })

      await selectValues(page, {
        selector: DEPARTMENTS_SELECTOR,
        label: departmentLabel,
        onBlurSelector: ON_BLUR_SELECTOR,
        simulateClick: true,
      })

      await page.waitForLoadState('domcontentloaded')

      const provincesData = await getProvinces(page, departmentName)

      const file = `${RAW_PATH_FOLDER}/${departmentName}/${departmentName}-provinces.json`

      createFolderAndSaveFile(file, provincesData)
    }

    const departmentsData: Country = { country: 'peru', departments }

    return departmentsData
  } catch (error) {
    console.error(error)
  }
}

async function getProvinces(page: Page, departmentName: string) {
  try {
    const provinces: Province = []

    await page.waitForLoadState('domcontentloaded')
    const $provincesOptions = await page.locator(PROVINCES_SELECTOR + ' option').all()

    for (let j = 0; j < $provincesOptions.length - 1; j++) {
      const [provinceLabel, provinceValue, provinceName] = await getLabelAndValue($provincesOptions[j])

      provinces.push({ label: provinceLabel, value: provinceValue })

      await selectValues(page, {
        selector: PROVINCES_SELECTOR,
        label: provinceLabel,
        onBlurSelector: ON_BLUR_SELECTOR,
        simulateClick: true,
      })

      await page.waitForLoadState('networkidle')

      const districtsData = await getDistricts(page)

      const file = `${RAW_PATH_FOLDER}/${departmentName}/provinces/${provinceName}/${provinceName}.json`

      createFolderAndSaveFile(file, districtsData)
    }

    return provinces
  } catch (error) {
    console.error(error)
  }
}

async function getDistricts(page: Page) {
  try {
    const districts: District = []

    const $districtsOptions = await page.locator(DISTRICTS_SELECTOR + ' option').all()

    for (let k = 0; k < $districtsOptions.length - 1; k++) {
      const [districtLabel, districtValue] = await getLabelAndValue($districtsOptions[k])

      districts.push({ label: districtLabel, value: districtValue })
    }

    return districts
  } catch (error) {
    console.error(error)
  }
}

async function getLabelAndValue(element: Locator) {
  try {
    const label: string = await element.textContent() ?? ''
    const value: string = await element.getAttribute('value') ?? ''

    console.log('⚡label', label, '⚡value', value)

    const formattedName: string = label?.replace(/\s/g, '_').toLowerCase()

    return [label, value, formattedName]
  } catch (error) {
    console.error(error)

    return ['', '', '']
  }
}
