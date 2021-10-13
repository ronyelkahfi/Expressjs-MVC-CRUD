//module.exports = function(){
    const Sequelize = require('sequelize');
    const conn = new Sequelize('dbmybilling', 'root', 'root', {
        host: "127.0.0.1",
        dialect : 'mysql',
        operatorsAliases: false
      });
      conn.authenticate();

    // try{
    //     sequalize.authenticate();
    //     console.log("database connected successfully");
    // }catch(error){
    //     console.log(`unable to access database : ${error}`);
    // }
//}
