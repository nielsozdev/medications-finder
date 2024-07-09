import { devtools } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'

import { type AppStoreActions, type AppStoreState, type MedicationData, type MedicationsData } from './types'

import { type Departments, type Districts, type Provinces } from '~/types/locations'

export type AppStore = AppStoreState & AppStoreActions

export const createAppStore = (initialState: AppStoreState) => {
  return createStore<AppStore>()(devtools<AppStore>((set, get) => ({
    ...initialState,
    setMedicationStatus: (status: string) => set({ medicationStatus: status }),
    setMedicationPrices: (data: MedicationsData) => set({ medicationPrices: data }),
    setMedicationPrice: (data: MedicationData) => set({ medicationPrice: data }),
    setDistricts: (districts: Districts[]) => set({ districts }),
    setProvinces: (provinces: Provinces[]) => set({ provinces }),
    setDepartments: (departments: Departments[]) => set({ departments }),
    setDistrictSelected: (district: string) => set(() => {
      window.localStorage.setItem('districtSelected', district.toUpperCase())

      return { districtSelected: district.toUpperCase() }
    }),
    setProvinceSelected: (province: string) => set(() => {
      const provinces = get().provinces
      window.localStorage.setItem('provinceSelected', province.toUpperCase())
      // window.localStorage.removeItem('districtSelected')
      const districts: Districts[] = provinces
        .find(
          (prov) => prov.name.toUpperCase() === province.toUpperCase()
        )?.districts ?? []

      return {
        provinceSelected: province.toUpperCase(),
        districts,
        selectedDistrict: '',
      }
    }),
    setDepartmentSelected: (department: string) => set(() => {
      return {
        departmentSelected: department.toUpperCase(),
        provinceSelected: '',
        selectedDistrict: '',
      }
    }),

  })
  ))
}
