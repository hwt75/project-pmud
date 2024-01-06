const CommonModel = require('./commonModel')



class UserModel  extends CommonModel {
    async getAllData () {
       return await this.executeQuery('SELECT * FROM nguoi_dung');
    }
    async getById (id) {
        return await this.executeQuery(`SELECT * FROM nguoi_dung WHERE id = '${id}'`);
    }
    async getByName (name) {
        return await this.executeQuery(`SELECT * FROM nguoi_dung WHERE name = '${name}'`);
    }
    async deleteById (id) {
        return await this.executeQuery(`DELETE FROM nguoi_dung WHERE id = '${id}'`);
    }
    async deleteByName (name) {
        return await this.executeQuery(`DELETE FROM nguoi_dung WHERE name = '${name}'`);
    }

    async postNewUser (user) {
        const { id, name, birth, phoneNumber, email, address, password} = user;
        return await this.executeQuery(`INSERT INTO nguoi_dung (id, name, birth ,phoneNumber, email, address, password) VALUES ( '${id}', '${name}', '${birth}' ,'${phoneNumber}', '${email}', '${address}', '${password}')`);
    }
}
module.exports = new UserModel;