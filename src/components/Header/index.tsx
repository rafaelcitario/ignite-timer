import { Fragment } from 'react/jsx-runtime'
import { HeaderContainer } from './style'

export const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <span>LOGO</span>
        <nav>
          <a href="">timer</a>
          <a href="">history</a>
        </nav>
      </HeaderContainer>
    </Fragment>
  )
}
