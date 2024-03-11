import { styled } from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonContainerProps> `
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid transparent;
  margin: .1rem;
  background-color: ${props => props.theme[props.variant]};
  color: ${props => props.theme.white};
`