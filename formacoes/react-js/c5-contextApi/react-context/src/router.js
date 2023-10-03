import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";
import { PagamentoProvider } from "common/context/Pagamento";


const Router = () => {

    return (
        <BrowserRouter>
            <UserProvider>
                <CarrinhoProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/feira" element={<Feira />} />
                        <Route path="/carrinho" element={<PagamentoProvider><Carrinho /></PagamentoProvider>} />
                    </Routes>
                </CarrinhoProvider>
            </UserProvider>
        </BrowserRouter>
    );
}

export default Router;
