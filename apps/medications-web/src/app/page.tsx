import { Container } from '@mui/material'

import { AutocompleteInput } from '~/components/AutocompleteInput'
import { LocationSelectors } from '~/components/LocationSelectors'
import { EmptyLayout } from '~/layouts/EmptyLayout'

// export const dynamic = 'force-dynamic'bun start
export default function HomePage() {
  return (
    <EmptyLayout>
      <div className='mt-16 md:mt-32'>
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='mb-14 font-bold relative inline-flex'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                Hampi
              </h1>
              <span className='absolute left-[85%] top-[90%] text-xl font-normal'>Junín</span>
            </div>

            <div className="mb-2 flex  justify-center align-center w-full min-w-[320px] max-w-[600px]">
              <div className="flex flex-1">
                <AutocompleteInput />
              </div>
            </div>
            <div className="flex mt-4 ">
              <LocationSelectors width={150} />
            </div>
          </div>
        </Container>
      </div>

    </EmptyLayout>
  )
}
