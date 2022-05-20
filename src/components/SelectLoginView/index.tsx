import React, { ReactElement } from 'react'
import { AuthInfo } from '../../api/info'
import useStyles from './style'
import { Close, Cloud, Person } from '@mui/icons-material'
import { ApplicationConfig } from '../../config'
import { Button, IconButton } from '@mui/material'
import { ipcRenderer } from 'electron'
import URI from 'urijs'
import BaseLoginDialog from '../BaseLoginDialog'

const SelectLoginView = (
  {
    authInfos,
    onCancel,
    onBaseLogin,
    onAnonymousLogin
  }:{
        authInfos:AuthInfo[],
        onCancel:() => void,
        onBaseLogin : (username:string, password:string) => void,
        onAnonymousLogin:() => void
    }):ReactElement => {
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false)
  const style = useStyles()
  const serviceUrl = localStorage.getItem(ApplicationConfig.storeKey.apiUrl)
  const auths = authInfos
  const renderLoginButton = () => {
    return auths.map((authInfo) => {
      switch (authInfo.type) {
        case 'weboauth':
          return (
            <Button
              key={authInfo.name}
              variant={'contained'}
              className={style.loginButton}
              startIcon={<Cloud/>}
              onClick={() => {
                const callbackUrl = URI('http://localhost:3071/oauth/youauth').setQuery('codeauth', '/oauth/youauth').toString()
                ipcRenderer.send('openYouAuthLoginWindow', authInfo.url, callbackUrl)
              }}
            >
              LoginWith {` ${authInfo.name}`}
            </Button>
          )
        case 'base':
          return (
            <Button
              key={authInfo.name}
              variant={'contained'}
              className={style.loginButton}
              startIcon={<Person />}
              onClick={() => {
                setLoginDialogOpen(true)
              }}
            >
              LoginWith {` ${authInfo.name}`}
            </Button>
          )
        case 'anonymous':
          return (
            <Button
              key={authInfo.name}
              variant={'contained'}
              className={style.loginButton}
              startIcon={<Person />}
              onClick={() => {
                onAnonymousLogin()
              }}
            >
              Anonymous login
            </Button>
          )
        default:
          return <div></div>
      }
    })
  }
  return (
    <div>
      <BaseLoginDialog
        open={loginDialogOpen}
        onClose={() => setLoginDialogOpen(false)}
        onLogin={onBaseLogin}
      />

      <div className={style.serviceInfo}>
        <div>
          <Cloud />
        </div>
        <div className={style.serviceInfoText}>
          {serviceUrl}
        </div>
        <div>
          <IconButton onClick={onCancel}>
            <Close />
          </IconButton>
        </div>
      </div>
      <div className={style.loginContainer}>
        {renderLoginButton()}
      </div>
    </div>
  )
}
export default SelectLoginView
