const knex = require('knex'); //thư viện knex

const connection = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'he_thong_nong_san',
        charset: 'utf8',
        port:  3306,
        connectionLimit: 10,
    }
}

module.exports = knex(connection);