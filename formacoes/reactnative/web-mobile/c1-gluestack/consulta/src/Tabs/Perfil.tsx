import { VStack, Text, 
Avatar, AvatarImage, 
ScrollView, Divider } from "@gluestack-ui/themed";
import { Titulo } from "../components/Titulo";
export default function Perfil() {
    return (
       <ScrollView flex={1}>
            <VStack mt={10} flex={1} alignItems="center" p={5}>
               <Titulo color="$blue500">Meu Perfil</Titulo>

               <Avatar my={10} size="xl">
                <AvatarImage 
                
                alt="Foto do perfil"
                source={{uri: "https://github.com/GustavoGuke.png"}}
                />
               </Avatar>
                <Titulo color="$blue500">Informações Pessoais</Titulo>
               <Titulo mb={5}>Gustavo Silva</Titulo>
               <Text>10/09/1994</Text>
               <Text>Arujá SP</Text>
               <Divider mt={50}/>

                <Titulo color="$blue500" mb={5}>Histórico médico</Titulo>
               <Text>Braço quebrado</Text>
               <Text>Nariz quebrado</Text>
            </VStack>
       </ScrollView>
    )
}