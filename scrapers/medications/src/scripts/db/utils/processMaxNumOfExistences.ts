import fs from 'node:fs'

import { type Department, type District, type Province, type Establishment, type Price } from '@noz/medications-core'

import { PATHS } from '~/constants/paths'

export async function processMaxNumOfExistences(prices: Price[], maxNumOfExistences: number): Promise<Price[]> {
  try {
    const countOfLocations: Record<string, Record<string, Record<string, number>>> = {}
    const result: Price[] = []

    const districts = await getContentFromFile<District[]>(`${PATHS.root}/processed/districts.json`)
    const provinces = await getContentFromFile<Province[]>(`${PATHS.root}/processed/provinces.json`)
    const departments = await getContentFromFile<Department[]>(`${PATHS.root}/processed/departments.json`)
    const establishments = await getContentFromFile<Establishment[]>(`${PATHS.root}/processed/establishments.json`)

    for (const price of Object.values(prices)) {
      if (!price) continue

      const establishment = establishments.find((estab: Establishment) => estab.id === price.idEstablishment)
      if (!establishment) continue

      const district = districts.find((dist: District) => dist.id === establishment.idDistrict)
      if (!district) continue

      const province = provinces.find((prov: Province) => prov.id === district.idProvince)
      if (!province) continue

      const department = departments.find((dep: Department) => dep.id === province.idDepartment)
      if (!department) continue

      const departmentKey = department.id.toString()
      const provinceKey = province.id.toString()
      const districtKey = district.id.toString()

      if (!countOfLocations[departmentKey]) {
        countOfLocations[departmentKey] = {}
      }

      if (!countOfLocations[departmentKey][provinceKey]) {
        countOfLocations[departmentKey][provinceKey] = {}
      }

      if (!countOfLocations[departmentKey][provinceKey][districtKey]) {
        countOfLocations[departmentKey][provinceKey][districtKey] = 0
      }

      if (countOfLocations[departmentKey][provinceKey][districtKey] < maxNumOfExistences) {
        countOfLocations[departmentKey][provinceKey][districtKey]++
        result.push(price)
      }
    }

    // return prices
    return result
  } catch (error) {
    throw new Error('Error procesando maxNumOfExistencs los precios')
  }
}

async function getContentFromFile<T>(filePath: string) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8')
    const data = JSON.parse(content) as T

    return data
  } catch (error) {
    throw new Error('Error leyendo el archivo')
  }
}
