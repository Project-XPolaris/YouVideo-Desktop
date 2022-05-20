import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material'

const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[500]
    }
  }

})
export default appTheme
