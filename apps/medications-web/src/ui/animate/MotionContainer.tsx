import { m, type MotionProps } from 'framer-motion'

import Box, { type BoxProps } from '@mui/material/Box'

import { varContainer } from './variants'

type IProps = BoxProps & MotionProps

export interface Props extends IProps {
  action?: boolean
  animate?: boolean
}

export function MotionContainer({ animate, action = false, children, ...other }: Props) {
  if (action) {
    return (
      <Box
        animate={animate ? 'animate' : 'exit'}
        component={m.div}
        initial={false}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box
      animate="animate"
      component={m.div}
      exit="exit"
      initial="initial"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  )
}
