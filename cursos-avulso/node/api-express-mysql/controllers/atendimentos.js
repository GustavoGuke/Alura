const Atendimentos = require("../models/atendimentos")

module.exports = app => {
    app.get("/atendimentos", (_, res) => {
        Atendimentos.listar(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimentos.buscaPorId(id, res);
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
    
        Atendimentos.altera(id, valores, res)
    })

    app.post("/atendimentos", (req, res) => {
        const data = req.body
        Atendimentos.adiciona(data)

    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimentos.deleta(id, res)
    })
}