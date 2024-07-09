import { type UniqueData } from '@noz/medications-core/src/types/bd'

import { PATHS } from '~/constants/paths'
import { getAllFiles } from '~/utils/getAllFiles'

import { convertToUniqueArrays } from './convertToUniqueArrays'
import { processFiles } from './processFiles'
import { saveNormalizeRestOfDataFiles } from './saveNormalizeRestOfDataFiles'

const uniqueData: UniqueData = {
  uniqueDepartments: new Map(),
  uniqueDistricts: new Map(),
  uniqueEstablishments: new Map(),
  uniqueFamily: new Map(),
  uniqueManufacturers: new Map(),
  uniqueMedications: new Map(),
  uniquePharmaceuticalForms: new Map(),
  uniqueProducts: new Map(),
  uniqueProvinces: new Map(),
  uniqueSubFamily: new Map(),
}
export async function normalizeData() {
  try {
    const medicationsPath = `${PATHS.medicationsExtracted}/junin`
    const medicationsFiles = getAllFiles(medicationsPath, '.json')

    await processFiles({ files: medicationsFiles, path: medicationsPath, ...uniqueData })
    const resultsConvertToUniqueArray = convertToUniqueArrays(uniqueData)

    await saveNormalizeRestOfDataFiles(resultsConvertToUniqueArray)
  } catch (error) {
    throw new Error('Error procesando los medicamentos')
  }
}
