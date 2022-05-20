import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
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
      marginRight: appTheme.spacing(2),
      marginBottom: appTheme.spacing(2),
      width: appTheme.spacing(30)
    },
    header: {
      display: 'flex',
      marginBottom: appTheme.spacing(2)
    },
    title: {
      ...appTheme.typography.h5,
      fontWeight: 300,
      color: appTheme.palette.primary.contrastText,
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
