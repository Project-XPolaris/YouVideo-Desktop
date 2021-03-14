import React, { ReactElement } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import useStyles from './style'
import { Language } from '@material-ui/icons'
import { ApplicationConfig } from '../../../config'
import { useHistory } from 'react-router-dom'

export interface SettingPagePropsType {

}

const SettingPage = ({}: SettingPagePropsType): ReactElement => {
  const classes = useStyles()
  const history = useHistory()
  const logout = () => {
    localStorage.removeItem(ApplicationConfig.storeKey.apiUrl)
    history.push('/start')
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
