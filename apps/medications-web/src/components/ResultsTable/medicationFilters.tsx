import { Box } from '@mui/material'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { useDataFilters } from './useDataFilters'

import { useAppStore } from '~/context/AppStoreProvider/useAppStore'

export function MedicationFilters(props: any) {
  // const { subFamily, medication, product } = props
  const {
    subFamilyData, medicationData, productData,
    familyFilterSelected, subFamilyFilterSelected, medicationFilterSelected, productFilterSelected,
    setSubFamilyFilterSelected, setMedicationFilterSelected, setProductFilterSelected,
  } = useAppStore((state) => state)

  const subFamily = useDataFilters({
    keyName: 'subFamily',
    dispatch: setSubFamilyFilterSelected,
    value: subFamilyFilterSelected,
  })

  const medication = useDataFilters({
    keyName: 'medication',
    dispatch: setMedicationFilterSelected,
    value: medicationFilterSelected,
  })

  const product = useDataFilters({
    keyName: 'product',
    dispatch: setProductFilterSelected,
    value: productFilterSelected,
  })

  return (
    <Box>
      <FormControl size="small" sx={{ m: 1, width: 160 }} variant="standard">
        <InputLabel id={subFamily.labelId}>Subfamilia</InputLabel>
        <Select {...subFamily}>
          <MenuItem value="Todos">Todos</MenuItem>
          {
            subFamilyData
              ?.filter(({ family }: any) => {
                if (familyFilterSelected === 'Todos') return true

                return family === familyFilterSelected
              })
              ?.map(({ id, name }: any) => <MenuItem key={id} value={name}>{name}</MenuItem>)
          }
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ m: 1, width: 160 }} variant="standard">
        <InputLabel id={medication.labelId}>Medicamento</InputLabel>
        <Select {...medication}>
          <MenuItem value="Todos">Todos</MenuItem>
          {
            medicationData
              ?.filter(({ subFamily }: any) => {
                if (subFamilyFilterSelected === 'Todos') return true

                return subFamily === subFamilyFilterSelected
              })
              ?.map(({ id, name }: any) => <MenuItem key={id} value={name}>{name}</MenuItem>)
          }
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ m: 1, width: 160 }} variant="standard">
        <InputLabel id={product.labelId}>Producto</InputLabel>
        <Select {...product}>
          <MenuItem value="Todos">Todos</MenuItem>
          {
            productData
              ?.filter(({ medication }: any) => {
                if (medicationFilterSelected === 'Todos') return true

                return medication === medicationFilterSelected
              })
              ?.map(({ id, name }: any) => <MenuItem key={id} value={name}>{name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  )
}
