import { type Departments, type Districts, type Provinces } from '~/types/locations'

export type MedicationData = Record<string, any>
export type MedicationsData = MedicationData[]
export interface MedicationPricesStoreState {
  medicationPrice: MedicationData
  medicationPrices: MedicationsData
  medicationStatus: string
}

export interface AppStoreState extends MedicationPricesStoreState {
  departmentSelected: string
  departments: Departments[]
  districtSelected: string
  districts: Districts[]
  provinceSelected: string
  provinces: Provinces[]
}

export interface MedicationPricesStoreActions {
  setMedicationPrice: (data: MedicationData) => void
  setMedicationPrices: (data: MedicationsData) => void
  setMedicationStatus: (status: string) => void
}
export interface AppStoreActions extends MedicationPricesStoreActions {
  setDepartmentSelected: (department: string) => void
  setDepartments: (departments: Departments[]) => void
  setDistrictSelected: (district: string) => void
  setDistricts: (districts: Districts[]) => void
  setProvinceSelected: (province: string) => void
  setProvinces: (provinces: Provinces[]) => void
}
