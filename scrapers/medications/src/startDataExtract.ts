import { PATHS } from '~/constants/paths'
import { getInfoToExtract } from '~/helpers/getInfoToExtract'
import { startPointExtractMedicationsData } from '~/scripts/data/startExtract';

// import { printMemoryUsage, printCpuUsage } from '~/utils';
// import { performance } from 'perf_hooks'

(async function startDataExtract() {
  // const startCpuUsage = process.cpuUsage()
  // const startTime = performance.now()

  const medicationsListFilePath = './public/extracted/processed/medications/generic/generic-medications-list.json'
  const locationsListFilePath = './public/extracted/processed/locations/locations-to-extract.json'
  const pathNotExtractedData = `${PATHS.medicationsNotExtracted}`
  const pathExtractedData = `${PATHS.medicationsExtracted}`

  const { locationsList, medicationsList } = await getInfoToExtract({
    locationsListFilePath,
    medicationsListFilePath,
  })

  await startPointExtractMedicationsData({
    locationsList,
    medicationsList,
    pathExtractedData,
    pathNotExtractedData,
  })
  console.timeEnd('extract medications from Digemid...')
  // const endTime = performance.now()
  // printCpuUsage({ startTime, endTime, startCpuUsage })
  // printMemoryUsage()
})()
