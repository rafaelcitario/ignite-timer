import { styled } from "styled-components";

export type whatColorSquare = 'primary' | 'secondary' | 'danger' | 'success';

interface SquareContainerProps {
  background: whatColorSquare,
}

export const SquareContainer = styled.div<SquareContainerProps>`
width: 100px;
height: 100px;
border-radius: 8px;
border: 1px solid transparent;
margin: .2rem;
background-color: ${props => props.theme[props.background]}
`