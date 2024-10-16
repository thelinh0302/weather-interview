
 

import Cookies from 'js-cookie';
export const COOKIES_KEY = 'weather-cookie:data'

const retrieve = (key = COOKIES_KEY) => {
  const data = Cookies.get(key)
  return data
}

const save = <T>(key = COOKIES_KEY, value: T) => {
  const storeValue = JSON.stringify(value)
  Cookies.set(key, storeValue)
}

const remove = (key = COOKIES_KEY) => {
  const data = retrieve(key)
  if (!data) return false
  Cookies.remove(key)
  return true
}

export { retrieve, save, remove }
