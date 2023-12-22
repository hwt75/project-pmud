const UserModel = require("../model/userModel");


class UserController {
    view(req, res, next) {
        res.render('login')
    }
    async getAll(req, res, next) {
      await UserModel.getAllData()
        .then(data =>{
            console.log(data);
            res.json(data);
        })
        .catch(err =>{
            console.log(err);
            return res.status(400).json("failed to get user data");
        })
        
    }
}

module.exports = new UserController;