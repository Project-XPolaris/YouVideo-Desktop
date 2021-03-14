import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
    padding: theme.spacing(2),
    backgroundColor: '#2b2b2b'
  },
  title: {
    color: 'white',
    flexGrow: 1,
    fontWeight: 200
  },
  item: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: theme.spacing(20)
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}))
export default useStyles
