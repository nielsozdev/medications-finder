export interface Price {
  id: string
  idEstablishment: Establishment['id']
  idProduct: Product['id']
  prices: [Money, Money]
  updateAt: string
}

export interface Family {
  id: string
  name: string
}

export interface SubFamily {
  group: string
  id: string
  idFamily: Family['id']
  name: string
  nameSuggestion: string
}
export interface Medication {
  concentration: string
  fractions: number
  id: string
  idManufacturer: Manufacturer['id']
  idPharmaceuticalForm: PharmaceuticalForm['id']
  idSubFamily: SubFamily['id']
  name: string
  totalActivePrinciple: string
}

export interface Product {
  id: string
  idMedication: Medication['id']
  name: string
}

export interface PharmaceuticalForm {
  group: string
  groupCode: string
  id: string
  name: string
}

export interface Establishment {
  address: string
  id: string
  idDistrict: District['id']
  name: string
  phone: string | null
  type: string
  typeId: string
}
export interface Manufacturer {
  id: string
  name: string | null
}

export interface District {
  id: string
  idProvince: Province['id']
  name: string
}
export interface Province {
  id: string
  idDepartment: Department['id']
  name: string
}

export interface Department {
  id: string
  name: string
}

type Money = number | null
