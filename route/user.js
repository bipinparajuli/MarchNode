const express = require("express");

const router = express.Router();

router.post("/savedata",Signin)

router.get("/getdata",getdata)



module.exports = router