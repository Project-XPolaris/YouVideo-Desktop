import React, { useEffect, useState } from 'react'
import useStyles from './style'
import {
  Avatar,
  Button, Checkbox,
  Dialog,
  DialogActions,
  DialogContent, FormControlLabel,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'
import { ArrowBack, Description, Folder } from '@mui/icons-material'
import { fetchDirectoryContent, FileItem } from '../../api/file'

export interface PathSelectDialogPropsType {
  open:boolean
  onCancel:() => void
  onOk:(name:string, path:string, privateLibrary:boolean) => void
}

const PathSelectDialog = ({ open = false, onCancel, onOk }: PathSelectDialogPropsType):React.ReactElement => {
  const classes = useStyles()
  const [currentPath, setCurrentPath] = useState<string | undefined>()
  const [pathInput, setPathInput] = useState<string | undefined>()
  const [content, setContent] = useState<FileItem[]>([])
  const [name, setName] = useState<string | undefined>()
  const [privateLibrary, setPrivateLibrary] = useState<boolean>(false)
  const [sep, setSep] = useState<string | undefined>()
  useEffect(() => {
    (async () => {
      const response = await fetchDirectoryContent(currentPath)
      setContent(response.files.filter(it => it.type === 'Directory'))
      setPathInput(response.path)
      setSep(response.sep)
    })()
  }, [currentPath])
  return (
    <Dialog
      open={open}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className={classes.root}
      onClose={onCancel}
    >
      <DialogContent>
        <div className={classes.header}>
          <div className={classes.field}>
            <InputBase fullWidth placeholder={'Library name'} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={classes.field}>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  value={privateLibrary}
                  onChange={(e) => setPrivateLibrary(e.target.checked)}
                />
              }
              label="Primary"
            />
          </div>
          <div className={classes.pathHeader}>
            <IconButton
              className={classes.backIcon}
              size={'small'}
              onClick={() => {
                if (currentPath && sep) {
                  const parts = currentPath.split(sep)
                  parts.pop()
                  setCurrentPath(parts.join(sep))
                }
              }}
            >
              <ArrowBack />
            </IconButton>
            <InputBase
              className={classes.pathInput}
              value={pathInput}
              onChange={(e) => setPathInput(e.target.value)}
            />
            <Button
              color='secondary'
              onClick={() => {
                setCurrentPath(pathInput)
              }}
            >
              Go
            </Button>
          </div>
        </div>
        <div className={classes.itemContainer}>
          <List>
            {
              content.map(item => (
                <ListItem
                  button
                  key={item.path}
                  onClick={() => {
                    if (item.type === 'Directory') {
                      setCurrentPath(item.path)
                    }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {item.type === 'Directory' ? <Folder /> : <Description />}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                  />
                </ListItem>
              ))
            }
          </List>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          onClick={() => {
            if (currentPath && name) {
              onOk(name, currentPath, privateLibrary)
            }
          }}
        >
          Add
        </Button>
        <Button
          className={classes.button}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PathSelectDialog
