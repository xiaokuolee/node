var http = require("http")
var url = require("url")
    http.createServer(function(req,res){
        res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
        if(req.url =="/favicon.ico"){
            return
        }
        var obj = url.parse(req.url,true).query
        res.end(obj.username)
    }).listen(300)