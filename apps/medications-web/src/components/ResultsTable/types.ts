export interface ProductPrices {
  address: string
  completeProductName: string
  concentration: string
  department: string
  district: string
  establishmentName: string
  establishmentType: string
  establishmentTypeId: string
  fractions: string
  id: string
  location: string
  medication: string
  packPrice: string
  pharmaceuticalForm: string
  productName: string
  province: string
  unitPrice: string
  updateAt: Date | null
}

export interface UniqueFamilyNames {
  id: string
  name: string
}

export interface UniqueMedications {
  id: string
  idSubFamily: string
  name: string
}

export interface UniqueProductNames {
  idMedication: string
  name: string
}

export interface UniqueSubfamilyNames {
  id: string
  idFamily: string
  name: string
}
