const CommonModel = require('./commonModel')



class UserModel  extends CommonModel {
    async getAllData () {
       return await this.excuteQuery('SELECT * FROM user')
    }
    
}
module.exports = new UserModel;