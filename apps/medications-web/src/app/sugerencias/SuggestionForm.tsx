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
          Siente libre de contactarnos. <br />
          Estaremos encantados de conocerte, amigo.😊
        </Typography>
      </m.div>

      <Stack spacing={3}>
        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Nombre" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Email" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Asunto" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth multiline label="Escribe tu mensaje aquí." rows={4} />
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained">
          Enviar Ahora
        </Button>
      </m.div>
    </Stack>
  )
}
