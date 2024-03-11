import { Fragment } from "react/jsx-runtime";
import { ButtonVariants, ButtonContainer } from "./Button.styled";


interface ButtonProps {
  variant?: ButtonVariants,
}
export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <Fragment>
      <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    </Fragment>
  )
}
