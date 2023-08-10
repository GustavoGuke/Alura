
import './App.css';
import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto 
      label="NOME"
      placeholder="Digite seu Nome"
      />
      <CampoTexto
        label="CARGO"
        placeholder="Digite seu Cargo"
      />
      <CampoTexto
        label="IMAGEM"
        placeholder="coloque sua imagem"
      />
    </div>
  );
}

export default App;
