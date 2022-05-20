import React from 'react'
import { makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles({
  main: {
    backgroundColor: '#181818',
    height: '100%',
    display: 'flex',
    width: '100vw'
  },
  side: {
    width: 240,
    height: '100%',
    color: appTheme.palette.primary.contrastText,
    backgroundColor: appTheme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    width: 'calc(100vw - 240px)',
    height: '100%',
    padding: appTheme.spacing(4),
    overflowX: 'hidden',
    overflowY: 'scroll',
    paddingBottom: appTheme.spacing(20)
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '8px'
    },
    '*::-webkit-scrollbar-track': {
      background: 'rgba(0,0,0,0)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#303030'
    }
  }
})

interface SideLayoutPropsType {
  children?:any
  side:React.ReactElement
}
const SideLayout = ({ children, side }: SideLayoutPropsType):React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <div className={classes.side}>
        {side}
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

export default SideLayout
