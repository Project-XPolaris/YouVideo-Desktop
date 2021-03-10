import { createModel } from 'hox'
import { fetchVideo, Video } from '../../api/video'
import { useEffect, useState } from 'react'
import { fetchTags, Tag } from '../../api/tag'

const VideoDetailModel = () => {
  const [videoId, setVideoId] = useState<number | undefined>()
  const [video, setVideo] = useState<Video | undefined>()
  const [tags, setTags] = useState<Tag[]>([])
  const refresh = async () => {
    if (videoId === undefined) {
      return
    }
    const response = await fetchVideo(videoId)
    setVideo(response)
    await getVideoTags()
  }
  const getVideoTags = async () => {
    const response = await fetchTags({ video: videoId })
    setTags(response.result)
  }
  useEffect(() => {
    refresh()
  }, [videoId])
  return {
    video, tags, videoId, setVideoId
  }
}
const useVideoDetailModel = createModel(VideoDetailModel)
export default useVideoDetailModel
