import Inicio from './pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favoritos } from './pages/Favoritos';
import Container from './components/Container';
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/favoritos' element={<Favoritos />}></Route>
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;
