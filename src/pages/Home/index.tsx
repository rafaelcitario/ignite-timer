import { Fragment } from 'react/jsx-runtime'
import { FormContainer } from './styles'
import { Play } from '@phosphor-icons/react'

export const Home = () => {
  return (
    <Fragment>
      <FormContainer>
        <form action="">
          <header>
            <label htmlFor="nameTask">Vou trabalhar em</label>
            <input
              type="text"
              name="nameTask"
              id="nameTask"
              placeholder="Dê um nome para seu projeto"
            />
            <label htmlFor="timerTask">Durante</label>
            <input
              type="number"
              name="timerTask"
              id="timerTask"
              placeholder="00"
            />
            <span>minutos</span>
          </header>

          <div>
            <span className="timer">0</span>
            <span className="timer">0</span>
            <span className="dots">&#58;</span>
            <span className="timer">0</span>
            <span className="timer">0</span>
          </div>

          <footer>
            <button>
              <Play size={24} weight="regular" />
              cronometrar
            </button>
          </footer>
        </form>
      </FormContainer>
    </Fragment>
  )
}
