// import fs from 'fs'

// export async function asyncReadFile<T>(filePath: string): Promise<T> {
//   try {
//     const buffferContent = await fs.promises.readFile(filePath, 'utf-8')

//     return JSON.parse(buffferContent)
//   } catch (error) {
//     console.error('Error al leer el archivo JSON:', error)
//     throw new Error('Error al leer el archivo JSON:\n' + error.message)
//   }
// }
