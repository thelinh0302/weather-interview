export type InternalError = {
  message?: string
  path?: string[]
  locations?: any
  extensions: {
    error: string
    error_description: string
    status: number
  }
}[]

export type RESTError = {
  error: string
  error_description: string
}

export type ResponseErrorType = { code: string; message: string }

export type Maybe<T> = T | null
