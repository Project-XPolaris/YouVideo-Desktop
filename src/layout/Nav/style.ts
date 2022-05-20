import { createStyles, makeStyles } from '@mui/styles'
import appTheme from '../../theme'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 240,
      height: '100%',
      color: appTheme.palette.primary.contrastText,
      backgroundColor: appTheme.palette.background.default,
      '& .Mui-selected': {
        backgroundColor: appTheme.palette.primary.main,
        '&:hover $child': {
          color: 'red'
        }
      },
      '& .MuiListItem-button.Mui-selected:hover': {
        backgroundColor: appTheme.palette.primary.main
      },
      '& .Mui-focusVisible': {
        backgroundColor: appTheme.palette.primary.dark
      }
    }
  })
)
export default useStyles
