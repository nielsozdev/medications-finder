import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

import '~/styles/algolia.css'
import '~/styles/globals.css'

import { AppStoreProvider } from '~/context/AppStoreProvider'
import { SettingsProvider } from '~/context/SettingsProvider'
import { defaultSettings } from '~/context/SettingsProvider/defaultSettings'
import { type ThemeMode } from '~/context/SettingsProvider/types'
import { rootMetadata } from '~/data/metadata/root-metadata'
import MotionLazy from '~/ui/animate/MotionLazy'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = rootMetadata

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = cookies()
  const themeMode = cookieStore.get('themeMode')?.value as ThemeMode ?? 'light'

  return (
    <html lang='es'>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <SettingsProvider defaultSettings={defaultSettings({ themeMode })}>
            <MotionLazy>
              <AppStoreProvider>
                {children}
              </AppStoreProvider>
            </MotionLazy>
          </SettingsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
