import fs from 'fs'
import path from 'path'

import { type ExtractedDataResult } from '@noz/medications-core'
import { clog } from '@noz/utils'

import { normalizePricesData } from '../utils/normalizePricesData'
import { processMaxNumOfExistences } from '../utils/processMaxNumOfExistences'

import { PATHS } from '~/constants/paths'
import { handleErrors } from '~/helpers/errors'

async function countDataExtractedWithTwoWords() {
  const DEPARTMENT = 'junin'

  const extractedPath = `${PATHS.medicationsExtracted}/${DEPARTMENT}`

  const allFiles = fs.readdirSync(extractedPath)

  const jsonFiles = allFiles.filter((file) => path.extname(file) === '.json')

  clog.message5(jsonFiles.length, ' archivos (medicamentos) cargados en la base de datos')

  let allData = 0

  for (const file of jsonFiles) {
    try {
      const filePath = `${extractedPath}/${file}`

      const buffferContent = await fs.promises.readFile(filePath, 'utf-8')

      const data: ExtractedDataResult = JSON.parse(buffferContent)

      const normalizedData = normalizePricesData(data)

      const reducedData = await processMaxNumOfExistences(normalizedData, 10)
      // console.log('twoWords', reducedData.length)

      allData += reducedData.length
    } catch (error) {
      handleErrors(error)
    }
  }

  return allData
}

async function countDataExtractedWithOneWord() {
  const DEPARTMENT = 'junin'

  const extractedPath = `${PATHS.medicationsExtracted}/more/${DEPARTMENT}`

  const allFiles = fs.readdirSync(extractedPath)
  const jsonFiles = allFiles.filter((file) => path.extname(file) === '.json')
  clog.message5(jsonFiles.length, ' archivos (medicamentos) cargados en la base de datos')

  let allData = 0
  for (const file of jsonFiles) {
    try {
      const filePath = `${extractedPath}/${file}`

      const buffferContent = await fs.promises.readFile(filePath, 'utf-8')

      const data: ExtractedDataResult = JSON.parse(buffferContent)

      const normalizedData = normalizePricesData(data)

      const reducedData = await processMaxNumOfExistences(normalizedData, 10)
      // console.log('oneWord', reducedData.length)
      allData += reducedData.length
    } catch (error) {
      handleErrors(error)
    }
  }

  return allData
}

;

(async function countExtractedData() {
  const dataWithTwoWords = await countDataExtractedWithTwoWords()
  const dataWithOneWord = await countDataExtractedWithOneWord() ?? 0

  const allData = dataWithOneWord + dataWithTwoWords

  clog.infoBg(`✅ Total de datos: ${allData}`)

  return allData
}())
