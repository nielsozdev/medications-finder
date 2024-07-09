import { useEffect, useMemo, useRef, useState } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import { createAutocomplete } from '@algolia/autocomplete-core'
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia'
import algoliasearch from 'algoliasearch/lite'

import { useSearchData } from './useSearchData'

import { ENV } from '~/config/env'

const { appId, apiKey, indexName } = ENV
const searchClient = algoliasearch(appId, apiKey)

export function useAutocompleteSearcherInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  // const containerRef = useRef(null)
  const formRef = useRef(null)
  const panelRef = useRef(null)
  const inputRef = useRef(null)

  const query = searchParams.get('query') ?? ''

  const [autoCompleteState, setAutoCompleteState] = useState({ collections: [], query, isOpen: false })
  const { onSearchData, setMedicationStatus, medicationStatus } = useSearchData()

  useEffect(() => {
    if (pathname === '/results' && medicationStatus === '' && query) {
      setMedicationStatus('pending')
    } else {
      setMedicationStatus('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const autocomplete = useMemo(() => createAutocomplete({
    // container: containerRef.current,
    initialState: { query },
    placeholder: 'Buscar precios medicamentos en Junín',
    // enterKeyHint: 'Buscar medicamentos',
    autoFocus: pathname === '/',

    shouldPanelOpen: ({ state }) => state.query.length > 0,
    onStateChange: ({ state }) => {
      setAutoCompleteState((prevState: any) => ({ ...prevState, ...state }))
    },
    getSources: ({ query }) => [
      {
        sourceId: 'querySuggestions',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName,
                query,
                params: {
                  hitsPerPage: 5,
                  highlightPreTag: '<mark>',
                  highlightPostTag: '</mark>',
                },
              },
            ],
          })
        },
        onSelect({ item, setQuery, setIsOpen, refresh }) {
          setQuery(`${item.name}`)
          setIsOpen(false)
          onSearchData(`${item.name}`)
          refresh()
        },

      },
    ],
  })
  , [query, pathname, onSearchData])

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  })

  const onBlur = () => setAutoCompleteState((prevState) => ({ ...prevState, isOpen: false }))
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
    onBlur,
    // onClick: onBlur,
    onDoubleClick: (e: any) => {
      e.target.select()
    },
  })

  return {
    formProps,
    formRef,
    inputProps,
    inputRef,
    autoCompleteState,
    autocomplete,
    panelRef,
  }
}
