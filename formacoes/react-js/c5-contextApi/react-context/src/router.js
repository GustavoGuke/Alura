import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";


const Router = () => {

    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/feira" element={<CarrinhoProvider><Feira /></CarrinhoProvider>} />
                    <Route path="/carrinho" element={<Carrinho />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}

export default Router;
