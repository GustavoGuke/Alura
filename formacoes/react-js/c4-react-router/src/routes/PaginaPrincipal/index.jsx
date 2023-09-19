import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner';

const PaginaPrincipal = ({children}) => {
    return (
        <main>
            <Banner />
            <Outlet />
            {children}
        </main>
    );
}

export default PaginaPrincipal;
