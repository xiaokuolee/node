var express=require("express")
//express = Appllication
var app = express()
//context   执行上下文
// app.use("/",(req,res)=>{
//     res.send("use")
// })



// app.get("/aaa",(req,res)=>{
//     res.send("aaa")
// })
// app.get("/bbb",(req,res)=>{
//     res.send("bbb")
// })




app.use("/about/:id",(req,res)=>{
    res.send(req.params.id)
})
app.listen(3000)