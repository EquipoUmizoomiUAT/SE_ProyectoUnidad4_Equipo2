const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DB_PROYECTO_SE_UNIDAD_4',
};

const getConnection = async function () {
    try {
        const connection = await mysql.createConnection(config);
        console.log('MySQL connection established');
        return connection;
    } catch (error) {
        console.error('Connection error:', error);
    }
};

module.exports = {
    getConnection
};
