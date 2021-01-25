import { ListContainer } from './response'
import apiRequest from '../utils/request'
import { ApplicationConfig } from '../config'

export type TaskStatus = 'Running' | 'Done' | 'Error'
export type TaskType = 'ScanLibrary'
export type AnyOutput = ScanLibraryTaskOutput
export interface Task<Output> {
  id: string
  type: TaskType
  status: TaskStatus
  output: Output
}

export interface ScanLibraryTaskOutput {
  id: number
  path: string
}

export const getTaskList = ():Promise<ListContainer<Task<AnyOutput>>> => {
  return apiRequest.get(ApplicationConfig.apiPaths.tasks, {})
}
