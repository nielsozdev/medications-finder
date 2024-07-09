import { m } from 'framer-motion'

import Badge, { badgeClasses } from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { type SxProps, type Theme } from '@mui/material/styles'

import { useSettingsContext } from '~/context/SettingsProvider/useSettingsContext'
import { varHover } from '~/ui/animate/variants/actions'
import { Iconify } from '~/ui/Iconify'

interface Props {
  sx?: SxProps<Theme>
}

export function SettingsButton({ sx }: Props) {
  const settings = useSettingsContext()

  return (
    <Badge
      color="error"
      invisible={!settings.canReset}
      sx={{
        [`& .${badgeClasses.badge}`]: {
          top: 8,
          right: 8,
        },
        ...sx,
      }}
      variant="dot"
    >
      <Box
        animate={{
          rotate: [0, settings.open ? 0 : 360],
        }}
        component={m.div}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <IconButton
          aria-label="settings"
          component={m.button}
          sx={{
            width: 40,
            height: 40,
          }}
          variants={varHover(1.05)}
          whileHover="hover"
          whileTap="tap"
          onClick={settings.onToggle}
        >
          <Iconify icon="solar:settings-bold-duotone" width={24} />
        </IconButton>
      </Box>
    </Badge>
  )
}
