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

    static async pegaUmaPessoa(req, res){
        const {id} = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne(
                {
                    where: { id : Number(id) }
                })
            return res.json(umaPessoa)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async criaNovaPessoa(req, res){
        const novaPessoa = req.body
        try {
            const pessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.json(pessoaCriada)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async atualizaPessoa(req, res){
        const { id } = req.params
        const novaInfo = req.body
        try {
            await database.Pessoas.update(novaInfo, 
                { 
                    where: {id: Number(id)}
                }
            )
            const pessoaAtualizada = await database.Pessoas.findOne( 
                {
                    where: { id: Number(id)}
                }
            )

            return res.json(pessoaAtualizada)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async apagarPessoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy(
                {
                    where: { id: Number(id)}
                }
            )
            return res.json({message: `Pessoa deletada`})
        } catch (error) {
            return res.json(error.message)
        }
    }
}

module.exports = PessoaController
