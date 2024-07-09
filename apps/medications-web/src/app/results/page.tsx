import { Suspense } from 'react'

import { Box } from '@mui/material'

import { HEADER } from '~/layouts/config-layout'

import { ResultsTable } from '~/components/ResultsTable'
import TableSkeleton from '~/components/skeleton/TableSkeleton'

interface ResultsPageProps {
  searchParams?:
  {
    department: string
    district?: string
    province?: string
    query?: string
  }
}
// export const dynamic = 'force-dynamic'

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const query = searchParams?.query ?? ''
  const department = searchParams?.department ?? ''
  const district = searchParams?.district ?? ''
  const province = searchParams?.province ?? ''

  return (
    <>
      {query && (
        <Suspense key={`${query}-${department}-${province}-${district}`} fallback={<TableSkeleton /> }>
          <ResultsTable
            query={query}
            department={department}
            district={district}
            province={province}
          />
        </Suspense>
      )}
      {
        !query && (
          <Box
            sx={{
              height: {
                xs: `calc(100dvh - ${HEADER.H_MOBILE + 50}px)`,
                md: `calc(100dvh - ${HEADER.H_DESKTOP + 40}px)`,
              },
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItmes: 'center',

            } }
          >

            <div className='flex w-full flex-col items-center justify-center'>
              <h1 className='text-2xl font-bold'>Buscar medicamentos</h1>
              <div className='text-sm text-gray-500'>Ingrese una consulta para buscar medicamentos</div>
            </div>
          </Box>
        )
      }
    </>

  )
}
