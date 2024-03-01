import Rotas from "./src/rotas";
import { TemaProvider } from "./src/context/TemaContext";
import { AutenticaProvider } from "./src/context/AutenticacaoContext";
import { ProdutosProvider } from "./src/context/ProdutosContext";
export default function App() {
  return (
    <TemaProvider>
      <AutenticaProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutenticaProvider>
    </TemaProvider>
  );
}