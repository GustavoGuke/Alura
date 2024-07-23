import { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { salvarPost, atualizarPost, deletarPost } from "../../servicos/firestore";
import estilos from "./estilos";
import { entradas } from "./entradas";
import { alteraDados } from "../../utils/comum";
import { IconeClicavel } from "../../componentes/IconeClicavel";
import { salvarImagem } from "../../servicos/storage";
import * as ImagePicker from 'expo-image-picker';


import uploadImagemPadrao from '../../assets/upload.jpeg';

const imgGalary = 'https://img.freepik.com/fotos-gratis/nave-espacial-brilhante-orbita-planeta-em-galaxia-estrelada-gerada-por-ia_188544-9655.jpg?t=st=1721483766~exp=1721487366~hmac=136d098c5eee0a27d1cf55b08fe20a409c00f1b8b0bb234c8fcd37983ee63e69&w=826'
export default function Post({ navigation, route }) {
    const { item } = route?.params || {};
    const [desabilitarEnvio, setDesabilitarEnvio] = useState(false);
    const [imagem, setImagem] = useState(item?.imageUrl || null);

    const [post, setPost] = useState({
        titulo: item?.titulo || "",
        fonte: item?.fonte || "",
        descricao: item?.descricao || "",
        imageUrl: item?.imageUrl || null,

    });

    async function salvar() {
        setDesabilitarEnvio(true);

        if (item) {
            await verificarAlteracaoPost();
            return navigation.goBack();
        }
        const idPost = await salvarPost({ ...post, imageUrl: '' });
        navigation.goBack();

        if (imagem != null) {
            atualizarPostComImagem(idPost);

        }
    }

    async function atualizarPostComImagem(idPost) {
        const url = await salvarImagem(imagem, idPost);
        await atualizarPost(idPost, {
            imageUrl: url
        });
    }

    async function verificarAlteracaoPost() {
        if (post.imageUrl != imagem) {
            atualizarPostComImagem(item.id)
        }
        else {
            atualizarPost(item.id, post)
        }
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
        }
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.containerTitulo}>
                <Text style={estilos.titulo}>{item ? "Editar post" : "Novo Post"}</Text>
                <IconeClicavel
                    exibir={!!item}
                    onPress={() => { deletarPost(item.id); navigation.goBack() }}
                    iconeNome="trash-2"
                />
            </View>
            <ScrollView style={{ width: "100%" }}>
                {entradas?.map((entrada) => (
                    <View key={entrada.id}>
                        <Text style={estilos.texto}>{entrada.label}</Text>
                        <TextInput
                            value={post[entrada.name]}
                            placeholder={entrada.label}
                            multiline={entrada.multiline}
                            onChangeText={(valor) =>
                                alteraDados(
                                    entrada.name,
                                    valor,
                                    post,
                                    setPost
                                )
                            }
                            style={
                                [estilos.entrada, entrada.multiline && estilos.entradaDescricao]
                            }
                        />
                    </View>
                ))}

                <TouchableOpacity
                    style={estilos.imagem}
                    onPress={pickImage}
                >
                    <Image

                        source={imagem ? { uri: imagem } : uploadImagemPadrao}
                        style={{ width: '100%', height: 200, borderRadius: 10, marginTop: 20 }}
                    />
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={estilos.botao} onPress={salvar} disabled={desabilitarEnvio}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}