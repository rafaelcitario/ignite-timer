import { Fragment } from 'react/jsx-runtime'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}
