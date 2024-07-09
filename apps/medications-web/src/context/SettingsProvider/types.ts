export type ThemeMode = 'light' | 'dark'
export interface SettingsValueProps {
  themeColorPresets: 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
  themeContrast: 'default' | 'bold'
  themeDirection: 'rtl' | 'ltr'
  themeLayout: 'vertical' | 'horizontal' | 'mini'
  themeMode: ThemeMode
  themeStretch: boolean
}

export type SettingsContextProps = SettingsValueProps & {
  // Reset
  canReset: boolean
  // Direction by lang
  onChangeDirectionByLang: (lang: string) => void
  onClose: VoidFunction
  onReset: VoidFunction
  onToggle: VoidFunction
  // Update
  onUpdate: (name: string, value: string | boolean) => void
  // Drawer
  open: boolean
}
