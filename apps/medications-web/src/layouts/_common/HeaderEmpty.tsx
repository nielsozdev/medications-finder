'use client'

import RouterLink from 'next/link'

import {
  Container, AppBar,
  Box,
  Link,
  Stack,
  Toolbar,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'

import { HEADER } from '../config-layout'

import { HeaderShadow } from './HeaderShadow'
// import SettingsButton from './settings-button'

import { DarkModeButton } from '~/components/DarkModeButton'
import { Logo } from '~/components/Logo'
import { useOffSetTop } from '~/hooks/useOffSetTop'
import { bgBlur } from '~/theme/css'
import { Iconify } from '~/ui/Iconify'

export function HeaderEmpty() {
  const theme = useTheme()

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP)

  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar
        sx={{
          justifyContent: 'flex-end',
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
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <Box>
            <Logo />
          </Box>
          {/* <Logo /> */}

          <Stack alignItems="center" direction="row" spacing={1}>
            <DarkModeButton />
            {/* <SettingsButton /> */}

            <Link
              color="inherit"
              component={RouterLink}
              href={'/sugerencias'}
              sx={{ typography: 'subtitle2' }}
            >
              <Iconify icon="mingcute:message-4-fill" width={25} sx={{ color: 'text.primary' }} />
            </Link>
          </Stack>
        </Container>

      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  )
}
