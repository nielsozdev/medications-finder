'use client'

import { Box } from '@mui/material'

import { Panel } from './Panel'
import { SearcherForm } from './SearcherForm'
import { useAutocompleteSearcherInput } from './useAutocompleteSearcherInput'

export function AutoCompleteSearcherInput() {
  const {
    formProps,
    formRef,
    inputProps,
    inputRef,
    autoCompleteState,
    autocomplete,
    panelRef,
  } = useAutocompleteSearcherInput()

  return (
    <Box
      className="relative flex-grow"
      component='div'
      {...autocomplete?.getRootProps({})}
      aria-labelledby="autocomplete"
    >
      <SearcherForm
        autoCompleteState={autoCompleteState}
        formProps={formProps}
        formRef={formRef}
        inputProps={inputProps}
        inputRef={inputRef}
      />
      <Panel
        autocomplete={autocomplete}
        autoCompleteState={autoCompleteState}
        panelRef={panelRef}
      />
    </Box>
  )
}
