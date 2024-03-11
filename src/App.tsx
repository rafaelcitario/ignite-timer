import { Fragment } from "react/jsx-runtime";
import { Button } from "./components/Button/Button";
import { Square } from "./components/Square/Square";


export function App() {

  return (
    <Fragment>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />

      <Square background='primary' />
      <Square background="secondary" />
      <Square background="danger" />
      <Square background="success" />
      <Square />
    </Fragment>
  )
}


