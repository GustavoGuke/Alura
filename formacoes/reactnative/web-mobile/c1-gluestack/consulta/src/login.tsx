import {
  VStack, Text, Box,
  FormControl, FormControlLabel, FormControlLabelText,
  Input, InputIcon, InputField, InputSlot,
  Button, ButtonText,
  Link, LinkText
} from '@gluestack-ui/themed';

import { Eye, EyeOffIcon } from 'lucide-react-native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false)

  const aoMostrarSenha = () => setMostrarSenha(!mostrarSenha)
  return (
    <VStack flex={1} alignItems='center' justifyContent='center' p={10}>
      <Text
        pt={40}
        color='$primary500'
        fontSize='$4xl'>
        VOLL
      </Text>
      <Titulo >
        Faça login em sua conta 
      </Titulo>

      <Box w='100%'>
        <FormControl mt={10}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input
            variant='outline'
            borderRadius='$lg'
            backgroundColor='$trueGray100'
            softShadow='3'
          >
            <InputField
              placeholder='digite o email aqui'
              type='text' />
          </Input>
        </FormControl>

        <FormControl mt={10}>
          <FormControlLabel>
            <FormControlLabelText>senha</FormControlLabelText>
          </FormControlLabel>
          <Input
            variant='outline'
            borderRadius='$lg'
            backgroundColor='$trueGray100'
            softShadow='3'
          >
            <InputField
              placeholder='senha'
              type={mostrarSenha ? 'text' : 'password'}
            />
            <InputSlot onPress={aoMostrarSenha} pr={5}>
              <InputIcon size='lg' as={mostrarSenha ? Eye : EyeOffIcon} />
            </InputSlot>

          </Input>
        </FormControl>
      </Box>
      <Button
        w='100%'
        bg='$blue800'
        mt={20}
        borderRadius='$lg'
      >
        <ButtonText>Entrar</ButtonText>
      </Button>
      <Link href='#' mt={2}>
        <LinkText>Esqueceu sua senha</LinkText>
      </Link>
      <Box w='100%' flexDirection='row' justifyContent='center' mt={40}>
        <Text>Ainda não tem cadastro! </Text>
        <TouchableOpacity>
          <Text color='$blue500'>Peça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


