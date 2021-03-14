import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },

  control: {
    height: theme.spacing(8),
    backgroundColor: '#202020',
    position: 'absolute',
    width: '100vw',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  playbar: {
    position: 'absolute',
    bottom: theme.spacing(6)
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  volumeBar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: theme.spacing(15)
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
    ...theme.typography.body1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}))
export default useStyles
