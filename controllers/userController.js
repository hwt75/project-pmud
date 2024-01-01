const UserModel = require("../model/userModel");
const { upperCase, lowerCase } = require("../utils/processString");

class UserController {
  view(req, res, next) {
    res.render("signup");
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
  async getById(req, res, next) {
    var id = req.query.id;
    await UserModel.getById(id)
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

  async deleteById(req, res, next) {
    var id = req.params.id;
    // var name = upperCase(id)
    if (id) {
      await UserModel.getById(id)
        .then(async (data) => {
          await UserModel.deleteById(id)
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
    await UserModel.postNewUser(user)
    .then(() => {
      res.json(req.body);
      console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json("failed to get user data");
    });
   } 
  }
}

module.exports = new UserController();
