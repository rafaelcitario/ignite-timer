import { Fragment } from 'react/jsx-runtime'
import { HistoryContainer, HistoryTaskList } from './History'

export const History = () => {
  return (
    <Fragment>
      <HistoryContainer>
        <h1>Meu historico</h1>
        <HistoryTaskList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conserto de Débtos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Em andamento</td>
              </tr>

              <tr>
                <td>Conserto de Débtos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Em andamento</td>
              </tr>

              <tr>
                <td>Conserto de Débtos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Em andamento</td>
              </tr>

              <tr>
                <td>Conserto de Débtos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Em andamento</td>
              </tr>

              <tr>
                <td>Conserto de Débtos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>Em andamento</td>
              </tr>
            </tbody>
          </table>
        </HistoryTaskList>
      </HistoryContainer>
    </Fragment>
  )
}
