'use client'
import { useMemo } from 'react'

import { CssBaseline } from '@mui/material'
import merge from 'lodash/merge'

import { createTheme, ThemeProvider as MuiThemeProvider, type ThemeOptions } from '@mui/material/styles'

import { useSettingsContext } from '~/context/SettingsProvider/useSettingsContext'
import { customShadows } from '~/theme/custom-shadows'
import { darkMode } from '~/theme/options/dark-mode'
import { componentsOverrides } from '~/theme/overrides'
import { palette } from '~/theme/palette'
import { presets } from '~/theme/presets'
import { shadows } from '~/theme/shadows'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const settings = useSettingsContext()
  const darkModeOption = darkMode(settings.themeMode)
  const presetsOption = presets('blue')
  // const presetsOption = presets(settings.themeColorPresets)

  const baseOption = useMemo(
    () => ({
      palette: palette('light'),
      shadows: shadows('light'),
      customShadows: customShadows('light'),
      // typography,
      shape: { borderRadius: 8 },
    }),

    []
  )
  const memoizedValue = useMemo(
    () => merge(
      // Base
      baseOption,
      // Direction: remove if not in use
      // directionOption,
      // Dark mode: remove if not in use
      darkModeOption,
      // Presets: remove if not in use
      presetsOption
      // Contrast: remove if not in use
      // contrastOption.theme
    ),
    [
      baseOption,
      //  directionOption,
      darkModeOption,
      presetsOption,
      // contrastOption.theme
    ]
  )

  const theme = createTheme(memoizedValue as ThemeOptions)
  theme.components = merge(componentsOverrides(theme))

  const memoizedTheme = useMemo(
    () => createTheme(theme),
    [theme]
  )

  return (
    <MuiThemeProvider theme={memoizedTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
