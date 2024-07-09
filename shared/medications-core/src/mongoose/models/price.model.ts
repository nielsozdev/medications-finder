import { type Document, Schema, model, models, type Model } from 'mongoose'

import { type Price } from '../../types/medications'

import { establishmentSchema } from './establishment.model'

export interface PriceSchema extends Price, Document { }

const priceSchema = new Schema<PriceSchema>({
  establishment: establishmentSchema,
  // establishment: {
  //   type: String, // Change to String if idEstablishment is a string
  //   ref: 'Establishment', // Maintain the reference
  //   required: true,
  // },

  family: { type: String, required: true },
  idExtracted: { type: String, required: true },
  idSubFamily: { type: String, required: true },
  prices: {
    type: Array<number | null >,
    required: true,
    validate: {
      validator: (arr: Array<number | null> | null[]) => arr.length === 3,
      message: 'Price must contain max 3 numbers',
    },
  },
  subFamily: { type: String, required: true },
  suggestion: { type: String, required: true },
  updateAt: { type: String, required: true },
})

priceSchema.index({ subFamily: 1, idSubFamily: 1 })

// export const PriceModel: Model<PriceSchema> = model<PriceSchema>('Price', priceSchema)
export const PriceModel: Model<PriceSchema> = models.PriceModel || model<PriceSchema>('Price', priceSchema)
export default PriceModel
