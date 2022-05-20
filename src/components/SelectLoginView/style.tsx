import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
    },
    serviceInfo: {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      marginBottom: appTheme.spacing(2),
      padding: appTheme.spacing(1),
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: appTheme.spacing(2)
    },
    serviceInfoText: {
      ...appTheme.typography.h6,
      marginLeft: appTheme.spacing(3),
      flex: 1
    },
    loginContainer: {
      display: 'flex'
    },
    loginButton: {
      marginRight: appTheme.spacing(2)
    }
  })
)

export default useStyles
