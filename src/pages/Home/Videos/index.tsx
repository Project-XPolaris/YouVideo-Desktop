import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './style'
import VideoItem from '../../../components/VideoItem'
import useHomeVideoListModel from './model'
import { getImageUrl } from '../../../utils/image'

export interface HomeVideosPagePropsType {

}

const HomeVideosPage = ({}: HomeVideosPagePropsType):React.ReactElement => {
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
          model.videoList.map(video => (
            <VideoItem key={video.id} className={classes.item} title={video.name} coverUrl={getImageUrl(video.cover)} />
          ))
        }
      </div>
    </div>
  )
}

export default HomeVideosPage
