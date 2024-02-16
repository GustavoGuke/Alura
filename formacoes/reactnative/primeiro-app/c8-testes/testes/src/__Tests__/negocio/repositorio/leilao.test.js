import { obtemLeiloes, obtemLeilao } from "../../../repositorio/leilao";
import apiLeiloes from '../../../servicos/apiLeiloes'

jest.mock('../../../servicos/apiLeiloes')

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leiloes',
        descricao: 'lote 1'
    }
]

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({data: retorno})
        }, 2000)
    })
}

const mockRequisicaoErro = () => {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject()
        }, 2000)
    })
}

describe('repositorios/leilao', () => {
    beforeEach(() => {
        apiLeiloes.get.mockClear()
    })
    describe('obtemLeiloes', () => {

        it('deve retornar uma lista de leiloes', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))
            const leiloes = await obtemLeiloes()

            expect(leiloes).toEqual(mockLeiloes)
            
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes')
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1)
        });
        
        it('deve retornar uma lista vazia leiloes', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
            const leiloes = await obtemLeiloes()

            expect(leiloes).toEqual([])
            
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes')
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1)
        });
    })
});
