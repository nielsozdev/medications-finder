import { type Price } from '@noz/medications-core'
import { createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

export
async function saveTestData({ data, department, file }: {
  data: Price[]
  department: string
  file: string
}) {
  const testPath = `${PATHS.root}/processed/test/${department}/${file}`
  console.log(testPath)
  await createFolderAndSaveFile(testPath, data)
}
