import RouterLink from 'next/link'

// import { paths } from 'src/routes/paths'

import AppBar from '@mui/material/AppBar'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

import { HEADER } from '../config-layout'

import { HeaderShadow } from './HeaderShadow'
import { SettingsButton } from './SettingsButton'

import { Logo } from '~/components/Logo'
import { useOffSetTop } from '~/hooks/useOffSetTop'
import { bgBlur } from '~/theme/css'

export function HeaderSimple() {
  const theme = useTheme()

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP)

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />

        <Stack alignItems="center" direction="row" spacing={1}>
          <SettingsButton />

          <Link
            color="inherit"
            component={RouterLink}
            href={'/sugerencias'}
            sx={{ typography: 'subtitle2' }}
          >
            Sugerencias
          </Link>
        </Stack>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  )
}
