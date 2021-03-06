import { createModel } from 'hox/create-model'
import { useState } from 'react'
import { fetchVideoList, Video } from '../../../api/video'
import { usePagination } from '../../../hooks/pagination'

const HomeVideoListModel = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const pagination = usePagination({})
  const loadVideo = async ({ page = pagination.page }:{page?:number}) => {
    const response = await fetchVideoList({ page })
    setVideoList(response.result)
    pagination.update(response)
  }
  return {
    videoList, loadVideo, pagination
  }
}
const useHomeVideoListModel = createModel(HomeVideoListModel)
export default useHomeVideoListModel
