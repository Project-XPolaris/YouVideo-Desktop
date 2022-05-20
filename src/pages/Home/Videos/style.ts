import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative'
    },
    header: {
      padding: appTheme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      position: 'sticky',
      width: '100%',
      top: 0,
      marginTop: appTheme.spacing(8),
      backgroundColor: '#181818',
      zIndex: 1
    },
    title: {
      color: 'white',
      flexGrow: 1
    },
    content: {
      padding: appTheme.spacing(2)
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    item: {
      marginRight: appTheme.spacing(2),
      marginBottom: appTheme.spacing(2),
      width: appTheme.spacing(20)
    }
  })
)
export default useStyles
