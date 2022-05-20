import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiDialogContent-root': {
        padding: 0
      }

    },
    button: {
      color: appTheme.palette.primary.contrastText
    },
    header: {
      backgroundColor: '#2a2a2a',
      padding: appTheme.spacing(2)
    },
    field: {
      paddingBottom: appTheme.spacing(1),
      paddingLeft: appTheme.spacing(2),
      paddingRight: appTheme.spacing(2)
    },
    pathHeader: {
      display: 'flex',
      alignItems: 'center'
    },
    pathInput: {
      flex: 1,
      marginRight: appTheme.spacing(2),
      width: appTheme.spacing(40)
    },
    backIcon: {
      marginRight: appTheme.spacing(2)
    },
    itemContainer: {
      width: appTheme.spacing(60),
      height: appTheme.spacing(40),
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '8px'
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
