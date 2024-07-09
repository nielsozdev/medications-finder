import { HeaderEmpty as Header } from '../_common/HeaderEmpty'

interface Props {
  children: React.ReactNode
}

export function EmptyLayout({ children }: Props) {
  return (
    <>
      <Header />

      {children}
    </>
  )
}
