import { Fragment } from 'react/jsx-runtime'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './components/pages/Home/Home'
import { History } from './components/pages/History/History'

export function App() {
  return (
    <Fragment>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Home />
        <History />
      </ThemeProvider>
    </Fragment>
  )
}
