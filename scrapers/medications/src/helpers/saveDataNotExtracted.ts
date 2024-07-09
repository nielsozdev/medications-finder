import { type DataNotExtracted } from '@noz/medications-core'
import { clog, createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

export async function saveDataNotExtracted({
  data,
  department,
  path = null,
}:
{
  data: DataNotExtracted[]
  department: string
  path?: string | null
}) {
  const basePath = path ?? `${PATHS.medicationsNotExtracted}`

  const pathFile = `${basePath}/not-extracted/${department.toLowerCase()}/dataNotExtractedComplete.json`

  await createFolderAndSaveFile(pathFile, data)

  clog.info(`⭕⭕ ${data.length} Extracciones pendientes guardadas... `)

  return true
}
