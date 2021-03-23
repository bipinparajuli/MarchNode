const path = require("path")
const express = require("express")

const router = express.Router();


router.use("/add-product",(req,res,next)=>{

    console.log("I am first")
    res.sendFile(path.join( __dirname,'../','view','/add-product.html'))
    // next()
})

router.use("/new-product",(req,res)=>{
    console.log(req.body)
    res.redirect("/")
})



module.exports=router