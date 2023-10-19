import Inicio from './pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favoritos } from './pages/Favoritos';
import Container from './components/Container';
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import FavoritosProvider from './context/Favoritos';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path='/' element={<Inicio />} />
                        <Route path='/favoritos' element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;
