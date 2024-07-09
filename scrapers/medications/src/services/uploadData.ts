import { PrismaClient } from '@prisma/client'

import { upsertManyDepartments } from './upsertManyDepartments'
import { upsertManyDistricts } from './upsertManyDistricts'
import { upsertManyEstablishments } from './upsertManyEstablishments'
import { upsertManyFamily } from './upsertManyFamily'
import { upsertManyManufacturers } from './upsertManyManufacturers'
import { upsertManyMedications } from './upsertManyMedications'
import { upsertManyPharmaceuticalForms } from './upsertManyPharmaceuticalForms'
import { upsertManyPrices } from './upsertManyPrices'
import { upsertManyProducts } from './upsertManyProducts'
import { upsertManyProvinces } from './upsertManyProvinces'
import { upsertManySubFamily } from './upsertManySubFamilies'

const prisma = new PrismaClient()
// const medicationsPath = `${PATHS.root}/processed/prices`
// const medicationsFiles = getAllFiles(medicationsPath, '.json')
async function main() {
  try {
    // // IMPORTANT: No modify theOrder of insertions
    // // 1. Insertamos los departamentos
    // await upsertManyDepartments()
    // // 2. Insertamos los provincias
    // await upsertManyProvinces()
    // // 3. Insertamos los distritos
    // await upsertManyDistricts()
    // // 4. Insertamos los establecimientos
    // await upsertManyEstablishments()
    // // 5. Insertamos los manuafcturers
    // await upsertManyManufacturers()
    // // 6. Insertamos los pharmaceutical forms
    // await upsertManyPharmaceuticalForms()
    // // 7. Insertamos los familias
    // await upsertManyFamily()
    // // 8. Insertamos los subfamilias
    // await upsertManySubFamily()
    // // 9. Insertamos los medicamentos
    // await upsertManyMedications()
    // // 10. Insertamos los productos
    // await upsertManyProducts()
    // 11. Insertamos los precios
    await upsertManyPrices()
  } catch (error) {
    console.error('Main error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((err) => {
  console.error('Error en la operación principal:', err)
  process.exit(1) // Salir con código de error en caso de falla
})
