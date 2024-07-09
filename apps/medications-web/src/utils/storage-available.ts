export function localStorageAvailable() {
  try {
    const randomKey = 'pSyFss7RIT'
    window.localStorage.setItem(randomKey, randomKey)
    window.localStorage.removeItem(randomKey)

    return true
  } catch (error) {
    return false
  }
}

export function localStorageGetItem(key: string, defaultValue = '') {
  const storageAvailable = localStorageAvailable()

  let value

  if (storageAvailable) {
    value = localStorage.getItem(key) ?? defaultValue
  }

  return value
}
