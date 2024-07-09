export interface Departments {
  name: string
  provinces: Provinces[]
}

export interface Provinces {
  districts: Districts[]
  name: string
}

export interface Districts {
  name: string
}

export interface LocationsData {
  id: string
  name: string
  provinces: Province[]
}

export interface Province {
  districts: District[]
  id: string
  idDepartment: string
  name: string
}

export interface District {
  id: string
  idProvince: string
  name: string
}
