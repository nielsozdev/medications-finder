import { type Departments, type Districts, type Provinces } from '~/types/locations'

export type MedicationData = Record<string, any>
export type MedicationsData = MedicationData[]
export interface MedicationPricesStoreState {
  medicationPrice: MedicationData
  medicationPrices: MedicationsData
  medicationStatus: string
}
export interface MedicationsFiltersState {
  familyData: any[]
  familyFilterSelected: string
  medicationData: any[]
  medicationFilterSelected: string
  orderSelected: 'asc' | 'desc'
  productData: any[]
  productFilterSelected: string
  subFamilyData: any[]
  subFamilyFilterSelected: string
}

export interface AppStoreState extends MedicationPricesStoreState, MedicationsFiltersState {
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
export interface AppStoreActions extends MedicationPricesStoreActions, MedicationsFiltersActions {
  setDepartmentSelected: (department: string) => void
  setDepartments: (departments: Departments[]) => void
  setDistrictSelected: (district: string) => void
  setDistricts: (districts: Districts[]) => void
  setProvinceSelected: (province: string) => void
  setProvinces: (provinces: Provinces[]) => void
}

export interface MedicationsFiltersActions {
  setFamilyData: (data: any[]) => void
  setFamilyFilterSelected: (value: string) => void
  setMedicationData: (data: any[]) => void
  setMedicationFilterSelected: (value: string) => void
  setOrderSelected: (value: 'asc' | 'desc') => void
  setProductData: (data: any[]) => void
  setProductFilterSelected: (value: string) => void
  setSubFamilyData: (data: any[]) => void
  setSubFamilyFilterSelected: (value: string) => void
}
