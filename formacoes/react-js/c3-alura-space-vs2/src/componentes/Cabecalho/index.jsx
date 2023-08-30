import { styled } from "styled-components";
import logo from '/imagens/logo.png'

const HeaderEstilizado = styled.header`
    padding:60px 0;
    display: flex;
    justify-content: space-between;

    img {
        width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src={logo} alt="logo" />
        </HeaderEstilizado>
    );
}

export default Cabecalho;
