const Sequelize = require('sequelize');
const conn = new Sequelize('dbexpress', 'root', 'root', {
    host: "127.0.0.1",
    dialect : 'mysql',
    operatorsAliases: false,
});
try{
    conn.authenticate();
    console.log("database connected successfully");
}catch(error){
        console.log(`unable to access database : ${error}`);
}

module.exports = conn

