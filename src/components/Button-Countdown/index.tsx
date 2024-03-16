import { Fragment } from 'react/jsx-runtime'
import { Countdown } from './styles'
import { MouseEvent } from 'react'
import { ContentButtonProps } from '../../pages/Home'

interface ButtonProps {
  content: ContentButtonProps
  buttonContent: string
  handleChangeContent: () => void
}

export const CountdownButton = ({
  // content,
  buttonContent,
  handleChangeContent,
}: ButtonProps) => {
  function handleChangeButton(event: MouseEvent<HTMLButtonElement>): void {
    const buttonText = buttonContent
    event.preventDefault()
    handleChangeContent()

    console.log(buttonText)
    // console.log(content.starter)
  }

  return (
    <Fragment>
      <Countdown>
        <button onClick={handleChangeButton}>{buttonContent}</button>
      </Countdown>
    </Fragment>
  )
}
