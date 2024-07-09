import { type Department, type District, type Establishment, type Family, type Manufacturer, type Medication, type PharmaceuticalForm, type Product, type Province, type SubFamily } from './medications'

export interface UniqueData {
  uniqueDepartments: Map<string, Department>
  uniqueDistricts: Map<string, District>
  uniqueEstablishments: Map<string, Establishment>
  uniqueFamily: Map<string, Family>
  uniqueManufacturers: Map<string, Manufacturer>
  uniqueMedications: Map<string, Medication>
  uniquePharmaceuticalForms: Map<string, PharmaceuticalForm>
  uniqueProducts: Map<string, Product>
  uniqueProvinces: Map<string, Province>
  uniqueSubFamily: Map<string, SubFamily>
}
