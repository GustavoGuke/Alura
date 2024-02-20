import { useEffect, useRef, useState } from "react";
import { View, FlatList, Image } from "react-native";
import styles from "./styles";

export function Carrosel({ itens }) {
    const carroselRef = useRef()
    const [indice, setIndice] = useState(0)

    function alteraPosicaoCarrosel(){
        if(indice < itens.length -1){
            setIndice(indice + 1)
        }
        else {
            setIndice(0)
        }
    }
    
    useEffect(() => {
        carroselRef.current.scrollToIndex({index: indice})

        const intervalo = setInterval(() => {
            alteraPosicaoCarrosel()
        }, 2000)

        return () => clearInterval(intervalo)

    }, [indice])
    return (
        <View style={styles.container}>
            <FlatList
                data={itens}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <Image
                        source={item.imagem}
                        style={[styles.imagem, index == itens.length -1 ? {marginRight: 200}: null]}
                        resizeMode="contain"
                    />
                )}
                ref={carroselRef}
            />
        </View>
    )
}