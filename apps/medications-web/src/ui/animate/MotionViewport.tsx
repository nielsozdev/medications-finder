import { m, type MotionProps } from 'framer-motion'

import Box, { type BoxProps } from '@mui/material/Box'

import { varContainer } from './variants'

import { useResponsive } from '~/hooks/useResponsive'

type IProps = BoxProps & MotionProps

interface Props extends IProps {
  children: React.ReactNode
  disableAnimatedMobile?: boolean
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const smDown = useResponsive('down', 'sm')

  if (smDown && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      variants={varContainer()}
      viewport={{ once: true, amount: 0.3 }}
      whileInView="animate"
      {...other}
    >
      {children}
    </Box>
  )
}
