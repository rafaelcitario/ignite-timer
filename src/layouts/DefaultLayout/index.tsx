import { Fragment } from 'react/jsx-runtime'
import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutCountainer } from './style'

export const DefaultLayout = () => {
  return (
    <Fragment>
      <LayoutCountainer>
        <Header />
        <Outlet />
      </LayoutCountainer>
    </Fragment>
  )
}
