const { Router } = require('express')

const PessoaController = require('../controllers/PessoaControllers')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaNovaPessoa)

module.exports = router