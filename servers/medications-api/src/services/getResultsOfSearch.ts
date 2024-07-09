import { SubFamilyModel } from '@noz/medications-core/src/mongoose/models'

import { type SubFamily } from '~/types/graphql'

type FamilySubFamilyMap = Record<
  string,
  {
    count: number
    subFamilies: Array<{
      concentrations: string[]
      fractions: number[]
      pharmaceuticalFormGroup: string[]
      pharmaceuticalFormName: string[]
      subFamily: string
      count: number
    }>
    totalConcentrations: string[]
    totalFractions: number[]
    totalPharmaceuticalFormGroup: string[]
    totalPharmaceuticalFormName: string[]
  }
>
export async function getResultsOfSearch(params) {
  const medicationName: string = params.medication.toUpperCase()
  try {
    // const da = await searchMedication2(medicationName)
    const subfamilyInfo = await getSubFamiliesInfo(medicationName)
    console.log(subfamilyInfo?.familiesWithSubFamilies.map((f) => f.subFamilies))
    console.log('--------------------')
    console.log(subfamilyInfo)

    return subfamilyInfo
    // console.log('subfamilyInfo', subfamilyInfo)
    // const med = await searchMedication(medicationName)
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

async function getSubFamiliesInfo(term: string) {
  const sanitizedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapa caracteres especiales de regex

  const regex = new RegExp(sanitizedTerm, 'i') // Crea la expresión regular

  const existSubFamily = await existDocuments({ subFamily: { $regex: regex } }, SubFamilyModel)
  try {
    let results: SubFamily[] = []
    if (existSubFamily) {
      // console.log('existe subfamilies')
      results = await SubFamilyModel.find({ subFamily: { $regex: regex } })
        .lean()
        .exec()
    } else {
      // console.log('no existe subfamilies')
      results = await SubFamilyModel.find({ family: { $regex: regex } })
        .lean()
        .exec()
    }

    // Mapea las subfamilias encontradas para obtener sus familias, subfamilias, concentraciones y fracciones
    const familySubFamilyMap: FamilySubFamilyMap = results.reduce(
      (acc: FamilySubFamilyMap, item: SubFamily) => {
        if (acc[item.family]) {
          const subFamilyEntry = acc[item.family].subFamilies.find(
            (sf) => sf.subFamily === item.subFamily
          )
          if (subFamilyEntry) {
            subFamilyEntry.concentrations.push(item.concentration)
            subFamilyEntry.fractions.push(item.fractions)
            subFamilyEntry.pharmaceuticalFormGroup.push(item.pharmaceuticalFormGroup)
            subFamilyEntry.pharmaceuticalFormName.push(item.pharmaceuticalFormName)
            subFamilyEntry.count++ // Incrementa el contador de la subfamilia
          } else {
            acc[item.family].subFamilies.push({
              subFamily: item.subFamily,
              concentrations: [item.concentration],
              fractions: [item.fractions],
              pharmaceuticalFormGroup: [item.pharmaceuticalFormGroup],
              pharmaceuticalFormName: [item.pharmaceuticalFormName],
              count: 1, // Inicializa el contador de la subfamilia
            })
          }

          acc[item.family].totalConcentrations.push(item.concentration)
          acc[item.family].totalFractions.push(item.fractions)
          acc[item.family].count++
        } else {
          acc[item.family] = {
            subFamilies: [
              {
                subFamily: item.subFamily,
                concentrations: [item.concentration],
                fractions: [item.fractions],
                pharmaceuticalFormGroup: [item.pharmaceuticalFormGroup],
                pharmaceuticalFormName: [item.pharmaceuticalFormName],
                count: 1, // Inicializa el contador de la subfamilia
              },
            ],
            totalConcentrations: [item.concentration],
            totalFractions: [item.fractions],
            totalPharmaceuticalFormGroup: [item.pharmaceuticalFormGroup],
            totalPharmaceuticalFormName: [item.pharmaceuticalFormName],
            count: 1,
          }
        }

        return acc
      },
      {}
    )

    // Formatea los datos en un array de familias con sus subfamilias, concentraciones y fracciones
    const familiesWithSubFamilies = Object.keys(familySubFamilyMap).map((family) => ({
      family,
      subFamilies: familySubFamilyMap[family].subFamilies.map((sf) => ({
        subFamily: sf.subFamily,
        concentrations: Array.from(new Set(sf.concentrations)), // Remueve duplicados si los hubiera
        fractions: Array.from(new Set(sf.fractions)), // Remueve duplicados si los hubiera
        pharmaceuticalFormGroup: Array.from(new Set(sf.pharmaceuticalFormGroup)), // Remueve duplicados si los hubiera
        pharmaceuticalFormName: Array.from(new Set(sf.pharmaceuticalFormName)), // Remueve duplicados si los hubiera
        count: sf.count, // Agrega el contador de la subfamilia
      })),
      totalConcentrations: Array.from(new Set(familySubFamilyMap[family].totalConcentrations)), // Remueve duplicados si los hubiera
      totalFractions: Array.from(new Set(familySubFamilyMap[family].totalFractions)), // Remueve duplicados si los hubiera
      totalPharmaceuticalFormGroup: Array.from(
        new Set(familySubFamilyMap[family].totalPharmaceuticalFormGroup)
      ), // Remueve duplicados si los hubiera
      totalPharmaceuticalFormName: Array.from(
        new Set(familySubFamilyMap[family].totalPharmaceuticalFormName)
      ), // Remueve duplicados si los hubiera
      count: familySubFamilyMap[family].count,
    }))

    const allFamilies = [...new Set(familiesWithSubFamilies.flatMap((f) => f.family))]
    const allSubFamilies = [
      ...new Set(
        familiesWithSubFamilies.flatMap((f) => f.subFamilies.flatMap((sf) => sf.subFamily))
      ),
    ]
    const allConcentrations = [
      ...new Set(familiesWithSubFamilies.flatMap((f) => f.totalConcentrations)),
    ]
    const allFractions = [...new Set(familiesWithSubFamilies.flatMap((f) => f.totalFractions))]
    const allPharmaceuticalFormGroup = [
      ...new Set(familiesWithSubFamilies.flatMap((f) => f.totalPharmaceuticalFormGroup)),
    ]
    const allPharmaceuticalFormName = [
      ...new Set(familiesWithSubFamilies.flatMap((f) => f.totalPharmaceuticalFormName)),
    ]

    return {
      familiesWithSubFamilies,
      allFamilies,
      allSubFamilies,
      allConcentrations,
      allFractions,
      allPharmaceuticalFormGroup,
      allPharmaceuticalFormName,
    }
  } catch (error) {
    console.log(error)
  }
}

function existDocuments(query: any, model: any) {
  return model.find(query).countDocuments().exec()
}

/*
    const subFamilies: string[] = await SubFamilyModel.distinct('subFamily', { subFamily: regex }).lean().exec()
 */
/*

Pra sabe  la cantidad y las coincidencia

      const subFamilyResults2 = await SubFamilyModel.aggregate([
        { $match: { subFamily: { $regex: regex } } },
        {
          $group: {
            _id: '$subFamily',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            subFamily: '$_id',
            count: 1,
          },
        },
        {
          $group: {
            _id: null,
            subFamilies: { $push: { subFamily: '$subFamily', count: '$count' } },
            total: { $sum: '$count' },
          },
        },
        {
          $project: {
            _id: 0,
            subFamilies: 1,
            total: 1,
          },
        },
      ]).exec()

      console.log('Resultados de subfamilia con conteo de coincidencias:', subFamilyResults2) */
