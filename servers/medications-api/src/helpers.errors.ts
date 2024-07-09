// errors.js

export class DatabaseError extends Error {
  constructor (message) {
    super(message)
    this.name = 'DatabaseError'
  }
}

export class AuthenticationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'AuthenticationError'
  }
}

export class BusinessLogicError extends Error {
  constructor (message) {
    super(message)
    this.name = 'BusinessLogicError'
  }
}
