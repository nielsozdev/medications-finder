import { forwardRef, memo } from 'react'

import Box from '@mui/material/Box'

import { StyledRootScrollbar, StyledScrollbar } from './styles'
import { type ScrollbarProps } from './types'

const ScrollbarFR = forwardRef<HTMLDivElement, ScrollbarProps>(({ children, sx, ...other }, ref) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  if (isMobile) {
    return (
      <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        clickOnTrack={false}
        scrollableNodeProps={{
          ref,
        }}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  )
})

ScrollbarFR.displayName = 'Scrollbar'

export const Scrollbar = memo(ScrollbarFR)
