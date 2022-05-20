import { makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    padding: appTheme.spacing(2),
    flexDirection: 'column'
  },
  collection: {
    color: appTheme.palette.primary.contrastText,
    marginBottom: appTheme.spacing(4)
  },
  title: {
    ...appTheme.typography.h3,
    color: appTheme.palette.primary.contrastText
  },
  collectionItem: {
    marginTop: appTheme.spacing(4)
  }
}))
export default useStyles
