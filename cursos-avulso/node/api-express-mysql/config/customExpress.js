const express = require('express')
const consign = require('consign')
//const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    consign()
        .include('controllers')
        .into(app)

    return app
}