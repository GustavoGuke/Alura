import './Formulario.css'
import CampoTexto from "../CampoTexto/CampoTexto"
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'

export const Formulario = () => {

    let listaDeItens = [
        'Programação',
        'Front-End',
        'Mobile',
        'Banco de Dados'
    ]

    return (
        <section className='formulario'>
            <form >
            <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label="NOME"
                    placeholder="Digite seu Nome"
                />
                <CampoTexto
                    label="CARGO"
                    placeholder="Digite seu Cargo"
                />
                <CampoTexto
                    label="IMAGEM"
                    placeholder="coloque sua imagem"
                />
                <ListaSuspensa label="TIME" itens={listaDeItens}/>
            </form>
        </section>
    )
}