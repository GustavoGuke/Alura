import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio";
import SobreMim from "./routes/SobreMim";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PaginaPrincipal from "./routes/PaginaPrincipal";
import Post from "./routes/Post";
import NaoEncontrada from "./routes/NaoEncontrada";



function App() {

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="post/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
