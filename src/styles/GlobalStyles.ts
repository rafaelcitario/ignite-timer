import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 1px dotted ${(props) => props.theme['green-300']};
  
}

body{
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 2rem 10rem;
}

body, input, textarea, button{
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  font-size: 1rem;
  
}
`
