import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import appTheme from './theme'
import { ThemeProvider } from '@material-ui/core'
import { useTitle } from 'ahooks'
import BlankLayout from './layout/BlankLayout'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  useTitle('YouVideo')
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyle />
        <BlankLayout />
      </ThemeProvider>
    </>
  )
}

render(<App />, mainElement)
