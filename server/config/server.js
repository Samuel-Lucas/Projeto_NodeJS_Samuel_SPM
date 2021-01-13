let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let consign = require('consign')

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

consign()
.include('././routes')
.then('././config/db_connection.js')
.then('././models')
.into(app)

module.exports = app