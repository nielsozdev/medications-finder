// @mui
import { type BreadcrumbsProps } from '@mui/material/Breadcrumbs'

export interface BreadcrumbsLinkProps {
  href?: string
  icon?: React.ReactElement
  name?: string
}

export interface CustomBreadcrumbsProps extends BreadcrumbsProps {
  action?: React.ReactNode
  activeLast?: boolean
  heading?: string
  links: BreadcrumbsLinkProps[]
  moreLink?: string[]
}
