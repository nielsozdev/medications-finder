import { type Document, Schema, model, type Model, models } from 'mongoose'

import { type Family } from '../../types/medications'

export interface FamilySchema extends Family, Document {}

const familySchema = new Schema<FamilySchema>({
  idFamily: { type: String, required: true, unique: true },
  family: {
    type: String,
    required: true,
    index: true,
  },
})

familySchema.index({ medicationFamily: 1 })

// export const FamilyModel: Model<FamilySchema> = model<FamilySchema>('Family', familySchema)

export const FamilyModel: Model<FamilySchema> = models.PriceModel || model<FamilySchema>('Family', familySchema)
export default FamilyModel
