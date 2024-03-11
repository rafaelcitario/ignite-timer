import { styled, css } from "styled-components";

export type whatColorSquare = 'primary' | 'secondary' | 'danger' | 'success';

interface SquareContainerProps {
  background: whatColorSquare,
}

const squareColors = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const SquareContainer = styled.div<SquareContainerProps>`
${props => css`
width: 100px;
height: 100px;
background-color: ${squareColors[props.background]};
`
  }
`