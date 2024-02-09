import {
  VStack, Text, Box,
  FormControl, FormControlLabel, FormControlLabelText,
  Input, InputField,
  Button, ButtonText,
  Checkbox, CheckboxLabel, CheckboxIndicator, CheckboxGroup
} from '@gluestack-ui/themed';

import { Eye, EyeOffIcon } from 'lucide-react-native'
import { useState } from 'react'
import { FlatList } from 'react-native';
import { Titulo } from './components/Titulo';

export default function Cadastro() {
  const [secao, setSecao] = useState(0)

  function aoAvancarSecao() {
    if (secao < secoes.length - 1) {
      setSecao(secao + 1);
    }
  }

  function aoVoltarSecao(): void {
    setSecao(secao - 1);
  }

  const secoes = [
    {
      id: 1,
      titulo: 'Insira os seguintes dados',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email completo'
        }
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Falta pouco',
      entradaTexto: [
        {
          id: 1,
          label: 'Cep',
          placeholder: 'insira o cep'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira o seu endereço'
        }
      ],
      checkbox: []
    },
    {
      id: 3,
      titulo: 'Qual o seu plano?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        }
      ]
    }


  ]
  return (
    <VStack flex={1} alignItems='center' justifyContent='center' p={10}>
      <Text
        pt={40}
        color='$primary500'
        fontSize='$4xl'>
        VOLL
      </Text>
      <Titulo >
        {secoes[secao].titulo}
      </Titulo>

      <Box w='100%'>
        {
          secoes[secao].entradaTexto.map(entrada => {
            return (
              <FormControl mt={10} key={entrada.id}>
                <FormControlLabel>
                  <FormControlLabelText>{entrada.label}</FormControlLabelText>
                </FormControlLabel>
                <Input
                  variant='outline'
                  borderRadius='$lg'
                  backgroundColor='$trueGray100'
                  softShadow='3'
                >
                  <InputField
                    placeholder={entrada.placeholder}
                    type='text' />
                </Input>
              </FormControl>
            )
          })
        }
      </Box>
      <Box w='100%'>
        <FlatList
          data={secoes[secao].checkbox}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <Checkbox value={item.value} size='md' accessibilityLabel={item.value} key={item.id}>
              <CheckboxIndicator mr={2} />
              <CheckboxLabel>{item.value}</CheckboxLabel>
            </Checkbox>

          )}
        />
      </Box>

      {
        secao > 0 &&
        <Button
          w='100%'
          bg='$trueGray400'
          mt={20}
          borderRadius='$lg'
          onPress={aoVoltarSecao}
        >
          <ButtonText>Voltar</ButtonText>
        </Button>

      }


      <Button
        w='100%'
        bg='$blue800'
        mt={20}
        borderRadius='$lg'
        onPress={aoAvancarSecao}
      >
        <ButtonText>Avançar</ButtonText>
      </Button>


    </VStack>
  );
}


