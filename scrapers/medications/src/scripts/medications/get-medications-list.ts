import fs from 'fs'

import XLSX from 'xlsx'

import { PATHS } from '~/constants/paths'

const excelFileToExtract = './src/resources/catalogoproductos.xlsx'
const TERMS_TO_DELETE = ['FORTE', 'PLUS', 'SABOR', 'FLAT', '-']

try {
  const workbook = XLSX.readFile(excelFileToExtract)
  // const firstSheet = workbook.SheetNames[0]
  // const sheet = workbook.Sheets[firstSheet]s
  const sheetName = 'Catálogo'
  const sheet = workbook.Sheets[sheetName]

  const range = XLSX.utils.decode_range(sheet['!ref'] ?? '')

  const medicationsData: string[] = []
  const minCharOfSearch = 5
  let prevMedication = ''

  for (let row = range.s.r + 2; row <= range.e.r + 1; ++row) {
    const cellAddress = `B${row}`
    const cell = sheet[cellAddress]
    if (cell) {
      const cellData = cell.v.trim()
      let medicationArray = cellData.split(' ')

      deleteTerm(medicationArray, ...TERMS_TO_DELETE)

      if (medicationArray[0].length > minCharOfSearch) {
        const medicationToProcessed = medicationArray[0].replace('-', ' ')
        medicationArray = medicationToProcessed.split(' ')
      }

      if (medicationArray[0].length >= 2) {
        const lastItem = medicationArray[medicationArray.length - 1]
        if (lastItem.length <= 3) {
          medicationArray.pop()
        }
      }

      if (!isNaN(Number(medicationArray[medicationArray.length - 1]))) {
        medicationArray.pop()
      }

      for (let i = 0; i <= medicationArray.length - 1; i++) {
        const newMedicationArray = medicationArray.join(' ')
          .replace('®', '')
          .replace('-', ' ')
          .replace(/\s?\d+\/\d+(?:,\d+)?/g, '')
          .trim()

        medicationArray = newMedicationArray.split(' ')
      }

      const currentMedication = [medicationArray[0], medicationArray[1]].join(' ').trim()
      if (prevMedication !== currentMedication) {
        medicationArray.length = 3

        medicationsData.push(medicationArray.join(' ').toLowerCase().trim())
        prevMedication = currentMedication
      }
    }
  }

  const data = [...new Set(medicationsData.filter(Boolean))]

  const fileToSave = `${PATHS.processedData}/medications/medications-list.json`

  fs.writeFileSync(fileToSave, JSON.stringify(data, null, 2))

  console.log('Done! Check the file:', fileToSave)
} catch (err) {
  console.log(err)
}

function deleteTerm(array: string[], ...textosAEliminar: string[]) {
  for (const texto of textosAEliminar) {
    if (array.includes(texto)) {
      array.splice(array.indexOf(texto), 1)
    }
  }
}
