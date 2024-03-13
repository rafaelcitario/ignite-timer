import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  header {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    font-size: ${(props) => props.theme['size-18']};
  }

  header input {
    background-color: transparent;
    border: none;
  }

  div {
    display: flex;
    gap: 1rem;
    margin: 1rem auto;
  }
  div .timer {
    font-size: 10rem;
    font-family: ${(props) => props.theme['font-mono']};
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 1rem 2.5rem;
  }

  div .dots {
    font-size: 10rem;
    color: ${(props) => props.theme['green-500']};
    font-weight: ${(props) => props.theme.bold};
  }

  footer button {
    background-color: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['gray-100']};
    font-size: ${(props) => props.theme['size-16']};
    display: flex;
    width: 100%;
    gap: 1rem;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
    }
  }
`