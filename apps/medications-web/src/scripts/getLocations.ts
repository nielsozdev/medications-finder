'use server'

import prisma from '@noz/prisma/next'
import { createFolderAndSaveFile } from '@noz/utils'

const path = './src/data/locations.json'

export async function getLocations(department?: string) {
  try {
    const where = {
      name: department?.toUpperCase(),
    }
    const dataToDB = await prisma.department.findMany({
      where,
      include: {
        provinces: {
          include: {
            districts: true,
          },
        },
      },
    })

    if (!dataToDB) {
      throw new Error(`Department '${department}' not found.`)
    }

    await createFolderAndSaveFile(path, dataToDB)

    return dataToDB
  } catch (error) {
    console.error('Error getting locations:', error)
    throw new Error('Error getting locations')
  } finally {
    await prisma.$disconnect()
  }
}
