import { useEffect, useMemo, useRef, useState } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { createAutocomplete } from '@algolia/autocomplete-core'
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia'
import algoliasearch from 'algoliasearch/lite'

import { ENV } from '~/config/env'

const { appId, apiKey, indexName } = ENV
const searchClient = algoliasearch(appId, apiKey)

export function useAutocomplete() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [autocompleteState, setAutocompleteState] = useState<any>({ collections: [], query: '', isOpen: false })

  const query = searchParams.get('query') ?? ''

  // useEffect(() => {
  //   if (pathname === '/results' && medicationStatus === '' && query) {
  //     setMedicationStatus('pending')
  //   } else {
  //     setMedicationStatus('')
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const autocomplete = useMemo(
    () => createAutocomplete({
      initialState: { query },
      shouldPanelOpen: ({ state }) => state.query.length > 0,
      autoFocus: pathname === '/',
      placeholder: 'Buscar precios medicamentos en Junín',
      onStateChange: ({ state }) => { setAutocompleteState(state) },
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
            // onSearchData(`${item.name}`)
            router.push(`/results?query=${item.name}`)
            setQuery(`${item.name}`)
            setIsOpen(false)
            refresh()
          },

        },
      ],
    })
    , [pathname, query, router])

  const inputRef = useRef(null)
  const formRef = useRef(null)
  const panelRef = useRef(null)
  const formProps = autocomplete.getFormProps({ inputElement: inputRef.current })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
    onBlur: () => {
      setAutocompleteState((prevState: any) => ({ ...prevState, isOpen: false }))
    },

    // onDoubleClick: (e: any) => { e.target.select() },
  })
  const { getEnvironmentProps } = autocomplete

  useEffect(() => {
    if (!(formRef.current && panelRef.current && inputRef.current)) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { onTouchStart, onTouchMove, onMouseDown } = getEnvironmentProps({
      formElement: formRef.current,
      panelElement: panelRef.current,
      inputElement: inputRef.current,
    })

    window.addEventListener('touchstart', onTouchStart)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('mousedown', onMouseDown)

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('mousedown', onMouseDown)
    }
  }, [getEnvironmentProps, autocompleteState.isOpen])

  return {
    autocomplete,
    autocompleteState,
    formProps,
    formRef,
    inputProps,
    inputRef,
    panelRef,
    setAutocompleteState,
  }
}
