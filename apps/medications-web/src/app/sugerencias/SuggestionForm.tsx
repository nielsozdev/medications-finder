'use client'
import {
  Typography,
  Button,
  Stack,
  TextField,
} from '@mui/material'
import { m } from 'framer-motion'

import MotionViewport from '~/ui/animate/MotionViewport'
import { varFade } from '~/ui/animate/variants'

export function SuggestionForm() {
  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">
          Feel free to contact us. <br />
          We&apos;ll be glad to hear from you, buddy.
        </Typography>
      </m.div>

      <Stack spacing={3}>
        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Name" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Email" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Subject" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth multiline label="Enter your message here." rows={4} />
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained">
          Submit Now
        </Button>
      </m.div>
    </Stack>
  )
}
