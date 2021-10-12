const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql','root','root',{
    host : 'localhost',
    dialect : 'mysql'
});

try{
    sequalize.authenticate();
    console.log("database connected successfully");
}catch(error){
    console.log(`unable to access database : ${error}`);
}