import React, { useState } from 'react'
import useStyles from './style'
import { Fab, TextField } from '@material-ui/core'
import { Link } from '@material-ui/icons'
import { ApplicationConfig } from '../../config'
import { useHistory } from 'react-router-dom'
import { fetchServiceInfo } from '../../api/info'
import request from 'umi-request'

export interface StartPagePropsType {

}

const StartPage = ({}: StartPagePropsType) => {
  const [apiUrl, setApiUrl] = useState<string | undefined>()
  const [username, setUsername] = useState<string | undefined>()
  const [password, setPassword] = useState<string | undefined>()

  const history = useHistory()
  const classes = useStyles()
  const onNext = async () => {
    if (apiUrl) {
      localStorage.setItem(ApplicationConfig.storeKey.apiUrl, apiUrl)
      const info = await fetchServiceInfo()
      if (info.authEnable) {
        const response = await request.post(info.authUrl, { data: { username, password } })
        if (response.token) {
          localStorage.setItem('token', response.token)
          history.push('/home')
        }
      } else {
        localStorage.removeItem('token')
        history.push('/home')
      }
    }
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Start
      </div>
      <div className={classes.form}>
        <TextField
          label="Api URL"
          variant='outlined'
          onChange={(e) => setApiUrl(e.target.value)}
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Username"
          variant='outlined'
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          className={classes.input}
        />
        <TextField
          label="Password"
          variant='outlined'
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          className={classes.input}
          type={'password'}
        />
      </div>
      <Fab
        variant="extended"
        className={classes.fab}
        color='primary'
        onClick={onNext}
      >
        <Link />
        Start
      </Fab>
    </div>
  )
}

export default StartPage
