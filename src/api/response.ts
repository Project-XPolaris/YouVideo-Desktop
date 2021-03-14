export interface ListContainer<T> {
  count : number
  pageSize:number
  page:number
  result : T[]
}

export interface BaseResponse {
  success: boolean
}
