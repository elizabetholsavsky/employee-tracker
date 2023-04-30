const db = require('../config/connection.js');

// SQL queries
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function viewRoles() {
    console.log('ALSO HERE!')
};

function viewEmployees() {
    console.log('ALSO HERE!')
};

module.exports = { viewDepartments, viewRoles, viewEmployees };