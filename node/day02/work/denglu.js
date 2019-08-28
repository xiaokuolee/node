var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    var date = [
        {
            "username": "admin",
            "password": 123
        }
    ]
    var userInfo = url.parse(req.url, true).query
    if (userInfo.username==date[0].username&&userInfo.password==date[0].password){
        res.end("success")
}else{
    res.end("fail")
}
}).listen(3000)