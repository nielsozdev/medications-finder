'use client'

import { useRef, type ReactNode } from 'react'

import { useSearchParams } from 'next/navigation'

import { AppStoreContext, type AppStoreApi } from './AppStoreContext'

import { createAppStore } from '~/context/AppStoreProvider/app.store'
import locationsDataJSON from '~/data/locations.json'
import { type Departments, type Districts, type Provinces } from '~/types/locations'

export function AppStoreProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const storeRef = useRef<AppStoreApi>()

  if (!storeRef.current) {
    const districtsearchParams = searchParams.get('district')
    const provinceSearchParams = searchParams.get('province')
    const departmentsearchParams = searchParams.get('department')
    const departmentInLocalStorage = localStorage.getItem('departmentSelected')
    const provinceInLocalStorage = localStorage.getItem('provinceSelected')
    const districtInLocalStorage = localStorage.getItem('districtSelected')

    if (!provinceInLocalStorage && provinceSearchParams) {
      localStorage.setItem('provinceSelected', provinceSearchParams.toUpperCase())
    }

    if (!districtInLocalStorage && districtsearchParams) {
      localStorage.setItem('districtSelected', districtsearchParams.toUpperCase())
    }

    const departments: Departments[] = locationsDataJSON.map((department) => ({
      name: department.name,
      provinces: department.provinces.map((province) => ({
        name: province.name,
        districts: province.districts.map((district) => ({
          name: district.name,
        })),
      })),
    }))

    const provinces: Provinces[] = departments.find((dep) => dep.name === 'JUNIN')?.provinces ?? []

    const districts: Districts[] = provinces.find((prov) => prov.name.toUpperCase() === provinceInLocalStorage?.toUpperCase())?.districts ?? []

    const departmentSelected = departmentsearchParams?.toUpperCase() ?? departmentInLocalStorage ?? 'JUNIN'
    const provinceSelected = provinceSearchParams?.toUpperCase() ?? provinceInLocalStorage ?? ''
    const districtSelected = districtsearchParams?.toUpperCase() ?? districtInLocalStorage ?? ''

    storeRef.current = createAppStore({
      medicationStatus: '',
      medicationPrices: [],
      medicationPrice: {},
      districts,
      provinces,
      departments,
      districtSelected,
      provinceSelected,
      departmentSelected,
      familyData: [],
      subFamilyData: [],
      medicationData: [],
      productData: [],
      familyFilterSelected: 'Todos',
      subFamilyFilterSelected: 'Todos',
      medicationFilterSelected: 'Todos',
      productFilterSelected: 'Todos',
      orderSelected: 'asc',
    })
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  )
}
