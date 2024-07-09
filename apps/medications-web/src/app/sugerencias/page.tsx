import { Box, Container } from '@mui/material'

import { SuggestionForm } from './SuggestionForm'
import { SuggestionHero } from './SuggestionHero'

export const metadata = {
  title: 'Contact us',
}

export default function SuggestionsPage() {
  return (
    <>
      <SuggestionHero />

      <Container sx={{ py: 10 }}>
        <Box
          display="grid"
          gap={10}
          // gridTemplateColumns={{
          //   xs: 'repeat(1, 1fr)',
          //   md: 'repeat(2, 1fr)',
          // }}
        >
          <SuggestionForm />

        </Box>
      </Container>
    </>
  )
}
