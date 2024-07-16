import { type FormEvent } from 'react'

import { usePathname } from 'next/navigation'

import { Close as CloseIcon } from '@mui/icons-material'
import { Box, InputAdornment, InputBase, Paper } from '@mui/material'

import { SnackBar } from './Snackbar'
import { SubmitButton } from './SubmitButton'
import { useSearchData } from './useSearchData'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'
import { useResponsive } from '~/hooks/useResponsive'
import { Iconify } from '~/ui/Iconify'

export function SearcherForm(props: any) {
  const { formRef, formProps, inputProps, autocompleteState, setAutocompleteState } = props
  const { medicationStatus } = useAppStore((state) => state)
  // const searchParams = useSearchParams()
  const pathname = usePathname()

  const { onSearchData, openSnackBar, setOpenSnackBar } = useSearchData()
  const mdUp = useResponsive('up', 'md')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearchData(autocompleteState.query)
    setAutocompleteState({ query: autocompleteState.query, isOpen: false })
  }

  return (
    <form ref={formRef} className='flex w-full' {...formProps} onSubmit={onSubmit}>
      <Paper
        aria-labelledby="autocomplete"
        component="div"
        sx={{
          // p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <InputBase
            endAdornment={(
              <>
                {autocompleteState.query && pathname !== '/' && Boolean(medicationStatus) && medicationStatus !== 'pending' && (
                  <button className="aa-ClearButton" type='reset'>
                    <CloseIcon />
                  </button>
                )}

                <SubmitButton
                  loading={medicationStatus === 'pending' || (pathname === '/results' && medicationStatus === '' && Boolean(autocompleteState.query))}
                  disabled={(medicationStatus === 'pending' || (pathname === '/results' && medicationStatus === ''))}
                />
              </>
            )}
            name="query"
            startAdornment={(
              <>
                {mdUp && (
                  <InputAdornment position="start">
                    <Iconify icon="solar:medical-kit-bold-duotone" sx={{ color: 'text.disabled' }} width={20} />
                  </InputAdornment>
                )}
              </>
            )}
            sx={{
              pl:
              {
                xs: 2,
                md: 3,
              },
              flex: 1,
              alignItems: 'center',
              width: '100%',
            }}
            {...inputProps}
            aria-labelledby="autocomplete"
            disabled={(medicationStatus === 'pending' || (pathname === '/results' && medicationStatus === ''))}
            id="autocomplete"
          />
        </Box>
        <SnackBar
          message={openSnackBar.message}
          open={openSnackBar.open}
          setOpenSnackBar={setOpenSnackBar}
        />
      </Paper>
    </form>
  )
}
