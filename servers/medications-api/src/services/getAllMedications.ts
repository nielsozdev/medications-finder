import { PriceModel } from '@noz/medications-core/src/mongoose/models'
import { type MedicationsPrice } from '@noz/medications-core/src/types/medications'
import { clog } from '@noz/utils/src/clog'

export async function getAllMedications() {
  try {
    const medicationPrice: MedicationsPrice[] = await PriceModel.aggregate([
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
        $lookup: {
          from: 'manufacturers',
          localField: 'subFamily.idManufacturer',
          foreignField: 'idManufacturer',
          as: 'subFamily.manufacturer',
        },
      },
      {
        $unwind: {
          path: '$subFamily.manufacturer',
          preserveNullAndEmptyArrays: true, // Preserve documents that don't have a matching manufacturer
        },
      },
      {
        $project: {
          establishment: '$establishment',
          family: '$family',
          idExtracted: '$idExtracted',
          prices: '$prices',
          suggestion: '$suggestion',
          updateAt: '$updateAt',
          idSubFamily: '$idSubFamily',
          subFamily: {
            concentration: '$subFamily.concentration',
            family: '$subFamily.family',
            fractions: '$subFamily.fractions',
            group: '$subFamily.group',
            idManufacturer: '$subFamily.idManufacturer',
            idSubFamily: '$subFamily.idSubFamily',
            idFamily: '$subFamily.idFamily',
            manufacturer: {
              $cond: {
                if: { $eq: ['$subFamily.manufacturer', null] }, // Check if manufacturer is null
                then: null, // If it's null, return null
                else: {
                  titularName: '$subFamily.manufacturer.titularName',
                  location: '$subFamily.manufacturer.location',
                  idManufacturer: '$subFamily.manufacturer.idManufacturer',
                },
              },
            },
            pharmaceuticalFormGroup: '$subFamily.pharmaceuticalFormGroup',
            pharmaceuticalFormGroupCode: '$subFamily.pharmaceuticalFormGroupCode',
            pharmaceuticalFormName: '$subFamily.pharmaceuticalFormName',
            subFamily: '$subFamily.subFamily',
            totalActivePrinciple: '$subFamily.totalActivePrinciple',
          },
        },
      },
    ]).limit(100)

    return medicationPrice
  } catch (err) {
    clog.error(err)
    throw new Error('Error onteneindo todos los medicamentos')
  }
}
