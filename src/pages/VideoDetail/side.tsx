import React, { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Divider, IconButton, Paper, Tooltip } from '@material-ui/core'
import { ArrowBack, Bookmark, Home } from '@material-ui/icons'
import useLayoutModel from '../../models/layout'
import { useHistory } from 'react-router-dom'

export interface VideoDetailSidePropsType {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      borderRadius: 0,
      backgroundColor: '#303030'
    },
    divider: {
      backgroundColor: 'rgba(255,255,255,.1)',
      height: 1,
      width: theme.spacing(4),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    item:{
      marginBottom: theme.spacing(1)
    }
  })
)
const VideoDetailSide = ({}: VideoDetailSidePropsType):ReactElement => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const history = useHistory()
  return (
    <Paper className={classes.root} >
      <Tooltip title='go back' placement='right'>
        <IconButton onClick={() => history.goBack()} size={'small'} className={classes.item}>
          <ArrowBack />
        </IconButton>
      </Tooltip>
      <Tooltip title='home' placement='right'>
        <IconButton onClick={() => history.push('/home')} size={'small'} className={classes.item}>
          <Home />
        </IconButton>
      </Tooltip>
      <div className={classes.divider}/>
      <Tooltip title='add tag to video' placement='right'>
        <IconButton onClick={() => layoutModel.switchDialog('video/addTags')} size={'small'} className={classes.item}>
          <Bookmark />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}

export default VideoDetailSide
