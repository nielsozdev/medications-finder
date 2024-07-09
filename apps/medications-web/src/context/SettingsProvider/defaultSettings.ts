// import { cookies } from 'next/headers'

import { type SettingsValueProps, type ThemeMode } from '~/context/SettingsProvider/types'

// const cookieStore = cookies()
// const themeMode = (cookieStore.get('themeMode')?.value ?? 'light') as ThemeMode

export const defaultSettings = ({ themeMode }: { themeMode: ThemeMode }): SettingsValueProps => {
  return {
    themeMode, // 'light' | 'dark'
    themeDirection: 'ltr', //  'rtl' | 'ltr'
    themeContrast: 'default', // 'default' | 'bold'
    themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
    themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
    themeStretch: false,
  }
}
