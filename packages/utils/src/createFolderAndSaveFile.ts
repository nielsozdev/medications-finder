import { clog } from './clog.js'
import { createFolder } from './createFolder'
import { writeFile } from './writeFile'

export async function createFolderAndSaveFile(path: string, data: any, options?: { varName: string }) {
  clog.success('...Guardando datos...')
  try {
    const folder = path.split('/').slice(0, -1).join('/')

    await createFolder(folder)
    await writeFile(path, data, options)

    return true
  } catch (err) {
    console.error(err)
    throw new Error(`🚧🚫 No se pudo guardar los datos en: ${path}. Error: ${(err as Error).message}`)
  }
}
