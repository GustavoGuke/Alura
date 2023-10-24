const Atendimentos = require("../models/atendimentos")

module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        res.send("ATENDIMENTOS")
    })

    app.post("/atendimentos", (req, res) => {
        const data = req.body
        Atendimentos.adiciona(data)
        res.send("atendimento cadastrado")
    })
}