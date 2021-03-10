import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './style'
import VideoDetailSide from './side'
import Content from './content'
import AddTagDialog from '../../components/AddTagDialog'
import useLayoutModel from '../../models/layout'
import { useParams } from 'react-router-dom'
import useVideoDetailModel from './model'

export interface VideoDetailPagePropsType {

}

const VideoDetailPage = ({}: VideoDetailPagePropsType) => {
  const { id } = useParams()
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const videoModel = useVideoDetailModel()
  useEffect(() => {
    videoModel.setVideoId(id)
  }, [])
  return (
    <div className={classes.root}>
      <AddTagDialog
        onCancel={() => layoutModel.switchDialog('video/addTags')}
        onOk={(values) => {
          layoutModel.switchDialog('video/addTags')
        }}
        open={layoutModel.getDialogOpen('video/addTags')}
      />
      <VideoDetailSide />
      <div className={classes.content}>
        <Content />
      </div>
    </div>
  )
}

export default VideoDetailPage
