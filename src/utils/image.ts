import { ApplicationConfig } from '../config'

export const getImageUrl = (url?:string):string | undefined => {
  if (url === undefined) {
    return undefined
  }

  return `${localStorage.getItem(ApplicationConfig.storeKey.apiUrl)}${url}`
}
