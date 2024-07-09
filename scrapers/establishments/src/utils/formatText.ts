export function formatText (texto: string) {
  return texto.replace(/\s/g, '_').toLowerCase()
}
