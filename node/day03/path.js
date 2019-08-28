var path = require("path")
var obj = path.extname("./06.js")    //拓展名
    console.log(obj)
    var obj1 = path.resolve("./06.js") //完整路径
    console.log(obj1)
    var obj2 = path.normalize("./06.js")//文件名
    console.log(obj2)
    var obj3 = path.dirname("./06.js")//规范路径的输出
    console.log(obj3)
    var obj4 = path.basename("./06.js")//真实路径的最后一段
    console.log(obj4)
    var obj5 = path.extname("./06.js")//拓展名
    console.log(obj5)
    var obj6 = path.format({
        root:"aaa"
        
    })//报错
    console.log(obj6)
    var obj7 = path.parse("./06.js")//解析
    console.log(obj7)
    var obj8 = path.isAbsolute("./06.js")//判断是否为绝对路径  true false
    console.log(obj7)