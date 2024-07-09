// @mui
import { usePathname } from 'next/navigation'

// import { NavSectionVertical } from 'src/components/nav-section'

import Collapse from '@mui/material/Collapse'

// import { listClasses } from '@mui/material/List'
// import { listItemButtonClasses } from '@mui/material/ListItemButton'
// import { listItemTextClasses } from '@mui/material/ListItemText'
import { type NavItemProps } from '../types'

import NavItem from './NavItem'

import { useBoolean } from '~/hooks/useBoolean'

interface NavListProps {
  item: NavItemProps
}

export default function NavList({ item }: NavListProps) {
  const pathname = usePathname()

  const { path, children } = item

  const externalLink = path.includes('http')

  const nav = useBoolean()

  return (
    <>
      <NavItem
        active={pathname === path}
        externalLink={externalLink}
        item={item}
        open={nav.value}
        onClick={nav.onToggle}
      />

      {!!children && (
        <Collapse unmountOnExit in={nav.value}>
          {/* <NavSectionVertical
            data={children}
            sx={{
              [`& .${listClasses.root}`]: {
                '&:last-of-type': {
                  [`& .${listItemButtonClasses.root}`]: {
                    height: 160,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    bgcolor: 'background.neutral',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(/assets/illustrations/illustration_dashboard.png)',
                    [`& .${listItemTextClasses.root}`]: {
                      display: 'none',
                    },
                  },
                },
              },
            }}
          /> */}
        </Collapse>
      )}
    </>
  )
}
