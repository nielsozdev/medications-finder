import { type ExtractedDataResult } from '@noz/medications-core'
import { clog, createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

interface SaveDataExtracted {
  data: ExtractedDataResult
  department: string
  medication: string
  path?: string | null
}

export async function saveDataExtracted({ data, department, medication, path = null }: SaveDataExtracted) {
  const basePath = path ?? `${PATHS.medicationsExtracted}`

  const pathFile = `${basePath}/${department.toLowerCase()}/${medication}.json`

  await createFolderAndSaveFile(pathFile, data)

  clog.info('✅✅ Información guardada: ', data.results.length)

  return true
}
