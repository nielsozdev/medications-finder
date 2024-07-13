import { Container } from '@mui/material'

import { AutocompleteInput } from '~/components/AutocompleteInput'
import { LocationSelectors } from '~/components/LocationSelectors'
import { EmptyLayout } from '~/layouts/EmptyLayout'

// export const dynamic = 'force-dynamic'bun start
export default function HomePage() {
  return (
    <EmptyLayout>
      <main className='flex w-full flex-row justify-between min-h-screen'>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <div className='h-full w-full grid place-items-center'>
            <div className=' text-center'>
              <h1 className='text-2xl lg:text-6xl sm:text-3xl md:text-4xl mb-14 font-bold relative'>
                Hampi
                <span className='absolute left-[75%] top-[90%] text-xl font-normal'>Junín</span>
              </h1>

              <div className="mb-2 flex  justify-center align-center w-full max-w-[584px]">
                <div className="flex flex-1">
                  <AutocompleteInput />
                </div>
              </div>
              <div className="flex mt-4 ">
                <LocationSelectors width={150} />
              </div>
            </div>
          </div>
        </Container>
      </main>

    </EmptyLayout>
  )
}
