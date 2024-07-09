import { type Document, Schema, model, type Model, models } from 'mongoose'

import { type SubFamily } from '../../types/medications'

export interface SubFamilySchema extends Document, SubFamily {}

export const subFamilySchema = new Schema<SubFamilySchema>({
  concentration: { type: String, required: false, default: '' },
  family: { type: String, required: true },
  fractions: { type: Number, required: true },
  group: { type: String, required: true },
  idFamily: { type: String, required: true },
  idManufacturer: { type: String, required: true },
  idSubFamily: { type: String, required: true, unique: true, index: true },
  pharmaceuticalFormGroup: { type: String, required: true },
  pharmaceuticalFormGroupCode: { type: String, required: true },
  pharmaceuticalFormName: { type: String, required: true },
  subFamily: { type: String, required: true },
  totalActivePrinciple: { type: String, required: true },
})

subFamilySchema.index({ subFamily: 1 })

// export const SubFamilyModel: Model<SubFamilySchema> = model<SubFamilySchema>('SubFamily', subFamilySchema)
export const SubFamilyModel: Model<SubFamilySchema> = models.PriceModel || model<SubFamilySchema>('SubFamily', subFamilySchema)
export default SubFamilyModel
