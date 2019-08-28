var express = require("express")
var app = express()
var db = require("./fz")
var router = express.Router()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//使用路由
app.use(router)
router.get("/register", (req, res) => {
    var requser = {
        username: req.body.username,
        password: req.body.password,
        creatat: new Date(),
        updateat: new Date()
    }
    db.add("userdata", requser, (err, result) => {
        if (err) {
            throw err
        }
    })
})
//登录接口
router.get("/login", (req, res) => {
    var userData = {
        username: req.query.username,
        password: req.query.password
    }
    db.find("userdata", userData, (err, data) => {
        db.find("userdata", userData, (err, result) => {
            if (result.length == 0) {
                res.send("err")
            } else if (result.length != 0 && result[0].username == req.query.username || result[0].password == req.query.password) {
                res.send("success")
            }
        })
    })
})
