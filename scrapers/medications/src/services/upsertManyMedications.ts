import fs from 'fs'

import prisma, { Prisma, type Medication } from '@noz/prisma'

import { PATHS } from '~/constants/paths'

export async function upsertManyMedications() {
  try {
    const pathFile = `${PATHS.root}/processed/medications.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Medication[] = JSON.parse(bufferContent.toString()) as Medication[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.concentration,
      field.fractions,
      field.id,
      field.idManufacturer,
      field.idPharmaceuticalForm,
      field.idSubFamily,
      field.name,
      field.totalActivePrinciple,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "Medication" (
        "concentration", "fractions", "id", "idManufacturer", "idPharmaceuticalForm", "idSubFamily", "name", "totalActivePrinciple"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "concentration" = EXCLUDED."concentration",
        "fractions" = EXCLUDED."fractions",
        "idManufacturer" = EXCLUDED."idManufacturer",
        "idPharmaceuticalForm" = EXCLUDED."idPharmaceuticalForm",
        "idSubFamily" = EXCLUDED."idSubFamily",
        "name" = EXCLUDED."name",
        "totalActivePrinciple" = EXCLUDED."totalActivePrinciple"
        RETURNING *
    ;`

    console.log('Medications inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting medications:', error)
    throw error
  }
}
