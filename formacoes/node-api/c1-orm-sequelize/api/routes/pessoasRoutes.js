const { Router } = require('express')
const PessoaController = require('../controllers/PessoaControllers')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaNovaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagarPessoa)

//matricula
router
    .get('/pessoas/:estudanteId/matriculas/:matriculaId',PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteId/matriculas/',PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId',PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId',PessoaController.apagarMatricula)

module.exports = router