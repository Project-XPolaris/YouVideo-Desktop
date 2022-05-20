import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {

    },
    primaryText: {
      color: 'white'
    },
    icon: {
      color: appTheme.palette.primary.main
    },
    progress: {
      width: appTheme.spacing(20)
    },
    progressHint: {
      ...appTheme.typography.caption,
      color: 'white',
      marginBottom: appTheme.spacing(1)
    }
  })
)
export default useStyles
