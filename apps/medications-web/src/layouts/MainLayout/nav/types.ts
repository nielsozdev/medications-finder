import { type ListItemButtonProps } from '@mui/material/ListItemButton'

// ----------------------------------------------------------------------

export interface NavItemProps {
  children?: Array<{
    items: Array<{
      path: string
      title: string
    }>
    subheader: string
  }>
  icon?: React.ReactElement
  path: string
  title: string
}

export interface NavItemDesktopProps extends ListItemButtonProps {
  active?: boolean
  externalLink?: boolean
  item: NavItemProps
  offsetTop?: boolean
  open?: boolean
  subItem?: boolean
}

export interface NavItemMobileProps extends ListItemButtonProps {
  active?: boolean
  externalLink?: boolean
  item: NavItemProps
  open?: boolean
}

export interface NavProps {
  data: NavItemProps[]
  offsetTop: boolean
}
