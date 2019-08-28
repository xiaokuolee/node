var http = require("http")
var exports = require("./exports")
console.log(exports)
http.createServer((req,res)=>{
    if(req.url=="/"){
        exports.main(req,res)
    }else if(req.url=="/news"){
        exports.news(req,res)
    }else if(req.url=="/about"){
        exports.about(req,res)
    }else{
        res.end("404")
    }
}).listen(3000)