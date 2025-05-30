import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
//import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [novoTime, setNovoTime] = useState('')
    const [corTimeNovo, setCorTimeNovo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const criarTime = (evento) => {
        evento.preventDefault()
        props.aoCriarTime({
            nome:novoTime,
            corPrimaria: corTimeNovo,
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={criarTime}>
                <h2>Preencha os dados para criar Novo Time</h2>
                <CampoTexto 
                    obrigatorio
                    label="Time"
                    placeholder="Digite o nome do time" 
                    valor={novoTime}
                    aoAlterado={valor => setNovoTime(valor)}
                />
                <CampoTexto
                    type='color'
                    obrigatorio={false}
                    label="Cor"
                    placeholder="Digite a cor do time" 
                    valor={corTimeNovo}
                    aoAlterado={valor => setCorTimeNovo(valor)}
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario