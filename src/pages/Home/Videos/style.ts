import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative'
    },
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
      padding: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
)
export default useStyles
