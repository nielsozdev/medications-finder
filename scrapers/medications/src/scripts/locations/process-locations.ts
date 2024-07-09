import fs from 'fs'
import path from 'path'

import { createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

const FOLDER_BASE_PATH = `${PATHS.rawData}/peru/departments`;

(function processLocations() {
  const departmentsData = getDepartments()
  const provincesData = getProvinces(departmentsData)
  const districtsData = getDistricts(provincesData)

  const file = `${PATHS.rawData}/locations/locations.json`

  createFolderAndSaveFile(file, districtsData)
}())

function getDepartments() {
  let data: any = {}
  const files = fs.readdirSync(FOLDER_BASE_PATH)
  const jsonFiles = files.filter((file) => path.extname(file) === '.json')

  jsonFiles.forEach((file) => {
    const filePath = `${FOLDER_BASE_PATH}/${file}`
    const content = fs.readFileSync(filePath, 'utf8')
    const departments = JSON.parse(content)

    data = departments
  })

  return data
}

function getProvinces(departments) {
  const data = departments
  data.departments.forEach((department, index) => {
    const departmentFolderPath = `${FOLDER_BASE_PATH}/${formatText(department.label, '')}`

    if (fs.existsSync(departmentFolderPath)) {
      const provinceContentFiles = fs.readdirSync(departmentFolderPath)
      const provincesFiles = provinceContentFiles.filter((file) => path.extname(file) === '.json')

      provincesFiles.forEach((file) => {
        const filePath = `${departmentFolderPath}/${file}`
        const provincesJSON = fs.readFileSync(filePath, 'utf8')
        const provinces = JSON.parse(provincesJSON)

        data.departments[index].provinces = provinces
      })
    }
  })

  return data
}

function getDistricts(provinces) {
  const data = provinces
  for (let i = 0; i < data.departments.length; i++) {
    if (data.departments[i].provinces) {
      const districtOfProvinceFolderPath = `${FOLDER_BASE_PATH}/${formatText(data.departments[i].label, '_')}/provinces`
      if (fs.existsSync(districtOfProvinceFolderPath)) {
        for (let j = 0; j < data.departments[i].provinces.length; j++) {
          const item = data.departments[i].provinces[j]
          const districtsFolderPath = `${formatText(item.label, '_')}/${formatText(item.label, '_')}`
          const districtsFiles = `${districtOfProvinceFolderPath}/${districtsFolderPath}.json`

          const districtContent = fs.readFileSync(districtsFiles, 'utf8')
          const districts = JSON.parse(districtContent)
          data.departments[i].provinces[j].districts = districts
        }
      }
    }
  }

  return data
}

function formatText(text: string, replacer: string) {
  return text.replace(/\s/g, replacer).toLowerCase()
}
