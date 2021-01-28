import React from 'react'
import useStyles from './style'
import { Videocam } from '@material-ui/icons'
import clsx from 'clsx'
import { ButtonBase } from '@material-ui/core'
import { VideoFile } from '../../api/video'

export interface VideoItemPropsType {
  className?: any
  coverUrl?: string
  title:string
}

const VideoItem = ({ className, coverUrl, title }: VideoItemPropsType): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <ButtonBase className={classes.coverBase}>
        {
          coverUrl === undefined
            ? (
              <div className={classes.placeHolderContainer}>
                <Videocam className={classes.placeHolderIcon} />
              </div>
            ) : (
              <img className={classes.cover} src={coverUrl}/>
            )
        }
      </ButtonBase>
      <div className={classes.title}>
        {title}
      </div>
    </div>
  )
}

export default VideoItem
