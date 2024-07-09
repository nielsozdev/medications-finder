export const stringToDate = (dateString: string) => {
  try {
    if (!dateString || typeof dateString !== 'string') {
      throw new Error('Invalid input format')
    }

    const trimmedDateString = dateString.trim()

    const match = trimmedDateString.match(/^(\d{2})\/(\d{2})\/(\d{4})/i)

    if (!match) {
      throw new Error(`Invalid date format: ${trimmedDateString}`)
    }

    const [, day, month, year] = match

    // Fecha en formato ISO (YYYY-MM-DD)
    const formattedDate = new Date(`${year}-${month}-${day}`)

    if (isNaN(formattedDate.getTime())) {
      throw new Error(`Invalid Date Format: ${trimmedDateString}`)
    }

    return formattedDate
  } catch (error) {
    console.error(`Error converting date "${dateString}":`, error)

    return null
  }
}
