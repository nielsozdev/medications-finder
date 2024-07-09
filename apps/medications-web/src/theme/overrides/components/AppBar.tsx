import { type Theme } from '@mui/material/styles'

export function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },

      styleOverrides: {
        root: {
          // boxShadow: 'none',
          boxShadow: theme.customShadows.dropdown,

          borderColor: 'currentColor',

        },
      },
    },
  }
}
