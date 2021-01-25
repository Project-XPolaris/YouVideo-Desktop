import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { ListContainer } from './response'
import * as path from 'path'
export interface Library {
  id : number
  path: string
  dir_name: string
}
export const fetchLibraryList = ({ page = 1, pageSize = 20 }:{ page?:number, pageSize?:number }):Promise<ListContainer<Library>> => {
  return apiRequest.get(ApplicationConfig.apiPaths.libraryList, {
    params: {
      page, pageSize
    }
  })
}

export const createLibrary = (path:string):Promise<Library> => {
  return apiRequest.post(ApplicationConfig.apiPaths.libraryList, {
    data: {
      path
    }
  })
}

export const scanLibrary = (libraryId:number):Promise<void> => {
  return apiRequest.post(ApplicationConfig.apiPaths.scanLibrary.replace(':id', String(libraryId)), {})
}

export const removeLibrary = (libraryId:number):Promise<void> => {
  return apiRequest.delete(ApplicationConfig.apiPaths.library.replace(':id', String(libraryId)), {})
}
