var express=require("express")
//express = Appllication
var app = express()
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get("/aaa",(req,res)=>{
    res.send("aaa")
})
app.post("/post",(req,res)=>{
    res.send(req.body.username)
    console.log(req.body.username)
})
app.listen(3000)