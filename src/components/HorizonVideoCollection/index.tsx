import React from 'react'
import VideoItem from '../VideoItem'
import useStyles from './style'
import clsx from 'clsx'
import { Video, VideoFile } from '../../api/video'
import { getImageUrl } from '../../utils/image'

export interface HorizonVideoCollectionPropsType {
  className?:any
  videos?:Video[]
}

const HorizonVideoCollection = ({ className, videos = [] }: HorizonVideoCollectionPropsType):React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.header}>
        <div className={classes.title}>
          Recently added
        </div>
      </div>
      <div className={classes.collection}>
        {videos.map(video => {
          let file : VideoFile | undefined
          if (video.files?.length !== 0) {
            file = video.files[0]
          }
          return (
            <VideoItem key={video.id} className={classes.item} title={video.name} coverUrl={getImageUrl(file?.cover)} />
          )
        })}
      </div>
    </div>
  )
}

export default HorizonVideoCollection
