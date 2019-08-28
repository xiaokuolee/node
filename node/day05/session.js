var express=("express")
var session = require("express-session")
var app = express()
app.use(session({
    name:"aa",//session的名称  默认为connect_id
    secret:" fcht",//签名  防止被篡改
    resave:false,//强制保存为session值
    cookie:("name","value",{maxAge:new Date()+90000000,httpOnly:true}),
    saveUninitialized:true//初始化

}))
app.get("/set",(req,res)=>{
    req.session.username="tom"
    res.end()
})
app.get("/get",(req,res)=>{
    if(res.session.username=="tom"){
        res.send("45654")
    }   
     res.send()
})

app.listen(3000)