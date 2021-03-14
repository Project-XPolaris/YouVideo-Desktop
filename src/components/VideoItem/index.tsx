import React from 'react'
import useStyles from './style'
import { Videocam } from '@material-ui/icons'
import clsx from 'clsx'
import { ButtonBase } from '@material-ui/core'

export interface VideoItemPropsType {
  className?: any
  coverUrl?: string
  title:string
  onClick?:() => void,
  coverHeight? : number
}

const VideoItem = ({ className, coverUrl, title, onClick, coverHeight = 240 }: VideoItemPropsType): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <ButtonBase className={classes.coverBase} onClick={onClick}>
        {
          coverUrl === undefined
            ? (
              <div className={classes.placeHolderContainer} style={{ height: coverHeight }}>
                <Videocam className={classes.placeHolderIcon} />
              </div>
            ) : (
              <img className={classes.cover} src={coverUrl} style={{ height: coverHeight }}/>
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
