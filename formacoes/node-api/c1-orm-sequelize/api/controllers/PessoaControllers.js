const database = require('../models')


class PessoaController {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.json(todasAsPessoas)
            
        } catch (error) {
            return res.json(error.message)
        }
    }
}

module.exports = PessoaController
