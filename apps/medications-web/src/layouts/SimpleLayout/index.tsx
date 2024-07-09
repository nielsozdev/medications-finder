import { HeaderSimple as Header } from '~/layouts/_common/HeaderSimple'

interface Props {
  children: React.ReactNode
}

export function SimpleLayout({ children }: Props) {
  return (
    <>
      <Header />

      {children}
    </>
  )
}
