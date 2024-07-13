import fs from 'fs'

import prisma, { Prisma, type SubFamily } from '@noz/db'

import { PATHS } from '~/constants/paths'

export async function upsertManySubFamily() {
  try {
    const pathFile = `${PATHS.root}/processed/sub-family.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: SubFamily[] = JSON.parse(bufferContent.toString()) as SubFamily[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.group,
      field.id,
      field.idFamily,
      field.name,
      field.nameSuggestion,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "SubFamily" (
        "group", "id", "idFamily", "name", "nameSuggestion"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "group" = EXCLUDED."group",
        "name" = EXCLUDED."name",
        "nameSuggestion" = EXCLUDED."nameSuggestion",
        "idFamily" = EXCLUDED."idFamily"
        RETURNING *
    ;`

    console.log('Subfamilies inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting subfamilies:', error)
    throw error
  }
}
