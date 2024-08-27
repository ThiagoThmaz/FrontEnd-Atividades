import './App.css'
import Cabecalho from './components/Cabecalho'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'

function App() {

  const paragr = {
    color: 'green',
    backgroundColor: '#bfb',
    padding: '15px',
  } 

  return (
    <div className='div1'>
        <h1><Cabecalho/></h1>
        <p style={{color:'red', backgroundColor:'#fbb'}}>Estou apredendo CSS no React</p>
        <p style={paragr}>Segundo Paragrafo</p>
        <Componente1/>
        <Componente2/>
    </div>
  )
}

export default App
