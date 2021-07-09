import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './style'
import useLayoutModel from '../../models/layout'
import { ArrowBack } from '@material-ui/icons'
import MinimizeSharpIcon from '@material-ui/icons/MinimizeSharp'
import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp'
import ClearSharpIcon from '@material-ui/icons/ClearSharp'
import React from 'react'
import { TaskManager } from '../../parts/Task'
import { useHistory } from 'react-router-dom'
import { ApplicationConfig } from '../../config'
import { ipcRenderer } from 'electron'

const BaseLayout = ({ children }:{children:any}): React.ReactElement => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const routerHistory = useHistory()
  // init
  if (routerHistory.location.pathname !== '/start') {
    const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
    if (apiUrl === null) {
      routerHistory.push('/start')
    }
  }
  const NavIcon = () => {
    switch (layoutModel.navIcon) {
      case 'Menu':
        return (
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
        )
      case 'Back':
        return (
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={() => history.back()}
          >
            <ArrowBack />
          </IconButton>
        )
    }
  }
  const onClose = () => {
    ipcRenderer.send('close')
  }
  const onMin = () => {
    ipcRenderer.send('min')
  }
  const onMax = () => {
    ipcRenderer.send('max')
  }
  return (
    <>
      <div>
        <AppBar position='fixed' elevation={0} className={classes.appbar}>
          <Toolbar variant='dense' className={classes.toolbar}>
            <NavIcon />
            <Typography variant='h6' className={classes.title}>
              YouVideo
            </Typography>
            {
              ipcRenderer &&
              <>
                <IconButton size='small' className={classes.windowAction} onClick={onMin}>
                  <MinimizeSharpIcon className={classes.actionIcon} />
                </IconButton>
                <IconButton size='small' className={classes.windowAction} onClick={onMax}>
                  <CheckBoxOutlineBlankSharpIcon className={classes.actionIcon} />
                </IconButton>
                <IconButton size='small' className={classes.windowAction} onClick={onClose}>
                  <ClearSharpIcon className={classes.actionIcon} />
                </IconButton>
              </>
            }
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          {children}
        </div>
      </div>
    </>
  )
}

export default BaseLayout
