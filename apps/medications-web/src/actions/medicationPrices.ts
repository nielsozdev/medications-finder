'use server'

import { revalidatePath } from 'next/cache'

import { prisma } from '@noz/db'

import { findMedication } from '~/helpers/getCorrectSuggestion'

interface GetMedicationPrices {
  department?: string
  district?: string
  page: number
  pageSize: number
  province?: string
  query: string
}

export async function getMedicationPrices(params: GetMedicationPrices) {
  const { department, district, pageSize, province, query } = params

  const departmentVal = department ? `&department=${department.toLowerCase()}` : ''
  const provinceVal = province ? `&province=${province.toLowerCase()}` : ''
  const districtVal = district ? `&district=${district.toLowerCase()}` : ''

  const searchTerm = await findMedication(query)

  const path = `/results?query=${searchTerm}${departmentVal}${provinceVal}${districtVal}`

  try {
    if (!searchTerm) return []
    // const skip = (page - 1) * pageSize

    const data = await prisma.price.findMany({
      // skip,
      take: pageSize,
      where: {
        OR: [
          {
            product: {
              name: {
                contains: searchTerm.toUpperCase(), mode: 'insensitive',
              },
            },
          },
          {
            product: {
              medication: {
                name: {
                  contains: searchTerm.toUpperCase(),
                  mode: 'insensitive',
                },
              },
            },
          },
        ],
        establishment: {
          district: {
            ...(district ? { name: district.toUpperCase() } : {}),
            province: {
              ...(province ? { name: province.toUpperCase() } : {}),
              department: {
                ...(department ? { name: department.toUpperCase() } : {}),
              },
            },
          },
        },
      },
      include: {
        product: {
          include: {
            medication: {
              include: {
                manufacturer: true,
                subFamily: {
                  include: {
                    family: true,
                  },
                },
                pharmaceuticalForm: true,
              },
            },
          },
        },
        establishment: {
          include: {
            district: {
              include: {
                province: {
                  include: {
                    department: true,
                  },
                },
              },
            },
          },
        },

      },
    })

    revalidatePath(path)

    return data
  } catch (error) {
    throw new Error(`Error fetching data ${error}`)
  }
}
