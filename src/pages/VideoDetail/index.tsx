import React, { useEffect } from 'react'
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
    if (id) {
      videoModel.setVideoId(Number(id))
    }
  }, [])
  return (
    <div className={classes.root}>
      <AddTagDialog
        onCancel={() => layoutModel.switchDialog('video/addTags')}
        onOk={async (values) => {
          await videoModel.addTags(values)
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
