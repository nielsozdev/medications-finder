import { forwardRef } from 'react'

// import RouterLink from 'next/link'
import RouterLink from 'next/link'

import { Typography } from '@mui/material'

import Box, { type BoxProps } from '@mui/material/Box'
import Link from '@mui/material/Link'

import { useSettingsContext } from '~/context/SettingsProvider/useSettingsContext'
import { useResponsive } from '~/hooks/useResponsive'

export interface LogoProps extends BoxProps {
  disabledLink?: boolean
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    // const theme = useTheme()
    const settings = useSettingsContext()

    // const PRIMARY_LIGHT = theme.palette.primary.light

    // const PRIMARY_MAIN = theme.palette.primary.main

    // const PRIMARY_DARK = theme.palette.primary.dark

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );
    const mdUp = useResponsive('up', 'md')

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          // width: 40,
          height: 40,
          // display: 'flex',
          color: settings.themeMode === 'light' ? 'black' : 'white',
          ...sx,
        }}
        {...other}
      >
        <Typography
          fontSize={24}
          fontWeight={700}
          letterSpacing={0}
          // lineHeight={1}
          sx={{
            color: settings.themeMode === 'light' ? 'black' : 'white',
            display: 'flex',
            // fill: 'currentColor',
            height: '1em',
            // width: '1em',
          }}
          textTransform="none"
        >
          {mdUp ? 'Hampi' : 'H'}
        </Typography>
      </Box>
    )

    if (disabledLink) {
      return logo
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    )
  }
)
Logo.displayName = 'Logo'
