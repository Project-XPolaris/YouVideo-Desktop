import { createModel } from 'hox/create-model'
import { fetchTags, Tag } from '../../../api/tag'
import { useState } from 'react'

const TagsModel = () => {
  const [tags, setTags] = useState<Tag[]>([])
  const loadTags = async () => {
    const response = await fetchTags({})
    setTags(response.result)
  }
  return {
    tags, loadTags
  }
}
const useTagsModel = createModel(TagsModel)
export default useTagsModel
