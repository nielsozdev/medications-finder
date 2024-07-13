'use client'

import { Alert, Snackbar } from '@mui/material'

export function SnackBar({ open, setOpenSnackBar, message }: { message: string; open: boolean;setOpenSnackBar: any }) {
  // const { vertical, horizontal, open } = state

  // const handleClose = () => {
  //   setState({ ...state, open: false })
  // }
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackBar({ open: false, message: '' })
  }

  return (
    <Snackbar
      key={'top' + 'center'}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={1500}
      message={ message}
      open={(open)}
      onClose={handleClose}
    >
      <Alert severity="warning" sx={{ width: '100%' }} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}
