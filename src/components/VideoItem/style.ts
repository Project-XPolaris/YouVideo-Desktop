import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 'none'
    },
    coverBase: {
      width: '100%'
    },
    placeHolderContainer: {
      width: '100%',
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
