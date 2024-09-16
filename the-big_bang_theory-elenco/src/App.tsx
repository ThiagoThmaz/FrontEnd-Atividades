import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho'

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
    </>
  )
}

export default App
