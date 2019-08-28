//实现登录注册功能
/*
客户端=》前端
    form
        submit=》
 */
var http = require("http")
var url = require("url")
    http.createServer((req,res)=>{
        var data =[
            {
                "username":"admin",
                "password":"123456"
            }
        ] 
        var userinfo = url.parse(req.url,true).query
    }).listen(1234)
