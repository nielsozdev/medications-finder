export async function saveDataInDatabase (data) {
  await Promise.resolve(data)
  console.log('in saveDAta.ts Filedata', data.length)
  // Guarda la data en un objeto
  // extractData[combination[2].establishment] = {
  //   ...extractData[combination[2].establishment],
  //   location: combination[2].label,

  //   [combination[1].category]: {
  //     ...extractData[combination[1].category],
  //     categoryName: combination[1].label,

  //     [combination[0].situation]: {
  //       ...extractData[combination[0].situation],
  //       situationName: combination[0].label,

  //       establishments: data
  //     }

  //   }
  // }
}
