class Tabelas {
    init(conexao) {
        this.conexao = conexao
        //console.log('Tabelas foram chamadas')

        //this.criarAtendimento()  criar tabela atendimentos
    }

    criarAtendimento() {
        const sql = `
        CREATE TABLE IF NOT EXISTS atendimentos (
            id INT NOT NULL AUTO_INCREMENT,
            cliente VARCHAR(50) NOT NULL, 
            pet VARCHAR(20),
            servico VARCHAR(20) NOT NULL,
            status VARCHAR(20) NOT NULL,
            observacao TEXT, PRIMARY KEY(id) )
        `

        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('tabela criada')
            }
        })
    }
}

module.exports = new Tabelas