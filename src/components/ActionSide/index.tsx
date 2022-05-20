import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import { IconButton, Tooltip } from '@mui/material'
import { ArrowBack, Home } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import appTheme from '../../theme'

export interface ActionSidePropsType {
  children?:any
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: appTheme.spacing(2),
      paddingBottom: appTheme.spacing(4),
      paddingLeft: appTheme.spacing(2),
      paddingRight: appTheme.spacing(2),
      borderRadius: 0,
      backgroundColor: '#303030'
    },
    divider: {
      backgroundColor: 'rgba(255,255,255,.1)',
      height: 1,
      width: appTheme.spacing(4),
      marginTop: appTheme.spacing(2),
      marginBottom: appTheme.spacing(2)
    },
    item: {
      marginBottom: appTheme.spacing(1)
    }
  })
)
const ActionSide = ({ children }: ActionSidePropsType):ReactElement => {
  const classes = useStyles()
  const history = useNavigate()

  return (
    <>
      <Tooltip title='go back' placement='right'>
        <IconButton onClick={() => history(-1)} size={'small'} className={classes.item}>
          <ArrowBack />
        </IconButton>
      </Tooltip>
      <Tooltip title='home' placement='right'>
        <IconButton onClick={() => history('/home')} size={'small'} className={classes.item}>
          <Home />
        </IconButton>
      </Tooltip>
      {
        children
      }
    </>
  )
}

export default ActionSide
