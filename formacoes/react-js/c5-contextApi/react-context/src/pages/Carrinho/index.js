import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {  useContext, useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { UseCarrinhoContext } from 'common/context/Carrinho';
import Produto from 'components/Produto';
import { useNavigate } from 'react-router-dom';
import {  usePagamentoContext } from 'common/context/Pagamento';
import { UserContext } from 'common/context/Usuario';


function Carrinho() {
  const navegar = useNavigate()
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {carrinho, novoValorTotal} = UseCarrinhoContext()
  const {formaPagamento, tiposPagamento, mudarFormaPagamento} = usePagamentoContext()
  const User = useContext(UserContext)

  return (
    <Container>
      <Voltar onClick={() => navegar(-1)}/>
      <h2>
        Carrinho
      </h2>
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
        value={formaPagamento.id}
        onChange={(event) => mudarFormaPagamento(event.target.value)}
        >
          {
            tiposPagamento.map( forma => (
              <MenuItem key={forma.id} value={forma.id}>
                {forma.nome}
              </MenuItem>
            ))
          }
        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {novoValorTotal.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {User.saldo}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ { User.saldo - novoValorTotal}</span>
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