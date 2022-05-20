import React, { ReactElement, useEffect, useState } from 'react'
import useStyles from './style'
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material'
import { Cloud, Person } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { ServiceInfo } from '../../api/info'
import { LoginHistory, LoginHistoryManager } from '../../utils/login'
import { useUpdate } from 'ahooks'
import { ipcRenderer } from 'electron'
import request from 'umi-request'
import clsx from 'clsx'
import { useSnackbar } from 'notistack'
import SelectLoginView from '../../components/SelectLoginView'
import { oauthAuth } from '../../api/auth'
import { ApplicationConfig } from '../../config'

export interface StartPagePropsType {
  getServiceInfo: () => Promise<ServiceInfo>
  loginHistoryManager: LoginHistoryManager
  apiUrlStoreKey: string
}

const StartPage = ({ getServiceInfo,loginHistoryManager }:StartPagePropsType) : ReactElement => {
  const classes = useStyles()
  const history = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [inputAPIURL, setInputAPIURL] = useState<string | undefined>('http://192.168.2.56:7700')
  const [serviceInfo, setServiceInfo] = useState<ServiceInfo|null>(null)
  const [tabIndex, setTabIndex] = useState<number>(1)
  const refresh = useUpdate()
  const getHistoryHost = ():Array<string> => {
    const hosts:string[] = []
    loginHistoryManager.list.forEach(item => {
      if (hosts.includes(item.apiUrl)) {
        return
      }
      hosts.push(item.apiUrl)
    })
    return hosts
  }
  const completeLogin = (token = '', username:string) => {
    const loginHistory : LoginHistory = {
      apiUrl: localStorage.getItem(ApplicationConfig.storeKey.apiUrl) || '',
      username: username,
      token: token
    }
    loginHistoryManager.addHistory(loginHistory)
    localStorage.setItem(ApplicationConfig.storeKey.token, token)
    localStorage.setItem(ApplicationConfig.storeKey.username, username)
    history('/home')
  }
  useEffect(() => {
    ipcRenderer.on('oauthCallback', async (event, code, codeAuth) => {
      const response = await oauthAuth(codeAuth, code)
      if (!response.success) {
        enqueueSnackbar('user auth error', { variant: 'error' })
        return
      }
      console.log(response)
      enqueueSnackbar('user login success', { variant: 'success' })
      completeLogin(response.data.accessToken, response.data.username)
    })
  }, [])
  const connectHandler = async ({ serviceUrl }:{serviceUrl?:string}) => {
    let url = inputAPIURL
    if (!inputAPIURL) {
      url = serviceUrl
    }
    if (!url) {
      enqueueSnackbar('请输入API地址', { variant: 'error' })
      return
    }
    localStorage.setItem(ApplicationConfig.storeKey.apiUrl, url)
    const infoResponse = await getServiceInfo()
    enqueueSnackbar('connect to service success', { variant: 'success' })
    setServiceInfo(infoResponse)
  }
  const baseLoginHandler = async (username:string, password:string) => {
    const response = await request.post('/user/auth', { data: { username: username, password: password } })
    if (!response.success) {
      enqueueSnackbar('user auth error', { variant: 'error' })
      return
    }
    completeLogin(response.data.token, username)
  }
  const onAnonymousLogin = () => {
    completeLogin('', 'Anonymous')
  }
  useEffect(() => {
    // check()
    loginHistoryManager.refresh()
    refresh()
  }, [])
  const renderHistoryView = () => {
    const onItemClick = (loginHistory:LoginHistory) => {
      localStorage.setItem(ApplicationConfig.storeKey.apiUrl, loginHistory.apiUrl)
      localStorage.setItem(ApplicationConfig.storeKey.username, loginHistory.username)
      if (loginHistory.token !== undefined && loginHistory.token.length > 0) {
        localStorage.setItem(ApplicationConfig.storeKey.token, loginHistory.token)
      }
      history('/home')
    }
    return (
      <List className={classes.tabContent}>
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
    )
  }
  const renderNewLoginView = () => {
    if (serviceInfo != null) {
      return (
        <SelectLoginView
          authInfos={serviceInfo.auth}
          onCancel={() => setServiceInfo(null)}
          onBaseLogin={baseLoginHandler}
          onAnonymousLogin={onAnonymousLogin}
        />
      )
    }
    return (
      <div className={classes.tabContent}>
        <div className={classes.serviceUrlInputHeader}>
          <TextField
            label="ApiUrl"
            variant="outlined"
            fullWidth
            onChange={(e) => setInputAPIURL(e.target.value)}
            value={inputAPIURL}
            className={clsx(classes.serviceUrlInput)}
          />
          <Button onClick={() => connectHandler({})}>
            Connect
          </Button>
        </div>
        <div>
          <div className={classes.metaHeader}>
            history hosts
          </div>
        </div>
        <div className={classes.historyHostContainer}>
          <List className={classes.tabContent}>
            {
              getHistoryHost().map(it => {
                return (
                  <ListItem key={it} button onClick={() => connectHandler({ serviceUrl: it })} className={classes.historyHostItem}>
                    <ListItemIcon>
                      <Cloud />
                    </ListItemIcon>
                    <ListItemText
                      primary={it}
                    />
                  </ListItem>
                )
              })
            }
          </List>
        </div>
      </div>
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
      {/* <Fab color="primary" className={classes.fab} onClick={loginHandler}> */}
      {/*  <NavigateNext /> */}
      {/* </Fab> */}
    </div>
  )
}
export default StartPage
