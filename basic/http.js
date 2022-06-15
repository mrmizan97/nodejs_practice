const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("<h1>Hello request!</h1>")
})
server.listen(9000,()=>{
console.log("server is runnig on port 9000");
})