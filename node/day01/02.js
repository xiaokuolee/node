var http = require("http")
//创建服务器
http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})//解决中文乱码
	res.end("我爱中国")
}).listen(5000)