const CommonModel = require('./commonModel')



class UserModel  extends CommonModel {
    async getAllData () {
       return await this.excuteQuery('SELECT * FROM nguoi_dung');
    }
    async getById (id) {
        return await this.excuteQuery(`SELECT * FROM nguoi_dung WHERE id = '${id}'`);
    }
    async getByName (name) {
        return await this.excuteQuery(`SELECT * FROM nguoi_dung WHERE name = '${name}'`);
    }
    async deleteById (id) {
        return await this.excuteQuery(`DELETE FROM nguoi_dung WHERE id = '${id}'`);
    }
    async deleteByName (name) {
        return await this.excuteQuery(`DELETE FROM nguoi_dung WHERE name = '${name}'`);
    }
}
module.exports = new UserModel;