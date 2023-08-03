// controllers/TurmaController.js
const database = require('../models')

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res){
        const {id} = req.params
        try {
            const umaPessoa = await database.Turmas.findOne(
                {
                    where: { id : Number(id) }
                })
            return res.json(umaPessoa)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async criaTurma(req, res){
        const novaPessoa = req.body
        try {
            const pessoaCriada = await database.Turmas.create(novaPessoa)
            return res.json(pessoaCriada)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async atualizaTurma(req, res){
        const { id } = req.params
        const novaInfo = req.body
        try {
            await database.Turmas.update(novaInfo, 
                { 
                    where: {id: Number(id)}
                }
            )
            const pessoaAtualizada = await database.Turmas.findOne( 
                {
                    where: { id: Number(id)}
                }
            )

            return res.json(pessoaAtualizada)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async apagaTurma(req, res){
        const { id } = req.params
        try {
            await database.Turmas.destroy(
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

module.exports = TurmaController

