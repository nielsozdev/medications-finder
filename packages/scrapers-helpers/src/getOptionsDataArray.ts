import { type DataToPushObject, type ValidMenuOptionsList } from './types/types'

export function getOptionsDataArray ({ options, key, selector }: ValidMenuOptionsList) {
  const data: DataToPushObject[] = []

  for (const option of options) {
    const { extract, tag, ...rest } = option

    const label = Object.values(rest)[0]
    const [value] = Object.keys(rest)

    if (extract) data.push({ [key]: tag, selector, label, value })
  }

  return data
}
