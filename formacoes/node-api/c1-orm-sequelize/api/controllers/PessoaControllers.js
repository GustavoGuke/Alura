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

    static async pegaUmaMatricula(req, res) {
        const { matriculaId, estudanteId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne(
                {
                    where: { 
                        id: Number(matriculaId),
                        estudante_id: Number(estudanteId)
                     }
                })
            return res.json(umaMatricula)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const {estudanteId} = req.params
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
        try {
            const matriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.json(matriculaCriada)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novaInfo = req.body
        try {
            await database.Matriculas.update(novaInfo,
                {
                    where: { id: Number(matriculaId),
                    estudante_id: Number(estudanteId) }
                }
            )
            const matriculaAtualizada = await database.Matriculas.findOne(
                {
                    where: { id: Number(matriculaId) }
                }
            )

            return res.json(matriculaAtualizada)
        } catch (error) {
            return res.json(error.message)
        }
    }

    static async apagarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.matriculas.destroy(
                {
                    where: { id: Number(matriculaId),
                    estudante_id: estudanteId
                    }
                }
            )
            return res.json({ message: `Matricula deletada` })
        } catch (error) {
            return res.json(error.message)
        }
    }
}

module.exports = PessoaController
