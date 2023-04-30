const db = require('../config/connection.js');

function addDepartment(response) {
    db.query(`
    INSERT INTO department (name)
    VALUES
    ('${response.department}');
    `, (err, res) => {
        if (err) throw err;
        console.log('\u001b[36;1m', `${response.department} department added!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function addRole(response, result) {
    db.query(`
    SELECT id from department WHERE name = '${response.roleDepartment}'
    INSERT INTO role (title, salary, department_id)
    VALUES
    ('${response.roleTitle}', '${response.roleSalary}', '${response.roleDepartment}')
    `, (err, res) => {
        if (err) throw err;
        console.log('\u001b[36;1m', `${response.roleTitle} role added!`);
        const selectTask = require('./selectTask.js');
        selectTask();
    });
};

function addEmployee() {
};

function updateEmployeeRole() {
};

module.exports = { addDepartment, addRole, addEmployee, updateEmployeeRole };