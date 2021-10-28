const sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define("Tweets",{
        id : {
            type : type.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        content: type.STRING
    })
} 
