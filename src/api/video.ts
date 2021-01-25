import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { ListContainer } from './response'

export interface Video {
  id:number
  path:string
  cover?:string
  name:string
}
export const fetchVideoList = ({ page = 1, pageSize = 20 }:{ page?:number, pageSize?:number }):Promise<ListContainer<Video>> => {
  return apiRequest.get(ApplicationConfig.apiPaths.videoList, {
    params: {
      page, pageSize
    }
  })
}
