import React, { useEffect } from 'react'
import { Pagination, Typography } from '@mui/material'
import useStyles from './style'
import VideoItem from '../../../components/VideoItem'
import useHomeVideoListModel from './model'
import { getImageUrl } from '../../../utils/image'
import { VideoFile } from '../../../api/video'
import { useNavigate } from 'react-router-dom'

export interface HomeVideosPagePropsType {

}

const HomeVideosPage = ({}: HomeVideosPagePropsType): React.ReactElement => {
  const classes = useStyles()
  const history = useNavigate()
  const model = useHomeVideoListModel()
  useEffect(() => {
    model.loadVideo({})
  }, [])
  console.log(model.pagination)
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h3' className={classes.title}>
          Videos
        </Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.list}>
          {
            model.videoList.map(video => {
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
          count={model.pagination.pageCount}
          onChange={(_, page) => model.loadVideo({ page })}
          page={model.pagination.page}
        />
      </div>
    </div>
  )
}

export default HomeVideosPage
