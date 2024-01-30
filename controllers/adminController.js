const UserModel = require("../model/userModel");

class AdminController{
    adminLogin(req, res, next){
        res.render('./userView/signIn')
    }
}

module.exports = new AdminController();