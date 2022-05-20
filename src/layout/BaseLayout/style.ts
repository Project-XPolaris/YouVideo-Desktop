import { makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: appTheme.spacing(2),
    marginLeft: appTheme.spacing(2)
  },
  title: {
    flexGrow: 1,
    '-webkit-app-region': 'drag'
  },
  main: {
    backgroundColor: '#181818',
    height: '100vh',
    paddingTop: appTheme.spacing(6),
    display: 'flex',
    width: '100vw'
  },
  content: {
    overflowX: 'hidden'
  },
  appbar: {
    backgroundColor: '#202020'

  },
  toolbar: {
    padding: 0
  },
  windowAction: {
    color: appTheme.palette.primary.contrastText,
    marginRight: appTheme.spacing(1)
  },
  actionIcon: {
    fontSize: appTheme.spacing(2)
  },
  '@global': {
    '*::-webkit-scrollbar': {
      height: '6px'
    },
    '*::-webkit-scrollbar-track': {
      background: 'rgba(0,0,0,0)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#303030'
    }
  }
}))
export default useStyles
