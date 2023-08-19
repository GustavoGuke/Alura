import  './Card.css'

import React from 'react';

const Card = ({nome, cargo, imagem}) => {
    return (
        <div className='colaborador'> 
            <div className='cabecalho'>
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
