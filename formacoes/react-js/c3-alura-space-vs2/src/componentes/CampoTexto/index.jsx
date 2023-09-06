import { styled } from "styled-components"
import search from './search.png'
import { useState } from "react";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const CampoTexto = ({aoBuscarFotoInput}) => {

    const [buscarFoto, setBuscarFoto] = useState('')

    const aoBuscarFoto = (e) => {
        aoBuscarFotoInput(e.target.value)
    }
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado onChange={aoBuscarFoto}  />
            <IconeLupa src={search} style={{
                width: 38,
                height: 38
            }} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto