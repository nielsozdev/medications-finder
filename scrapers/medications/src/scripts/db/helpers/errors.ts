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
