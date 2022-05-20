import React, { ReactElement, useEffect } from 'react'
import { Pagination } from '@mui/material'
import useStyles from './style'
import { useNavigate, useParams } from 'react-router-dom'
import useTagDetailModel from './model'
import TagDetailSide from './side'
import { VideoFile } from '../../api/video'
import VideoItem from '../../components/VideoItem'
import { getImageUrl } from '../../utils/image'
import DetailLayout from '../../components/DetailLayout'

export interface TagPagePropsType {

}

const TagPage = ({}: TagPagePropsType): ReactElement => {
  const { id } = useParams()
  const classes = useStyles()
  const tagModel = useTagDetailModel()
  const history = useNavigate()
  useEffect(() => {
    tagModel.setTagId(Number(id))
    tagModel.loadVideo({})
  }, [])
  return (
    <DetailLayout
      title={tagModel.tag?.name}
      side={<TagDetailSide />}
      className={classes.root}
    >
      <div className={classes.list}>
        {
          tagModel.videoList.map(video => {
            let file: VideoFile | undefined
            if (video.files?.length !== 0) {
              file = video.files[0]
              return (
                <VideoItem
                  key={video.id}
                  className={classes.item}
                  title={video.name}
                  coverUrl={getImageUrl(file?.cover)}
                  onClick={() => history(`/video/${video.id}`)}
                  coverHeight={96}
                />
              )
            }
          })
        }
      </div>
      <Pagination
        count={tagModel.pagination.pageCount}
        page={tagModel.pagination.page}
        onChange={(event, page) => tagModel.loadVideo({ page })}
        className={classes.pagination}
      />
    </DetailLayout>
  )
}

export default TagPage
