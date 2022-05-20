import { makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },

  control: {
    height: appTheme.spacing(8),
    backgroundColor: '#202020',
    position: 'absolute',
    width: '100vw',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    paddingLeft: appTheme.spacing(2),
    paddingRight: appTheme.spacing(2)
  },
  playbar: {
    position: 'absolute',
    bottom: appTheme.spacing(6)
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  volumeBar: {
    marginLeft: appTheme.spacing(2),
    marginRight: appTheme.spacing(2),
    width: appTheme.spacing(15)
  },
  icon: {
    color: 'white'
  },
  volumeContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  playTimeContainer: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  playTime: {
    ...appTheme.typography.body1,
    marginRight: appTheme.spacing(1),
    marginLeft: appTheme.spacing(1)
  }
}))
export default useStyles
