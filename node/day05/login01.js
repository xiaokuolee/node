var express = require("express")
var router = express.Router()
var app = express()
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
router.use(require("./login02"))
app.use(router)
app.listen(3000)