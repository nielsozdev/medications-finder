import { writeFile } from '@noz/utils'

import { PATHS } from '~/constants/paths'

async function createLocationsToExtractMedicationsData() {
  /* Estos datos deberian ser procesados de todas las localidades del peru y según importancia en la siguiente etapa */
  const locationsToExtract: string[] = ['JUNIN'].map((location) => location.toLowerCase())

  const path = `${PATHS.processedData}/locations/locations-to-extract.json`

  await writeFile(path, locationsToExtract)
}

createLocationsToExtractMedicationsData()
