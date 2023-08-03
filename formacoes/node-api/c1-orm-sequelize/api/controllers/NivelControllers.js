//controllers/NivelController.js
const database = require('../models')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
      static async pegaUmNivel(req, res){
          const {id} = req.params
          try {
              const umaPessoa = await database.Niveis.findOne(
                  {
                      where: { id : Number(id) }
                  })
              return res.json(umaPessoa)
          } catch (error) {
              return res.json(error.message)
          }
      }
  
      static async criaNivel(req, res){
          const novaPessoa = req.body
          try {
              const pessoaCriada = await database.Niveis.create(novaPessoa)
              return res.json(pessoaCriada)
          } catch (error) {
              return res.json(error.message)
          }
      }
  
      static async atualizaNivel(req, res){
          const { id } = req.params
          const novaInfo = req.body
          try {
              await database.Niveis.update(novaInfo, 
                  { 
                      where: {id: Number(id)}
                  }
              )
              const pessoaAtualizada = await database.Niveis.findOne( 
                  {
                      where: { id: Number(id)}
                  }
              )
  
              return res.json(pessoaAtualizada)
          } catch (error) {
              return res.json(error.message)
          }
      }
  
      static async apagaNivel(req, res){
          const { id } = req.params
          try {
              await database.Niveis.destroy(
                  {
                      where: { id: Number(id)}
                  }
              )
              return res.json({message: `Nivel deletada`})
          } catch (error) {
              return res.json(error.message)
          }
      }
  }
  
  module.exports = NivelController
  