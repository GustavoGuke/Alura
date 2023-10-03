import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useEffect, useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { UseCarrinhoContext } from 'common/context/Carrinho';
import Produto from 'components/Produto';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [valor, setvalor] = useState()
  const {carrinho} = UseCarrinhoContext()


  useEffect(() => {
    const testeDeValor = carrinho.reduce((contador, produtos) => contador + produtos.valor, 0)
    setvalor(testeDeValor)
  },[carrinho, setvalor])
  
  return (
    <Container>
      <Voltar />
      <h2>
        Carrinho
      </h2>
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valor}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>

       {carrinho.map( produtos => (
        <Produto {...produtos} key={produtos.id}/>
       ))}
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;