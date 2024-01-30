const CommonModel = require("./commonModel");

class UserModel extends CommonModel {
  async getAllData() {
    return await this.executeQuery("SELECT * FROM nguoi_dung");
  }
  async getByPhoneNumber(phoneNumber) {
    return await this.executeQuery(
      `SELECT * FROM nguoi_dung WHERE phoneNumber = '${phoneNumber}'`
    );
  }
  async getByName(name) {
    return await this.executeQuery(
      `SELECT * FROM nguoi_dung WHERE name = '${name}'`
    );
  }
  async deleteByPhoneNumber(phoneNumber) {
    return await this.executeQuery(
      `DELETE FROM nguoi_dung WHERE phoneNumber = '${phoneNumber}'`
    );
  }
  async deleteByName(name) {
    return await this.executeQuery(
      `DELETE FROM nguoi_dung WHERE name = '${name}'`
    );
  }
  async getById(id) {
    return await this.executeQuery(
      `SELECT * FROM nguoi_dung WHERE id = '${id}'`
    );
  }

  async postNewUser(user) {
    const { id, name, birth, phoneNumber, email, address, password } = user;
    // kiểm tra trùng lặp sdt
    const phoneNumberExist = await this.checkDuplicate(
      "nguoi_dung",
      "phoneNumber",
      phoneNumber
    );
    if (phoneNumberExist) {
      throw new Error("SDT tồn tại");
    }

    return await this.executeQuery(
      `INSERT INTO nguoi_dung (id, name, birth ,phoneNumber, email, address, password) VALUES ( '${id}', '${name}', '${birth  }' ,'${phoneNumber}', '${email}', '${address}', '${password}')`
    );
  }

  updateUser(phoneNumber, nguoi_dung) {
    // Sử dụng truy vấn được tham số hóa
    const query = `UPDATE nguoi_dung SET name = '${nguoi_dung.name}', 
                                            birth = '${nguoi_dung.birth}', 
                                            phoneNumber = '${nguoi_dung.phoneNumber}', 
                                            email = '${nguoi_dung.email}', 
                                            address = '${nguoi_dung.address}', 
                                            password = '${nguoi_dung.password}'
                          WHERE phoneNumber = '${phoneNumber}'`;

    // Thực thi truy vấn
    return this.executeQuery(query, {
      name: nguoi_dung.name,
      birth: nguoi_dung.birth,
      phoneNumber: nguoi_dung.phoneNumber,
      email: nguoi_dung.email,
      address: nguoi_dung.address,
      password: nguoi_dung.password,
    });
  }

  update(user) {
    return this
      .executeQuery(`UPDATE nguoi_dung SET name = '${user.name}',  
    phoneNumber = '${user.phoneNumber}', 
    email = '${user.email}', 
    address = '${user.address}', 
    password = '${user.password}' WHERE id = '${user.id}'`);
  }
}
module.exports = new UserModel();
