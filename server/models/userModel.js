module.exports = function() {

    this.getProdutos = function (db, res) {
	    db.query("SELECT * FROM produtos", (err, result) => {
    
            res.json(result)
        })
    } 
    
    return this
}