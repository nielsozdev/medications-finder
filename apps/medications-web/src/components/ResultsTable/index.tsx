import { DataTable } from './DataTable'
import { processResultsDataTable } from './processResultsDataTable'

import { getMedicationPrices } from '~/actions/medicationPrices'
import { CustomBreadcrumbs } from '~/components/CustomBreadcrumbs'

interface ResultsableProps {
  department: string
  district?: string
  province?: string
  query: string
}
const linksList = [
  { name: 'Inicio', href: 'paths.dashboard.root' },
  {
    name: 'Product',
    href: 'paths.dashboard.product.root',
  },
  { name: 'List' },
]
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

  const { productPrices } = processResultsDataTable(data)

  return (
    <>
      <CustomBreadcrumbs links={linksList} />
      <DataTable data={productPrices} />
    </>
  )
}
