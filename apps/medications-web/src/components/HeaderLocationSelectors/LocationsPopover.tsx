import { useSearchParams } from 'next/navigation'

import { Box, Button, ListItemText } from '@mui/material'
import { m } from 'framer-motion'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { type Theme } from '@mui/material/styles'

import { LocationSelectors } from '../LocationSelectors'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'
import { useResponsive } from '~/hooks/useResponsive'
import { varHover } from '~/ui/animate/variants'
import CustomPopover from '~/ui/CustomPopover'
import usePopover from '~/ui/CustomPopover/usePopover'
import { Iconify } from '~/ui/Iconify'

// routes
// import { paths } from 'src/routes/paths';
// hooks
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// auth
// import { useAuthContext } from 'src/auth/hooks';
// components

function capitalizeFirstLetter(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

interface LocationsPopoverProps {
  width?: number
}
export default function LocationsPopover(props: LocationsPopoverProps) {
  const { width } = props
  const popover = usePopover()
  const searchParams = useSearchParams()
  const province = searchParams.get('province')?.toUpperCase() ?? ''
  const district = searchParams.get('district')?.toUpperCase() ?? ''
  // const handleClickItem = (path: string) => {
  //   popover.onClose()
  //   router.push(path)
  // }
  const { provinceSelected, districtSelected } = useAppStore((state) => state)
  const mdUp = useResponsive('up', 'md')

  return (
    <>
      <Button
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          // width: 40,
          // height: 40,
          // background: (theme) => alpha(theme.palette.grey[500], 0.08),
          // ...(popover.open && {
          //   background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          // }),
        }}
      >
        {!mdUp && <Iconify icon={'hugeicons:location-03'} sx={{ color: (theme: Theme) => theme.palette.text.primary }} width={25} />}
        {mdUp && (
          <ListItemText
            primary={provinceSelected
              ? (
                <Box
                  component='p'
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                  }}
                  className='truncate font-bold text-white text-start max-w-[140px]'
                >{capitalizeFirstLetter(provinceSelected)}</Box>
              )
              : 'Junín'}
            secondary={districtSelected && (
              <Box
                component='p'
                sx={{
                  color: (theme) => theme.palette.text.primary,

                }}
                className='truncate text-start  text-whitemax-w-[140px]'
              >{capitalizeFirstLetter(districtSelected)}</Box>
            ) }
          />
        )}
        <Iconify
          icon={'iconamoon:arrow-down-2-light'}
          sx={{
            color: (theme: Theme) => theme.palette.text.primary,

          }}
        />

      </Button>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5, fontWeight: 'bold' }}>
          Elige tu localidad
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          <LocationSelectors
            defaultDistrict={district}
            defaultProvince={province}
            width={width ?? 150}
          />
        </Stack>

      </CustomPopover>
    </>
  )
}
