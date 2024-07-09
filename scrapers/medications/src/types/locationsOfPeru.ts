export interface Values {
  label: string
  value: string
}
export type District = Values[]

export type Province = Values[]

export type Department = Values[]

export interface Country {
  country: string
  departments: Department
}

export interface LocationsDataToExtract {
  department: string
  percentage: number
  special?: boolean
}
export interface DataByImportance {
  high: string[]
  highest: string[]
  low: string[]
  lowest: string[]
  medium: string[]

}
export type ImportanceKey = 'highest' | 'high' | 'medium' | 'low' | 'lowest'

export type ImportanceLimits = Record<ImportanceKey, {
  minPercentage: number
}>
