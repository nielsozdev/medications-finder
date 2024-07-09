export function getNumberFromString (text: string) {
  const patron = /\d+/

  return text.match(patron) ?? []
  // return text.match(patron)[0]
}
