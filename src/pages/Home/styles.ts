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
    padding: 1rem 3rem;
  }

  div .dots {
    font-size: 10rem;
    color: ${(props) => props.theme['green-500']};
    font-weight: ${(props) => props.theme.bold};
  }

  @media (max-width: 1440px) {
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
      overflow-wrap: break-word;
    }

    .timerContainer .timer,
    .timerContainer .dots {
      height: fit-content;
      font-size: 5rem;
      padding: 0.5rem 1.5rem;
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
