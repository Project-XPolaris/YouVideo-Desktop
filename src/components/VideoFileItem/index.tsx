import React, { ReactElement } from 'react'
import {
  Avatar,
  ButtonBase,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Menu
} from '@mui/material'
import { MoreVert, PlayArrow } from '@mui/icons-material'
import { VideoFile } from '../../api/video'

export interface VideoFileItemPropsType {
  file:VideoFile
  onClick?:() => void
  onTrans?:() => void
}

const VideoFileItem = ({ file, onClick, onTrans }: VideoFileItemPropsType): ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <ListItem key={file.id} >
      <ListItemAvatar>
        <ButtonBase>
          <Avatar onClick={onClick}>
            <PlayArrow />
          </Avatar>
        </ButtonBase>
      </ListItemAvatar>
      <ListItemText primary={file.name} secondary={''} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
      </ListItemSecondaryAction>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >

      </Menu>
    </ListItem>
  )
}

export default VideoFileItem
