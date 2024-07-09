import { FamilyModel } from '@noz/medications-core/src/mongoose/models'

import { type Family } from '~/types/graphql'

export async function getFamily(params): Promise<Family | null> {
  const medication = params.medication.toUpperCase()

  try {
    const data = await FamilyModel.findOne({ family: medication }).populate('subfamilies')
    console.log('data', data)

    return data
  } catch (error) {
    console.error('Error obteniendo la familia de medicamentos:', error)
    throw new Error('Error obteniendo la familia de medicamentos')
  }
}
