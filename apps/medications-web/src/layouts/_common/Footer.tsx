import { Box, Typography } from '@mui/material'

import { Iconify } from '~/ui/Iconify'

export function Footer() {
  return (
    <div className='pt-10 pb-6 flex text-center'>
      <div className='flex flex-col items-center justify-center container mx-auto'>
        <span className='text-xs mb-8'>
          <Box
            component="div"
            sx={{
              // width: 40,
              height: 40,
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              // color: settings.themeMode === 'light' ? 'black' : 'white',
            }}
          >
            <Iconify icon={'emojione:letter-h'} width={35} />
            <Typography
              fontSize={24}
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
        </span>
        <span className='text-xs'>Desarrollado por</span>
        <a
          className=' flex items-center justify-center  gap-2 '
          href="https://www.linkedin.com/in/nielsOliveraZurita"
          rel="noreferrer"
          target="_blank"
        >
          <Iconify icon="logos:linkedin-icon" />
          <span className="font-semibold">Niels Olivera Zurita</span>
        </a>
      </div>
    </div>
  )
}
