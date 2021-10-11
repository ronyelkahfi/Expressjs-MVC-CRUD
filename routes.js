module.exports = function(app){
    let user = require('./controllers/user');
    app.get('/',user.userList);
}