import { formataBrasileiroParaDecimal } from "../../../negocio/formatadores/moeda";

describe('negocio/formatadores/moeda', () => {

        describe('formataparadecimal', () => {
            it('deve retornar 8,59 quando o valo for "8,59"', () => {
                const res = formataBrasileiroParaDecimal("8,59")
        
                expect(res).toBe(8.59)
                console.log(res)
            });
        })
    
});
