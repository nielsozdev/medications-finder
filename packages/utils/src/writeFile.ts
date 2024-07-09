import fs from 'node:fs'
import util from 'util'

const writeFileAsync = util.promisify(fs.writeFile)

interface Config {
  varName?: string
}

const SUPPORTED_FILE_TYPES = ['json', 'js', 'ts']

export async function writeFile(path: string, data: any, { varName = 'data' }: Config = {}) {
  try {
    const [fileExtension] = path.split('.').reverse()
    const fileType = fileExtension.toLowerCase() ?? ''

    if (!SUPPORTED_FILE_TYPES.includes(fileType)) {
      throw new Error(`❌ Tipo de archivo no soportado: ${fileType} / ${path}`)
    }

    const dataToWrite = fileType === 'json'
      ? generateJsonString(data)
      : generateExportBody(data, varName)

    await writeFileAsync(path, dataToWrite, { encoding: 'utf-8' })

    console.info(`📂💾 Datos guardados en: ${path}`)
  } catch (err) {
    console.error(err)
    throw new Error(`🚧🚫 No se pudo guardar los datos en: ${path}. Error: ${(err as Error).message}`)
  }
}

function generateJsonString<T>(data: T) {
  return JSON.stringify(data, null, 2)
}

function generateExportBody<T>(data: T, varName: string) {
  return `export const ${varName} = ${JSON.stringify(data, null, 2)}`
}

// import fs from 'fs/promises'

// interface Config {
//   varName?: string
// }

// const SUPPORTED_FILE_TYPES = ['json', 'js', 'ts']

// export async function writeFile (path: string, data: any, { varName = 'data' }: Config = {}) {
//   try {
//     const [fileExtension] = path.split('.').reverse()
//     const fileType = fileExtension.toLowerCase() ?? ''

//     if (!SUPPORTED_FILE_TYPES.includes(fileType)) {
//       throw new Error(`❌ Tipo de archivo no soportado: ${fileType} / ${path}`)
//     }

//     const dataToWrite = fileType === 'json'
//       ? generateJsonString(data)
//       : generateExportBody(data, varName)

//     await fs.writeFile(path, dataToWrite, { encoding: 'utf-8' })

//     console.info(`📂💾 Datos guardados en: ${path}`)
//     return true
//   } catch (err) {
//     console.error(err)
//     throw new Error(`🚧🚫 No se pudo guardar los datos en: ${path}. Error: ${(err as Error).message}`)
//   }
// }

// function generateJsonString<T> (data: T) {
//   return JSON.stringify(data, null, 2)
// }

// function generateExportBody<T> (data: T, varName: string) {
//   return `export const ${varName} = ${JSON.stringify(data, null, 2)}`
// }
