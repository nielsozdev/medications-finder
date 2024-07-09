export function cleanString(str: string) {
  if (typeof str !== 'string') {
    throw new Error(`str must be a string ${str}`)
  }

  return str.trim().replace(/ {2}/g, ' ')
}
