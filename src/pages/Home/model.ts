import { createModel } from 'hox/create-model'
import { useState } from 'react'
import { fetchVideoList, Video } from '../../api/video'

const HomeModel = () => {
  const [newVideoList, setNewVideoList] = useState<Video[]>([])
  const loadNewVideo = async () => {
    const response = await fetchVideoList({ pageSize: 10 })
    setNewVideoList(response.result)
  }
  const load = async () => {
    loadNewVideo()
  }
  return {
    newVideoList, load
  }
}
const useHomeModel = createModel(HomeModel)
export default useHomeModel
