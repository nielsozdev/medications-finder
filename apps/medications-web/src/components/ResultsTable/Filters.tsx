import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { m } from 'framer-motion'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { type Theme } from '@mui/material/styles'

import { MedicationFilters } from './medicationFilters'
import { useDataFilters } from './useDataFilters'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'
import { useResponsive } from '~/hooks/useResponsive'
import { varHover } from '~/ui/animate/variants'
import CustomPopover from '~/ui/CustomPopover'
import usePopover from '~/ui/CustomPopover/usePopover'
import { Iconify } from '~/ui/Iconify'

export function Filters() {
  const { setOrderSelected, orderSelected } = useAppStore((state) => state)
  const popover = usePopover()

  const order = useDataFilters({
    keyName: 'order',
    dispatch: setOrderSelected,
    value: orderSelected,
    // defaultValue: 'asc',
  })

  const mdUp = useResponsive('up', 'md')

  return (
    <>
      <Box component='div' sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
        {mdUp && (<MedicationFilters />)}
        {!mdUp && (
          <>
            <Button
              component={m.button}
              whileTap="tap"
              whileHover="hover"
              variants={varHover(1.05)}
              onClick={popover.onOpen}
            >
              <Iconify icon={'mage:filter'} sx={{ color: (theme: Theme) => theme.palette.text.primary }} width={25} />
            </Button>
            <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ p: 0 }}>
              <Box sx={{ p: 2, pb: 1.5, fontWeight: 'bold' }}>
                Elige tu localidad
              </Box>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Stack sx={{ py: 1 }}>
                <MedicationFilters />
              </Stack>

            </CustomPopover></>
        )}
        <Box>
          <FormControl size="small" sx={{ m: 1, width: 160 }} variant="standard">
            <InputLabel id={order.labelId}>Ordenar</InputLabel>
            <Select {...order}>
              <MenuItem value="asc">Menor a mayor</MenuItem>
              <MenuItem value="desc">Mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
