import { Fragment } from "react/jsx-runtime";
import { SquareContainer, whatColorSquare } from "./Square.styled";

interface SquareProps {
  background?: whatColorSquare
}

export function Square({ background = 'primary' }: SquareProps) {
  return (
    <Fragment>
      <SquareContainer background={background}>
      </SquareContainer>
    </Fragment>

  )
}