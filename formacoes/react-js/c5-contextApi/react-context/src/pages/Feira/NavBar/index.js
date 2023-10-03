import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { UseCarrinhoContext } from 'common/context/Carrinho';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { quantidadeProduto } = UseCarrinhoContext()
  const navegar = useNavigate()
  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantidadeProduto === 0}
        onClick={() => navegar("/carrinho")}>
        <Badge
          badgeContent={quantidadeProduto}
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}