import React, { ReactElement } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import useStyles from './style'
import { Language } from '@mui/icons-material'
import { ApplicationConfig } from '../../../config'
import { useNavigate } from 'react-router-dom'

export interface SettingPagePropsType {

}

const SettingPage = ({}: SettingPagePropsType): ReactElement => {
  const classes = useStyles()
  const history = useNavigate()
  const logout = () => {
    localStorage.removeItem(ApplicationConfig.storeKey.apiUrl)
    history('/start')
  }
  return (
    <div>
      <div className={classes.header}>
        <Typography variant='h3' className={classes.title}>
          Settings
        </Typography>
      </div>
      <List>
        <ListItem className={classes.item} button onClick={() => logout()}>
          <ListItemAvatar>
            <Language />
          </ListItemAvatar>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
    </div>
  )
}

export default SettingPage
