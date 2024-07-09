import { EmptyLayout } from '~/layouts/EmptyLayout'
import { Iconify } from '~/ui/Iconify'

import { AutoCompleteSearcherInput } from '~/components/AutocompleteSearcherInput'
import { LocationSelectors } from '~/components/LocationSelectors'

// export const dynamic = 'force-dynamic'
export default function HomePage() {
  return (
    <EmptyLayout>
      <main className='flex w-full flex-row justify-between min-h-screen'>
        <div className='flex flex-col mt-[-200px] items-center justify-center container mx-auto'>
          <h1 className='text-4xl lg:text-7xl sm:text-5xl md:text-6xl mb-14 font-bold relative'>
            Hampi
            <span className='absolute left-[88%] top-[90%] text-xl font-normal'>Junín</span>
          </h1>

          <div className="mb-2 flex  justify-center align-center w-full max-w-[584px]">
            <div className="flex flex-1">
              <AutoCompleteSearcherInput />
            </div>
          </div>
          <LocationSelectors width={150} />
        </div>
      </main>
      <div className='text-center mb-4 fixed bottom-0 left-0 right-0 w-full'>

        <div className='flex flex-col items-center justify-center container mx-auto'>
          <span className='text-xs'>Desarrollado por</span>
          <a
            className=' flex items-center justify-center  gap-2 '
            href="https://www.linkedin.com/in/nielsOliveraZurita"
            rel="noreferrer"
            target="_blank"
          >
            <Iconify icon="logos:linkedin-icon" />
            <span className="font-semibold">Niels Olivera Zurita</span>
          </a>
        </div>
      </div>
    </EmptyLayout>
  )
}
