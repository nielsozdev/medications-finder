'use client'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { SettingsContext } from './SettingsContext'
import { type SettingsValueProps } from './types'

import { setTheme } from '~/actions/setTheme'
import { ThemeProvider } from '~/context/ThemeProvider'
import { useLocalStorage } from '~/hooks/useLocalStorage'

interface SettingsProviderProps {
  children: React.ReactNode
  defaultSettings: SettingsValueProps
}

export function SettingsProvider({ children, defaultSettings }: SettingsProviderProps) {
  // const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings)
  const [openDrawer, setOpenDrawer] = useState(false)
  useEffect(() => {
    setTheme(defaultSettings.themeMode)
  }, [defaultSettings.themeMode])
  // const darkModeOption = darkMode(settings.themeMode)

  const onUpdate = useCallback((name: string, value: string | boolean) => {
    setSettings((prevState: SettingsValueProps) => ({ ...prevState, [name]: value }))
  }, [setSettings])
  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false)
  }, [])
  // const theme = useMemo(
  //   () => createTheme({
  //     palette: {
  //       mode: settings.themeMode,
  //     },
  //   }),
  //   [settings.themeMode]
  // )

  const memoizedValue = useMemo(() => ({
    ...settings,
    onUpdate,
    // // Direction
    // onChangeDirectionByLang,
    // // Reset
    // canReset,
    // onReset,
    // // Drawer
    open: openDrawer,
    onToggle: onToggleDrawer,
    onClose: onCloseDrawer,
  }),
  [
    // onReset,
    onUpdate,
    settings,
    // canReset,
    openDrawer,
    onCloseDrawer,
    onToggleDrawer,
    // onChangeDirectionByLang,
  ]
  )

  return (
    <SettingsContext.Provider value={memoizedValue}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  )
}
