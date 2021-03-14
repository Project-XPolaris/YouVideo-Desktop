import React, { useState } from 'react'
import useStyles from './style'
import { Fab, TextField } from '@material-ui/core'
import { Link } from '@material-ui/icons'
import { ApplicationConfig } from '../../config'
import { useHistory } from 'react-router-dom'

export interface StartPagePropsType {

}

const StartPage = ({}: StartPagePropsType) => {
  const [apiUrl, setApiUrl] = useState<string | undefined>()
  const history = useHistory()
  const classes = useStyles()
  const onNext = () => {
    if (apiUrl) {
      localStorage.setItem(ApplicationConfig.storeKey.apiUrl, apiUrl)
      history.push('/home')
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
