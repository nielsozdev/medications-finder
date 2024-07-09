import { PDFExtract, type PDFExtractOptions } from 'pdf.js-extract'

import { clog, createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'
import { selectors } from '~/constants/selectors'
import { processCheckForGenericMedications } from '~/helpers/processCheckForGenericMedications'
import { processGenericMedicationWithOneWord } from '~/helpers/processGenericMedicationWithOneWord'
import { processPDFExtractData } from '~/helpers/processPDFExtractData'

const pathNotExtracted = `${PATHS.processedData}/medications/generic/generic-medications-list.no-extract.json`
const pathExtracted = `${PATHS.processedData}/medications/generic/generic-medications-list.json`

;(async () => {
  clog.message3Bg('Primer proceso Extrayendo datos de medicamentos genericos...')
  const pdfFileToExtractData = './src/resources/generic-medications.pdf'

  const pdfExtract = new PDFExtract()

  const options: PDFExtractOptions = {
    disableCombineTextItems: true,
    normalizeWhitespace: true,
  }

  try {
    const genericMedicationsData = await pdfExtract.extract(pdfFileToExtractData, options)
    const medicationsList = await processPDFExtractData(genericMedicationsData.pages)
    const medicationsListWithOneWord = processGenericMedicationWithOneWord(medicationsList)

    await processCheckForGenericMedications({
      medicationsList: medicationsListWithOneWord,
      pathExtracted,
      pathNotExtracted,
      selectors: selectors.medications,
    })
  } catch (err) {
    clog.error(err)
  }
})()
