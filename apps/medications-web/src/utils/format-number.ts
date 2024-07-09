type InputValue = string | number | null

export function fcurrency(value: InputValue) {
  const locale = 'es-PE'
  const options = {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }

  const formatter = new Intl.NumberFormat(locale, options)

  return formatter.format(value as number)
}
