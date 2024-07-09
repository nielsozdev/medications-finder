'use client'

import { Search as SearchIcon } from '@mui/icons-material'

import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'

export function SubmitButton({ loading }: { loading?: boolean }) {
  return (
    <IconButton
      aria-label="search"
      sx={{ p: '10px' }}
      type="submit"
    >
      {loading && (
        <CircularProgress
          // disableShrink
          size={24}
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
            animationDuration: '550ms',
            // position: 'absolute',
            // left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
        />
      )}
      {!loading && (<SearchIcon />)}
    </IconButton>
  )
}
