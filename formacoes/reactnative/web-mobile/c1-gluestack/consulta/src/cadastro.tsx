import {
  Text, Box,
  FormControl, FormControlLabel, FormControlLabelText,
  Input, InputField,
  Button, ButtonText,
  Checkbox, CheckboxLabel, CheckboxIndicator,
  ScrollView,
  Icon
} from '@gluestack-ui/themed';

import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { secoes } from './utils/secoes';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight, ArrowLeft } from 'lucide-react-native'
import Login from './login';

export default function Cadastro() {
  const [secao, setSecao] = useState(0)
  const navega = useNavigation()

  function aoAvancarSecao() {
    if (secao < secoes.length - 1) {
      setSecao(secao + 1);
    }
  }

  function aoVoltarSecao(): void {
    setSecao(secao - 1);
  }


  return (
    <ScrollView p={10}>
      <TouchableOpacity onPress={() => navega.goBack()} >
        <Icon as={ArrowLeft} size='xl'/>
        <Text>Sair</Text>
      </TouchableOpacity>
      <Text
        pt={40}
        color='$primary500'
        fontSize='$4xl'
        alignSelf='center'
      >
        VOLL
      </Text>
      <Titulo >
        {secoes[secao].titulo}
      </Titulo>

      <Box w='100%'>
        <FlatList
          data={secoes[secao].entradaTexto}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FormControl mt={10} key={item.id}>
              <FormControlLabel>
                <FormControlLabelText color='$blue800' my={5} >{item.label}</FormControlLabelText>
              </FormControlLabel>
              <Input
                size='lg'
                variant='outline'
                borderRadius='$lg'
                backgroundColor='$trueGray100'
                softShadow='3'
              >
                <InputField
                  placeholder={item.placeholder}
                  type='text' />
              </Input>
            </FormControl>
          )}
        />
      </Box>
      <Box w='100%'>

        <FlatList
          data={secoes[secao].checkbox}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <Checkbox value={item.value} size='lg' aria-label={item.value} my={5}>
              <CheckboxIndicator mr={2} />
              <CheckboxLabel pl={10}>{item.value}</CheckboxLabel>
            </Checkbox>

          )}
          ListHeaderComponent={
            <>
              {
                secao === 2 && <Text color="$blue800" fontWeight="$bold" fontSize="$lg" mt={50} mb={2}>
                  Selecione os planos:
                </Text>
              }
            </>
          }
        />
      </Box>

      {
        secao > 0 &&
        <Button
          size='lg'
          w='100%'
          bg='$trueGray400'
          mt={30}
          mb={2}
          borderRadius='$lg'
          onPress={aoVoltarSecao}
        >
          <ButtonText>Voltar</ButtonText>
        </Button>
      }

      <Button
        size='lg'
        w='100%'
        bg='$blue800'
        mt={20}
        mb={40}
        borderRadius='$lg'
        onPress={aoAvancarSecao}
      >
        <ButtonText>Avançar</ButtonText>
      </Button>
    </ScrollView>
  );
}


