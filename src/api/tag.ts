import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { ListContainer } from './response'

export interface Tag {
  id:number
  name : string
}

export const fetchTags = async (queryParams:any):Promise<ListContainer<Tag>> => {
  return await apiRequest.get(ApplicationConfig.apiPaths.tags, { params: queryParams })
}
