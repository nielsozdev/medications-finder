import { Box, Typography } from '@mui/material'

import { Iconify } from '~/ui/Iconify'

export default function Loading() {
  return (
    <div className="grid place-items-center h-screen">

      <div className='flex w-full flex-col items-center justify-center'>
        <div className='text-sm text-white'>
          <Box
            component="div"
            sx={{
              // width: 40,
              height: 100,
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Iconify icon={'emojione:letter-h'} width={54} />
            <Typography
              fontSize={54}
              fontWeight={700}
              letterSpacing={0}
              // lineHeight={1}
              sx={{
                // color: settings.themeMode === 'light' ? 'black' : 'white',
                display: 'flex',
                // fill: 'currentColor',
                // height: '1em',
                // width: '1em',
              }}
              textTransform="none"
            >
              Hampi
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  )
}
