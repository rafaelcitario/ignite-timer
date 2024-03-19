import styled from 'styled-components'

export const Countdown = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;

  button {
    background-color: ${(props) => props.theme['green-500']};
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

    &:disabled {
      opacity: 0.7;
      background-color: ${(props) => props.theme['green-700']};
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-300']};
    }
  }
`
