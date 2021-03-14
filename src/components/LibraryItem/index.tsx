import React from 'react'
import {
  IconButton,
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { Delete, Folder, Sync } from '@material-ui/icons'
import useStyles from './style'

export interface LibraryItemPropsType {
  name:string
  path:string
  status?:string
  onScan?:() => void
  onDelete?:() => void
  onClick?:() => void
}

const LibraryItem = ({ name, path, onScan, status, onDelete, onClick }: LibraryItemPropsType):React.ReactElement => {
  const classes = useStyles()
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
              Sync...
            </div>
            <LinearProgress className={classes.progress} />
          </div>
        }

      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default LibraryItem
