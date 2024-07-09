import { type Page, type Locator } from 'playwright'

export const getDataFromRows = async (page: Page,
  {
    columns,
    modalDataExtracter,
    rows,
    selectors = [],
  }: {
    columns: string[]
    modalDataExtracter?: any
    rows: Locator[]
    selectors?: any[]

  }) => {
  const result: any = []

  for (let i = 0; i < rows.length; i++) {
    const rowTextRaw = await rows[i].innerText()
    const rowText = rowTextRaw.replace(/\t\t/g, '\t-\t')
    const rowTextArray = rowText.trim().split(/\s{2,}|\t/)

    let data: any = {}
    let modalData: any = {}

    if (modalDataExtracter) {
      const extractedDataModal = await modalDataExtracter(page, { rows, i, selectors })

      modalData = { ...modalData, ...extractedDataModal }
    }

    for (let j = 0; j < columns.length; j++) {
      data[columns[j]] = rowTextArray[j]
    }

    data = { ...data, ...modalData }

    result.push(data)
  }

  console.log('filas con datos extraídos', result.length, '\n')

  return result
}
