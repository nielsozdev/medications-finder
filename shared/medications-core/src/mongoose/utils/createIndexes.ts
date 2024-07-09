
import { EstablishmentModel } from '../models/establishment.model'
import { FamilyModel } from '../models/family.model'
import { ManufacturerModel } from '../models/manufacturer.model'
import { PriceModel } from '../models/price.model'
import { SubFamilyModel } from '../models/subFamily.model'

import { connectDB, disconnectDB } from './connection'

export async function createIndexes ({ config }) {
  await connectDB({ config })

  try {
    await EstablishmentModel.createIndexes()
    await ManufacturerModel.createIndexes()
    await SubFamilyModel.createIndexes()
    await FamilyModel.createIndexes()
    await PriceModel.createIndexes()

    console.log('Indexes created')
  } catch (error) {
    console.error('Error creating indexes:', error)
  } finally {
    await disconnectDB()
  }
}
