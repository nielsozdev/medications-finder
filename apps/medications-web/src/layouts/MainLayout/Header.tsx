import { AppBar, Box, Container, Toolbar } from '@mui/material'

import { useTheme } from '@mui/material/styles'

import { AutocompleteInput } from '~/components/AutocompleteInput'
import { DarkModeButton } from '~/components/DarkModeButton'
import LocationsPopover from '~/components/HeaderLocationSelectors/LocationsPopover'
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
    <>
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
            <Logo />
            <Box
              sx={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                mr: 2,
                ml: {
                  xs: 0,
                  md: 2,
                },
              }}
            >
              <LocationsPopover width={105} />
              <AutocompleteInput />
            </Box>

            <DarkModeButton />
          </Container>
        </Toolbar>

        {offsetTop && <HeaderShadow />}
      </AppBar>
    </>
  )
}
