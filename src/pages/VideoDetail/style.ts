import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
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
      padding: appTheme.spacing(4),
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  })
)

export default useStyles
