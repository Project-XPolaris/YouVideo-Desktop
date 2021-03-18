import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      position: 'relative'
    },
    title: {
      ...theme.typography.h3,
      color: 'white',
      flexGrow: 1,
      fontWeight: 300
    },
    form: {
      padding: theme.spacing(8)
    },
    input: {
      marginBottom: theme.spacing(2)
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
)
export default useStyles
