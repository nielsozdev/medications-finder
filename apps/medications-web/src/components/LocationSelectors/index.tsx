'use client'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { type SelectChangeEvent } from '@mui/material/Select'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'

interface LocationSelectorsProps {
  defaultDepartment?: string
  defaultDistrict?: string
  defaultProvince?: string
  width?: number
}
export function LocationSelectors({ defaultDistrict, defaultProvince, width }: LocationSelectorsProps) {
  const {
    provinces,
    districts,
    provinceSelected,
    districtSelected,
    medicationStatus,
    setDistrictSelected,
    setProvinceSelected,
  } = useAppStore((state) => state)

  const handleProvinceChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setProvinceSelected(value)
    setDistrictSelected('')
  }

  const handleDistrictChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setDistrictSelected(value)
  }

  return (
    <div className='flex w-full justify-center align-center'>

      <FormControl size="small" sx={{ m: 1, minWidth: width ?? 250 }}>
        <InputLabel id="provinces">Provincia</InputLabel>
        <Select
          defaultValue={defaultProvince ?? provinceSelected}
          disabled={medicationStatus === 'pending'}
          id="provinces"
          label="Age"
          labelId="provinces-label"
          value={provinceSelected}
          onChange={handleProvinceChange}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {
            provinces?.map((province) => (
              <MenuItem key={province.name} value={province.name}>
                {province.name}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl disabled={!provinceSelected} size="small" sx={{ m: 1, minWidth: width ?? 250 }}>
        <InputLabel id="demo-select-small-label">Distrito</InputLabel>
        <Select
          defaultValue={defaultDistrict ?? districtSelected}
          disabled={medicationStatus === 'pending'}
          id="districts"
          label="Age"
          labelId="districts-label"
          value={districtSelected}
          onChange={handleDistrictChange}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {
            districts?.map((district) => (
              <MenuItem key={district.name} value={district.name}>
                {district.name}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  )
}
