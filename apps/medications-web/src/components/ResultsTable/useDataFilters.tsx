import { type SelectChangeEvent } from '@mui/material'

export function useDataFilters({ keyName, dispatch, value, defaultValue }: any) {
  const onChange = (e: SelectChangeEvent) => { dispatch(e.target.value) }

  return {
    id: keyName,
    label: `${keyName}-label`,
    labelId: `${keyName}-label`,
    name: keyName,
    value,
    onChange,
  }
}
