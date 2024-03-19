import { Fragment } from 'react/jsx-runtime'
import { FormContainer } from './styles'
import { CountdownButton } from '../../components/Button-Countdown'
import { useState } from 'react'

export interface ContentButtonProps {
  cronometer: string
  starter: string
}
const content: ContentButtonProps = {
  cronometer: 'reset cronometer',
  starter: 'init cronometer',
}

export const Home = () => {
  const [buttonContent, setButtonContent] = useState(content.starter)

  function changeContent() {
    if (buttonContent !== content.cronometer) {
      return setButtonContent(content.cronometer)
    }
    setButtonContent(content.starter)
  }
  return (
    <Fragment>
      <FormContainer>
        <form action="">
          <header>
            <label htmlFor="nameTask">Vou trabalhar em</label>

            <datalist id="task-suggestions">
              <option value="task-1" />
              <option value="task-2" />
              <option value="task-3" />
              <option value="banana" />
            </datalist>

            <input
              type="text"
              name="nameTask"
              id="nameTask"
              list="task-suggestions"
              placeholder="Dê um nome para seu projeto"
            />
            <label htmlFor="timerTask">Durante</label>
            <input
              type="number"
              name="timerTask"
              id="timerTask"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />
            <span>minutos</span>
          </header>

          <div className="timerContainer">
            <span className="timer">0</span>
            <span className="timer">0</span>
            <span className="dots">&#58;</span>
            <span className="timer">0</span>
            <span className="timer">0</span>
          </div>

          <footer>
            <CountdownButton
              content={content}
              handleChangeContent={changeContent}
              buttonContent={buttonContent}
            />
          </footer>
        </form>
      </FormContainer>
    </Fragment>
  )
}
