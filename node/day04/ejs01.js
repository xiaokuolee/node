var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
/*
    ejs 嵌入javascript的模板引擎
    render渲染   ejs.render（template，data）  模板  数据
    compile 编译
    template 模板
    <% %>编译
    <%=%>输出
    <%#%>注释
    <%_ %>去除首位空格
    <% _%>去除末位空格
    render 渲染 两个参数 第一个代表模板  第二个代表数据（必须是对象）
 */
http.createServer((req,res)=>{
    var list = ["asd","fgh","jkl"]
    fs.readFile("./01.ejs",(err,data)=>{
        
        var temp = data.toString()
        var str = ejs.render(temp,{list:list})
        res.end(str)
    })
}).listen(3000,function(){
    console.log("已挂起")
})