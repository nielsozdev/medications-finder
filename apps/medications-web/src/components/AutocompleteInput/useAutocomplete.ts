import { useEffect, useMemo, useRef, useState } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { createAutocomplete } from '@algolia/autocomplete-core'
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia'
import algoliasearch from 'algoliasearch/lite'

import { ENV } from '~/config/env'
import { useAppStore } from '~/context/AppStoreProvider/useAppStore'

const { appId, apiKey, indexName } = ENV
const searchClient = algoliasearch(appId, apiKey)

export function useAutocomplete() {
  const { setMedicationStatus } = useAppStore((state) => state)
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const q = searchParams.get('query') ?? ''
  const [autocompleteState, setAutocompleteState] = useState<any>({ collections: [], query: q, isOpen: false })
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
      initialState: { query: q },
      shouldPanelOpen: ({ state }) => state.query.length > 0,
      autoFocus: pathname === '/',
      openOnFocus: true,
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
          onSelect({ item, itemUrl, setQuery, setIsOpen, refresh }) {
            // onSearchData(`${itemUrl}`)
            setQuery(`${item.name}`)
            // setIsOpen(false)
            setMedicationStatus('pending')
            const departmentSelected = localStorage.getItem('departmentSelected')
            const provinceSelected = localStorage.getItem('provinceSelected')
            const districtSelected = localStorage.getItem('districtSelected')

            let pathToSearch = `/results?query=${item.name}`

            if (departmentSelected) {
              pathToSearch = `${pathToSearch}&department=${departmentSelected.toLocaleLowerCase()}`
            }

            if (provinceSelected) {
              pathToSearch = `${pathToSearch}&province=${provinceSelected.toLocaleLowerCase()}`
            }

            if (districtSelected) {
              pathToSearch = `${pathToSearch}&district=${districtSelected.toLocaleLowerCase()}`
            }

            router.push(pathToSearch)

            // refresh()
          },
          getItemUrl({ item }) {
            // Cuando se ahce enter en una opcion algolia, esto se llama
            const departmentSelected = localStorage.getItem('departmentSelected')
            const provinceSelected = localStorage.getItem('provinceSelected')
            const districtSelected = localStorage.getItem('districtSelected')

            let pathToSearch = `/results?query=${item.name}`

            if (departmentSelected) {
              pathToSearch = `${pathToSearch}&department=${departmentSelected.toLocaleLowerCase()}`
            }

            if (provinceSelected) {
              pathToSearch = `${pathToSearch}&province=${provinceSelected.toLocaleLowerCase()}`
            }

            if (districtSelected) {
              pathToSearch = `${pathToSearch}&district=${districtSelected.toLocaleLowerCase()}`
            }

            return pathToSearch

            // return `/results?query=${encodeURIComponent(`${item.name}`)}`
          },

        },
      ],
      navigator: {
        navigate({ itemUrl }) {
          window.location.assign(itemUrl)
        },
        navigateNewTab({ itemUrl }) {
          const windowReference = window.open(itemUrl, '_blank', 'noopener')

          if (windowReference) {
            windowReference.focus()
          }
        },
        navigateNewWindow({ itemUrl }) {
          window.open(itemUrl, '_blank', 'noopener')
        },
      },
    })
    , [pathname, q, router, setMedicationStatus])

  const inputRef = useRef(null)
  const formRef = useRef(null)
  const panelRef = useRef(null)
  const formProps = autocomplete.getFormProps({ inputElement: inputRef.current })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
    onBlur: () => {
      setAutocompleteState((prevState: any) => ({ ...prevState, isOpen: false }))
    },

    onDoubleClick: (e: any) => { e.target.select() },
    onTouchStart: (e: any) => { e.target.select() },
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
