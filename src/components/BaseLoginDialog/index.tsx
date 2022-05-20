import React, { ReactElement } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Input } from '@mui/material'
import useStyles from './style'
import { Lock, Person } from '@mui/icons-material'

const BaseLoginDialog = (
  {
    open = false,
    onClose,
    onLogin
  }:{
    open:boolean,
    onClose:() => void,
    onLogin:(username:string, password:string) => void}
):ReactElement => {
  const style = useStyles()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const onLoginHandler = () => {
    if (username.length > 0 && password.length > 0) {
      onLogin(username, password)
      setPassword('')
      setUsername('')
      onClose()
    }
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={'lg'}
    >
      <DialogTitle>
        Login Account
      </DialogTitle>
      <DialogContent>
        <div className={style.content}>
          <div>
            <Input
              startAdornment={<Person />}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className={style.input}
              fullWidth
            />
          </div>
          <div>
            <Input
              startAdornment={<Lock />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={style.input}
              type={'password'}
              fullWidth
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onLoginHandler}>
                  Login
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default BaseLoginDialog
