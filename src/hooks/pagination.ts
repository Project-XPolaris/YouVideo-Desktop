import { useState } from 'react'

export interface PaginationController {
  pageCount:number,
  page:number,
  pageSize:number,
  count:number
  update : ({ page, pageSize, count }: { page: number, pageSize: number, count:number }) => void
}
export interface PaginationData {
  count:number,
  page:number,
  pageSize:number,
}
export const usePagination = ({ defaultPage = 1, defaultPageSize = 20 }):PaginationController => {
  const [pagination, setPagination] = useState<PaginationData>({ page: defaultPage, pageSize: defaultPageSize, count: 0 })
  const update = ({ page, pageSize, count }: { page: number, pageSize: number, count:number }) => {
    setPagination({
      page, pageSize, count
    })
  }
  return {
    pageCount: pagination.count / (pagination.page * pagination.pageSize),
    ...pagination,
    update
  }
}
