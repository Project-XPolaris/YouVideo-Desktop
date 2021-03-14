import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    position: 'sticky',
    width: '100%',
    top: 0,
    marginTop: theme.spacing(8),
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderRadius: 0,
    backgroundColor: '#303030'
  }
}))
export default useStyles
