import './Formulario.css'
import CampoTexto from "../CampoTexto/CampoTexto"
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import { Botao } from '../Botao/Botao'

export const Formulario = () => {

    let listaDeItens = [
        'Programação',
        'Front-End',
        'Mobile',
        'Banco de Dados'
    ]

    const handleSalvar = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <section className='formulario'>
            <form onSubmit={handleSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    label="NOME"
                    placeholder="Digite seu Nome"
                    obrigatorio={true}
                />
                <CampoTexto
                    label="CARGO"
                    placeholder="Digite seu Cargo"
                    obrigatorio={true}
                />
                <CampoTexto
                    label="IMAGEM"
                    placeholder="coloque sua imagem"
                />
                <ListaSuspensa label="TIME" itens={listaDeItens} />
                <Botao texto="CRIAR CARD" />
            </form>
        </section>
    )
}