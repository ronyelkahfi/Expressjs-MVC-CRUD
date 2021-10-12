users = require('./models/usermodels');
exports.index = function(req,res){
    res.send("Halaman User");
}

exports.userList = function(req,res){
    res.send("UserList");
}