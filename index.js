// const fs = require('fs');
// const http = require("http")

// const routes = require("./route")

// // fs.writeFileSync("index.txt","Hello i am using file system module");

// //creatin first server

// const server= http.createServer(routes)
//     // console.log(req.method)
//     // process.exit();

// server.listen(3000);
const path = require('path')

const express = require("express")

const app = express();

const db = require("./database")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const user = require("./modal/user")

db.sync()
.then(data => console.log("DB connected"))
.catch(e=> console.log(e))

const bodyParser = require("body-parser")





app.use(bodyParser.urlencoded({extended:false}))

//Handling error module
app.use((err,req,res,next)=> {
    if(err)
    {
        res.status(500).json({error:error})
    }
    next()
})



app.use("/admin",adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"./","view",'pagenotfound.html'))
})


app.listen(3000,()=>{
    console.log("App is running in port 3000")
})
