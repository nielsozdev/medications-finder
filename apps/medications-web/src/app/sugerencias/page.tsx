import { Box, Container } from '@mui/material'

import { SuggestionForm } from './SuggestionForm'
import { SuggestionHero } from './SuggestionHero'

import { Footer } from '~/components/Footer'

export const metadata = {
  title: 'Contáctame',
}

export default function SuggestionsPage() {
  return (
    <div>
      <SuggestionHero />
      <Container sx={{ py: 10 }}>
        <Box
          display="grid"
          gap={10}
        >
          <SuggestionForm />

        </Box>
      </Container>
      <Footer />
    </div>
  )
}
