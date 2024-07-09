'use client'

import { setTheme } from '~/actions/setTheme'
import { useSettingsContext } from '~/context/SettingsProvider/useSettingsContext'
import { SunIcon, MoonIcon } from '~/icons'

export function DarkModeButton() {
  const settings = useSettingsContext()

  const handleClick = () => {
    setTheme(settings.themeMode === 'light' ? 'dark' : 'light')
    settings.onUpdate('themeMode', settings.themeMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      className='size-8 flex items-center h-auto cursor-pointer'
      onClick={handleClick}
    >
      {settings.themeMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </div>

  )
}
