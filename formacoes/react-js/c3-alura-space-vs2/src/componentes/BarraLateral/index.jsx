import { styled } from "styled-components";
import iconeAtivo from '/icones/home-ativo.png'
import iconeInativo from '/icones/home-inativo.png'
import ItemNavegacao from "./ItemNavegacao";

const Listaestilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`
const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <Listaestilizada>
                    <ItemNavegacao
                        iconeAtivo={iconeAtivo}
                        iconeInativo={iconeInativo}
                        ativo={true}>Inicio
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={iconeAtivo}
                        iconeInativo={iconeInativo}
                        ativo={false}>mais curtidas
                    </ItemNavegacao>
                </Listaestilizada>
            </nav>
        </aside>
    );
}

export default BarraLateral;
