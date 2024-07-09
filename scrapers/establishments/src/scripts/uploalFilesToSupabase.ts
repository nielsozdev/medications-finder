import { supabase } from '~/database/config'

import dataJunin from '~~/data/raw/farmacias/junin/junin.json'

//  TODO MEjorar el script
(async () => {
  const valuesToInsert = dataJunin.map((item: any) => {
    const {
      'Nombre Comercial': name,
      Dirección: address,
      Ubigeo: ubigeo,
      'R.U.C': ruc,
      NºRegistro: code,
    } = item

    return { name, address, ubigeo, ruc, code }
  })
  //   console.log(Math.ceil(valuesToInsert.length / 100))

  //   for (let i = 0; i < Math.ceil(valuesToInsert.length / 100); i++) {
  //     const values = valuesToInsert.slice(i * 100, (i + 1) * 100)
  //     const { data, error } = await supabase
  //       .from('establishments')
  //       .insert(values)

  //     console.log(data, error)
  //   }

  const res = await supabase
    .from('establishments')
    .insert(valuesToInsert)

  console.log(res)
})()
