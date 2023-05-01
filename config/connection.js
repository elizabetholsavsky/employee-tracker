const mysql = require('mysql2');
require('dotenv').config();

// connect to db with mysql, use .env file to secure password (also added to .gitignore)
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: process.env.PASSWORD,
        database: 'employee_db'
    },
    // confirm connection to db with yellow console log in terminal
    console.log('\u001b[33m', `Connected to the employee_db database ✔`)
); 

module.exports = db;