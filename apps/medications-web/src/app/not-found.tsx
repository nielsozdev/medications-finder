'use client'

import RouterLink from 'next/link'

import { m } from 'framer-motion'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { PageNotFoundIllustration } from '~/assets/illustrations'
import { notFoundMetadata } from '~/data/metadata/not-found-metadata'
import { CompactLayout } from '~/layouts/CompactLayout'
import { MotionContainer } from '~/ui/animate/MotionContainer'
import { varBounce } from '~/ui/animate/variants/bounce'

export const metadata = notFoundMetadata
export default function NotFoundView() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography paragraph fontWeight='bold' variant="h5">
            Sorry, Page Not Found!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        <Button component={RouterLink} href="/" size="large" variant="contained">
          Go to Home
        </Button>
      </MotionContainer>
    </CompactLayout>
  )
}
