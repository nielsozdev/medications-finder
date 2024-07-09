import fs from 'fs/promises'

export async function getInfoToExtract({ locationsListFilePath, medicationsListFilePath }: { locationsListFilePath: string; medicationsListFilePath: string }) {
  try {
    const locationsList = await readFile(locationsListFilePath)
    const medicationsList = await readFile(medicationsListFilePath)

    return { locationsList, medicationsList }
  } catch (error) {
    console.error('Error al obtener información para extraer:', error)
    throw new Error()
  }
}

async function readFile(filePath: string): Promise<string[]> {
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8')

    return JSON.parse(jsonData)
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error)
    throw new Error()
  }
}
