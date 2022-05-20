import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from './style'
import useLayoutModel from '../../models/layout'
import { ArrowBack } from '@mui/icons-material'
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp'
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp'
import ClearSharpIcon from '@mui/icons-material/ClearSharp'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ApplicationConfig } from '../../config'
import { ipcRenderer } from 'electron'

const BaseLayout = ({ children }:{children:any}): React.ReactElement => {
  const classes = useStyles()
  const layoutModel = useLayoutModel()
  const routerHistory = useNavigate()
  const location = useLocation()
  // init
  if (location.pathname !== '/start') {
    const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
    if (apiUrl === null) {
      routerHistory('/start')
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
