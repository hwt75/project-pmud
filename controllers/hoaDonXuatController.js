const HoaDonXuatModel = require('../model/hoaDonXuatModel');

class HoaDonXuatController{
    sellView(req, res, next){
        res.render("./hoaDonXuat/sellView")
    }

    async getAll(req, res, next) {
        await HoaDonXuatModel.getAllData()
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json("failed to get user data");
          });
      }
    
    async getDetails(req, res, next) {
        var productId = req.params.productId;
        if(productId){
            await HoaDonXuatModel.getDetailsBill(productId)
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

};

module.exports = new HoaDonXuatController();