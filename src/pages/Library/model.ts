import { createModel } from 'hox/create-model'
import { fetchLibraryList, Library } from '../../api/library'
import { useEffect, useState } from 'react'
import { fetchVideoList, Video } from '../../api/video'
import { usePagination } from '../../hooks/pagination'

const LibraryDetailModel = () => {
  const [libraryId, setLibraryId] = useState<number | undefined>()
  const [library, setLibrary] = useState<Library | undefined>()
  const [videoList, setVideoList] = useState<Video[]>([])
  const pagination = usePagination({})
  const loadVideo = async ({ page = pagination.page }:{page?:number}) => {
    if (!libraryId) {
      return
    }
    const response = await fetchVideoList({ page, library: libraryId })
    setVideoList(response.result)
    pagination.update(response)
  }
  const refresh = async () => {
    if (libraryId === undefined) {
      return
    }
    const response = await fetchLibraryList({ id: libraryId })
    setLibrary(response.result[0])
  }
  useEffect(() => {
    refresh()
    loadVideo({})
  }, [libraryId])
  return {
    library, setLibraryId, refresh, videoList, pagination, loadVideo
  }
}
const useLibraryDetailModel = createModel(LibraryDetailModel)
export default useLibraryDetailModel
