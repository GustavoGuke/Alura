import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner';

const PaginaPrincipal = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    );
}

export default PaginaPrincipal;
