var http = require("http")
var fs = require("fs")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
    
   //req.url（）   路由
    if(req.url=="/"){
        res.end("首页")
    }else if(req.url=="/red"){
        fs.readFile("red.html",function(err,data){
           console.log(data)
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("green.html",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/st.css"){
        res.writeHead(200,{"Content-type":"text/css"})
        fs.readFile("st.css",function (err,data) {
            res.end(data)
          })
    }
    else if(req.url=="/000.jpg"){
        res.writeHead(200,{"Content-type":"image/jpg"})
        fs.readFile("000.jpg",function (err,data) {
            res.end(data)
          })
    }
}).listen(3000,function () {  
    console.log("listen挂起")
})