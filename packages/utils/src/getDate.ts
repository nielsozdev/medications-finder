export function getDate() {
  const date = new Date()
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString().padStart(2, '0')
  const fullDate = `${day}${month}${year}`

  return { fullDate, day, month, year }
}
