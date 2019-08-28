/*
    art-template  模板引擎
    定义：javascript的轻量级模板引擎
    特点：语法简单，易上手
    语法：原始语法：
    <%%>
    标准语法
    {{}}
    render
    下载 npm install art-template --save

 */
var http = require("http")
var art = require("art-template")
var fs = require("fs")
http.createServer((req,res)=>{
    var list = ["asd","fgh","jkl"]
    fs.readFile("./02.art",(err,data)=>{
        
        var temp = data.toString()
        var str = art.render(temp,{list:list})
        res.end(str)
    })
}).listen(3000,function(){
    console.log("已挂起")
})