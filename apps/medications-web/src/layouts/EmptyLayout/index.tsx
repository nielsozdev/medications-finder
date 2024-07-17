import { HeaderEmpty as Header } from '../_common/HeaderEmpty'

import { Footer } from '~/layouts/_common/Footer'

interface Props {
  children: React.ReactNode
}

export function EmptyLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='flex h-dvh w-dvw flex-col justify-between'>

        {children}
        <Footer />
      </main>
    </>
  )
}
