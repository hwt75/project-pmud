const knex = require('../config/database');

class CommonModel {
    async executeQuery(sql){
        try {
            var data = await knex.raw(sql)
            if(data[0].length != 0) return data[0];
            return false;
            // return data[0];
        }
        catch(err) {
            console.error(err);
            return false;
    }}

    
}

module.exports = CommonModel;