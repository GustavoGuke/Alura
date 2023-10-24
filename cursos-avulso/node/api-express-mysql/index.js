const customExpress = require('./config/customExpress')
const conexao = require('./infraestruture/conexao')
const Tabelas = require('./infraestruture/tabelas')

conexao.connect((erro) => {

    if (erro) {
        console.log(erro, 'servidor mysql não foi conectado')
    } else {
        Tabelas.init(conexao)
        //console.log('servidor mysql ok')
        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})

