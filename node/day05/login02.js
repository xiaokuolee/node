var express = require("express")
var router = express.Router()
router.get("/login", (req, res) => {
    var data = {
        username: "admin",
        password: 123
    }
    var result = [{"username":"admin","password":"123"}]
    if(req.body.username==data.username&&req.body.password==data.password){
        res.send("hello"+result)
    }
    res.send("aaa")
})
module.exports = router 