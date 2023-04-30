const db = require('../config/connection.js');

function addDepartment(response) {
    db.query(`
    INSERT INTO department (name)
    VALUES
    ('${response.department}');
    `, function (err, res) {
        if (err) throw err;
        console.log('\u001b[36;1m', `${response.department} department added!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function addRole() {
};

function addEmployee() {
};

function updateEmployeeRole() {
};

module.exports = { addDepartment, addRole, addEmployee, updateEmployeeRole };