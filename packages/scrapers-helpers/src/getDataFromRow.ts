import { type Page } from 'playwright'

export const getDataFromRow = async (page: Page, { selector }: { selector: string }) => {
  const columns = await page.locator(selector).all()

  const data: any[] = []

  // TODO: probar con otros metodos de iteración
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i]
    const columnText = await column.innerText()
    const cleanColumnText = cleanString(columnText)

    data.push(cleanColumnText)
  }

  return data.flat()
}

// TODO: Extraer a un archivo de utilidades
function cleanString (str: string) {
  return str.trim().split(/\s{2,}|\t/)
}
