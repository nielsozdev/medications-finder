import { FamilyModel, type FamilySchema, PriceModel, SubFamilyModel } from '@noz/medications-core/src/mongoose/models'

import { type SubFamily } from '~/types/graphql'

export async function getSubFamilies(params): Promise<SubFamily[] | null> {
  const medicationName = params.medication.toUpperCase()
  try {
    // Paso 1: Lookup para obtener subfamilias relacionadas
    // const subFamilies = await SubFamilyModel.aggregate([
    //   {
    //     $lookup: {
    //       from: 'subfamilies',
    //       localField: 'idFamily',
    //       foreignField: 'idFamily',
    //       as: 'subfamilies',
    //     },
    //   },
    //   {
    //     $match: {
    //       $or: [
    //         // { family: medicationName },
    //         { 'subfamilies.family': medicationName },
    //       ],
    //     },
    //   },
    //   { $unwind: '$subfamilies' },
    // ]).allowDiskUse(true)
    // const subFamilies = await SubFamilyModel.find({ family: medicationName }).lean().exec()
    // const subFamilies = await SubFamilyModel.distinct('subFamily').lean().exec()
    // const subFamilies = await SubFamilyModel.distinct('subFamily', { family: medicationName }).lean().exec()
    const da = await searchMedication2(medicationName)
    console.log(da)
    // const concentrations = await SubFamilyModel.distinct('concentration', { family: medicationName }).lean().exec()
    // const fractions = await SubFamilyModel.distinct('fractions', { family: medicationName }).lean().exec()
    const med = await searchMedication(medicationName)
    // Paso 2: Obtener concentraciones y fracciones únicas
    // const concentrations = [...new Set(subFamilies.map((sf) => sf.subfamilies.concentration).flat())]
    // const fractions = [...new Set(subFamilies.map((sf) => sf.subfamilies.fractions).flat())]
    // console.log({
    //   ...da,
    //   // med,
    // })
    // // Paso 3: Lookup para obtener detalles de fabricantes
    // const medicationsPrices = await SubFamilyModel.aggregate([
    //   { $match: { family: medicationName } },
    //   {
    //     $lookup: {
    //       from: 'manufacturers',
    //       localField: 'idManufacturer',
    //       foreignField: 'idManufacturer',
    //       as: 'manufacturer',
    //     },
    //   },
    //   { $unwind: '$manufacturer' },
    // ]).allowDiskUse(true)

    // // Paso 4: Estructurar resultados
    // const result = {
    //   family: subFamilies[0].family,
    //   idFamily: subFamilies[0].familyId,
    //   subfamilies: subFamilies.map((sf) => ({
    //     subFamily: sf.subfamilies.subFamily,
    //     idSubFamily: sf.subfamilies.idSubFamily,
    //   })),
    //   concentrationsForThisSubFamily: concentrations,
    //   fractionsForThisSubFamily: fractions,
    //   medicationsPrices: medicationsPrices.map((m) => ({
    //     idSubFamily: m.idSubFamily,
    //     concentration: m.concentration,
    //     family: m.family,
    //     fractions: m.fractions,
    //     group: m.group,
    //     idFamily: m.idFamily,
    //     idManufacturer: m.idManufacturer,
    //     manufacturer: m.manufacturer,
    //     pharmaceuticalFormGroup: m.pharmaceuticalFormGroup,
    //     pharmaceuticalFormGroupCode: m.pharmaceuticalFormGroupCode,
    //     pharmaceuticalFormName: m.pharmaceuticalFormName,
    //     subFamily: m.subFamily,
    //     totalActivePrinciple: m.totalActivePrinciple,
    //   })),
    // }

    // return result
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

// const subFamilies = await SubFamilyModel.distinct('subFamily', { family: family.family }).lean().exec()
// era asi
async function searchMedication(term: string): Promise<any> {
  // Buscar coincidencias exactas en subfamilias
  const subFamilyResult = await SubFamilyModel.findOne({ subFamily: term }).lean().exec()
  // console.log('subFamilyResult', subFamilyResult)
  // if (subFamilyResult) {
  //   // Si encontramos una coincidencia exacta en una subfamilia, mostramos detalles de esa subfamilia
  //   const medicationsPrices = await PriceModel.find({ idSubFamily: subFamilyResult.idSubFamily }).lean().exec()

  //   return { subFamily: subFamilyResult, medicationsPrices }
  // } else {
  //   // Si no hay una coincidencia exacta en una subfamilia, buscamos familias que coincidan parcialmente con el término de búsqueda
  //   const familyResult = await FamilyModel.findOne({ family: { $regex: term, $options: 'i' } }).lean().exec()

  //   if (familyResult) {
  //     // Si encontramos una coincidencia parcial en una familia, mostramos información general sobre esa familia
  //     // y luego una lista de subfamilias disponibles para esa familia
  //     const subFamilies = await SubFamilyModel.find({ idFamily: familyResult.idFamily }).lean().exec()

  //     return { family: familyResult, subFamilies }
  //   } else {
  //     // Si no encontramos ninguna coincidencia, devolvemos un mensaje indicando que no se encontraron resultados
  //     return { message: 'No se encontraron resultados.' }
  //   }
  // }
}
// Esta función buscará coincidencias exactas en las subfamilias primero. Si encuentra una coincidencia exacta, mostrará detalles de esa subfamilia junto con los precios de los medicamentos correspondientes. Si no hay coincidencias exactas en las subfamilias, buscará familias que coincidan parcialmente con el término de búsqueda. Si encuentra una coincidencia parcial en una familia, mostrará información general sobre esa familia y una lista de subfamilias disponibles para esa familia.

// Esta función debería proporcionar una manera efectiva de manejar la búsqueda de familias y subfamilias de medicamentos, priorizando la subfamilia en caso de coincidencias parciales o completas.
async function searchMedication2(term: string): Promise<any> {
  // Buscar coincidencias exactas en el nombre de las familias
  console.log('-----', term)
  // let familyResults: FamilySchema[] = []
  if (term.length < 4) return []

  // const familyResult = await FamilyModel.findOne({ family: term }).lean().exec()
  const regex = new RegExp(`^${term}.*`, 'i')
  // const count = await FamilyModel.countDocuments({ family: { $regex: regex } }).exec()
  const existFamily = await existDocuments({ family: { $regex: regex } }, FamilyModel)
  // console.log('existFamily', existFamily)
  // console.log('count', existFamily)
  // const familyResults = await FamilyModel.find({ family: { $regex: regex } }).lean().exec()
  // console.log('familyResult', familyResults)

  // Buscar coincidencias parciales en el nombre de las familias

  if (existFamily) {
    const familyResult = await FamilyModel.find({ family: { $regex: regex } }).lean().exec()

    let familys, subFamilies, allConcentrations, allFractions, subFamiliesList

    for (const familyRes of familyResult) {
      const subFamiliesData = await SubFamilyModel.aggregate([
        {
          $match: { family: familyRes.family },
        },
        {
          $group: {
            _id: '$subFamily',
            concentrations: { $addToSet: '$concentration' },
            fractions: { $addToSet: '$fractions' },
          },
        },
        {
          $project: {
            _id: 0,
            family: '$family',
            subFamily: '$_id',
            concentrations: 1,
            fractions: 1,
          },
        },
      ]).exec()

      const allConcentrationsData = await SubFamilyModel.distinct('concentration', { family: familyRes.family }).lean().exec()
      const allFractionsData = await SubFamilyModel.distinct('fractions', { family: familyRes.family }).lean().exec()

      familys = familyRes
      subFamilies = subFamiliesData
      allConcentrations = allConcentrationsData
      allFractions = allFractionsData
      subFamiliesList = subFamiliesData.map((sf) => sf.subFamily)
    }

    return { familys, subFamilies, allConcentrations, allFractions, subFamiliesList }
  } else {
    // Si no encontramos una coincidencia exacta en el nombre de una familia,
    // intentamos buscar en el nombre de las subfamilias
    const regex = new RegExp(`^${term}.*`, 'i')
    const existSubFamily = await existDocuments({ subFamily: { $regex: regex } }, SubFamilyModel)
    // console.log('existSubFamily', existSubFamily)
    if (existSubFamily) {
      const subFamilyResult = await SubFamilyModel.find({ subFamily: { $regex: regex } }).lean().exec()

      // const subFamilyResult = await SubFamilyModel.findOne({ subFamily: term }).lean().exec()
      // console.log('subFamilyResult', subFamilyResult)
      // Si encontramos una coincidencia exacta en el nombre de una subfamilia,
      // obtenemos el nombre de la familia asociada
      let familys, subFamilies, allConcentrations, allFractions, subFamiliesList

      // const subFamilies = await FamilyModel.distinct('subFamily', { family: family.family }).lean().exec()
      for (const subFamily of subFamilyResult) {
        // console.log('subFamilies', subFamilies)
        // const family = await FamilyModel.findOne({ family: subFamily.family }).lean().exec()
        // console.log('family', family)
        const subFamiliesData = await SubFamilyModel.aggregate([
          {
            $match: { family: subFamily.family },
          },
          {
            $group: {
              _id: '$subFamily',
              concentrations: { $addToSet: '$concentration' },
              fractions: { $addToSet: '$fractions' },
            },
          },
          {
            $project: {
              _id: 0,
              family: '$family',
              subFamily: '$_id',
              concentrations: 1,
              fractions: 1,
            },
          },
        ]).exec()

        const allConcentrationsData = await SubFamilyModel.distinct('concentration', { family: subFamily.family }).lean().exec()
        const allFractionsData = await SubFamilyModel.distinct('fractions', { family: subFamily.family }).lean().exec()

        subFamilies = subFamiliesData
        allConcentrations = allConcentrationsData
        allFractions = allFractionsData
        subFamiliesList = subFamiliesData.map((sf) => sf.subFamily)
      }

      // const family = await FamilyModel.findOne({ idFamily: subFamilyResult.family }).lean().exec()
      return { familys, subFamilies, allConcentrations, allFractions, subFamiliesList }

      // return { family, subFamily: subFamilyResult }
    } else {
      // Si no se encuentra ninguna coincidencia, devolvemos un mensaje indicando que no se encontraron resultados.
      return { message: 'No se encontraron resultados.' }
    }
  }
}

function existDocuments(query: any, model: any) {
  return model.find(query).countDocuments().exec()
}
