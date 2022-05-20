import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 'none'
    },
    coverBase: {
      width: '100%'
    },
    placeHolderContainer: {
      width: '100%',
      backgroundColor: appTheme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    placeHolderIcon: {
      color: appTheme.palette.primary.contrastText,
      fontSize: appTheme.spacing(6)
    },
    cover: {
      width: '100%',
      objectFit: 'cover'
    },
    title: {
      ...appTheme.typography.h6,
      color: appTheme.palette.primary.contrastText,
      fontSize: 16,
      fontWeight: 300
    }
  })
)
export default useStyles
