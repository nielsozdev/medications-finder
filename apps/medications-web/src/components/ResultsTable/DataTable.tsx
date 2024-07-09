'use client'
import { useEffect } from 'react'

import { Box } from '@mui/material'

// import { Scrollbar } from '../Scrollbar'

// import ProductTableRow from './MedicationItem'

import { MedicationItem } from './MedicationItem'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'
import { EmptyContent } from '~/ui/EmptyContent'

export function DataTable({ data }: any) {
  const { setMedicationStatus } = useAppStore((state) => state)

  useEffect(() => {
    setMedicationStatus('success')
  }, [data, setMedicationStatus])

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 2,
          mt: 3,
        }}
      >
        {data
          // .slice(
          //   table.page * table.rowsPerPage,
          //   table.page * table.rowsPerPage + table.rowsPerPage
          // )
          .map((medication: any) => (
            <MedicationItem
              key={medication.id}
              item={medication}
            />
          ))}
      </Box>

      {
        data.length === 0 && (
          <EmptyContent
            filled
            sx={{
              py: 10,
              width: '100%',
            }}
            title="Sin resultados"
          />
        )
      }
    </>
  )
}
