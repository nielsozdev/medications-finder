import { PriceModel, SubFamilyModel } from '@noz/medications-core/src/mongoose/models'

export async function getMedicationPricesFromFamily(params): Promise<any> {
  console.log(params)
  const medication = params.family.toUpperCase()
  console.log('medication', medication)
  try {
    // const fractions = await SubFamilyModel.distinct('fractions', { family: medicationName }).lean().exec()
    const subFamilies = await SubFamilyModel.distinct('family', { subFamily: medication })

    // const subFamilies = await PriceModel.find({ family: medication })
    console.log('subFamilies', subFamilies)

    // const results = PriceModel.find({ subFamily: medication })

    /*

    obtener la lista de subfamilias de la familia
    obtener los medicamentos de cada subfamilia
    */
  } catch (error) {
    console.error('Error obteniendo los medicamentos de la familia:', error)
    throw new Error('Error obteniendo los medicamentos de la familia')
  }
}
/*

EN LA FAMILIA HAY DIFERENTES SUB FAMILIAS
PERO SI SE FILTRA POR SUB FAMILIA, SLEN DIFERENTES TIPOS DE FAMILIA

*/
