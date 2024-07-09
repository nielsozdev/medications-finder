import { useContext } from 'react'

import { SettingsContext } from './SettingsContext'

export const useSettingsContext = () => {
  const settingsContext = useContext(SettingsContext)

  if (!settingsContext) throw new Error('useSettingsContext must be use inside SettingsProvider')

  return settingsContext
}
