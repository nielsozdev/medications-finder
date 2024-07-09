import fs from 'fs'

import prisma, { type Establishment, Prisma } from '@noz/prisma'

import { PATHS } from '~/constants/paths'

export async function upsertManyEstablishments() {
  try {
    const pathFile = `${PATHS.root}/processed/establishments.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Establishment[] = JSON.parse(bufferContent.toString()) as Establishment[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.address,
      field.id,
      field.idDistrict,
      field.name,
      field.phone,
      field.type,
      field.typeId,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "Establishment" (
        "address", "id", "idDistrict", "name", "phone", "type", "typeId"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "address" = EXCLUDED."address",
        "name" = EXCLUDED."name",
        "phone" = EXCLUDED."phone",
        "type" = EXCLUDED."type",
        "typeId" = EXCLUDED."typeId",
        "idDistrict" = EXCLUDED."idDistrict"
        RETURNING *
    ;`

    console.log('Establishments inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting establishments:', error)
    throw error
  }
}
