import { processResultsDataTable } from './processResultsDataTable'
import { Results } from './Results'

import { getMedicationPrices } from '~/actions/medicationPrices'
// import { CustomBreadcrumbs } from '~/components/CustomBreadcrumbs'

interface ResultsableProps {
  department: string
  district?: string
  province?: string
  query: string
}
export async function ResultsTable(props: ResultsableProps) {
  const { query, department, district, province } = props

  const data = await getMedicationPrices({
    department,
    district,
    province,
    query,
    page: 1,
    pageSize: 10,
  })

  const { productPrices, ...dataFilters } = processResultsDataTable(data)

  return (<Results dataFilters={dataFilters} productPrices={productPrices} />)
}
