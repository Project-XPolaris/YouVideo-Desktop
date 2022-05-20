import { makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    padding: appTheme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    position: 'sticky',
    width: '100%',
    top: 0,
    marginTop: appTheme.spacing(8),
    backgroundColor: '#181818',
    zIndex: 1
  },
  title: {
    color: 'white',
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#181818',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  side: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: appTheme.spacing(2),
    paddingBottom: appTheme.spacing(4),
    paddingLeft: appTheme.spacing(2),
    paddingRight: appTheme.spacing(2),
    borderRadius: 0,
    backgroundColor: '#303030'
  }
}))
export default useStyles
