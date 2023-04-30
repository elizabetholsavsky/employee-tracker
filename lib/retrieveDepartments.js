const db = require('../config/connection.js');

function retrieveDepartments() {
    db.query(`
    SELECT name FROM DEPARTMENT
    `), (err, res) => {
    }
};

module.exports = retrieveDepartments;
