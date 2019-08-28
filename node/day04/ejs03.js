var express = require("express")
var app = express()
var path = require("path")
//使用引擎
app.engine("art",require("express-art-template"))
//设置引擎
app.set("views",path.join(__dirname),"view")
app.set("view engine","art")
app.get("/",(req,res,next)=>{
    var list = ["index","news","about"]
    res.render("01.ejs",{list:list})
})
app.listen(3000)