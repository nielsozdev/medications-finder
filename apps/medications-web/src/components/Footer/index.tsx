'use client'
import RouterLink from 'next/link'

import {
  Box,
  Divider,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'

import { alpha } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'

import { _socials } from '~/data/socials'
import { Iconify } from '~/ui/Iconify'

const LINKS = [
  // {
  //   headline: 'Minimal',
  //   children: [{ name: 'Contáctame', href: paths.contact }],
  // },
  // {
  //   headline: 'Legal',
  //   children: [],
  // },
  {
    headline: 'Contácto',
    children: [{ name: 'nielsoz.dev@gmail.com', href: '#' }],
  },
]

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        {/* <Logo sx={{ mb: 3 }} /> */}

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={6}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              Este sitio web ha sido desarrollado exclusivamente como parte de un proyecto personal.
              Sirve como muestra de mis habilidades en diseño y desarrollo web, sin propósitos comerciales.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {_socials.map((social) => (
                <IconButton
                  key={social.name}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                >
                  <Iconify color={social.color} icon={social.icon} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}
