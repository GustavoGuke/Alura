import { useRef } from "react";
import { View, FlatList, Image } from "react-native";
import styles from "./styles";

export function Carrosel({ itens }) {
    const carroselRef = useRef()

    
    return (
        <View style={styles.container}>
            <FlatList
                data={itens}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Image
                        source={item.imagem}
                        style={styles.imagem}
                        resizeMode="contain"
                    />
                )}
            />
        </View>
    )
}