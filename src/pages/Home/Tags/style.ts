import { makeStyles } from '@mui/styles'
import appTheme from '../../../theme'

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
  tagsContainer: {
    marginTop: appTheme.spacing(2),
    display: 'flex',
    paddingLeft: appTheme.spacing(2),
    paddingRight: appTheme.spacing(2)
  },
  tag: {
    marginRight: appTheme.spacing(1),
    marginBottom: appTheme.spacing(1)
  }
}))
export default useStyles
