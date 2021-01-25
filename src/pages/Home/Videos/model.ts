import { createModel } from 'hox/create-model'
import { useState } from 'react'
import { fetchVideoList, Video } from '../../../api/video'

const HomeVideoListModel = () => {
  const [videoList, setVideoList] = useState<Video[]>([])
  const loadVideo = async () => {
    const response = await fetchVideoList({})
    setVideoList(response.result)
  }
  return {
    videoList, loadVideo
  }
}
const useHomeVideoListModel = createModel(HomeVideoListModel)
export default useHomeVideoListModel
