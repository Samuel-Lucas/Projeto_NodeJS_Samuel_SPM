let mysql = require('mysql')

module.exports = function () {
    return mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'recode_node'
    })
}