import React from 'react'
import {
  IconButton,
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from '@mui/material'
import { Delete, Folder, Sync } from '@mui/icons-material'
import useStyles from './style'
import { ScanLibraryTaskOutput, Task } from '../../api/task'

export interface LibraryItemPropsType {
  name:string
  path:string
  task?:Task<ScanLibraryTaskOutput>
  status?:string
  onScan?:() => void
  onDelete?:() => void
  onClick?:() => void
}

const LibraryItem = ({ task, name, path, onScan, status, onDelete, onClick }: LibraryItemPropsType):React.ReactElement => {
  const classes = useStyles()
  const renderProgress = () => {
    if (!task) {
      return null
    }
    if (task.output.total === 0) {
      return <LinearProgress className={classes.progress} />
    }
    const progress = (task.output.current * 100) / task.output.total
    return (
      <LinearProgress className={classes.progress} variant={'determinate'} value={progress} />
    )
  }
  const renderProgressText = () => {
    if (!task) {
      return ''
    }

    if (task.output.total === 0) {
      return 'Calculate'
    }
    const progress = (task.output.current * 100) / task.output.total
    return `Sync ${task.output.current} / ${task.output.total}  |  ${progress.toFixed(2)}%`
  }
  return (
    <ListItem button onClick={onClick}>
      <ListItemAvatar>
        <Folder className={classes.icon} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={path} primaryTypographyProps={{ className: classes.primaryText }} />
      <ListItemSecondaryAction>
        {
          status !== undefined ||
            <>
              <IconButton onClick={onDelete}>
                <Delete />
              </IconButton>
              <IconButton onClick={onScan}>
                <Sync />
              </IconButton>
            </>
        }
        {
          status === 'Scanning' &&
          <div>
            <div className={classes.progressHint}>
              {renderProgressText()}
            </div>
            {renderProgress()}
          </div>
        }

      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default LibraryItem
