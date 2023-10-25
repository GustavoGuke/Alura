const conexao = require("../infraestruture/conexao")
const moment = require('moment')
class Atendimentos {
    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            console.log(erros)
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const sql = 'INSERT INTO atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if (erro) {
                    console.log(erro)
                } else {
                    console.log(resultado)
                }
            })

        }


    }

    listar(res) {
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400)
            } else {
                res.json(resultados)
            }
        })
    }

    buscarPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0];
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
               // res.status(200).json(resultados)
               res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

}

module.exports = new Atendimentos