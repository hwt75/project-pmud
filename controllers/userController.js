const UserModel = require("../model/userModel");
const { upperCase, lowerCase } = require("../utils/processString");
const { v4: uuidv4 } = require('uuid');
class UserController {
  viewUser(req, res, next) {
    res.render("viewUser");
  }

  signUp(req, res, next) {
    res.render("signUp");
  }
  
  editUser(req, res, next) {
    const id = req.params.id;
    if(id){
      
      res.render("editUser", { id });
    }
    else{
      res.render('errorPage')
    }
    
  }
  
  async getAll(req, res, next) {
    await UserModel.getAllData()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json("failed to get user data");
      });
  }
  async getByPhoneNumber(req, res, next) {
    var phoneNumber = req.params.phoneNumber;
    await UserModel.getByPhoneNumber(phoneNumber)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json("failed to get user data");
      });
  }

  async getByName(req, res, next) {
    var name = req.params.name;
    await UserModel.getByName(name)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json("failed to get user data");
      });
  }

  async getById(req, res, next) {
    var id = req.params.id;
    console.log();
    if(id){
      await UserModel.getById(id)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json("get by id failed")
        });
    }
    else{
      res.status(400).json("Input id")
    }
  }

  async deleteByPhoneNumber(req, res, next) {
    var phoneNumber = req.params.phoneNumber;
    // var name = upperCase(id)
    if (phoneNumber) {
      await UserModel.getByPhoneNumber(phoneNumber)
        .then(async (data) => {
          await UserModel.deleteByPhoneNumber(phoneNumber)
            .then((data) => {
              res.json(data);
            })
            .catch((err) => {
              res.status(400).json("delete failed");
            });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json("failed to get user data");
        });
    }
  }

  async deleteByName(req, res, next) {
    var name = req.params.name;
    if (name) {
      await UserModel.getByName(name)
        .then(async (data) => {
          await UserModel.deleteById(name)
            .then((data) => {
              res.json(data);
            })
            .catch((err) => {
              res.status(400).json("delete failed");
            });
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json("failed to get user data");
        });
    }
  }

  async postNewUser(req, res, next) {
   const user = req.body;
  
   if (user) {
    user.id = uuidv4();
    await UserModel.postNewUser(user)
    .then(() => {
      res.json("register successfully");
    })
    .catch((err) => {
      return res.status(400).json("failed to get user data");
    });
   } 
  }
  
  async updateUser(req, res, next) {
    const phoneNumber = req.params.phoneNumber;
    const user = req.body;
  
    if (phoneNumber) {
      UserModel.getByPhoneNumber(phoneNumber)
        .then(existingUser => {
          if (existingUser) {
            return UserModel.updateUser(phoneNumber, user);
          } else {
            return res.status(404).json({ message: "user not found" });
          }
        })
        .then(() => res.json(user)) // Trả về sản phẩm đã cập nhật
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: "Internal server error" });
        });
    } else {
      res.status(400).json({ message: "User phone number is required" });
    }
  }

  async update(req,res){
   const user = req.body;
   console.log(user);
   if (user) {
    
    await UserModel.update(user)
    .then(() => {
     return res.json("update successfully");
    })
    .catch((err) => {
      return res.status(400).json("failed to get user data");
    });
   } 
 

  }
}

module.exports = new UserController();
