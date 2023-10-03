import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { UserContext } from 'common/context/Usuario';
import { useContext } from 'react';



function Login() {
  const navegar = useNavigate()
  const User = useContext(UserContext)

  const aoColocarDados = () => {
    navegar("/Feira")
  }
  return (
    <Container>

      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={User.nome}
          onChange={evento => User.setNome(evento.target.value)}
          type="text" />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          value={User.saldo}
          onChange={evento => User.setSaldo(evento.target.value)}
          type="number"
          startAdornment={<InputAdornment position="start">
            R$
          </InputAdornment>} />
      </InputContainer>
      <Button
        disabled={User.nome.length < 4}
        onClick={aoColocarDados}
        variant="contained"
        color="primary"
      >
        Avançar
      </Button>

    </Container>
  )
};

export default Login;