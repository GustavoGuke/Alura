import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';

import { DeletarRepositorioUsuario, SalvarRepositorioUsuario } from '../../service/repositoriosApi';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function Salvar(){

        const res = await SalvarRepositorioUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if(res === 'sucesso'){
            Alert.alert("Repositorio Arualizado")
            navigation.goBack()
        }
        else {
            Alert.alert("Erro ao atualizar")
        }
    }

    async function deletarRepositorio(){
        const res = await DeletarRepositorioUsuario(route.params.item.id)
        if (res === 'sucesso') {
            Alert.alert("Repositorio Deletado")
            navigation.goBack()
        }
        else {
            Alert.alert("Erro ao deletar")
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={Salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletarRepositorio}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>

            <Text>Usar Api do GItHub</Text>
        </View>
    );
}
