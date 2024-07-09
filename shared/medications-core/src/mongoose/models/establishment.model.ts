import { type Document, Schema, model, type Model, models } from 'mongoose'

import { type Establishment } from '../../types/medications'

export interface EstablishmentSchema extends Establishment, Document {}

export const establishmentSchema = new Schema<EstablishmentSchema>({
  address: { type: String, required: true },
  commercialName: { type: String, required: true },
  establishmentType: {
    type: String,
    // enum: ['Privado', 'Público'],
    required: true,
  },
  establishmentTypeId: {
    type: String,
    // enum: ['03', '04', '06'],
    required: true,
    index: true,
  },
  idEstablishment: { type: String, required: true },
  location: {
    type: {
      department: { type: String, required: true },
      province: { type: String, required: true },
      district: { type: String, required: true },
    },
    required: true,
  },
  phone: { type: String, required: false, default: null },
  ubigeo: { type: String, required: true },
})

establishmentSchema.index({ 'location.department': 1, 'location.province': 1, 'location.district': 1 })

// export const EstablishmentModel: Model<EstablishmentSchema> = model<EstablishmentSchema>('Establishment', establishmentSchema)
export const EstablishmentModel: Model<EstablishmentSchema> = models.PriceModel || model<EstablishmentSchema>('Establishment', establishmentSchema)
export default EstablishmentModel
