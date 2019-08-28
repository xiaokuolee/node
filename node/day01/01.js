var http = require("http");
http.createServer(function (req,res) {
    res.end("success")  //argument必须是 string  或者  buffer（缓存区）
}).listen(2000)