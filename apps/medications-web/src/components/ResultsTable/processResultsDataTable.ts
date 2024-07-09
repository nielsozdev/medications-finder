import { type UniqueSubfamilyNames, type UniqueProductNames, type UniqueFamilyNames, type UniqueMedications, type ProductPrices } from './types'

import { formatText } from '~/utils/format-text'
import { stringToDate } from '~/utils/stringToDate'

export function processResultsDataTable(data: any) {
  const uniqueSubfamilyNames = new Map<string, UniqueSubfamilyNames>()
  const uniqueProductNames = new Map<string, UniqueProductNames>()
  const uniqueFamilyNames = new Map<string, UniqueFamilyNames>()
  const uniqueMedications = new Map<string, UniqueMedications>()

  const productPrices: ProductPrices[] = []

  data.forEach((item: any) => {
    const { product, establishment, prices, id, updateAt } = item
    const { address, district, type: establishmentType, typeId: establishmentTypeId, name: establishmentName } = establishment
    const { medication, idMedication } = product
    const { pharmaceuticalForm, concentration, fractions, subFamily } = medication
    const { family } = subFamily
    const { province } = district
    const { department } = province
    const [packPrice, unitPrice] = prices

    if (!uniqueProductNames.has(`${product.name}_${idMedication}`)) {
      uniqueProductNames.set(`${product.name}_${idMedication}`, product)
    }

    if (!uniqueFamilyNames.has(`${family.id}_${family.name}`)) {
      uniqueFamilyNames.set(`${family.id}_${family.name}`, family)
    }

    if (!uniqueSubfamilyNames.has(`${subFamily.id}_${family.id}`)) {
      uniqueSubfamilyNames.set(`${subFamily.id}_${family.id}`, subFamily)
    }

    if (!uniqueMedications.has(`${medication.id}_${medication.name}_${subFamily.id}`)) {
      uniqueMedications.set(`${medication.id}_${medication.name}_${subFamily.id}`, medication)
    }

    productPrices.push({
      id,
      fractions,
      concentration,
      establishmentType,
      establishmentTypeId,
      productName: product.name,
      medication: medication.name,
      unitPrice: unitPrice.toString(),
      packPrice: packPrice.toString(),
      pharmaceuticalForm: pharmaceuticalForm.name,
      establishmentName: formatText(establishmentName),
      department: formatText(department.name),
      updateAt: stringToDate(updateAt) ?? null,
      province: formatText(province.name),
      district: formatText(district.name),
      location: formatText(`${district.name}-${province.name}`),
      address: formatText(address),
      completeProductName: `${product.name} ${concentration} ${pharmaceuticalForm.name.replace(' - Capsula', '')} x ${fractions} unid`,
    })
  })

  const uniqueFamilyNamesArray = setToArray(uniqueFamilyNames)
  const uniqueMedicationsArray = setToArray(uniqueMedications)
  const uniqueProductNamesArray = setToArray(uniqueProductNames)
  const uniqueSubfamilyNamesArray = setToArray(uniqueSubfamilyNames)

  return {
    uniqueFamilyNames: uniqueFamilyNamesArray,
    uniqueMedications: uniqueMedicationsArray,
    uniqueProductNames: uniqueProductNamesArray,
    uniqueSubfamilyNames: uniqueSubfamilyNamesArray,
    productPrices,
  }
}

const setToArray = <T>(set: Map<string, T>): T[] => {
  return Array.from(set.values())
}
