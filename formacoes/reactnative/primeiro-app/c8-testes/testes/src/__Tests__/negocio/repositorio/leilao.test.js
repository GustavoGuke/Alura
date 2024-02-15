import { obtemLeiloes, obtemLeilao } from "../../../repositorio/leilao";



jest.mock('../../../servicos/apiLeiloes')

describe('repositorios/leilao', () => {
    
    describe('obtemLeiloes', () => {

        it('deve retornar uma lista de leiloes', async () => {
            const leiloes = await obtemLeiloes()
            console.log(leiloes)
        });
        
    })
});
