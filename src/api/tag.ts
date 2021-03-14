import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { BaseResponse, ListContainer } from './response'

export interface Tag {
  id:number
  name : string
}

export const fetchTags = async (queryParams:any):Promise<ListContainer<Tag>> => {
  return await apiRequest.get(ApplicationConfig.apiPaths.tags, { params: queryParams })
}

export const addVideoTags = async (tagNames : string[], ids: number[]):Promise<BaseResponse> => {
  return await apiRequest.post(ApplicationConfig.apiPaths.tagsVideo, { data: { name: tagNames, ids } })
}

export const removeVideoFromTag = async (tagId:number, ids:number[]):Promise<BaseResponse> => {
  return await apiRequest.delete(ApplicationConfig.apiPaths.tagVideos.replace(':id', tagId.toString(10)), {
    data: { ids }
  })
}
