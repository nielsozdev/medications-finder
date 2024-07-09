import { Box, Typography, Breadcrumbs, Stack } from '@mui/material'

import { type Theme, type SxProps } from '@mui/material/styles'

import LinkItem from './linkItem'

interface CustomBreadcrumbsProps {
  // action?: React.ReactNode
  activeLast?: boolean
  heading?: string
  links: Array<{
    href?: string
    name: string
  }>
  moreLink?: string
  sx?: SxProps<Theme>
}

export function CustomBreadcrumbs(props: CustomBreadcrumbsProps) {
  const { links, heading, moreLink, activeLast, sx, ...other } = props

  const lastLink = links[links.length - 1].name

  return (
    <Stack alignItems="center" direction="row">
      <Box sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h4">
          {heading && (
            <Typography gutterBottom variant="h4">
              {heading}
            </Typography>
          )}

        </Typography>

        {/* BREADCRUMBS */}
        {!!links.length && (
          <Breadcrumbs separator={<Separator />} {...other}>
            {links.map((link) => (
              <LinkItem
                key={link.name ?? ''}
                activeLast={activeLast}
                disabled={link.name === lastLink}
                link={link}
              />
            ))}
          </Breadcrumbs>
        )}
      </Box>

      {/* {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>} */}
    </Stack>
  )
}

function Separator() {
  return (
    <Box
      component="span"
      sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }}
    />
  )
}
