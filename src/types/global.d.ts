declare namespace NodeJS {
  interface ProcessEnv {
    /** 运行环境，请使用 `production` 来判断 */
    readonly NODE_ENV: 'development' | 'production'
    /** 本机地址 */
    readonly HOST: string
  }
}

interface IResponse<T> {
  success: boolean
  code: number
  message: string
  data: T
}

interface IError<T> extends IResponse<T> {
  success: false
}

interface IWithId<T> extends T {
  id: string
}
