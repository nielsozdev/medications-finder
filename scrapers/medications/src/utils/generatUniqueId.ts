import crypto from 'crypto'

export function generateUniqueId(id: string) {
  const hash = crypto.createHash('sha256')
  hash.update(id, 'utf8')

  const hashHex = hash.digest('hex')

  return hashHex
}
