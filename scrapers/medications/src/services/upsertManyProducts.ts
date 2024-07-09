import fs from 'fs'

import prisma, { Prisma, type Product } from '@noz/prisma'

import { PATHS } from '~/constants/paths'

export async function upsertManyProducts() {
  try {
    const pathFile = `${PATHS.root}/processed/products.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Product[] = JSON.parse(bufferContent.toString()) as Product[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.id,
      field.idMedication,
      field.name,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "Product" (
        "id", "idMedication", "name"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "name" = EXCLUDED."name",
        "idMedication" = EXCLUDED."idMedication"
        RETURNING *
    ;`

    console.log('Products inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting products:', error)
    throw error
  }
}
