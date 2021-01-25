import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(30),
      flex: 'none'
    },
    coverBase: {
      width: '100%',
      height: theme.spacing(20)
    },
    placeHolderContainer: {
      width: '100%',
      height: theme.spacing(20),
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    placeHolderIcon: {
      color: theme.palette.primary.contrastText,
      fontSize: theme.spacing(6)
    },
    cover: {
      width: '100%',
      height: theme.spacing(20),
      objectFit: 'cover'
    },
    title: {
      ...theme.typography.h6,
      color: theme.palette.primary.contrastText,
      fontSize: 16,
      fontWeight: 300
    }
  })
)
export default useStyles
