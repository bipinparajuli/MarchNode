const http = require("http");


const hostname = "127.0.0.1";
const port = 3000;

const app = http.createServer((req,res)=>{
// res.setHeader("Content-Type","text/plain"),
res.setHeader('Content-Type', 'text/plain');
res.statusCode=200
res.end("Hello World")
})

app.listen(port,hostname,()=>{
    console.log("App is running")
})
