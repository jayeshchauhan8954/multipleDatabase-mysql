require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
    DB_CONNECTION_1,
    DB_HOST_1,
    DB_PORT_1,
    DB_DATABASE_1,
    DB_USERNAME_1,
    DB_PASSWORD_1,

    DB_CONNECTION_2,
    DB_HOST_2,
    DB_PORT_2,
    DB_DATABASE_2,
    DB_USERNAME_2,
    DB_PASSWORD_2,

    DB_CONNECTION_3,
    DB_HOST_3,
    DB_PORT_3,
    DB_DATABASE_3,
    DB_USERNAME_3,
    DB_PASSWORD_3,
} = process.env;

class Database {
    constructor() { }

    connectDatabase() {
        try {
            const db1 = this.createSequelize(DB_DATABASE_1, DB_USERNAME_1, DB_PASSWORD_1, DB_HOST_1, DB_PORT_1);
            const db2 = this.createSequelize(DB_DATABASE_2, DB_USERNAME_2, DB_PASSWORD_2, DB_HOST_2, DB_PORT_2);
            const db3 = this.createSequelize(DB_DATABASE_3, DB_USERNAME_3, DB_PASSWORD_3, DB_HOST_3, DB_PORT_3);
            return { db1, db2, db3 };
        } catch (error) {
            console.log(error.message, 'Error connecting to database');
            throw error;
        }
    }

    createSequelize(database, userName, password, host, port) {
        return new Sequelize(database, userName, password, {
            host,
            port,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 5000
            }
        });
    }
}

const database = new Database().connectDatabase();

module.exports = database