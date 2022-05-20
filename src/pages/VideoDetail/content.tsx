import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { Chip, Divider, List, Paper } from '@mui/material'
import useVideoDetailModel from './model'
import { getImageUrl } from '../../utils/image'
import { useNavigate } from 'react-router-dom'
import { ApplicationConfig } from '../../config'
import VideoFileItem from '../../components/VideoFileItem'
import appTheme from '../../theme'

export interface ContentPropsType {

}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '70%',
      padding: appTheme.spacing(2),
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
      marginLeft: appTheme.spacing(2)
    },
    title: {
      ...appTheme.typography.h6,
      fontWeight: 300
    },
    divider: {
      marginTop: appTheme.spacing(2),
      marginBottom: appTheme.spacing(2)
    },
    sectionLabel: {
      ...appTheme.typography.h6
    },
    tagsContainer: {
      display: 'flex',
      marginTop: appTheme.spacing(2),
      flexWrap: 'wrap'
    },
    tag: {
      marginRight: appTheme.spacing(1),

      marginBottom: appTheme.spacing(1)
    }
  })
)
const Content = (props: ContentPropsType): ReactElement => {
  const classes = useStyles()
  const videoModel = useVideoDetailModel()
  const history = useNavigate()
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
                  history(`/player?playurl=${localStorage.getItem(ApplicationConfig.storeKey.apiUrl)}/video/file/${file.id}/stream`)
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
