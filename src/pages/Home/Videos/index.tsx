import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './style'
import VideoItem from '../../../components/VideoItem'
import useHomeVideoListModel from './model'
import { getImageUrl } from '../../../utils/image'
import { VideoFile } from '../../../api/video'

export interface HomeVideosPagePropsType {

}

const HomeVideosPage = ({}: HomeVideosPagePropsType): React.ReactElement => {
  const classes = useStyles()
  const model = useHomeVideoListModel()
  useEffect(() => {
    model.loadVideo()
  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h3' className={classes.title}>
          Videos
        </Typography>
      </div>
      <div className={classes.content}>
        {
          model.videoList.map(video => {
            let file: VideoFile | undefined
            if (video.files?.length !== 0) {
              file = video.files[0]
              return (
                <VideoItem key={video.id} className={classes.item} title={video.name}
                  coverUrl={getImageUrl(file?.cover)} />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default HomeVideosPage
