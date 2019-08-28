var express = require("express")
var app = express()
app.all("*",(req,res,next)=>{
    //允许所有域名进行访问
    res.header("Access-Control-O0............rgin","*")
    //定义请求头类型
    res.header("Access-Control-Allow-Headers","content-type")
    //定义允许跨域的请求方式
    res.header("Access-Control-Allow-Method","GET","POST","PUT","PATCH","DELETE","OPTIONS")
    //继续执行
    next()
})