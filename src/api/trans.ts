import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'

export interface Codec {
  name:string
  desc:string
}
export interface Formats {
  name:string
  desc:string
}
export const fetchCodecList = async (query:any) => {
  const response = await apiRequest(ApplicationConfig.apiPaths.codec, { params: query })
  return response.codecs
}

export const fetchFormatList = async (query:any) => {
  const response = await apiRequest(ApplicationConfig.apiPaths.format, { params: query })
  return response.formats
}

export const createTransTask = async (id:number, codec:string, format:string) => {
  await apiRequest.post(ApplicationConfig.apiPaths.trans.replace(':id', String(id)), { data: { codec, format } })
}
