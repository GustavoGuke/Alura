const { Router } = require('express')

const PessoaController = require('../controllers/PessoaControllers')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router