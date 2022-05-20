import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'

export interface AuthInfo {
  name:string,
  type:string,
  url:string
}
export interface ServiceInfo {
  name:string
  authUrl:string
  authEnable:string
  auth:AuthInfo[]
}

export const fetchServiceInfo = async ():Promise<ServiceInfo> => {
  return apiRequest.get(ApplicationConfig.apiPaths.info)
}
