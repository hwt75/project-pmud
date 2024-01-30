const CommonModel = require("./commonModel");

class HoaDonXuatModel extends CommonModel {
    async getAllData() {
        return await this.executeQuery("SELECT * FROM ho_so_hoa_don_xuat");
    }

    async getDetailsBill(donXuatId) {
        return await this.executeQuery(`SELECT * FROM chi_tiet_phieu_xuat WHERE donXuatId ='${donXuatId}' `);
    }

    async postNewBill(bill) {
        const { donXuatId, soldTime, purchaseMethod, nhanVienId, khachHangId } = bill;

        return await this.executeQuery(
          `INSERT INTO ho_so_hoa_don_xuat (donXuatId, soldTime, purchaseMethod, nhanVienId, khachHangId ) VALUES ( '${donXuatId}', '${soldTime}', '${purchaseMethod}' ,'${nhanVienId}', '${khachHangId}')`
        );
    }

    async postDetailsBill(detailsBill) {
        const { donXuatId, productId, purchaseNumber, moneyPaid } = detailsBill;

        return await this.executeQuery(
            `INSERT INTO chi_tiet_phieu_xuat (donXuatId, productId, purchaseNumber, moneyPaid ) VALUES ( '${donXuatId}', '${productId}', '${purchaseNumber}' ,'${moneyPaid}')`
          );
    }

    async getById(id) {
        return await this.executeQuery(
          `SELECT * FROM ho_so_hoa_don_xuat WHERE id = '${id}'`
        );
    }
};

module.exports = new HoaDonXuatModel();