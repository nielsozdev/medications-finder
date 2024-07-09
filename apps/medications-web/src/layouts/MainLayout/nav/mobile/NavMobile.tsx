'use client'

import { useEffect } from 'react'

// import SvgColor from 'src/components/svg-color'
import { usePathname } from 'next/navigation'

import { Drawer, IconButton } from '@mui/material'

import List from '@mui/material/List'

import { type NavProps } from '../types'

import NavList from './NavList'

import { Logo } from '~/components/Logo'
import { Scrollbar } from '~/components/Scrollbar'

import { useBoolean } from '~/hooks/useBoolean'

export function NavMobile({ offsetTop, data }: NavProps) {
  const pathname = usePathname()

  const nav = useBoolean()

  useEffect(() => {
    if (nav.value) {
      nav.onFalse()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <IconButton
        sx={{
          ml: 1,
          ...(offsetTop && {
            color: 'text.primary',
          }),
        }}
        onClick={nav.onTrue}
      >
        {/* <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" /> */}
      </IconButton>

      <Drawer
        open={nav.value}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
        onClose={nav.onFalse}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List disablePadding component="nav">
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  )
}
