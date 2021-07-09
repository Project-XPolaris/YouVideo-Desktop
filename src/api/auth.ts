import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { BaseResponse } from './response'

export interface UserAuth {
  success:boolean
  token:string
}
export const fetchUserAuth = async (username:string, password:string):Promise<UserAuth> => {
  return apiRequest.post(ApplicationConfig.apiPaths.userAuth, {
    data: {
      username, password
    }
  })
}
export const checkUserAuth = async (token:string):Promise<BaseResponse> => {
  return apiRequest.get(ApplicationConfig.apiPaths.userAuth, {
    params: {
      token
    }
  })
}
