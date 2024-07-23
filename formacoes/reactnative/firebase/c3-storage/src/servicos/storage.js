import storage from '@react-native-firebase/storage'


const salvarImagem = async (uri, filename) => {
    try {
        const storageRef = storage().ref().child(`images/${filename}`);
        const response = await fetch(uri);
        const blob = await response.blob();
        await storageRef.put(blob);
        const url = await storage().ref(`images/${filename}`).getDownloadURL();
        console.log('Upload concluído com sucesso');
        return url
    } catch (error) {
        console.log('Erro ao fazer upload da imagem:', error);
    }
};



export { salvarImagem }