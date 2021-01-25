import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    collection: {
      width: '100%',
      display: 'flex',
      overflowX: 'auto'
    },
    item: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: theme.spacing(30)
    },
    header: {
      display: 'flex',
      marginBottom: theme.spacing(2)
    },
    title: {
      ...theme.typography.h5,
      fontWeight: 300,
      color: theme.palette.primary.contrastText,
      flexGrow: 1
    },
    '@global': {
      '*::-webkit-scrollbar': {
        height: '6px'
      },
      '*::-webkit-scrollbar-track': {
        background: 'rgba(0,0,0,0)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#303030'
      }
    }
  })
)
export default useStyles
