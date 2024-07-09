import { type FormEvent } from 'react'

import { usePathname } from 'next/navigation'

import { Close as CloseIcon } from '@mui/icons-material'
import { Box, InputAdornment, InputBase, Paper } from '@mui/material'

import { SnackBar } from './Snackbar'
import { SubmitButton } from './SubmitButton'
import { useSearchData } from './useSearchData'

import { Iconify } from '~/ui/Iconify'

export function SearcherForm(props: any) {
  const { formRef, formProps, inputRef, inputProps, autoCompleteState } = props
  const { onSearchData, openSnackBar, setOpenSnackBar, medicationStatus } = useSearchData()
  const pathname = usePathname()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearchData(autoCompleteState.query)
  }

  return (
    <form ref={formRef} className='flex w-full' {...formProps} onSubmit={onSubmit}>
      <Paper
        aria-labelledby="autocomplete"
        component="div"
        sx={{
          p: '2px 4px',
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
                {autoCompleteState.query && pathname !== '/' && Boolean(medicationStatus) && medicationStatus !== 'pending' && (
                  <button className="aa-ClearButton" type='reset'>
                    <CloseIcon />
                  </button>
                )}

                <SubmitButton
                  loading={medicationStatus === 'pending' || (pathname === '/results' && medicationStatus === '' && Boolean(autoCompleteState.query))}
                />
              </>
            )}
            name="query"
            startAdornment={(
              <InputAdornment position="start">
                <Iconify icon="solar:medical-kit-bold-duotone" sx={{ color: 'text.disabled' }} width={24} />
              </InputAdornment>
            )}
            sx={{ pl: 2, pr: 1, flex: 1, width: '100%' }}
            {...inputProps}
            ref={inputRef}
            aria-labelledby="autocomplete"
            disabled={(medicationStatus === 'pending')}
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
