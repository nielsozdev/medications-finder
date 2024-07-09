'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import Box from '@mui/material/Box'

import { LocationSelectors } from '~/components/LocationSelectors'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'

export function HeaderLocationSelectors({ width }: { width?: number }) {
  const searchParams = useSearchParams()
  const province = searchParams.get('province')?.toUpperCase() ?? ''
  const district = searchParams.get('district')?.toUpperCase() ?? ''

  const { setProvinceSelected, setDistrictSelected } = useAppStore((state) => state)

  useEffect(() => {
    if (province) setProvinceSelected(province)
    if (district) setDistrictSelected(district)
  }, [province, setProvinceSelected, district, setDistrictSelected])

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <LocationSelectors
        defaultDistrict={district}
        defaultProvince={province}
        width={width ?? 150}
      />
    </Box>
  )
}
