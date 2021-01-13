module.exports = function() {

    this.getProdutos = function (db, res) {
	    db.query("SELECT * FROM produtos", (err, result) => {
    
            res.json(result)
        })
    } 
    
    this.cadastrarUsuario = function (nome, sobrenome, genero, perfil, email, senha, db) {
        db.query("INSERT INTO usuarios (nome, sobrenome, genero, perfil, email, senha) VALUES (?, ?, ?, ?, ?, md5(?))",
        [nome, sobrenome, genero, perfil, email, senha], (err, result) => {
            if(result) {
                console.log('Cadastrou !') 
            }
        })
    }

    return this
}