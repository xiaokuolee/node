var http = require("http")
var fs = require("fs")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    //读文件  readFile（url，options，callback）  异步   fs.readFileSync()   异步
    fs.readFile("./101.txt",(err,data)=>{
        res.end(data)
    })
    //写文件 fs.writeFile(url,data,option,callback)
    //flag  a=>append  r=>read    w=>write
    fs.writeFile("./101.txt","qwertyuiop",{"flag":"a"},(err)=>{
        if(err){
            //throw  抛出
            throw err
        }
        res.end("liupi")
    })
    //改名 fs.rename(old，new，callback)
    fs.rename("./101.txt","./502.txt",(err)=>{
        if(err){
            //throw  抛出
            throw err
        }
        res.end("liupi")
    })
    //删除 fs.unlink(del，callback)
    fs.unlink("./101.txt",(err)=>{
        if(err){
            //throw  抛出
            throw err
        }
        res.end("liupi")
    })
    //创建文件夹  fs.mkdir(filename,callback)
    fs.mkdir("./101",(err)=>{
        if(err){
            //throw  抛出
            throw err
        }
        res.end("liupi")
    })
    //删除文件夹  fs.rmdir(filename,callback)
    fs.rmdir("./101",(err)=>{
        if(err){
            //throw  抛出
            throw err
        }
        res.end("liupi")
    })
    //读取文件夹  fs.readdir(filename,callback)
    fs.readdir("./101",(err,data)=>{
        if(err){
            //throw  抛出
            throw err
        }
        res.end(data.toString())
    })
    //判断是否是文件夹 fs.exists(filename,callback)
    fs.exists("./101",(exists)=>{
        if(exists){
            console.log("文件夹已存在")
        }else{
            fs.mkdir("./101",(err)=>{
                if(err){
                    //throw  抛出
                    throw err
                }
                res.end("liupi")
            })
        }
    })
    //判断是文件夹还是文件  fs.stat(file,callback)
    fs.stat("./101.txt",(err,stats)=>{
        console.log(stats.isDirectory())
        console.log(stats.isFile())
        res.end("111")
    })
}).listen(4567)