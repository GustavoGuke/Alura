import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import { Formulario } from './components/Formulario/Formulario';
import Time from './components/Time/Time';


let times = [
  {
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#D9F7E9',
  },
  {
    nome: 'Data Sciense',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
  },
  {
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
  },
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
        listaDeTime={times.map(time => time.nome)}
        novoColaborador={colaborador => handleNovoColaborador(colaborador)} />
      {times.map(time => <Time 
                              key={time.nome} 
                              escolas={time.nome} 
                              corPrimaria={time.corPrimaria}
                              corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}
export default App;
