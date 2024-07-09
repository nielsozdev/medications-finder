import { type Metadata } from 'next'

export const rootMetadata: Metadata = {
  title: 'Hampi',
  description: 'Buscador de medicamentos',
  openGraph: {
    title: 'Hampi',
    description: 'Buscador de medicamentos',
    url: 'https://hampi.com',
    images: [
      {
        alt: 'Hampi',
        height: 630,
        url: 'https://hampi.com/og-image.png',
        width: 1200,
      },
    ],
  },
}
