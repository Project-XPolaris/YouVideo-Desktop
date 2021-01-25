export interface ListContainer<T> {
  count : number
  pageSize:number
  page:number
  result : T[]
}
