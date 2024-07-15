export interface ProductPrices {
  address: string
  completeProductName: string
  concentration: string
  department: string
  district: string
  establishmentName: string
  establishmentType: string
  establishmentTypeId: string
  family: string
  fractions: string
  id: string
  location: string
  medication: string
  packPrice: string
  pharmaceuticalForm: string
  productName: string
  province: string
  subFamily: string
  unitPrice: string
  updateAt: Date | null
}

export interface UniqueFamilyNames {
  id: string
  name: string
}

export interface UniqueSubfamilyNames {
  family: string
  id: string
  name: string
}
export interface UniqueMedications {
  id: string
  name: string
  subFamily: string
}

export interface UniqueProductNames {
  id: string
  medication: string
  name: string
}
