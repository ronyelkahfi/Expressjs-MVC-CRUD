//module.exports = function(){
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('dbmybilling', 'root', 'root', {
        host: "127.0.0.1",
        dialect : 'mariadb',
        operatorsAliases: false
      });

    try{
        sequalize.authenticate();
        console.log("database connected successfully");
    }catch(error){
        console.log(`unable to access database : ${error}`);
    }
//}
