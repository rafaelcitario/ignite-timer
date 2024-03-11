import { styled, css } from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps> `
${props => css`
width: 100px;
height: 40px;
background-color: ${buttonVariants[props.variant]}
`
  }
`