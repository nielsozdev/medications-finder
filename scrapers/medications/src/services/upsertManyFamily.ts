import fs from 'fs'

import prisma, { Prisma, type Family } from '@noz/db'

import { PATHS } from '~/constants/paths'

export async function upsertManyFamily() {
  try {
    const pathFile = `${PATHS.root}/processed/family.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Family[] = JSON.parse(bufferContent.toString()) as Family[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.id,
      field.name,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "Family" (
        "id", "name"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "name" = EXCLUDED."name"
        RETURNING *
    ;`

    console.log('Families inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting families:', error)
    throw error
  }
}
