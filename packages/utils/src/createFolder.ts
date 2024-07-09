import fs from 'node:fs'
import path from 'path'

export async function createFolder(folder: string) {
  const separatePath = folder.split('/')

  for (let i = 0; i < separatePath.length; i++) {
    const folderPath = separatePath.slice(0, i).join('/')
    const pathname = path.join(folderPath, separatePath[i])

    if (!fs.existsSync(pathname)) {
      console.info(`📂 Creando carpeta: ${pathname}`)
      fs.mkdirSync(pathname)
      console.info(`Carpeta ${pathname} creada`)
    }
  }

  return await new Promise((resolve, reject) => resolve('📂 Carpeta creada correctamente'))
}
