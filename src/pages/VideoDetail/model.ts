import { createModel } from 'hox'
import { fetchVideo, Video } from '../../api/video'
import { useEffect, useState } from 'react'
import { addVideoTags, fetchTags, removeVideoFromTag, Tag } from '../../api/tag'
import { createTransTask } from '../../api/trans'

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
  const addTags = async (tagNames:string[]) => {
    if (!video) {
      return
    }
    await addVideoTags(tagNames, [video?.id])
    await getVideoTags()
  }
  const removeTag = async (tagId:number) => {
    if (!video) {
      return
    }
    await removeVideoFromTag(tagId, [video?.id])
    await getVideoTags()
  }
  const transcode = async (codec:string, format:string) => {
    if (!video) {
      return
    }
    await createTransTask(video.id, codec, format)
  }
  useEffect(() => {
    refresh()
  }, [videoId])
  return {
    video, tags, videoId, setVideoId, addTags, removeTag,transcode
  }
}
const useVideoDetailModel = createModel(VideoDetailModel)
export default useVideoDetailModel
