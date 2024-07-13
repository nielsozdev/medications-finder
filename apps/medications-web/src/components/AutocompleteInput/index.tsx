'use client'

import { Box } from '@mui/material'

import { Panel } from './Panel'
import { SearcherForm } from './SearcherForm'
import { useAutocomplete } from './useAutocomplete'

export function AutocompleteInput() {
  const {
    formProps,
    formRef,
    inputProps,
    inputRef,
    autocompleteState,
    autocomplete,
    setAutocompleteState,
  } = useAutocomplete()

  return (
    <Box
      className="relative flex-grow "
      component='div'
      {...autocomplete?.getRootProps({})}
      aria-labelledby="autocomplete-root"
    >
      <SearcherForm
        autocompleteState={autocompleteState}
        setAutocompleteState={setAutocompleteState}
        autocomplete={autocomplete}
        formProps={formProps}
        formRef={formRef}
        inputProps={inputProps}
        inputRef={inputRef}
      />
      <Panel
        autocomplete={autocomplete}
        autocompleteState={autocompleteState}
        // panelRef={panelRef}
      />
    </Box>
  )
}
