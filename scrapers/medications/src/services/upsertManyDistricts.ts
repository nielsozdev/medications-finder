import fs from 'fs'

import prisma, { type District, Prisma } from '@noz/db'

import { PATHS } from '~/constants/paths'

export async function upsertManyDistricts() {
  try {
    const pathFile = `${PATHS.root}/processed/districts.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: District[] = JSON.parse(bufferContent.toString()) as District[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.id,
      field.name,
      field.idProvince,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "District" (
        "id", "name", "idProvince"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "name" = EXCLUDED."name",
        "idProvince" = EXCLUDED."idProvince"
      RETURNING *
    ;`

    console.log('Districts inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting districts:', error)
    throw error
  }
}
