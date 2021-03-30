const { STRING } = require("sequelize")
const sequlize = require("../database")

const User = sequlize.define('user',{
    name:{
        type:STRING,
        allowNull:false
    },
    email:{
type:STRING,
allowNull:false
    },
    password:{
        type:STRING,
        allowNull:false
    }
})

module.exports = User