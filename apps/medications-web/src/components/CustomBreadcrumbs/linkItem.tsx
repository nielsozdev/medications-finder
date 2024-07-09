// @mui
import Link from 'next/link'

import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'

// routes
// import { RouterLink } from 'src/routes/components';
//
import { type BreadcrumbsLinkProps } from './types'

interface Props {
  activeLast?: boolean
  disabled: boolean
  link: BreadcrumbsLinkProps
}

export default function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const { name, href, icon } = link

  const styles = {
    typography: 'body2',
    alignItems: 'center',
    color: 'text.primary',
    display: 'inline-flex',
    ...(disabled &&
      !activeLast && {
      cursor: 'default',
      pointerEvents: 'none',
      color: 'text.disabled',
    }),
  }

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: 'inherit',
            '& svg': { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  )

  if (href) {
    return (
      <MuiLink component={Link} href={href} sx={styles}>
        {renderContent}
      </MuiLink>
    )
  }

  return <Box sx={styles}> {renderContent} </Box>
}
