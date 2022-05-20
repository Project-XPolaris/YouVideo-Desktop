import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import appTheme from './theme'
import { ThemeProvider } from '@mui/material'
import { useTitle } from 'ahooks'
import BlankLayout from './layout/BlankLayout'
import { SnackbarProvider } from 'notistack'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  useTitle('YouVideo')
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <SnackbarProvider maxSnack={3}>
          <GlobalStyle />
          <BlankLayout />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

render(<App />, mainElement)
