export function generateOptionCombinations (data: any) {
  const combinations: any = {}
  // TODO Refactorizar
  function generateCombinations (currentCombination: any[], groupIndex: number) {
    if (groupIndex === data.length) {
      const category = currentCombination[1]?.category

      if (!category) return

      if (!(category in combinations)) {
        combinations[category] = []
      }

      combinations[category].push([...currentCombination])
      return
    }

    for (let i = 0; i < data[groupIndex].length; i++) {
      generateCombinations([...currentCombination, data[groupIndex][i]], groupIndex + 1)
    }
  }

  generateCombinations([], 0)

  return combinations
}

// export function generateOptionCombinations (data: any) {
//   const combinations: any = {}

//   for (let i = 0; i < data[0].length; i++) {
//     for (let j = 0; j < data[1].length; j++) {
//       for (let k = 0; k < data[2].length; k++) {
//         if (!Object.prototype.hasOwnProperty.call(combinations, data[1][j].category)) {
//           combinations[data[1][j].category] = []
//           combinations[data[1][j].category].push([data[0][i], data[1][j], data[2][k]])
//         } else {
//           combinations[data[1][j].category].push([data[0][i], data[1][j], data[2][k]])
//         }
//       }
//     }
//   }

//   return combinations
// }

/* ssssssssssssssss */
// const allCombinations = generateCombinations(data)
// console.log(allCombinations)

// import { type DataToPushObject } from './interfaces/types.d'

// // Función auxiliar para generar las combinaciones de opciones
// export function generateOptionCombinations (arrays: any[], index = 0, current = []) {
//   if (index === arrays.length) {
//     return [current]
//   }

//   // console.log(arrays)
//   const options = arrays[index]

//   const combinations = [] as DataToPushObject[][]

//   for (let i = 0; i < options.length; i++) {
//     const option = options[i]

//     const newCurrent: any = [...current, option]

//     combinations.push(...generateOptionCombinations(arrays, index + 1, newCurrent))
//   }

//   return combinations
// }
