import { formataBrasileiroParaDecimal, formataDecimalParaReal } from "../../../negocio/formatadores/moeda";

describe('negocio/formatadores/moeda', () => {

        describe('formataparadecimal', () => {
            it('deve retornar 8,59 quando o valo for "8,59"', () => {
                const res = formataBrasileiroParaDecimal("8,59")
        
                expect(res).toBe(8.59)
                console.log(res)
            });
        })

        describe('formataparaReal', () => {
            it('deve retornar 8,59 quando o valo for "8,59"', () => {
                const res = formataDecimalParaReal(8.59)
                expect(res).toMatch(/R\$\s8,59/)
            })
        })
    
});
