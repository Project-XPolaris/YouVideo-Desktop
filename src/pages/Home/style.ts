import { createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    padding: theme.spacing(2),
    flexDirection: 'column'
  },
  collection: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(4)
  },
  title: {
    ...theme.typography.h3,
    color: theme.palette.primary.contrastText
  },
  collectionItem: {
    marginTop: theme.spacing(4)
  }
}))
export default useStyles
