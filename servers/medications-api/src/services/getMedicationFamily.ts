import { PriceModel } from '@noz/medications-core/src/mongoose/models'

export async function getMedicationFamily(params) {
  const medication = params.medication.toUpperCase()

  try {
    /*
    {
      "family": "A",
      "familyId": "001",
      subfamilies": [{
        family": "A",
        "familyId": "001",
      }],
      medications": [
        [{
          "idSubFamily": "001",
          "concentration": "500 mg",
          "family": "A",
          "fractions": 100,
          "group": "Tableta - Capsula",
          "idFamily": "001",
          "idManufacturer": "001",
          "idSubFamily": "001",
          "manufacturer": {
            "idManufacturer": "001",
            "location": "JUNIN",
            "titularName": "FARMACIA SOCORRO S.A.C."
          },
          "pharmaceuticalFormGroup": "Tableta Recubierta",
          "pharmaceuticalFormGroupCode": "Tableta Recubierta",
          "pharmaceuticalFormName": "Tableta Recubierta",
          "subFamily": "A",
          "totalActivePrinciple": "500 mg"
        }]
      ]
    */

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
        $lookup: {
          from: 'families',
          localField: 'subFamily.family',
          foreignField: 'family',
          as: 'family',
        },
      },
      {
        $unwind: {
          path: '$family',
          preserveNullAndEmptyArrays: true, // Preserve documents that don't have a matching family
        },
      },
      {
        match: {
          'family.family': medication,
        },
      },
      {
        $project: {
          family: 1,
          familyId: 1,
          subfamilies: {
            idSubFamily: 1,
            concentration: 1,
            family: 1,
            fractions: 1,
            group: 1,
            idFamily: 1,
            idManufacturer: 1,
            manufacturer: {
              idManufacturer: 1,
              location: 1,
              titularName: 1,
            },
          },
          medications: [
            {

            },
          ],
        },
      },

    ]
  } catch (error) {
    console.error('Error obteniendo la familia de medicamentos:', error)
  }
}
