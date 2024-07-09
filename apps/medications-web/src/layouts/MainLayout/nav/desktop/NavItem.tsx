import { forwardRef } from 'react'

import RouterLink from 'next/link'

import { m } from 'framer-motion'

import Box from '@mui/material/Box'
import CardActionArea from '@mui/material/CardActionArea'
import Link, { type LinkProps } from '@mui/material/Link'

import { type NavItemDesktopProps, type NavItemProps } from '../types'

import { ListItem } from './styles'

import { Iconify } from '~/ui/Iconify'

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  ({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref) => {
    const { title, path, children } = item

    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        active={active}
        offsetTop={offsetTop}
        open={open}
        subItem={subItem}
        {...other}
      >
        {title}

        {!!children && <Iconify icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} width={16} />}
      </ListItem>
    )

    // External link
    if (externalLink) {
      return (
        <Link href={path} rel="noopener" target="_blank" underline="none">
          {renderContent}
        </Link>
      )
    }

    // Has child
    if (children) {
      return renderContent
    }

    // Default
    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    )
  }
)

NavItem.displayName = 'NavItem'

interface NavItemDashboardProps extends LinkProps {
  item: NavItemProps
}

export function NavItemDashboard({ item, sx, ...other }: NavItemDashboardProps) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
          whileHover="hover"
          whileTap="tap"
        >
          <Box
            alt="illustration_dashboard"
            component="img"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  )
}
