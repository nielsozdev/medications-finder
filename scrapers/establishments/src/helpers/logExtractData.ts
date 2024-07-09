export function logExtractData ({ combination, combinationIndex, totalRegistersToExtract }) {
  console.info(`🔸Localización actual: ${combination[2].establishment} - Establecimiento N° ${parseInt(combinationIndex) + 1}/${totalRegistersToExtract}\n`)
  let response = ''

  combination.forEach((item) => {
    if (item.situation) { response += `🔹Situación:${item.situation}\n` }

    if (item.category) { response += `🔹Categoría:${item.category}\n` }

    if (item.establishment) { response += `🔹Establecimiento:${item.establishment} - ${item.label}\n` }
  })
  console.log('✅', '\n', response)
}
