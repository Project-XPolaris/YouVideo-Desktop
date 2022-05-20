import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { IconButton, Paper, Tooltip } from '@mui/material'
import { ArrowBack, Bookmark, Home, Transform } from '@mui/icons-material'
import useLayoutModel from '../../models/layout'
import { useNavigate } from 'react-router-dom'
import TranscodeDialog from '../../components/TranscodeDialog'
import useVideoDetailModel from './model'
import appTheme from '../../theme'

export interface VideoDetailSidePropsType {

}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: appTheme.spacing(2),
      paddingBottom: appTheme.spacing(4),
      paddingLeft: appTheme.spacing(2),
      paddingRight: appTheme.spacing(2),
      borderRadius: 0,
      backgroundColor: '#303030'
    },
    divider: {
      backgroundColor: 'rgba(255,255,255,.1)',
      height: 1,
      width: appTheme.spacing(4),
      marginTop: appTheme.spacing(2),
      marginBottom: appTheme.spacing(2)
    },
    item: {
      marginBottom: appTheme.spacing(1)
    }
  })
)
const VideoDetailSide = ({}: VideoDetailSidePropsType):ReactElement => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const videoModel = useVideoDetailModel()
  const history = useNavigate()
  return (
    <Paper className={classes.root} >
      <TranscodeDialog onCancel={() => layoutModel.switchDialog('video/transcode')} onOk={(codec, format) => {
        videoModel.transcode(codec, format)
        layoutModel.switchDialog('video/transcode')
      }} open={layoutModel.getDialogOpen('video/transcode')} />
      <Tooltip title='go back' placement='right'>
        <IconButton onClick={() => history(-1)} size={'small'} className={classes.item}>
          <ArrowBack />
        </IconButton>
      </Tooltip>
      <Tooltip title='home' placement='right'>
        <IconButton onClick={() => history('/home')} size={'small'} className={classes.item}>
          <Home />
        </IconButton>
      </Tooltip>
      <div className={classes.divider}/>
      <Tooltip title='add tag to video' placement='right'>
        <IconButton onClick={() => layoutModel.switchDialog('video/addTags')} size={'small'} className={classes.item}>
          <Bookmark />
        </IconButton>
      </Tooltip>
      <Tooltip title='transcode video' placement='right'>
        <IconButton onClick={() => layoutModel.switchDialog('video/transcode')} size={'small'} className={classes.item}>
          <Transform />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}

export default VideoDetailSide
