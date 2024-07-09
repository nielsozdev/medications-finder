'use client'

import { usePathname } from 'next/navigation'

import { Box, Container } from '@mui/material'

import { Footer } from './Footer'
import { Header } from './Header'

interface Props {
  children: React.ReactNode
}

export function MainLayout({ children }: Props) {
  const pathname = usePathname()

  const isHome = pathname === '/'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 4 }}>
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}
