import { type Document, Schema, model, type Model, models } from 'mongoose'

import { type Manufacturer } from '../../types/medications'

export interface ManufacturerSchema extends Document, Manufacturer {}

const manufacturerSchema = new Schema<ManufacturerSchema>({
  location: { type: String, required: false, default: null },
  titularName: { type: String, required: false, default: null },
  idManufacturer: {
    type: String,
    required: true,
    index: true,
  },
})

manufacturerSchema.index({ manufacturerId: 1 })

// export const ManufacturerModel: Model<ManufacturerSchema> = model<ManufacturerSchema>('Manufacturer', manufacturerSchema)
export const ManufacturerModel: Model<ManufacturerSchema> = models.PriceModel || model<ManufacturerSchema>('Manufacturer', manufacturerSchema)
export default ManufacturerModel
