
import { generateOptionCombinations } from './generateOptionCombinations'
import { getOptionsDataArray } from './getOptionsDataArray'
import { type ValidMenuOptionsList, type DataToPushObject } from './types/types'

export function getMenuListCombinations (menuOptionsList: any) {
  try {
    const optionsDataArrays = [] as DataToPushObject[][]

    console.log('Generando combinaciones de opciones de búsqueda')

    menuOptionsList.forEach((options: ValidMenuOptionsList) => {
      optionsDataArrays.push(getOptionsDataArray(options))
    })

    const combinations: DataToPushObject[][] = generateOptionCombinations(optionsDataArrays)

    return combinations
  } catch (err) {
    console.log(err)
  }
}
