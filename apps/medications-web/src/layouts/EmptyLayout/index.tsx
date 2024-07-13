import { HeaderEmpty as Header } from '../_common/HeaderEmpty'

import { Iconify } from '~/ui/Iconify'

interface Props {
  children: React.ReactNode
}

export function EmptyLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='flex h-dvh w-dvw flex-col justify-between'>

        {children}
        <div className='my-8 flex text-center'>
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
      </main>
    </>
  )
}
