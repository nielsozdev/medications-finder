import { PriceModel } from '@noz/medications-core/src/mongoose/models'

import { type Price } from '~/types/graphql'

export async function getMedications(params): Promise<Price[]> {
  const medication = params.medication.toUpperCase()
  const department = params.department.toUpperCase()
  const province = params.province.toUpperCase()
  const district = params.district?.toUpperCase()

  try {
    const pipeline = [
      {
        $lookup: {
          from: 'subfamilies',
          localField: 'idSubFamily',
          foreignField: 'idSubFamily',
          as: 'subFamily',

        },
      },
      { $unwind: '$subFamily' },
      {
      // $match: { medicationFamily: 'AMOXICILINA TRIHIDRATO' }
        $match: { 'subFamily.subFamily': medication },
      },
      {
        $lookup: {
          from: 'manufacturers',
          localField: 'subFamily.idManufacturer',
          foreignField: 'idManufacturer',
          as: 'subFamily.manufacturer',
        },
      },
      {
        $unwind: '$subFamily.manufacturer',
      },
      {
        $match: {
          'establishment.location.department': department,
          'establishment.location.province': province,
          ...(district && { 'establishment.location.district': district }),
        },
      },
      {
        $project: {
          establishment: 1,
          family: 1,
          idExtracted: 1,
          prices: 1,
          suggestion: 1,
          updateAt: 1,
          idSubFamily: 1,
          subFamily: {
            idSubFamily: 1,
            concentration: 1,
            family: 1,
            idManufacturer: 1,
            subFamily: 1,
            manufacturer: {
              idManufacturer: 1,
              titularName: 1,
              location: 1,
            },
          },
        },
      },
    ]

    const data: Price[] = await PriceModel.aggregate(pipeline).exec()

    return data
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener los datos')
  }
}
