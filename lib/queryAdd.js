const db = require('../config/connection.js');

function addDepartment() {
    console.log('ALSO HERE!')
    const selectTask = require('./selectTask.js');
    selectTask();
};

function addRole() {
    console.log('ALSO HERE!')
};

function addEmployee() {
    console.log('ALSO HERE!')
};

function updateEmployeeRole() {
    console.log('ALSO HERE!')
};

module.exports = { addDepartment, addRole, addEmployee, updateEmployeeRole };