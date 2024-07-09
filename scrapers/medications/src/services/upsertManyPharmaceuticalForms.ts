import fs from 'fs'

import prisma, { Prisma, type PharmaceuticalForm } from '@noz/prisma'

import { PATHS } from '~/constants/paths'

export async function upsertManyPharmaceuticalForms() {
  try {
    const pathFile = `${PATHS.root}/processed/pharmaceutical-forms.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: PharmaceuticalForm[] = JSON.parse(bufferContent.toString()) as PharmaceuticalForm[]

    const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
      field.id,
      field.group,
      field.groupCode,
      field.name,
    ])})`)

    const results = await prisma.$executeRaw`
      INSERT INTO "PharmaceuticalForm" (
        "id", "group", "groupCode", "name"
        )
      VALUES ${Prisma.join(dataAsSqlArr)}
      ON CONFLICT ("id") DO UPDATE SET
        "group" = EXCLUDED."group",
        "groupCode" = EXCLUDED."groupCode",
        "name" = EXCLUDED."name"
        RETURNING *
    ;`

    console.log('Pharmaceutical forms inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting pharmaceutical forms:', error)
    throw error
  }
}
