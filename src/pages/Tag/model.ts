import { createModel } from 'hox/create-model'
import { useEffect, useState } from 'react'
import { fetchTags, Tag } from '../../api/tag'
import { fetchVideoList, Video } from '../../api/video'
import { usePagination } from '../../hooks/pagination'

const TagDetailModel = () => {
  const [tag, setTag] = useState<Tag | undefined>()
  const [tagId, setTagId] = useState<number | undefined>()
  const [videoList, setVideoList] = useState<Video[]>([])
  const pagination = usePagination({})
  const loadVideo = async ({ page = pagination.page }:{page?:number}) => {
    if (tagId === undefined) {
      return
    }
    const response = await fetchVideoList({ page, tag: tagId })
    setVideoList(response.result)
    pagination.update(response)
  }
  const refresh = async () => {
    const response = await fetchTags({ id: tagId })
    setTag(response.result[0])
  }
  useEffect(() => {
    refresh()
  }, [tagId])
  return {
    setTagId, tag, videoList, loadVideo, pagination
  }
}
const useTagDetailModel = createModel(TagDetailModel)
export default useTagDetailModel
