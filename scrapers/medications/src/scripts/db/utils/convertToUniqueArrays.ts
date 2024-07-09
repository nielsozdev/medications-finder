import { type UniqueData } from '@noz/medications-core/src/types/bd'

type ConvertToUniqueArrays = UniqueData

export function convertToUniqueArrays(params: ConvertToUniqueArrays) {
  const convertToUniqueArray = <T>(map: Map<string, T>): T[] => Array.from(map.values())

  return {
    uniqueEstablishmentsArray: convertToUniqueArray(params.uniqueEstablishments),
    uniqueManufacturersArray: convertToUniqueArray(params.uniqueManufacturers),
    uniqueSubFamilyArray: convertToUniqueArray(params.uniqueSubFamily),
    uniqueFamilyArray: convertToUniqueArray(params.uniqueFamily),
    uniqueProductsArray: convertToUniqueArray(params.uniqueProducts),
    uniqueMedicationsArray: convertToUniqueArray(params.uniqueMedications),
    uniquePharmaceuticalFormsArray: convertToUniqueArray(params.uniquePharmaceuticalForms),
    uniqueDepartmentsArray: convertToUniqueArray(params.uniqueDepartments),
    uniqueProvincesArray: convertToUniqueArray(params.uniqueProvinces),
    uniqueDistrictsArray: convertToUniqueArray(params.uniqueDistricts),
  }
}
