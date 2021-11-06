import React, { ReactElement, useEffect, useState } from 'react'
import useStyles from './style'
import {
  Avatar,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@material-ui/core'
import { NavigateNext, Person } from '@material-ui/icons'
import { ApplicationConfig } from '../../config'
import { useHistory } from 'react-router-dom'
import { fetchServiceInfo } from '../../api/info'
import request from 'umi-request'
import { LoginHistory, loginHistoryManager } from '../../utils/login'
import { useUpdate } from 'ahooks'
import { checkUserAuth, fetchUserAuth } from '../../api/auth'

export interface StartPagePropsType {

}

const StartPage = ({}: StartPagePropsType):ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const [inputAPIURL, setInputAPIURL] = useState<string | undefined>()
  const [inputUsername, setInputUsername] = useState<string | undefined>()
  const [inputPassword, setInputPassword] = useState<string | undefined>()
  const [tabIndex, setTabIndex] = useState<number>(0)
  const refresh = useUpdate()
  const apply = () => {
    if (inputAPIURL === undefined) {
      return
    }
    localStorage.setItem(ApplicationConfig.storeKey.apiUrl, inputAPIURL)
    history.replace('/')
  }
  const check = async () => {
    const apiUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
    if (apiUrl !== null) {
      history.replace('/home')
    }
  }
  const loginHandler = async () => {
    if (!inputAPIURL) {
      return
    }
    localStorage.setItem(ApplicationConfig.storeKey.apiUrl, inputAPIURL)
    const serviceInfo = await fetchServiceInfo()
    if (inputUsername && inputPassword && serviceInfo.authEnable && serviceInfo.authEnable) {
      const response = await fetchUserAuth(inputUsername, inputPassword)
      console.log(response)
      if (response.success) {
        const loginHistory : LoginHistory = {
          apiUrl: inputAPIURL,
          username: inputUsername,
          token: response.token
        }
        loginHistoryManager.addHistory(loginHistory)
        localStorage.setItem(ApplicationConfig.storeKey.token, response.token)
        localStorage.setItem(ApplicationConfig.storeKey.username, inputUsername)
      }
    } else {
      const loginHistory : LoginHistory = {
        apiUrl: inputAPIURL,
        username: 'public',
        token: ''
      }
      localStorage.removeItem(ApplicationConfig.storeKey.token)
      localStorage.setItem(ApplicationConfig.storeKey.username, 'public')
      loginHistoryManager.addHistory(loginHistory)
    }
    history.push('/home')
  }
  useEffect(() => {
    // check()
    loginHistoryManager.refresh()
    refresh()
  }, [])
  const renderHistoryView = () => {
    const onItemClick = async (loginHistory:LoginHistory) => {
      localStorage.setItem(ApplicationConfig.storeKey.apiUrl, loginHistory.apiUrl)
      localStorage.setItem(ApplicationConfig.storeKey.username, loginHistory.username)
      const info = await fetchServiceInfo()
      if (info.authEnable && loginHistory.token !== '') {
        const token = await checkUserAuth(loginHistory.token)
        if (token.success) {
          localStorage.setItem(ApplicationConfig.storeKey.token, loginHistory.token)
          history.push('/home')
        }
      } else {
        history.push('/home')
      }
    }
    return (
      <div className={classes.list}>
        <List>
          {
            loginHistoryManager.list.map((loginHistory, idx) => {
              return (
                <ListItem key={idx} button onClick={() => onItemClick(loginHistory)}>
                  <ListItemAvatar>
                    <Avatar>
                      <Person/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={loginHistory.username}
                    secondary={loginHistory.apiUrl}
                    primaryTypographyProps={{ className: classes.itemPrimary }}
                  />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    )
  }
  const renderNewLoginView = () => {
    return (
      <>
        <TextField
          label="ApiUrl"
          variant="outlined"
          fullWidth
          onChange={(e) => setInputAPIURL(e.target.value)}
          value={inputAPIURL}
          className={classes.input}
        />
        <TextField
          label="username"
          variant="outlined"
          fullWidth
          onChange={(e) => setInputUsername(e.target.value)}
          value={inputUsername}
          className={classes.input}
        />
        <TextField
          label="password"
          variant="outlined"
          fullWidth
          type="password"
          onChange={(e) => setInputPassword(e.target.value)}
          value={inputPassword}
          className={classes.input}
        />
      </>
    )
  }
  return (
    <div className={classes.main}>
      <Typography variant="h2" gutterBottom style={{ color: '#FFFFFF' }}>
        Start
      </Typography>
      <Tabs
        className={classes.tabs}
        value={tabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={(_, v) => setTabIndex(v)}
      >
        <Tab label="Recently login" />
        <Tab label="New login" />
      </Tabs>
      <div className={classes.form}>
        {
          tabIndex === 0 && renderHistoryView()
        }
        {
          tabIndex === 1 && renderNewLoginView()
        }
      </div>
      <Fab color="primary" className={classes.fab} onClick={loginHandler}>
        <NavigateNext />
      </Fab>
    </div>
  )
}

export default StartPage
