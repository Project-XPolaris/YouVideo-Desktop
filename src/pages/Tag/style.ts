import { makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#2b2b2b',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'sticky',
    width: '100%',
    top: 0,
    zIndex: 1,
    padding: appTheme.spacing(2),
    backgroundColor: '#2b2b2b'
  },
  title: {
    color: 'white',
    flexGrow: 1,
    fontWeight: 200
  },
  item: {
    marginRight: appTheme.spacing(2),
    marginBottom: appTheme.spacing(2),
    width: appTheme.spacing(20)
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: appTheme.spacing(2),
    padding: appTheme.spacing(2)
  },
  pagination: {
    marginTop: appTheme.spacing(4),
    marginBottom: appTheme.spacing(4)
  }
}))
export default useStyles
