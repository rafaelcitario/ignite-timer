import { Fragment } from 'react/jsx-runtime'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from './components/routes/Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <Fragment>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  )
}
