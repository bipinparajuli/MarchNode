const {Sequelize} = require("sequelize");

  const sequlize = new Sequelize('errorhadling','root','angularjs',{
    host:"localhost",
    dialect:"mysql"
})

module.exports = sequlize