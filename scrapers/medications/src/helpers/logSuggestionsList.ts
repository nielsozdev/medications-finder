import { type Locator } from 'playwright'

import { clog } from '@noz/utils'

export async function logSuggestionsList(
  {
    medication,
    suggestionElements,
  }:
  {
    medication: string
    suggestionElements: Locator[]
  }) {
  clog.message3(`📝 ${medication}: ${suggestionElements.length} sugerencias`)

  for (const [index, suggestion] of suggestionElements.entries()) {
    clog.message4(`🔹 ${index + 1}: ${await suggestion.textContent()}`)
  }
}
