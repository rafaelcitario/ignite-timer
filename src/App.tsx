import { Fragment } from 'react/jsx-runtime'
import { Button } from './components/Button/Button'
import { Square } from './components/Square/Square'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/GlobalStyles'

export function App() {
  return (
    <Fragment>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />

        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button variant="success" />
        <Button />

        <Square background="primary" />
        <Square background="secondary" />
        <Square background="danger" />
        <Square background="success" />
        <Square />
      </ThemeProvider>
    </Fragment>
  )
}
