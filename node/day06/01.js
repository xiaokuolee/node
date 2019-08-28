var express = require("express")
var app = express()
// var mongodb = require("mongodb")
//连接mongdb客户端
var mongodbclient = require("mongodb").MongoClient
app.get("/add", (req, res) => {
    mongodbclient.connect("mongodb://127.0.0.1:27017", (err, db) => {
        //创建数据库
        var dbname = db.db("aaa")
        //连接集合
        dbname.collection("test").insert({"username": "tom"}, function (err) {
            if (err) {
                throw err
            }
            res.send("success")
            db.close()
        })
    })
})
app.listen(3000)