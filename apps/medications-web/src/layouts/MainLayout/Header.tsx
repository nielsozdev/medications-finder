import { AppBar, Box, Container, Stack, Toolbar } from '@mui/material'

import { useTheme } from '@mui/material/styles'

// import { navConfig } from './config-navigation'
// import { NavDesktop } from './nav/desktop/NavDesktop'
// import { NavMobile } from './nav/mobile/NavMobile'

import { AutoCompleteSearcherInput } from '~/components/AutocompleteSearcherInput'
import { DarkModeButton } from '~/components/DarkModeButton'
import { HeaderLocationSelectors } from '~/components/HeaderLocationSelectors'
import { Logo } from '~/components/Logo'

import { useOffSetTop } from '~/hooks/useOffSetTop'
import { HeaderShadow } from '~/layouts/_common/HeaderShadow'
import { HEADER } from '~/layouts/config-layout'
import { bgBlur } from '~/theme/css'

export function Header() {
  const theme = useTheme()

  // const mdUp = useResponsive('up', 'md')

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP)

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.paper,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>

          {/* <Box>
            <IconButton
              aria-label='open drawer'
              color='inherit'
              edge='start'
              size='large'
              // sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

          </Box> */}
          <Box>
            <Logo />
          </Box>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', px: 2 }}>
            <AutoCompleteSearcherInput />
            <HeaderLocationSelectors width={105} />
          </Box>

          {/* {mdUp && <NavDesktop data={navConfig} offsetTop={offsetTop} />} */}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
            {/* <Button href={'paths.minimalUI'} rel="noopener" target="_blank" variant="contained">
              Purchase Now
              </Button> */}

            {/* {mdUp && <LoginButton />} */}

            <DarkModeButton />
            {/* <SettingsButton
              sx={{
                ml: { xs: 1, md: 0 },
                mr: { md: 2 },
              }}
            /> */}

            {/* {!mdUp && <NavMobile data={navConfig} offsetTop={offsetTop} />} */}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  )
}
