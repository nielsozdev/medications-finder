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

    const familyKey = `${family.id}_${family.name}`

    if (!uniqueFamilyNames.has(familyKey)) {
      uniqueFamilyNames.set(familyKey, {
        id: family.id,
        name: family.name,
      })
    }

    const subFamilyKey = `${subFamily.id}_${family.id}`

    if (!uniqueSubfamilyNames.has(subFamilyKey)) {
      uniqueSubfamilyNames.set(subFamilyKey, {
        id: subFamily.id,
        name: subFamily.name,
        family: subFamily.family.name,
      })
    }

    const medicationKey = `${medication.id}_${medication.name}_${subFamily.id}`

    if (!uniqueMedications.has(medicationKey)) {
      uniqueMedications.set(medicationKey, {
        id: medication.id,
        name: medication.name,
        subFamily: subFamily.name,
      })
    }

    const productKey = `${product.name}_${idMedication}`

    if (!uniqueProductNames.has(productKey)) {
      uniqueProductNames.set(productKey, {
        id: product.id,
        name: product.name,
        medication: medication.name,
      })
    }

    productPrices.push({
      id,
      fractions,
      family: family.name,
      subFamily: subFamily.name,
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
