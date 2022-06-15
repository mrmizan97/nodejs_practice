const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});
server.listen(9000, () => {
  console.log("server is runnig on port 9000");
});
