module.exports = app => {
    app.get("/atendimentos", (req, res) => {
        res.send("ATENDIMENTOS")
    })

    app.post("/atendimentos", (req, res) => {
        const data = req.body
        console.log(data)
        res.send("Coloque os dados do atnedimento")
    })
}