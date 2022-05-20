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
    addButton: {
      alignSelf: 'flex-end'
    },
    list: {
    },
    content: {
      padding: appTheme.spacing(2)
    }
  })
)

export default useStyles
