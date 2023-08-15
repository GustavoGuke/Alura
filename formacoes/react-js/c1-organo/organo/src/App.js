import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import { Formulario } from './components/Formulario/Formulario';
import Time from './components/Time/Time';


let listaDeItens = [
  'Programação',
  'Front-End',
  'Mobile',
  'Banco de Dados'
]

function App() {
  const [colaboradores, setColaboradores] = useState([{}])

  const handleNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
      listaDeItens={listaDeItens}
      novoColaborador={colaborador => handleNovoColaborador(colaborador)}/>
      {colaboradores.map(({listaSuspensa}) => (
        <Time escola={listaSuspensa}/>
      ))}
    </div>
  );
}
export default App;
