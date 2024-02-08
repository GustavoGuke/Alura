import {
  VStack, Text, Box,
  FormControl, FormControlLabel, FormControlLabelText,
  Input, InputIcon, InputField, InputSlot,
  Button, ButtonText, ButtonIcon
} from '@gluestack-ui/themed';

import { Eye, EyeOffIcon } from 'lucide-react-native'
import { useState } from 'react'

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false)

  const aoMostrarSenha = () => setMostrarSenha(!mostrarSenha)
  return (
    <VStack flex={1} alignItems='center' p={5}>
      <Text
        pt={40}
        color='$primary500'
        fontSize='$4xl'>
        VOLL
      </Text>
      <Text
        fontSize='$2xl'
        fontWeight='bold'
        color='$coolGray500'
        mt={10}
      >
        Faça login em sua conta
      </Text>

      <Box w='100%'>
        <FormControl mt={3}>
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

        <FormControl mt={3}>
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
              type={mostrarSenha ? 'text' : 'password'} />
            <InputSlot onPress={aoMostrarSenha} pr={5}>
              <InputIcon size='lg' as={mostrarSenha? Eye: EyeOffIcon} />
            </InputSlot>

          </Input>
        </FormControl>
      </Box>
      <Button
        w='100%'
        bg='$blue800'
      >
        <ButtonText>Entrar</ButtonText>

      </Button>
    </VStack>
  );
}


