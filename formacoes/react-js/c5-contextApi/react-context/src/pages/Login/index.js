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

function Login({ nome, setNome, saldo, setSaldo }) {
  const navegar = useNavigate()


  // const aoColocarDados = () => {
  //   console.log(nome, saldo)
  // }
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
          value={nome}
          onChange={evento => setNome(evento.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
          value={saldo}
          onChange={evento => setSaldo(evento.target.value)}
          type="number"
          startAdornment={
            <InputAdornment position="start">
              R$
            </InputAdornment>
          }
        />
      </InputContainer>
      <Button
        onClick={() => navegar("/Feira")}
        variant="contained"
        color="primary"
      >
        Avançar
      </Button>
    </Container>
  )
};

export default Login;