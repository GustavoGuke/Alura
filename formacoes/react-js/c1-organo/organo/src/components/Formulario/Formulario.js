import './Formulario.css'
import CampoTexto from "../CampoTexto/CampoTexto"
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import { Botao } from '../Botao/Botao'
import { useState } from 'react'


export const Formulario = ({novoColaborador, listaDeItens}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [listaSuspensa, setListaSuspensa] = useState('Programação')

    const handleSalvar = (e) => {
        e.preventDefault()
        novoColaborador({nome, cargo, imagem, listaSuspensa})
    }
    return (
        <section className='formulario'>
            <form onSubmit={handleSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label="NOME"
                    placeholder="Digite seu Nome"
                    obrigatorio={true}
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="CARGO"
                    placeholder="Digite seu Cargo"
                    obrigatorio={true}
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="IMAGEM"
                    placeholder="coloque sua imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                label="TIME" 
                itens={listaDeItens}
                valor={listaSuspensa}
                alterado={valor => setListaSuspensa(valor)}
                />
                <Botao texto="CRIAR CARD" />
            </form>
        </section>
    )
}