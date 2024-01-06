import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Estrela from './Estrela'


export default function Estrelas({ qtd: qtdAntiga, editavel = false, grande = false }) {
    const [qtd, setQtd] = useState(qtdAntiga)

    const RenderEstrelas = () => {
        const listaEstrelas = []
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQtd(1 + i)}
                    desabilitada={!editavel}
                    preenchida={i < qtd}
                    grande={grande}
                />
            )
        }
        return listaEstrelas
    }
    return (
        <View style={estilos.qtdEstrelas}>
            <RenderEstrelas />
        </View>
    )
}

const estilos = StyleSheet.create({
    qtdEstrelas: {
        flexDirection: 'row'
    }
})