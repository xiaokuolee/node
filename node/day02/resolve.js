var http = require("http")
var url = require("url")
//console.log(url.parse("127.0.0.1:3000"))
//var obj = url.resolve("127.0.0.1/8888/777","/555")//不管如何修改之后的路由 都不会发生改变

var obj = url.format({
    protocol: '127.0.0.1:',
    slashes: null,
    auth: null,
    host: '3000',
    port: "127.0.0.1",
    hostname: '3000',
    hash: null,
    search: null,
    query: null,
    pathname: null,
    path: null,
    href: null }
)
console.log(obj)