import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  header {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme['size-18']};
  }

  header input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme['gray-400']};
    text-align: center;

    &:focus {
      box-shadow: none;
      color: ${(props) => props.theme['gray-100']};
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  header input[type='text'] {
    flex: 1;
    &::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  }

  div {
    display: flex;
    gap: 1rem;
    margin: 1rem auto;
  }
  div .timer {
    width: flex 1;
    font-size: 10rem;
    font-family: ${(props) => props.theme['font-mono']};
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 1rem 3rem;
  }

  div .dots {
    font-size: 10rem;
    color: ${(props) => props.theme['green-500']};
    font-weight: ${(props) => props.theme.bold};
  }

  @media (max-width: 1440px) {
    header {
      gap: 0.625rem;
    }

    header input[type='text'] {
      text-align: center;
      margin: 0;
      padding: 0;
    }

    header input[type='number'] {
      width: 4rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
    }

    .timerContainer {
      width: 100%;
      font-size: 10rem;
      justify-content: center;
    }

    .timerContainer .timer,
    .timerContainer .dots {
      height: fit-content;
      font-size: inherit;
      padding: 0.5rem 1.5rem;
    }
  }

  @media (max-width: 1070px) {
    .timerContainer {
      font-size: 7rem;
    }

    .timerContainer .timer,
    .timerContainer .dots {
      font-size: inherit;
    }
  }

  @media (max-width: 882px) {
    header {
      flex-direction: column;
      gap: 0.625rem;
    }

    header input {
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .timerContainer {
      width: 100%;
      gap: 0rem;
    }

    .timerContainer .timer,
    .timerContainer .dots {
      height: fit-content;
      font-size: 5rem;
      gap: 0;
      padding: 0.5rem 1.5rem;
    }
  }

  @media (max-width: 822px) {
    .timerContainer .timer,
    .timerContainer .dots {
      height: fit-content;
      font-size: 3rem;
      gap: 0;
      padding: 0.5rem 1.5rem;
    }
  }

  @media (max-width: 700px) {
    .timerContainer .timer,
    .timerContainer .dots {
      height: fit-content;
      font-size: 1rem;
      gap: 0;
      padding: 0.5rem 1rem;
    }
  }
`
