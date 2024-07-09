export function getErrorMessage (error: unknown): string {
  if (error instanceof Error) {
    return error.message
  } else {
    // Si el error no es una instancia de Error, simplemente lo convertimos a una cadena.
    return String(error)
  }
}
