const fs = require("fs")


const routesHandler = (req,res) => {
    const url = req.url;
const method = req.method;
if(url === "/")
{
    res.write("<html>")
res.write("<head>")

res.write("</head>")
res.write("<body>")
res.write("<form method='POST' action='/messege'> <input type='text' name='messege'  /><button>Click me</button></form>")

res.write("</body>")

res.write("</html>")
return res.end()
}
if(url === "/messege" && method === "POST"){
const body = [];
    req.on("data",(chunk)=>{
console.log(chunk);
body.push(chunk)
    })

    return req.on("end",()=>{
        const pareseBody = Buffer.concat(body).toString();
        console.log(pareseBody)
        const messege = pareseBody.split("=")[1];
console.log(messege)
        fs.writeFile("hello.txt",messege,(err)=>{
            res.setHeader("location","/");
            res.statusCode = 401;
            return res.end();
        })
        
    })



}

    res.setHeader("Content-type","text/html")
res.write("<html>")
res.write("<head>")

res.write("</head>")
res.write("<body>")
res.write("<h1>Hello from NOde js app!!</h1>")

res.write("</body>")

res.write("</html>")
res.end()



}

module.exports = routesHandler