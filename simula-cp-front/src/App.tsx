import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho.tsx'
import Rodape from './components/Rodape/Rodape.tsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}

export default App
