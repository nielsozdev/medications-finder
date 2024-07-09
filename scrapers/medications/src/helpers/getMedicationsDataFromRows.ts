// import { type Page } from 'playwright'

// import { getDataFromRow } from '@noz/scrapers-helpers/src/getDataFromRow'
// import { pressButtonNext } from '@noz/scrapers-utils'

// import { config } from '~/config'

// // const resultsSelector = '.table-responsive'
// // const tableRowsSelector = '.table-responsive tbody tr'
// // const modalCellSelector = '.table-responsive tbody tr a'
// // const numberOfRegistersSelectSelector = '.table-responsive select.custom-select'
// // const buttonNextPageSelector = 'ul.pagination li.page-item:last-child a.page-link[aria-label="Next"]'

// interface GetMedicationsDataRows {
//   selectors: any
// }
// export async function getMedicationsDataFromRows (page: Page, { selectors }: GetMedicationsDataRows) {
//   const {
//     resultsSelector,
//     tableRowsSelector,
//     modalCellSelector,
//     numberOfRegistersSelectSelector,
//     buttonNextPageSelector,
//   } = selectors

//   try {
//     let currentPage = 1
//     const maxPages = 0
//     const results: any[] = []

//     do {
//       await page.waitForSelector(resultsSelector, { state: 'visible' })

//       const numberOfRegistersElement = page.locator(numberOfRegistersSelectSelector)

//       await numberOfRegistersElement.selectOption({ value: '3: 100' })

//       const rows = await page.locator(tableRowsSelector).all()

//       const rowsInPage = rows.length

//       if (rowsInPage <= 0) {
//         console.log('❌ No hay datos para extraer')
//         break
//       }

//       // console.log(`⚡Obteniendo ${rowsInPage} registros de la página ${currentPage}/${maxPages} ${':'} - ${estabishmentName} - ${categoryName} - Establecimiento N° ${parseInt(combinationIndex) + 1}/${totalRegistersToExtract} \n`)
//       const dataFromRows: any = await getDataFromRows({ page, url: config.url, rows })

//       results.push(...dataFromRows)
//       const nextPage = currentPage + 1
//       if (nextPage > maxPages) break
//       const paginacionElementWithOnClickEvent = await page.waitForSelector(buttonNextPageSelector)
//       await page.waitForLoadState()
//       await pressButtonNext({ page, element: paginacionElementWithOnClickEvent })

//       await page.waitForLoadState('domcontentloaded')
//       await page.waitForLoadState('networkidle')
//       await page.waitForTimeout(1200)
//       currentPage++
//     } while (currentPage <= maxPages)
//   } catch (err) {

//   }
// }

// export async function getColumnsData (params: { page: Page; selectors: any }) {
//   const { page, selectors } = params
//   const { tableColumnsSelector } = selectors

//   const columnTitles = await getDataFromRow({ page, selector: tableColumnsSelector })

//   return columnTitles
// }

// async function getDataFromRows ({ page, url, rows }) {
//   const columns = await getColumnsData({ page, selectors })
//   for (let i = 0; i < rows.length; i++) {
//     const dataFromRoute = await getResourceFromModalRoute({ page, url, codEstab })
//   }
// }

// function getRowsData ({ page, columns }) {

// }

// async function getResourceFromModalRoute ({ page, url, codEstab }) {
//   const data: any = []

//   console.log('⚡Interceptando datos...')
//   // console.log(`🧪 Extrayendo datos de ${suggestion}...`)

//   const promise = new Promise<void>(async (resolve) => {
//     // await page.route('**/*', async (route) => {
//     await page.route(url.fetchModalResources, async (route) => {
//       if (route.request().method() !== 'POST') {
//         await route.fallback()

//         return
//       }

//       try {
//         const response = await route.fetch()

//         if (response.ok()) {
//           const json = await response.json()
//           // console.log('json', json)
//           console.log(`✍️ ${json.data.length} de ${json.cantidad}`)

//           data.push({ codEstab, data: json })
//         } else {
//           console.log(`😥::Error: ${response.status} ${response.statusText}`)

//           data.push({ codEstab, data: null })
//           // throw new Error(`Error: ${response.status} ${response.statusText}`)
//         }
//       } catch (e: any) {
//         console.error('**************************************************')
//         console.log(`🟥 ::Error: ${e.message}`)

//         data.push({ codEstab, data: [] })

//         // console.log('❌ Data: ', dataForManageError)
//         // console.error('**************************************************')
//       } finally {
//         await route.continue()

//         resolve()
//       }
//     })
//   })

//   const promiseExtract = await promise

//   return {
//     dataExtract: data,
//     promiseExtract,
//   }
// }
