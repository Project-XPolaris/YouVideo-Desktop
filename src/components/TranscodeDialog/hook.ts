import { useEffect, useState } from 'react'
import { useDebounce } from 'ahooks'

export interface AutoSearch<T> {
  setInput:(text:string) => void
  options:T[]
}

export const useAutoSearch = <T>(onSearch:(searchKey:string | undefined) => Promise<Array<T>>):AutoSearch<T> => {
  const [input, setInput] = useState<string>()
  const searchKey = useDebounce(input, { wait: 500 })
  const [options, setOptions] = useState<T[]>([])
  useEffect(() => {
    (async () => {
      if (searchKey && searchKey?.length < 2) {
        return
      }
      const response = await onSearch(searchKey)
      setOptions(response)
    })()
  }, [searchKey])
  return {
    setInput, options
  }
}
