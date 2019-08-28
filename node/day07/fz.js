var mongoClient = require("mongodb").mongoClient
var url = "mongodb://127.0.0.1:27017"
function ConnectDB(callback) {
    //创建数据库
    mongoClient.Connect(url, (err, mongo) => {
        //创建数据库名
        var dbName = mongo.db("aaa")
        if (err) {
            callback(err, null)
        }
        callback(err, mongo, dbName)
    })
}

exports.add = function (collectionName, json, callback) {
    ConnectDB(function (err, mongo, dbName) {
        dbName.collection(collectionName).insert(json, function (err, result) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
        })
    })
}
exports.remove = function (collectionName, json, callback) {
    ConnectDB(function (err, mongo, dbName) {
        dbName.collection(collectionName).remove(json,function (err, result) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
        })
    })
}
exports.update = function (collectionName, json,json2, callback) {
    ConnectDB(function (err, mongo, dbName) {
        dbName.collection(collectionName).update(json,json2, function (err, result) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
        })
    })
}
exports.find = function (collectionName, json, callback) {
    ConnectDB(function (err, mongo, dbName) {
        //插入数据里是以数组形式存在的
        dbName.collection(collectionName).find((json).toArray(function (err, result) {
            if (err) {
                callback(err, null)
            }
            callback(err, result)
        }))
    })
}
