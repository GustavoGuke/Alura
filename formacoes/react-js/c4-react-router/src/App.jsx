import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio";
import SobreMim from "./routes/SobreMim";
import Menu from "./components/Menu";


function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
