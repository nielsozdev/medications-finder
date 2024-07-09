'use client'
import { forwardRef } from 'react'

import { Icon } from '@iconify/react'
import { Box, type BoxProps } from '@mui/material'

import { type IconifyProps } from './types'

interface Props extends BoxProps {
  icon: IconifyProps
}

const IconifyFR = forwardRef<SVGElement, Props>(({ icon, width = 20, sx, ...restOfProps }, ref) => (
  <Box
    ref={ref}
    className="component-iconify"
    component={Icon}
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...restOfProps}
  />
))

IconifyFR.displayName = 'Iconify'
export const Iconify = Object.assign(IconifyFR)
