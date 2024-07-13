'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { LocationSelectors } from '../LocationSelectors'

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
    <LocationSelectors
      defaultDistrict={district}
      defaultProvince={province}
      width={width ?? 150}
    />
  )
}
