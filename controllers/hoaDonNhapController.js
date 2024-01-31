const HoaDonNhapModel = require('../model/hoaDonNhapModel');

class HoaDonNhapController{
    receiveView(req, res, next){
        res.render("./hoaDonNhap/receiveView")
    }

};

module.exports = new HoaDonNhapController();