const User = require('../modal/user')

exports.Signin = (req,res,next)=> {
const {name,email,password} = req.body;

User.create({name,email,password}).then(
    res.json({name,email,password})
)
// .catch(err=> throw new Error("Failed to save data in db"))

}