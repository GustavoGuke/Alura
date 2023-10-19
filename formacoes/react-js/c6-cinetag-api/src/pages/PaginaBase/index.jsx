import React from 'react';
import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';
import FavoritosProvider from '@/context/Favoritos';
import Container from '@/components/Container';
import { Outlet } from 'react-router-dom';

const PaginaBase = () => {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}

export default PaginaBase;
