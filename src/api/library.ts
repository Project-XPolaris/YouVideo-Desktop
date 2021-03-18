import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'
import { ListContainer } from './response'

export interface Library {
  id : number
  path: string
  dir_name: string
  name:string
}
export const fetchLibraryList = (query:any):Promise<ListContainer<Library>> => {
  return apiRequest.get(ApplicationConfig.apiPaths.libraryList, {
    params: query
  })
}

export const createLibrary = (name:string, path:string, privateLibrary:boolean):Promise<Library> => {
  return apiRequest.post(ApplicationConfig.apiPaths.libraryList, {
    data: {
      path, name, private: privateLibrary
    }
  })
}

export const scanLibrary = (libraryId:number):Promise<void> => {
  return apiRequest.post(ApplicationConfig.apiPaths.scanLibrary.replace(':id', String(libraryId)), {})
}

export const removeLibrary = (libraryId:number):Promise<void> => {
  return apiRequest.delete(ApplicationConfig.apiPaths.library.replace(':id', String(libraryId)), {})
}
