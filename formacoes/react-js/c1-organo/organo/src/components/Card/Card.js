import  './Card.css'

import React from 'react';

const Card = ({ nome, cargo, imagem, cordFundo }) => {
    const css = { backgroundColor: cordFundo }
    return (
        <div className='colaborador' > 
            <div className='cabecalho' style={css}>
                <img src={imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Card;
