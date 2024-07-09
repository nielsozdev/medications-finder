export class FileNotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

export class JsonParseError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

export class DataNormalizationError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

export class DataReductionError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

export class DataUploadError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

const errorHandlers = new Map()

errorHandlers.set('ENOENT', handleFileNotFoundError)
errorHandlers.set(SyntaxError, handleJsonParseError)
errorHandlers.set(DataNormalizationError, handleCustomError)
errorHandlers.set(DataReductionError, handleCustomError)
errorHandlers.set(DataUploadError, handleCustomError)

export function handleErrors(error) {
  const errorHandler = errorHandlers.get(error.constructor) ?? handleUnexpectedError
  errorHandler(error)
}

// Funciones para manejar cada tipo de error
function handleFileNotFoundError(error) {
  throw new FileNotFoundError('Archivo no encontrado: ' + error.path)
}

function handleJsonParseError(error) {
  throw new JsonParseError('Error al analizar JSON: ' + error.message)
}

function handleCustomError(error) {
  throw error // Ya es un error personalizado, solo re-lanzamos
}

function handleUnexpectedError(error) {
  throw new Error('Error inesperado: ' + error.message)
}

// function handleErrors (error) {
//   if (error.code === 'ENOENT') {
//     throw new FileNotFoundError('Archivo no encontrado: ' + error.path)
//   } else if (error instanceof SyntaxError) {
//     throw new JsonParseError('Error al analizar JSON: ' + error.message)
//   } else if (error instanceof DataNormalizationError) {
//     throw error // Ya es un error personalizado, solo re-lanzamos
//   } else if (error instanceof DataReductionError) {
//     throw error // Ya es un error personalizado, solo re-lanzamos
//   } else if (error instanceof DataUploadError) {
//     throw error // Ya es un error personalizado, solo re-lanzamos
//   } else {
//     // Si no se encuentra un error específico, lanzar un error genérico
//     throw new Error('Error inesperado: ' + error.message)
//   }
// }

// Definir un mapa de errores

// const errorHandlers = new Map<any, (error: any) => void>([
//   ['ENOENT', handleFileNotFoundError],
//   [SyntaxError, handleJsonParseError],
//   [DataNormalizationError, handleCustomError],
//   [DataReductionError, handleCustomError],
//   [DataUploadError, handleCustomError],
// ])
// Función para manejar errores
