import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'

export interface ServiceInfo {
  name: string,
  authEnable: boolean,
  transEnable: boolean
  authUrl:string
}

export const fetchServiceInfo = async ():Promise<ServiceInfo> => {
  return apiRequest.get(ApplicationConfig.apiPaths.info)
}
