import { type UniqueData } from '@noz/medications-core/src/types/bd'
import { type Department, type District, type Establishment, type Family, type Manufacturer, type Medication, type PharmaceuticalForm, type Product, type Province, type SubFamily } from '@noz/medications-core/src/types/medications'
import { type DigemidWebData, type Entidad, type ExtractedDataResult } from '@noz/medications-core/src/types/scraper'

import { cleanString } from '~/utils/cleanString'

interface SetUniqueData extends UniqueData {
  data: Entidad
  dataExtracted: ExtractedDataResult
  dataExtractedResults: DigemidWebData
  structure: {
    department: Department
    district: District
    establishment: Establishment
    family: Family
    manufacturer: Manufacturer
    medication: Medication
    pharmaceuticalForm: PharmaceuticalForm
    product: Product
    province: Province
    subFamily: SubFamily
  }
}
export function setUniqueData({ data, dataExtracted, dataExtractedResults, structure, ...restOfParams }: SetUniqueData) {
  const {
    uniqueEstablishments, uniqueFamily, uniqueManufacturers, uniqueSubFamily,
    uniqueProducts, uniqueMedications, uniquePharmaceuticalForms, uniqueDepartments,
    uniqueProvinces, uniqueDistricts,
  } = restOfParams

  const familyKey = cleanString(dataExtracted.medication)
  if (!uniqueFamily.has(familyKey)) {
    uniqueFamily.set(familyKey, structure.family)
  }

  const subFamilyKey = cleanString(dataExtractedResults.suggestion)
  if (!uniqueSubFamily.has(subFamilyKey)) {
    uniqueSubFamily.set(subFamilyKey, structure.subFamily)
  }

  const productKey = cleanString(data.codProdE.toString())
  if (!uniqueProducts.has(productKey)) {
    uniqueProducts.set(productKey, structure.product)
  }

  const medicationKey = cleanString(data.nombreSustancia)
  if (!uniqueMedications.has(medicationKey)) {
    uniqueMedications.set(medicationKey, structure.medication)
  }

  const pharmaceuticalFormKey = cleanString(data.nombreFormaFarmaceutica)
  if (!uniquePharmaceuticalForms.has(pharmaceuticalFormKey)) {
    uniquePharmaceuticalForms.set(pharmaceuticalFormKey, structure.pharmaceuticalForm)
  }

  const establishmentKey = cleanString(data.codEstab.toString())
  if (!uniqueEstablishments.has(establishmentKey)) {
    uniqueEstablishments.set(establishmentKey, structure.establishment)
  }

  const manufacturerKey = cleanString(data.nombreLaboratorio)
  if (!uniqueManufacturers.has(manufacturerKey)) {
    uniqueManufacturers.set(manufacturerKey, structure.manufacturer)
  }

  const departmentKey = cleanString(data.departamento)
  if (!uniqueDepartments.has(departmentKey)) {
    uniqueDepartments.set(departmentKey, structure.department)
  }

  const provinceKey = cleanString(data.provincia)
  if (!uniqueProvinces.has(provinceKey)) {
    uniqueProvinces.set(provinceKey, structure.province)
  }

  const districtKey = cleanString(data.distrito)
  if (!uniqueDistricts.has(districtKey)) {
    uniqueDistricts.set(districtKey, structure.district)
  }
}
