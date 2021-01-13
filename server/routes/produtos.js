let file = require('../config/db_connection')

module.exports = function(app) {

	let db = file()
	
	app.get('/produtos', function (req, res) {

		let userModel = app.models.userModel
		userModel.getProdutos(db, res) 
	}) 
}