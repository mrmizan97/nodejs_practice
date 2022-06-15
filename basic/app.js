const path = require("path");
const fs = require("fs");
const http = require("http");
const data={name:'name',email:'email@gmail'}
fs.writeFile('myfile.json',JSON.stringify(data),(err)=>{
if(err){
    console.log(err);
}else{
    console.log("file write complete");
}
})
fs.readFile('./myfile.json',(err,data)=>{
    if(err) throw err
   const obj= JSON.parse(data)
    console.log(obj.name)
})
// server configure
const server = http.createServer((req, res) => {
  // console.log("req coming--"+req.url);
  if (req.url === "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("<h1>404 not found</h1>");
  }
});
server.listen(9000);
console.log("Server is running");
const math=require('./math')
console.log(math.add(2,3));