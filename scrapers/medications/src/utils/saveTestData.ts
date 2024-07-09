import { type Price } from '@noz/medications-core'
import { createFolderAndSaveFile } from '@noz/utils'

export async function saveTestData({ data, department, file }: {
  data: Price[]
  department: string
  file: string
}) {
  const testPath = `./extractData/test/${department}/${file}.json`
  await createFolderAndSaveFile(testPath, data)
}
