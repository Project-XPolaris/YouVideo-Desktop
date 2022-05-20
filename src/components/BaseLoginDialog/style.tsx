import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {},
    input: {
      marginBottom: theme.spacing(2)
    },
    content: {
      width: '40vh'
    }
  })
)

export default useStyles
