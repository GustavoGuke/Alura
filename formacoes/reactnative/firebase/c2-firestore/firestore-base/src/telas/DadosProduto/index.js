import { View, Text, Alert } from "react-native";
import { EntradaTexto } from "../../componentes/EntradaTexto"
import  Botao  from "../../componentes/Botao"

import style from "./style";
import { useState } from "react";
import { criarProduto } from "../../servicos/firestore";

export function Dadosproduto({navigation}) {
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)


    async function salvarProdutor(){
        console.log("entro na func")
        const resultado = await criarProduto({
            nome,preco
        })
        console.log(resultado)
        if(resultado == "ok"){
            Alert.alert("Produto enviado","deseja voltar para tela anterior",[
                {text: "Sim", onPress: navigation.goBack()},
                {text: "Não", onPress: () => {}}
            ])
        }else {
            Alert.alert("Ocorreu erro ao enviar dados")
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

            <Botao onPress={() => salvarProdutor()}>Salvar</Botao>
        </View>
    )
}