import { type UniqueData } from '@noz/medications-core/src/types/bd'
import {
  type Department, type District, type Establishment, type Family, type Manufacturer,
  type Medication, type PharmaceuticalForm,
  type Price,
  type Product, type Province, type SubFamily,
} from '@noz/medications-core/src/types/medications'
import { type ExtractedDataResult } from '@noz/medications-core/src/types/scraper'

import { cleanString } from '~/utils/cleanString'
import { generateUniqueId } from '~/utils/generatUniqueId'

import { setUniqueData } from './setUniqueData'

interface ProcessFileData extends UniqueData {
  dataExtract: ExtractedDataResult
  idxFile: string
}

export async function processFileData({ dataExtract, idxFile, ...restOfParams }: ProcessFileData) {
  const multiplePrices: Price[] = []
  const idSet = new Set<string>()
  try {
    for (const results of dataExtract.results) {
      if (!results) continue

      for (const [index, data] of Object.entries(results.data)) {
        if (!data) continue

        const idPrice = generateUniqueId(`${data.codEstab}.${data.codProdE}.${data.ubicodigo}.${idxFile}.${index}`)
        const idFamily = generateUniqueId(`${dataExtract.medication}.${idxFile}.${index}`)
        const idSubFamily = generateUniqueId(cleanString(results.suggestion))
        const idMedication = generateUniqueId(cleanString(data.nombreSustancia))
        const idProduct = cleanString(data.codProdE.toString())
        const idPharmaceuticalForm = generateUniqueId(cleanString(data.nombreFormaFarmaceutica))
        const idEstablishment = cleanString(cleanString(data.codEstab.toString()))
        const idManufacturer = generateUniqueId(data.nombreLaboratorio)
        const idDistrict = generateUniqueId(data.distrito)
        const idProvince = generateUniqueId(data.provincia)
        const idDepartment = generateUniqueId(data.departamento)

        /*
118024
77853
*/
        if (!idSet.has(idPrice)) {
          idSet.add(idPrice)
          const price: Price = {
            id: idPrice,
            idEstablishment,
            idProduct,
            prices: [data.precio1, data.precio2],
            updateAt: data.fecha,
          }
          multiplePrices.push(price)
        }

        const family: Family = {
          id: idFamily,
          name: cleanString(dataExtract.medication),
        }

        const subFamily: SubFamily = {
          id: idSubFamily,
          name: cleanString(results.suggestion),
          nameSuggestion: cleanString(results.suggestion),
          group: cleanString(data.grupo),
          idFamily,
        }

        const medication: Medication = {
          id: idMedication,
          concentration: cleanString(data.concent),
          fractions: Number(data.fracciones),
          name: cleanString(data.nombreSustancia),
          totalActivePrinciple: cleanString(data.totalPA),
          idPharmaceuticalForm,
          idManufacturer,
          idSubFamily,
        }

        const product: Product = {
          id: idProduct,
          name: cleanString(data.nombreProducto),
          idMedication,
        }

        const pharmaceuticalForm: PharmaceuticalForm = {
          id: idPharmaceuticalForm,
          group: cleanString(data.nomGrupoFF),
          groupCode: cleanString(data.codGrupoFF),
          name: cleanString(data.nombreFormaFarmaceutica),
        }

        const establishment: Establishment = {
          id: idEstablishment,
          address: cleanString(data.direccion),
          name: cleanString(data.nombreComercial),
          type: cleanString(data.setcodigo),
          typeId: cleanString(data.catCodigo),
          phone: cleanString(data.telefono ?? ''),
          idDistrict,
        }

        const manufacturer: Manufacturer = {
          id: idManufacturer,
          name: cleanString(data.nombreTitular),
        }

        const district: District = {
          id: idDistrict,
          name: cleanString(data.distrito),
          idProvince,
        }

        const province: Province = {
          id: idProvince,
          name: cleanString(data.provincia),
          idDepartment,
        }

        const department: Department = {
          id: idDepartment,
          name: cleanString(data.departamento),
        }

        setUniqueData({
          dataExtracted: dataExtract,
          dataExtractedResults: results,
          data,
          structure: {
            department,
            district,
            establishment,
            family,
            manufacturer,
            medication,
            pharmaceuticalForm,
            product,
            province,
            subFamily,
          },
          ...restOfParams,
        })
      }
    }

    return await Promise.resolve(multiplePrices)
  } catch (error) {
    throw new Error('Error procesando el archivo')
  }
}
