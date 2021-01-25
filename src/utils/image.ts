import { ApplicationConfig } from '../config'

export const getImageUrl = (url?:string):string | undefined => {
  if (url === undefined) {
    return undefined
  }
  return `${ApplicationConfig.apiUrl}${url}`
}
