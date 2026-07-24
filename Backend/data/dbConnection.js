const mysql = require("mysql2/promise");
require("dotenv").config()

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    // port: process.env.DBPORT, //for LOCAL dev only 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool