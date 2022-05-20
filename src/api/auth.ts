import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { BaseResponse } from './response'

export interface UserAuth {
  success:boolean
  data:{
    accessToken:string
  }
}
export const fetchUserAuth = async (username:string, password:string):Promise<UserAuth> => {
  return apiRequest.post(ApplicationConfig.apiPaths.youplusLogin, {
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

export interface AuthResult {
  success: boolean,
  data:{
    accessToken:string,
    username:string
  }
}

export const oauthAuth = async (url:string, code:string):Promise<AuthResult> => {
  const response = await apiRequest.get<AuthResult>(url, {
    params: {
      code
    }
  })
  return response
}
