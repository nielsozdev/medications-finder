import fs from 'fs'

import prisma, { Prisma, type Manufacturer } from '@noz/prisma'

import { PATHS } from '~/constants/paths'

export async function upsertManyManufacturers() {
  try {
    const pathFile = `${PATHS.root}/processed/manufacturers.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Manufacturer[] = JSON.parse(bufferContent.toString()) as Manufacturer[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.id,
      field.name,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "Manufacturer" (
        "id", "name"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "name" = EXCLUDED."name"
        RETURNING *
    ;`

    console.log('Manufacturers inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting manufacturers:', error)
    throw error
  }
}
