
 

export const STORAGE_KEY = 'weather:data'

const retrieveStorage = (key = STORAGE_KEY) => {
  const data = window.localStorage.getItem(key)
  return data
}

const saveStorage = <T>(key = STORAGE_KEY, value: T) => {
  const storeValue = JSON.stringify(value)
  window.localStorage.setItem(key, storeValue)
}

const removeStorage = (key = STORAGE_KEY) => {
  const data = retrieveStorage(key)
  if (!data) return false
  window.localStorage.removeItem(key)
  return true
}

const clear = () => {
  window.localStorage.clear()
}

export { retrieveStorage, saveStorage, removeStorage, clear }
