import fs from 'fs'

import prisma, { Prisma, type Province } from '@noz/db'

import { PATHS } from '~/constants/paths'

export async function upsertManyProvinces() {
  try {
    const pathFile = `${PATHS.root}/processed/provinces.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Province[] = JSON.parse(bufferContent.toString()) as Province[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.id,
      field.name,
      field.idDepartment,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "Province" (
        "id", "name", "idDepartment"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "name" = EXCLUDED."name",
        "idDepartment" = EXCLUDED."idDepartment"
        RETURNING *
    ;`

    console.log('Provinces inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting provinces:', error)
    throw error
  }
}
