import React, { ReactElement, useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Avatar, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@material-ui/core'
import { Videocam } from '@material-ui/icons'
import useVideoDetailModel from './model'
import { getImageUrl } from '../../utils/image'
import { useHistory } from 'react-router-dom'
import { ApplicationConfig } from '../../config'
import VideoFileItem from '../../components/VideoFileItem'
import { VideoFile } from '../../api/video'
import TranscodeDialog from '../../components/TranscodeDialog'

export interface ContentPropsType {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      height: 'fit-content'
    },
    header: {
      display: 'flex'
    },
    cover: {
      width: 240,
      height: 120,
      backgroundColor: '#EEEEEE',
      objectFit: 'cover'
    },
    info: {
      flexGrow: 1,
      marginLeft: theme.spacing(2)
    },
    title: {
      ...theme.typography.h6,
      fontWeight: 300
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    sectionLabel: {
      ...theme.typography.h6
    },
    tagsContainer: {
      display: 'flex',
      marginTop: theme.spacing(2),
      flexWrap: 'wrap'
    },
    tag: {
      marginRight: theme.spacing(1),

      marginBottom: theme.spacing(1)
    }
  })
)
const Content = (props: ContentPropsType): ReactElement => {
  const classes = useStyles()
  const videoModel = useVideoDetailModel()
  const history = useHistory()
  const getCover = () => {
    if (videoModel.video === undefined || videoModel.video.files.length === 0) {
      return undefined
    }
    return getImageUrl(videoModel.video.files[0].cover)
  }
  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        {
          videoModel.video && <img className={classes.cover} src={getCover()} />
        }
        <div className={classes.info}>
          <div className={classes.title}>
            {videoModel.video?.name}
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.sectionLabel}>
        Tags
      </div>
      <div className={classes.tagsContainer}>
        {
          videoModel.tags.map((tag) => {
            return (
              <Chip
                label={tag.name}
                className={classes.tag}
                key={tag.id}
                onDelete={() => videoModel.removeTag(tag.id)}
              />
            )
          })
        }
      </div>
      <Divider className={classes.divider} />
      <div className={classes.sectionLabel}>
        Files
      </div>
      <List>
        {
          videoModel.video?.files?.map((file) => {
            return (
              <VideoFileItem
                file={file}
                key={file.id}
                onClick={() => {
                  history.push(`/player?playurl=${localStorage.getItem(ApplicationConfig.storeKey.apiUrl)}/video/file/${file.id}/stream`)
                }}
              />
            )
          })
        }
      </List>
    </Paper>
  )
}

export default Content
