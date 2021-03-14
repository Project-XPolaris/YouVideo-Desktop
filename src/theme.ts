import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core'

const appTheme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[500]
    }
  }

})
export default appTheme
