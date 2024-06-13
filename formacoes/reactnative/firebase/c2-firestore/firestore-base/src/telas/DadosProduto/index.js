import { View, Text, Alert } from "react-native";
import { EntradaTexto } from "../../componentes/EntradaTexto"
import Botao from "../../componentes/Botao"

import style from "./style";
import { useState } from "react";
import { atualizarProduto, criarProduto } from "../../servicos/firestore";
import { Alerta } from "../../componentes/Alerta";

export function Dadosproduto({ navigation, route }) {
    const [nome, setNome] = useState(route?.params?.nome || "")
    const [preco, setPreco] = useState(route?.params?.preco || "")
    const [mensagem, setMensagem] = useState("")
    const [mostrarMensagem, setMostrarMensagem] = useState(false)


    async function salvarProdutor() {
        let resultado = ''
        if (nome == "" || preco == "") {
            setMensagem("Preencha todos os campos")
            setMostrarMensagem(true)
            return
        }
        if (route?.params) {
            resultado = await atualizarProduto(route?.params?.id,{nome, preco} )
        } else {
            resultado = await criarProduto({
                nome, preco
            })
        }

        if (resultado == "ok") {
            Alert.alert("Produto enviado", "deseja voltar para tela anterior", [
                {
                    text: "Não", onPress: () => {
                        setNome("")
                        setPreco("")
                    }
                },
                { text: "Sim", onPress: () => navigation.goBack() },
            ])
        } else {
            //Alert.alert("Ocorreu erro ao enviar dados")
            setMensagem("Ocorreu erro ao enviar dados")
            setMostrarMensagem(true)

        }
    }
    return (
        <View style={style.container}>
            <EntradaTexto
                label="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <EntradaTexto
                label="Preço "
                value={preco}
                onChangeText={setPreco}

            />

            <Botao onPress={salvarProdutor}>Salvar</Botao>
            <Alerta
                mensagem={mensagem}
                error={mostrarMensagem}
                setError={setMostrarMensagem}
            />


        </View>
    )
}