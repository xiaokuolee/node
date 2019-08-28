var fs = require("fs")
var k = []
fs.readdir('./test',function(err,files){
	console.log(files)
	for(var i = 0;i<files.length;i++){
		var filename = files[i]
		var stats = fs.statSync('./test/'+ filename)
			if(stats.isDirectory()){
				k.push(filename)
			}	
	}
	console.log(k)
})