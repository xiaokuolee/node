var express = require("express")
var app = express()
var path = ("path")
//ejs模板引擎
//set设置  engine 引擎
//如何设置模板引擎
//app.set("views",path.join(__dirname,"/view"))
app.set("view engine","ejs")
app.get("/", (req, res) => {
    var list = ["index","news","about"]
    res.render("01.ejs",{list:list})
})
app.listen(3000)