let file = require('../config/db_connection')

module.exports = function(app) {

    let db = file()

    app.post('/cadastrar', (req, res) => {

        let nome = req.body.nome
        let sobrenome = req.body.sobrenome
        let genero = req.body.genero
        let perfil = req.body.perfil
        let email = req.body.email
        let senha = req.body.senha

        let userModel = app.models.userModel

        userModel.cadastrarUsuario(nome, sobrenome, genero, perfil, email, senha, db)
    })
}