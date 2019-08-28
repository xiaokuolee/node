function main(req,res){
    res.end("main")
}
function news(req,res){
    res.end("news")
}
function about(req,res) {
    res.end("about")
}
  module.exports={
      main:main,
      news:news,
      about:about
  }