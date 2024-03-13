import { Fragment } from 'react/jsx-runtime'
import { HeaderContainer } from './styles'
import { Hourglass, Plant, ToiletPaper } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <span>
          <Plant size={30} weight="duotone" />
        </span>
        <nav>
          <NavLink to="/" title="Timer">
            <Hourglass size={24} weight="regular" />
          </NavLink>
          <NavLink to="/history" title="Historico">
            <ToiletPaper size={24} weight="regular" />
          </NavLink>
        </nav>
      </HeaderContainer>
    </Fragment>
  )
}
