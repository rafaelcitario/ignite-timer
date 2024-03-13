import styled from 'styled-components'

export const LayoutCountainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin: auto;
  gap: 1rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
`
