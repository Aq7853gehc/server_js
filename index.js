const { log } = require("console");
const http = require("http");
const fs = require("fs")


const home = fs.readFileSync("./index.html","utf-8")

const server = http.createServer((req, res) => {
  if(req.url==="/"){
    return res.end(home)
  }

  res.end("Hello world:::");
});

server.listen(5000, "localhost", () => {
  console.log("server is running on http://localhost:5000");
});
