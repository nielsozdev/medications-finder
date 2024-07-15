'use client'
import { useEffect } from 'react'

import { Box } from '@mui/material'

// import { Scrollbar } from '../Scrollbar'

import { MedicationItem } from './MedicationItem'
import { sortByPrice } from './sortByPrice'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'
import { useResponsive } from '~/hooks/useResponsive'
import { EmptyContent } from '~/ui/EmptyContent'

export function DataTable({ data }: any) {
  const {
    setMedicationStatus,
    subFamilyFilterSelected,
    medicationFilterSelected,
    productFilterSelected,
    orderSelected,
  } = useAppStore((state) => state)

  const mdUp = useResponsive('up', 'md')

  useEffect(() => {
    setMedicationStatus('success')
  }, [data, setMedicationStatus])

  const dataFiltered = data
    .filter((subFamily: any) => subFamily.subFamily === subFamilyFilterSelected || subFamilyFilterSelected === 'Todos')
    .filter((medication: any) => medication.medication === medicationFilterSelected || medicationFilterSelected === 'Todos')
    .filter((product: any) => product.productName === productFilterSelected || productFilterSelected === 'Todos')

  const dataOrdered = sortByPrice(dataFiltered, orderSelected)

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: mdUp ? 'repeat(auto-fit, minmax(400px, 1fr))' : '1fr',
          gap: 2,
          mt: 3,
        }}
      >
        {
          // data
          // .slice(
          //   table.page * table.rowsPerPage,
          //   table.page * table.rowsPerPage + table.rowsPerPage
          // )
          dataOrdered
            .map((item: any) => <MedicationItem key={item.id} item={item} />)
        }
      </Box>

      { data.length === 0 && (
        <EmptyContent
          filled
          sx={{ py: 10, width: '100%' }}
          title="Sin resultados"
        />
      ) }
    </>
  )
}
