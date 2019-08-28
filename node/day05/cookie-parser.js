var express = require("express")
var app = express()
var cookie = require("cookie-parser")
//可以存储二级域名或更多
app.use(cookie())
app.get("/set",(req,res)=>{
    //存储
    res.cookie("username","admin",{maxAge:90000,httpOnly:true})
    res.send()
})
app.get("/get",(req,res)=>{
    //获取
    var data = req.cookies.username
    res.send({"data":data})
})
app.listen(3000)