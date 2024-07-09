import { type PDFExtractPage } from 'pdf.js-extract'

import { clog } from '@noz/utils'

export async function processPDFExtractData(data: PDFExtractPage[]): Promise<string[]> {
  clog.info('🔨 Procesando data PDF')

  const filteredMedicationData = data
    .flatMap((page) => page.content.filter((row) => !isNaN(Number(row.str.trim()[0])))
      .map((row) => row.str.trim().slice(5))
    )

  const medicationNames: string[] = []

  for (const medication of filteredMedicationData) {
    let medicationName: string = ''
    let foundNumberOrParenthesis = false

    for (const word of medication.split(' ')) {
      if (!isNaN(Number(word))) {
        foundNumberOrParenthesis = true
        break
      }

      if (word.startsWith('(') || word.endsWith(')') || word.startsWith('+')) {
        foundNumberOrParenthesis = true
        break
      }

      if (!foundNumberOrParenthesis) {
        medicationName += word + ' '
      }
    }

    medicationNames.push(medicationName.trim().split(' ').slice(0, 2).join(' '))
  }

  return await new Promise((resolve) => resolve([...new Set(medicationNames)]))
}
