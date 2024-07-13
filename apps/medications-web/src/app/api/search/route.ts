// import prisma from '@noz/db/next'
import { prisma } from '@noz/db'
import { createFolderAndSaveFile } from '@noz/utils'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const data = await prisma.medication.findMany({
    select: {
      id: true,
      name: true,
      concentration: true,
      fractions: true,
    },
  })

  const path = './src/data/medications.json'
  await createFolderAndSaveFile(path, data)

  return Response.json({ data })
}
