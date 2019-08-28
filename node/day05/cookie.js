var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    res.cookie("username","admin",{maxAge:90000,httpOnly:true})
    res.send()
})
app.get("/n",(req,res)=>{
    var data = req.cookies.username
    res.send({"data":data})
})
app.listen(3000)
/*
    什么是cookie  存储空间
    浏览器端  大小：4k 页面最多出现次数：20
    maxAge 过期时间
    domain 域名
    path 路径  在改路径下才可以访问当前缓存
    httpOnly 设置https或http
    singIed 签名
    expires 时长
 */