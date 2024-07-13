type InputValue = string | number | null

export function fcurrency(value: InputValue) {
  const locale = 'es-PE'

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  })

  return formatter.format(value as number)
}
