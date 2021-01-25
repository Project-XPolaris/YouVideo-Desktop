import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

    },
    primaryText: {
      color: 'white'
    },
    icon: {
      color: theme.palette.primary.main
    },
    progress: {
      width: theme.spacing(20)
    },
    progressHint: {
      ...theme.typography.caption,
      color: 'white',
      marginBottom: theme.spacing(1)
    }
  })
)
export default useStyles
