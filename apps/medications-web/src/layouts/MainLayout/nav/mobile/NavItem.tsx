import RouterLink from 'next/link'

import { Link, ListItemIcon, ListItemText } from '@mui/material'

import { type NavItemMobileProps } from '../types'

import { ListItem } from './styles'

import { Iconify } from '~/ui/Iconify'

export default function NavItem({
  item,
  open,
  active,
  externalLink,
  ...other
}: NavItemMobileProps) {
  const { title, path, icon, children } = item

  const renderContent = (
    <ListItem active={active} {...other}>
      <ListItemIcon> {icon} </ListItemIcon>

      <ListItemText disableTypography primary={title} />

      {!!children && (
        <Iconify
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1 }}
          width={16}
        />
      )}
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
