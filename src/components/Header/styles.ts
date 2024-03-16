import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;

  span {
    color: ${(props) => props.theme['green-300']};
  }

  nav {
    display: flex;
    gap: 1.25rem;
  }

  a {
    font-weight: bolder;
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition:
      border 0.5s,
      outline 1s ease-in-out;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-300']};
      outline: transparent;
    }
    &.active {
      color: ${(props) => props.theme['green-300']};
      outline: transparent;
    }
  }
`
