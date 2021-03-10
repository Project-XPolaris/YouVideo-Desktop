import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#2b2b2b',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(4),
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  })
)

export default useStyles
