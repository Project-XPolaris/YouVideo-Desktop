import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { IconButton, Paper, Tooltip } from '@material-ui/core'
import { Bookmark } from '@material-ui/icons'
import useLayoutModel from '../../models/layout'

export interface VideoDetailSidePropsType {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      borderRadius: 0,
      backgroundColor: '#202020'
    }
  })
)
const VideoDetailSide = ({}: VideoDetailSidePropsType):ReactElement => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  return (
    <Paper className={classes.root} >
      <Tooltip title='add tag to video' placement='right'>
        <IconButton onClick={() => layoutModel.switchDialog('video/addTags')}>
          <Bookmark />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}

export default VideoDetailSide
