import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    main: {
      width: '100vw',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(4),
      position: 'relative'
    },
    form: {
      marginTop: theme.spacing(4),
      width: '100%',
      flexGrow: 1,
      height: '100%',
      position: 'relative'
    },
    fab: {
      alignSelf: 'flex-end'
    },
    tabs: {
      marginTop: theme.spacing(2)
    },
    itemPrimary: {
      color: 'white'
    },
    input: {
      marginBottom: theme.spacing(2)
    },
    tabContent: {
      overflowY: 'auto',
      width: '100%',
      height: '100%',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column'
    },
    '@global': {
      '*::-webkit-scrollbar': {
        width: '8px'
      },
      '*::-webkit-scrollbar-track': {
        background: 'rgba(0,0,0,0)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#303030'
      }
    },
    serviceUrlInput: {
      flex: 1,
      marginRight: theme.spacing(2)
    },
    serviceUrlInputHeader: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing(1)
    },
    historyHostContainer: {
      flex: 1,
      width: '100%',
      position: 'relative'
    },
    historyHostItem: {
      color: '#fff'
    },
    metaHeader: {
      ...theme.typography.caption,
      color: 'rgba(255,255,255,0.7)',
      marginTop: theme.spacing(2)
    },
    tabContainer: {
      flex: 1,
      background: 'aqua',
      height: '100%'
    }
  })
)

export default useStyles
