import styled from 'styled-components'

export const HistoryContainer = styled.main`
  min-width: 100%;
  padding: 0 3.5rem;

  display: flex;
  flex-direction: column;
  overflow-x: auto;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const HistoryTaskList = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin-top: 2rem;
  text-align: left;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background-color: ${(props) => props.theme['gray-600']};
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      flex: 1;
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-700']};
    border-top: 4px solid ${(props) => props.theme['gray-800']};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 50%;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
    table {
      min-width: 200%;
    }
  }
`
