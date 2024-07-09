import fs from 'node:fs'

import { type ExtractedDataResult } from '@noz/medications-core'
import { type UniqueData } from '@noz/medications-core/src/types/bd'
import { clog, createFolderAndSaveFile } from '@noz/utils'

// import { config } from '~/config'
import { PATHS } from '~/constants/paths'

import { processFileData } from './processFileData'
// import { processMaxNumOfExistences } from './processMaxNumOfExistences'

interface ProcessFiles extends UniqueData {
  files: string[]
  path: string
}

export async function processFiles({ files, path, ...restOfParams }: ProcessFiles) {
  try {
    const basePath = `${PATHS.root}/processed/prices`
    let pricesCount = 0
    for (const [idx, file] of Object.entries(files)) {
      const filePath = `${path}/${file}`
      const bufferContent = await fs.promises.readFile(filePath, 'utf-8')
      const dataExtract = JSON.parse(bufferContent) as ExtractedDataResult

      if (!dataExtract) {
        clog.error(`Error leyendo el archivo ${filePath}`)
        continue
      }

      const multiplePrices = await processFileData({
        dataExtract,
        idxFile: `${idx}-${file.replace('.json', '')}`,
        ...restOfParams,
      })

      // const reducedPricesData = await processMaxNumOfExistences(multiplePrices, config.maxNumOfExistences)
      // clog.error(idx, file)
      pricesCount += multiplePrices.length
      await savePrices({
        basePath,
        file,
        data: multiplePrices,
      })
      // await createFolderAndSaveFile(`${basePath}/${file}`, multiplePrices)
      // clog.info('Precios: ', multiplePrices.length)
    }

    console.log('Precios: ', pricesCount)
  } catch (err) {
    throw new Error(' processFiles -Error al procesar los archivos')
  }
}

async function savePrices({ basePath, file, data }) {
  const batchSize = 500
  const ext = '.json'
  let c: number = 0
  for (let i = 0; i < data.length; i += batchSize) {
    const fileNanme = `${file.replace('.json', '')}-${c}${ext}`
    const batchData = data.slice(i, i + batchSize)
    await createFolderAndSaveFile(`${basePath}/${fileNanme}`, batchData)
    c++
  }
}
