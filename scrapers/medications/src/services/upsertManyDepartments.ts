import fs from 'fs'

import prisma, { type Department, Prisma } from '@noz/prisma'
import { clog } from '@noz/utils'

import { PATHS } from '~/constants/paths'

export async function upsertManyDepartments() {
  try {
    const pathFile = `${PATHS.root}/processed/departments.json`
    const bufferContent = fs.readFileSync(pathFile)
    const data: Department[] = JSON.parse(bufferContent.toString()) as Department[]

    const dataAsSqlArr = data.map((filed: any) => Prisma.sql`(${Prisma.join([
      filed.id,
      filed.name,
    ])})`)

    const results = await prisma.$executeRaw`
    INSERT INTO "Department" (
      "id", "name"
      )
    VALUES ${Prisma.join(dataAsSqlArr)}
    ON CONFLICT ("id") DO UPDATE SET
      "name" = EXCLUDED."name"
    RETURNING *
  ;`

    clog.info('Departments inserted successfully:', results)
  } catch (error) {
    console.error('Error inserting departments:', error)
    throw error
  }
}
