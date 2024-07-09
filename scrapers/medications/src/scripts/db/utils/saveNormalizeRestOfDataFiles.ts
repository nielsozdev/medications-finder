import {
  type Department, type District, type Establishment,
  type Family, type Manufacturer, type Medication,
  type PharmaceuticalForm, type Product, type Province, type SubFamily,
} from '@noz/medications-core'
import { clog, createFolderAndSaveFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

interface SaveNormalizeRestOfDataFiles {
  uniqueDepartmentsArray: Department[]
  uniqueDistrictsArray: District[]
  uniqueEstablishmentsArray: Establishment[]
  uniqueFamilyArray: Family[]
  uniqueManufacturersArray: Manufacturer[]
  uniqueMedicationsArray: Medication[]
  uniquePharmaceuticalFormsArray: PharmaceuticalForm[]
  uniqueProductsArray: Product[]
  uniqueProvincesArray: Province[]
  uniqueSubFamilyArray: SubFamily[]
}

export async function saveNormalizeRestOfDataFiles(params: SaveNormalizeRestOfDataFiles) {
  try {
    const basePath = `${PATHS.root}/processed`

    await createFolderAndSaveFile(`${basePath}/departments.json`, params.uniqueDepartmentsArray)
    clog.info('Departamentos: ', params.uniqueDepartmentsArray.length)
    params.uniqueDepartmentsArray = []

    await createFolderAndSaveFile(`${basePath}/districts.json`, params.uniqueDistrictsArray)
    clog.info('Distritos: ', params.uniqueDistrictsArray.length)
    params.uniqueDistrictsArray = []

    await createFolderAndSaveFile(`${basePath}/establishments.json`, params.uniqueEstablishmentsArray)
    clog.info('Establecimientos: ', params.uniqueEstablishmentsArray.length)
    params.uniqueEstablishmentsArray = []

    await createFolderAndSaveFile(`${basePath}/family.json`, params.uniqueFamilyArray)
    clog.info('Familias: ', params.uniqueFamilyArray.length)
    params.uniqueFamilyArray = []

    await createFolderAndSaveFile(`${basePath}/manufacturers.json`, params.uniqueManufacturersArray)
    clog.info('Fabricantes: ', params.uniqueManufacturersArray.length)
    params.uniqueManufacturersArray = []

    await createFolderAndSaveFile(`${basePath}/medications.json`, params.uniqueMedicationsArray)
    clog.info('Medicamentos: ', params.uniqueMedicationsArray.length)
    params.uniqueMedicationsArray = []

    await createFolderAndSaveFile(`${basePath}/pharmaceutical-forms.json`, params.uniquePharmaceuticalFormsArray)
    clog.info('Formas Farmacéuticas: ', params.uniquePharmaceuticalFormsArray.length)
    params.uniquePharmaceuticalFormsArray = []

    await createFolderAndSaveFile(`${basePath}/products.json`, params.uniqueProductsArray)
    clog.info('Productos: ', params.uniqueProductsArray.length)
    params.uniqueProductsArray = []

    await createFolderAndSaveFile(`${basePath}/provinces.json`, params.uniqueProvincesArray)
    clog.info('Provincias: ', params.uniqueProvincesArray.length)
    params.uniqueProvincesArray = []

    await createFolderAndSaveFile(`${basePath}/sub-family.json`, params.uniqueSubFamilyArray)
    clog.info('SubFamilias: ', params.uniqueSubFamilyArray.length)
    params.uniqueSubFamilyArray = []
  } catch (error) {
    console.error('Error al guardar los datos en el archivo:', error)
  }
}
