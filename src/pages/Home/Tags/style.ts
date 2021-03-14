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
  tagsContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  tag: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))
export default useStyles
