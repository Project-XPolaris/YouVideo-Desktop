import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100vw',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(4),
      position: 'relative'
    },
    form: {
      marginTop: theme.spacing(4),
      width: '100%',
      flexGrow: 1
    },
    fab: {
      alignSelf: 'flex-end'
    },
    tabs: {
      marginTop: theme.spacing(2)
    },
    itemPrimary: {
      color: 'white'
    },
    input: {
      marginBottom: theme.spacing(2)
    }
  })
)
export default useStyles
