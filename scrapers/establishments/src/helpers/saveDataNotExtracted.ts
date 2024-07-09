import { createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

export function saveDataNotExtracted (
  {
    dataNotExtracted,
    categoryCombinationKey,
  }: {
    categoryCombinationKey: string
    dataNotExtracted: any[]
  }) {
  const folderName = `${PATHS.rawData}/not-extracted/${categoryCombinationKey}`
  const fileName = 'data-not-extracted.json'

  const file = `${folderName}/${fileName}`
  createFolderAndSaveFile(file, dataNotExtracted)
}
