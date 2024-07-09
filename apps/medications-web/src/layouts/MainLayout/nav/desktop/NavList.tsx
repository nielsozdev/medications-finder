'use client'

import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

import { Fade, Portal, Stack } from '@mui/material'

import { NavItem, NavItemDashboard } from './NavItem'
import { StyledMenu, StyledSubheader } from './styles'

import { useActiveLink } from '~/hooks/routes/useActiveLink'
import { useBoolean } from '~/hooks/useBoolean'
import { type NavItemProps } from '~/layouts/MainLayout/nav/types'

interface NavListProps {
  item: NavItemProps
  offsetTop: boolean
}

export function NavList({ item, offsetTop }: NavListProps) {
  const { path, children } = item

  const pathname = usePathname()
  const nav = useBoolean()
  const active = useActiveLink(path, false)

  const externalLink = path.includes('http')

  useEffect(() => {
    if (nav.value) {
      nav.onFalse()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue()
    }
  }

  return (
    <>
      <NavItem
        active={active}
        externalLink={externalLink}
        item={item}
        offsetTop={offsetTop}
        open={nav.value}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
      />

      {!!children && nav.value && (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              sx={{ display: 'flex' }}
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
            >
              {children.map((list) => (
                <NavSubList
                  key={list.subheader}
                  isDashboard={list.subheader === 'Dashboard'}
                  items={list.items}
                  subheader={list.subheader}
                  onClose={nav.onFalse}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  )
}

interface NavSubListProps {
  isDashboard: boolean
  items: NavItemProps[]
  onClose: VoidFunction
  subheader: string
}

function NavSubList({ items, isDashboard, subheader, onClose }: NavSubListProps) {
  const pathname = usePathname()

  return (
    <Stack
      alignItems="flex-start"
      spacing={2}
      sx={{
        flexGrow: 1,
        ...(isDashboard && {
          maxWidth: 540,
        }),
      }}
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map((item) => isDashboard
        ? <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        : (
          <NavItem
            key={item.title}
            subItem
            active={pathname === `${item.path}/`}
            item={item}
            onClick={onClose}
          />
          // eslint-disable-next-line indent
          )

      )}
    </Stack>
  )
}
