import fs from 'node:fs'

import prisma, { Prisma, type Price } from '@noz/db'
import { clog } from '@noz/utils'

import { PATHS } from '~/constants/paths'
import { getAllFiles } from '~/utils/getAllFiles'

let previousId: string | null = null // Variable para almacenar el id anterior

export async function upsertManyPrices() {
  try {
    const dataPrices = await getPricesData()

    // Verificar unicidad de ids antes de la inserción
    const idSet = new Set<string>()
    dataPrices.forEach((data: Price[]) => {
      data.forEach((item: Price) => {
        if (idSet.has(item.id as string)) {
          throw new Error(`Duplicated id found: ${item.id}`)
        }

        idSet.add(item.id as string)
      })
    })

    for (const data of dataPrices) {
      const dataAsSqlArr = data.map((field: any) => Prisma.sql`(${Prisma.join([
        field.id,
        field.idEstablishment,
        field.idProduct,
        field.prices,
        field.updateAt,
      ])})`)
      // await prisma.price.deleteMany({})

      // Guardar el id antes de intentar la inserción
      previousId = data[0]?.id || null

      const results = await prisma.$executeRaw`
        INSERT INTO "Price" (
          "id", "idEstablishment", "idProduct", "prices", "updateAt"
          )
        VALUES ${Prisma.join(dataAsSqlArr)}
        ON CONFLICT ("id") DO UPDATE SET
          "idEstablishment" = EXCLUDED."idEstablishment",
          "idProduct" = EXCLUDED."idProduct",
          "prices" = EXCLUDED."prices",
          "updateAt" = EXCLUDED."updateAt"
          RETURNING *
      ;`

      clog.success('Prices inserted successfully:', results)
    }
  } catch (error) {
    if (error.code === 'P2010' && error.meta?.code === '21000') {
      console.error(`Conflicto de id detectado para el id: ${previousId}`)
      const conflictedId = extractConflictedId(error)
      console.error(`Conflicto de id detectado para el id: ${conflictedId}`)
      // Aquí puedes decidir cómo manejar el conflicto, por ejemplo, actualizar el registro existente
    } else {
      console.error('Error inserting prices:', error)
      throw error
    }
  }
}

async function getPricesData() {
  const medicationsPath = `${PATHS.root}/processed/prices`
  const medicationsFiles = getAllFiles(medicationsPath, '.json')
  const dataPrices: Price[][] = []

  for (const file of medicationsFiles) {
    const filePath = `${medicationsPath}/${file}`
    const buffferContent = await fs.promises.readFile(filePath, 'utf-8')
    const data: Price[] = JSON.parse(buffferContent) as Price[]

    if (data.length === 0) continue

    if (data) {
      dataPrices.push(data)
    }
  }

  return dataPrices.map((item) => item)
}

function extractConflictedId(error: any): string | null {
  try {
    const message = error.meta.message
    const match = message.match(/Key \((.*?)\)=\((.*?)\) already exists/)
    if (match && match.length >= 3) {
      return match[2] // Esto obtiene el id que causó el conflicto
    }

    return null
  } catch (e) {
    console.error('Error al extraer el id en conflicto:', e)

    return null
  }
}
