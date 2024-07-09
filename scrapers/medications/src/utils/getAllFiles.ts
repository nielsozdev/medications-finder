import fs from 'node:fs'

export function getAllFiles(path: string, ext?: string) {
  try {
    const files = fs.readdirSync(path)

    if (ext) return files.filter((file) => file.endsWith(ext))

    return files
  } catch (error) {
    console.error('Error al obtener los archivos:', error)
    throw new Error('Error al obtener los archivos')
  }
}
